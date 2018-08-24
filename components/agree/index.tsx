import classnames from 'classnames';
import * as React from 'react';
import Icon from '../icon';

export interface AgreeProps {
  prefixCls?: string;
  disabled?: boolean;
  value?: boolean;
  defaultValue?: boolean;
  children?: React.ReactNode;
  className?: string;
  onChange?: (value: boolean) => void;
}

export default class Agree extends React.PureComponent<AgreeProps, any> {
  public static defaultProps = {
    disabled: false,
    prefixCls: 'm-agree',
  };

  public static getDerivedStateFromProps(nextProps: AgreeProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
      };
    }
  }

  constructor(props: AgreeProps) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue,
    };
  }

  public handleClick = () => {
    const { onChange, disabled } = this.props;
    if (!disabled) {
      this.setState({ value: !this.state.value });
      if (onChange) {
        onChange(!this.state.value);
      }
    }
  };

  public render() {
    const { value } = this.state;
    const { prefixCls, children, disabled, className } = this.props;

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-checked`]: value,
    });

    return (
      <div className={wrapCls}>
        <div className={`${prefixCls}-icon`} onClick={this.handleClick}>
          <Icon type="check-circle" />
        </div>
        <div className={`${prefixCls}-content`}>{children}</div>
      </div>
    );
  }
}
