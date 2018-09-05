import * as React from 'react';
import classnames from 'classnames';
import Icon from '../icon';

function noop() {}

function normalizeValue(value?: string | number) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value + '';
}

export interface InputItemProps {
  prefixCls?: string;
  className?: string;
  title?: string;
  type?: 'text' | 'password' | 'phone' | 'digit' | 'bankCard';
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
    if (!('value' in this.props)) {
      this.setState({ value });
    } else {
      this.setState({ value: this.props.value });
    }
    if (onChange) {
      isMutated ? setTimeout(() => onChange(value)) : onChange(value);
    }
  };

  onInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (this.inputRef) {
      this.debounceTimeout = window.setTimeout(() => {
        if (document.activeElement !== this.inputRef) {
          this.setState({
            focus: false,
          });
        }
      }, 200);
    }
    if (this.props.onBlur) {
      this.props.onBlur(value);
    }
  };

  onInputFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
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
    if (this.inputRef) {
      this.inputRef.focus();
    }
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
    });

    return (
      <div className={wrapCls}>
        <div className={`${prefixCls}-container`}>
          <div className={`${prefixCls}-extra`}>{extra}</div>
          <div className={`${prefixCls}-title`}>{title}</div>
          <div className={`${prefixCls}-control`}>
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
