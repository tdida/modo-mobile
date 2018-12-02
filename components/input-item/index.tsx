import * as React from 'react';
import classnames from 'classnames';
import NumberKeyboard from '../number-keyboard';
import Icon from '../icon';

function noop() {}

function normalizeValue(value?: string | number) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return `${value}`;
}

export interface InputItemProps {
  prefixCls?: string;
  className?: string;
  title?: string;
  type?: 'text' | 'password' | 'phone' | 'digit' | 'bankCard' | 'money';
  brief?: React.ReactNode | string;
  value?: string;
  defaultValue?: string;
  name?: string;
  placeholder?: string;
  align?: 'left' | 'center' | 'right';
  error?: string;
  readOnly?: boolean;
  disabled?: boolean;
  clear?: boolean;
  maxLength?: number;
  extra?: React.ReactNode | string;
  onChange?: (val: string) => void;
  onBlur?: (val: string) => void;
  onFocus?: (val: string) => void;
  onVirtualKeyboardConfirm?: (val: string) => void;
}

export default class InputItem extends React.Component<InputItemProps, any> {
  static defaultProps = {
    prefixCls: 'm-input-item',
    type: 'text',
    align: 'left',
    placeholder: '',
    readOnly: false,
    disabled: false,
    clear: false,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    onVirtualKeyboardConfirm: noop,
  };

  inputRef: HTMLInputElement;

  private debounceTimeout: number | null;

  constructor(props: InputItemProps) {
    super(props);
    this.state = {
      placeholder: props.placeholder,
      value: normalizeValue(props.value || props.defaultValue),
    };
  }

  componentWillReceiveProps(nextProps: InputItemProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  componentWillUnmount() {
    if (this.debounceTimeout) {
      window.clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { type } = this.props;
    let newValue = value;
    switch (type) {
      case 'bankCard':
        newValue = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
        break;
      case 'phone':
        newValue = value.replace(/\D/g, '').substring(0, 11);
        const valueLen = newValue.length;
        if (valueLen > 3 && valueLen < 8) {
          newValue = `${newValue.substr(0, 3)} ${newValue.substr(3)}`;
        } else if (valueLen >= 8) {
          newValue = `${newValue.substr(0, 3)} ${newValue.substr(3, 4)} ${newValue.substr(7)}`;
        }
        break;
      case 'digit':
        newValue = value.replace(/\D/g, '');
        break;
      case 'text':
      case 'password':
      default:
        break;
    }
    this.handleOnChange(newValue, newValue !== value);
  };

  handleOnChange = (value: string, isMutated: boolean = false) => {
    const { onChange } = this.props;
    this.setState({ value });
    if (onChange) {
      isMutated ? setTimeout(() => onChange(value)) : onChange(value);
    }
  };

  onInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.onBlur(value);
  };

  onInputFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.onFocus(value);
  };

  onFocus = (value: string) => {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
    this.setState({
      focus: true,
    });
    if (this.props.onFocus) {
      this.props.onFocus(value);
    }
  };

  onBlur = (value: string) => {
    if (this.inputRef) {
      this.debounceTimeout = window.setTimeout(() => {
        if (document.activeElement !== this.inputRef) {
          this.setState({
            focus: false,
          });
        }
      }, 50);
    }
    if (this.props.onBlur) {
      this.props.onBlur(value);
    }
  };

  onVirtualFocus = () => {
    const { disabled, readOnly } = this.props;
    if (disabled || readOnly) {
      return;
    }
    this.setState({ focus: true }, () => {
      this.addBlurListener();
    });
  };

  onVirtualBlur = () => {
    const { value } = this.state;
    this.onBlur(value);
  };

  onVirtualConfirm = () => {
    const { value } = this.state;
    this.onBlur(value);
    const { onVirtualKeyboardConfirm } = this.props;
    if (onVirtualKeyboardConfirm) onVirtualKeyboardConfirm(value);
  };

  onVirtualEnter = (num: any) => {
    const { value } = this.state;
    const { maxLength } = this.props;
    if (maxLength) {
      if (value.length < maxLength) {
        this.handleOnChange(value + num);
      }
    } else {
      this.handleOnChange(value + num);
    }
  };

  onVirtualDelete = () => {
    const { value } = this.state;
    if (value === '') return;
    this.handleOnChange(value.substr(0, value.length - 1));
  };

  addBlurListener = () => {
    document.addEventListener('click', this.doBlur, false);
  };

  removeBlurListener = () => {
    document.removeEventListener('click', this.doBlur, false);
  };

  doBlur = (ev: MouseEvent) => {
    const { value } = this.state;
    if (ev.target !== this.inputRef) {
      this.onBlur(value);
    }
  };

  clearInput = () => {
    this.setState({
      value: '',
    });
    if (this.props.onChange) {
      this.props.onChange('');
    }
    this.focus();
  };

  // this is instance method for user to use
  focus = () => {
    this.removeBlurListener();
    if (this.inputRef) {
      this.inputRef.focus();
    }
    setTimeout(() => {
      this.addBlurListener();
    }, 50);
  };

  render() {
    const {
      prefixCls,
      title,
      extra,
      type,
      name,
      align,
      clear,
      error,
      brief,
      placeholder,
      readOnly,
      disabled,
      maxLength,
      className,
    } = this.props;

    const { value, focus } = this.state;

    let inputType: any = 'text';
    if (type === 'bankCard' || type === 'phone' || type === 'digit') {
      inputType = 'tel';
    } else {
      inputType = type;
    }

    const wrapCls = classnames(`${prefixCls}`, className, {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-${align}`]: align,
      [`${prefixCls}-focus`]: focus,
      [`${prefixCls}-has-clear`]: clear,
      [`${prefixCls}-has-error`]: error,
      [`${prefixCls}-virtual-show`]: focus && type === 'money',
    });

    const virtualCls = classnames(`${prefixCls}-virtual-value`, {
      [`${prefixCls}-virtual-placeholder`]: !value,
    });

    return (
      <div className={wrapCls}>
        <div className={`${prefixCls}-container`}>
          <div className={`${prefixCls}-extra`}>{extra}</div>
          <div className={`${prefixCls}-title`}>{title}</div>
          <div className={`${prefixCls}-control`}>
            {type === 'money' ? (
              <React.Fragment>
                <div
                  ref={(el: any) => (this.inputRef = el)}
                  className={`${prefixCls}-virtual-input`}
                  onClick={this.onVirtualFocus}
                >
                  <span className={virtualCls}>{focus || value ? value : placeholder}</span>
                </div>
                <NumberKeyboard
                  visible={focus}
                  onHide={this.onVirtualBlur}
                  onDelete={this.onVirtualDelete}
                  onEnter={this.onVirtualEnter}
                  onConfirm={this.onVirtualConfirm}
                />
              </React.Fragment>
            ) : (
              <input
                className={`${prefixCls}-input`}
                ref={(el: any) => (this.inputRef = el)}
                type={inputType}
                value={normalizeValue(value)}
                name={name}
                placeholder={placeholder}
                readOnly={readOnly}
                disabled={disabled}
                maxLength={maxLength}
                onChange={this.onInputChange}
                onFocus={this.onInputFocus}
                onBlur={this.onInputBlur}
                autoComplete="off"
              />
            )}
            {clear && !readOnly && !disabled && focus && (value && `${value}`.length > 0) ? (
              <div className={`${prefixCls}-clear`} onClick={this.clearInput}>
                <Icon type="close-circle" />
              </div>
            ) : null}
          </div>
        </div>
        {brief || error ? <div className={`${prefixCls}-tip`}>{error || brief}</div> : null}
      </div>
    );
  }
}
