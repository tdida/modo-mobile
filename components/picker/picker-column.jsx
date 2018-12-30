import * as React from 'react';
import classNames from 'classnames';
export default class PickerColumn extends React.Component {
    constructor(props) {
        super(props);
        this.scrollHanders = (() => {
            let scrollY = -1;
            let lastY = 0;
            let startY = 0;
            let scrollDisabled = false;
            let isMoving = false;
            const setTransform = (nodeStyle, value) => {
                nodeStyle.transform = value;
                nodeStyle.webkitTransform = value;
            };
            const setTransition = (nodeStyle, value) => {
                nodeStyle.transition = value;
                nodeStyle.webkitTransition = value;
            };
            const scrollTo = (_x, y, time = 0.3) => {
                if (scrollY !== y) {
                    scrollY = y;
                    setTransition(this.listRef.style, `cubic-bezier(0,0,0.2,1.15) ${time}s`);
                    setTransform(this.listRef.style, `translate3d(0,${-y}px,0)`);
                    setTimeout(() => {
                        this.scrollingComplete();
                        if (this.listRef) {
                            setTransition(this.listRef.style, '');
                        }
                    }, +time * 1000);
                }
            };
            const Velocity = ((minInterval = 30, maxInterval = 100) => {
                let _time = 0;
                let _y = 0;
                let _velocity = 0;
                const recorder = {
                    record: (y) => {
                        const now = +new Date();
                        _velocity = (y - _y) / (now - _time);
                        if (now - _time >= minInterval) {
                            _velocity = now - _time <= maxInterval ? _velocity : 0;
                            _y = y;
                            _time = now;
                        }
                    },
                    getVelocity: (y) => {
                        if (y !== _y) {
                            recorder.record(y);
                        }
                        return _velocity;
                    },
                };
                return recorder;
            })();
            const onFinish = () => {
                isMoving = false;
                let targetY = scrollY;
                const height = (this.props.data.length - 1) * this.itemHeight;
                let time = 0.3;
                const velocity = Velocity.getVelocity(targetY) * 4;
                if (velocity) {
                    targetY = velocity * 40 + targetY;
                    time = Math.abs(velocity) * 0.1;
                }
                if (targetY % this.itemHeight !== 0) {
                    targetY = Math.round(targetY / this.itemHeight) * this.itemHeight;
                }
                if (targetY < 0) {
                    targetY = 0;
                }
                else if (targetY > height) {
                    targetY = height;
                }
                scrollTo(0, targetY, time < 0.3 ? 0.3 : time);
                this.onScrollChange();
            };
            const onStart = (y) => {
                if (scrollDisabled) {
                    return;
                }
                isMoving = true;
                startY = y;
                lastY = scrollY;
            };
            const onMove = (y) => {
                if (scrollDisabled || !isMoving) {
                    return;
                }
                scrollY = lastY - y + startY;
                Velocity.record(scrollY);
                this.onScrollChange();
                setTransform(this.listRef.style, `translate3d(0,${-scrollY}px,0)`);
            };
            return {
                touchstart: (evt) => onStart(evt.touches[0].screenY),
                mousedown: (evt) => onStart(evt.screenY),
                touchmove: (evt) => {
                    evt.preventDefault();
                    onMove(evt.touches[0].screenY);
                },
                mousemove: (evt) => {
                    evt.preventDefault();
                    onMove(evt.screenY);
                },
                touchend: () => onFinish(),
                touchcancel: () => onFinish(),
                mouseup: () => onFinish(),
                getValue: () => {
                    return scrollY;
                },
                scrollTo,
                setDisabled: (disabled = false) => {
                    scrollDisabled = disabled;
                },
            };
        })();
        this.onSelect = (value, itemHeight, scrollTo) => {
            const { data } = this.props;
            for (let i = 0, len = data.length; i < len; i++) {
                if (data[i].value === value) {
                    this.selectByIndex(i, itemHeight, scrollTo);
                    return;
                }
            }
            this.selectByIndex(0, itemHeight, scrollTo);
        };
        this.scrollTo = (top) => {
            this.scrollHanders.scrollTo(0, top);
        };
        this.scrollToWithoutAnimation = (top) => {
            this.scrollHanders.scrollTo(0, top, 0);
        };
        this.onScrollChange = () => {
            const top = this.scrollHanders.getValue();
            if (top >= 0) {
                const { data } = this.props;
                const index = this.computeChildIndex(top, this.itemHeight, data.length);
                if (this.scrollValue !== index) {
                    this.scrollValue = index;
                    const item = data[index];
                    if (item && this.props.onScrollChange) {
                        this.props.onScrollChange(item.value);
                    }
                    else if (!item && console.warn) {
                        console.warn('child not found', item, index);
                    }
                }
            }
        };
        this.computeChildIndex = (top, itemHeight, childrenLength) => {
            const index = Math.round(top / itemHeight);
            return Math.min(index, childrenLength - 1);
        };
        this.scrollingComplete = () => {
            const top = this.scrollHanders.getValue();
            if (top >= 0) {
                const { data } = this.props;
                const index = this.computeChildIndex(top, this.itemHeight, data.length);
                const item = data[index];
                if (item) {
                    this.fireValueChange(item.value);
                }
                else if (console.warn) {
                    console.warn('child not found', item, index);
                }
            }
        };
        this.fireValueChange = (value) => {
            if (value !== this.state.value) {
                if (!('value' in this.props)) {
                    this.setState({
                        value,
                    });
                }
                if (this.props.onValueChange) {
                    this.props.onValueChange(value);
                }
            }
        };
        let valueState;
        const { value, defaultValue, data } = this.props;
        if (value !== undefined) {
            valueState = value;
        }
        else if (defaultValue !== undefined) {
            valueState = defaultValue;
        }
        else {
            valueState = data && data[0] && data[0].value;
        }
        this.state = {
            value: valueState,
        };
    }
    componentDidMount() {
        const { listRef, indicatorRef, maskRef, rootRef } = this;
        const rootHeight = rootRef.getBoundingClientRect().height;
        const itemHeight = (this.itemHeight = indicatorRef.getBoundingClientRect().height);
        let num = Math.floor(rootHeight / itemHeight);
        if (num % 2 === 0) {
            num--;
        }
        num--;
        num /= 2;
        listRef.style.padding = `${itemHeight * num}px 0`;
        indicatorRef.style.top = `${itemHeight * num}px`;
        maskRef.style.backgroundSize = `100% ${itemHeight * num}px`;
        // this.scrollHanders.setDisabled(this.props.disabled);
        this.onSelect(this.state.value, this.itemHeight, this.scrollTo);
        Object.keys(this.scrollHanders).forEach(key => {
            if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
                rootRef.addEventListener(key, this.scrollHanders[key], false);
            }
        });
    }
    componentWillUnmount() {
        Object.keys(this.scrollHanders).forEach(key => {
            if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
                this.rootRef.removeEventListener(key, this.scrollHanders[key]);
            }
        });
    }
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            if (this.state.value !== nextProps.value) {
                this.setState({
                    value: nextProps.value,
                }, () => {
                    this.onSelect(nextProps.value, this.itemHeight, this.scrollTo);
                });
            }
        }
        // this.scrollHanders.setDisabled(nextProps.disabled);
    }
    shouldComponentUpdate(_nextProps, nextState) {
        return this.state.value !== nextState.value;
    }
    componentDidUpdate() {
        this.onSelect(this.state.selectedValue, this.itemHeight, this.scrollToWithoutAnimation);
    }
    selectByIndex(index, itemHeight, zscrollTo) {
        const { data } = this.props;
        if (index < 0 || index >= data.length || !itemHeight) {
            return;
        }
        zscrollTo(index * itemHeight);
    }
    getValue() {
        if ('value' in this.props) {
            return this.props.value;
        }
        const { data } = this.props;
        return data && data[0] && data[0].value;
    }
    render() {
        const { prefixCls, data } = this.props;
        const { value } = this.state;
        const items = data.map((item) => {
            const itemCls = classNames(`${prefixCls}-item`, {
                [`${prefixCls}-item-selected`]: item.value === value,
            });
            return (<div className={itemCls} key={item.value}>
          {item.label}
        </div>);
        });
        return (<div className={`${prefixCls}`} ref={el => (this.rootRef = el)}>
        <div className={`${prefixCls}-mask`} ref={el => (this.maskRef = el)}/>
        <div className={`${prefixCls}-indicator`} ref={el => (this.indicatorRef = el)}/>
        <div className={`${prefixCls}-list`} ref={el => (this.listRef = el)}>
          {items}
        </div>
      </div>);
    }
}
