import * as React from 'react';
import classnames from 'classnames';
function getDecimalNum(num) {
    try {
        return num.toString().split('.')[1].length;
    }
    catch (e) {
        return 0;
    }
}
function accAdd(num1, num2) {
    const r1 = getDecimalNum(num1);
    const r2 = getDecimalNum(num2);
    const m = Math.pow(10, Math.max(r1, r2));
    return +((num1 * m + num2 * m) / m);
}
function subtr(num1, num2) {
    const r1 = getDecimalNum(num1);
    const r2 = getDecimalNum(num2);
    const m = Math.pow(10, Math.max(r1, r2));
    const n = r1 >= r2 ? r1 : r2;
    return +((num1 * m - num2 * m) / m).toFixed(n);
}
function getButtonStatus(value, min, max) {
    const status = {
        disabledReduce: false,
        disabledAdd: false,
    };
    if (typeof value !== 'undefined' && value !== null) {
        status.disabledAdd = +value >= max;
        status.disabledReduce = +value <= min;
    }
    return status;
}
function formatNum(value, integer) {
    value = String(value).replace(/[^0-9.-]/g, '');
    return value === '' ? 0 : integer ? Math.floor(value) : +value;
}
function getValidValue(value, min, max, integer) {
    return Math.max(Math.min(formatNum(max, integer), formatNum(value, integer)), formatNum(min, integer));
}
export default class Stepper extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onReduce = () => {
            const { disabled, min, step, integer } = this.props;
            const { inputValue } = this.state;
            const val = subtr(inputValue, step);
            if (disabled || formatNum(val, integer) < formatNum(min, integer)) {
                return;
            }
            this.onChange(val);
        };
        this.onAdd = () => {
            const { disabled, max, step, integer } = this.props;
            const { inputValue } = this.state;
            const val = accAdd(inputValue, step);
            if (disabled || formatNum(val, integer) > formatNum(max, integer)) {
                return;
            }
            this.onChange(val);
        };
        this.onChange = (val) => {
            const { max, min } = this.props;
            this.setState(Object.assign({ inputValue: val }, getButtonStatus(val, min, max)));
            const { onChange } = this.props;
            if (onChange)
                onChange(val);
        };
        this.handleChange = (e) => {
            const { value } = e.target;
            this.onChange(value);
        };
        this.handleInputBlur = () => {
            const { max, min, integer } = this.props;
            const { inputValue } = this.state;
            this.setState({ inputValue: getValidValue(inputValue, min, max, integer) });
        };
        const { value, defaultValue, max, min } = props;
        const newValue = value || defaultValue || 0;
        const { disabledReduce, disabledAdd } = getButtonStatus(newValue, min, max);
        this.state = {
            inputValue: newValue,
            disabledReduce,
            disabledAdd,
        };
    }
    static getDerivedStateFromProps(nextProps) {
        if (typeof nextProps.value !== 'undefined') {
            const { value, min, max } = nextProps;
            return getButtonStatus(value, min, max);
        }
        return null;
    }
    render() {
        const { prefixCls, disabled, readOnly, min, max, step } = this.props;
        const { inputValue, disabledReduce, disabledAdd } = this.state;
        const wrapCls = classnames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-disabled`]: disabled,
        });
        const reduceCls = classnames({
            [`${prefixCls}-button`]: true,
            [`${prefixCls}-button-reduce`]: true,
            [`${prefixCls}-button-disabled`]: disabledReduce,
        });
        const addCls = classnames({
            [`${prefixCls}-button`]: true,
            [`${prefixCls}-button-add`]: true,
            [`${prefixCls}-button-disabled`]: disabledAdd,
        });
        return (<div className={wrapCls}>
        <div className={reduceCls} onClick={this.onReduce}/>
        <div className={`${prefixCls}-number`}>
          <input type="number" value={inputValue} readOnly={readOnly || disabled} onBlur={this.handleInputBlur} onChange={this.handleChange} min={min} max={max} step={step}/>
        </div>
        <div className={addCls} onClick={this.onAdd}/>
      </div>);
    }
}
Stepper.defaultProps = {
    prefixCls: 'm-stepper',
    step: 1,
    min: -Number.MAX_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    disabled: false,
    readOnly: false,
    integer: false,
};
