import classnames from 'classnames';
import * as React from 'react';
import Icon from '../icon';
export default class Agree extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleClick = () => {
            const { onChange, disabled } = this.props;
            if (!disabled) {
                this.setState({ value: !this.state.value });
                if (onChange) {
                    onChange(!this.state.value);
                }
            }
        };
        this.state = {
            value: props.value || props.defaultValue,
        };
    }
    static getDerivedStateFromProps(nextProps) {
        if ('value' in nextProps) {
            return {
                value: nextProps.value,
            };
        }
    }
    render() {
        const { value } = this.state;
        const { prefixCls, children, disabled, className } = this.props;
        const wrapCls = classnames(prefixCls, className, {
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-checked`]: value,
        });
        return (<div className={wrapCls}>
        <div className={`${prefixCls}-icon`} onClick={this.handleClick}>
          <Icon type="check-circle"/>
        </div>
        <div className={`${prefixCls}-content`}>{children}</div>
      </div>);
    }
}
Agree.defaultProps = {
    disabled: false,
    prefixCls: 'm-agree',
};
