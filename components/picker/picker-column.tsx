import * as React from 'react';
import classNames from 'classnames';
import { PickerData } from './PropsType';

export interface PickerColumnProps {
  prefixCls?: string;
  data: PickerData[];
  value?: string | number;
  defaultValue?: string | number;
  itemStyle?: React.CSSProperties;
  onValueChange?: (value?: any) => void;
  onScrollChange?: (value?: any) => void;
}

interface ScrollValueMap {
  [key: string]: any;
}

export default class PickerColumn extends React.Component<PickerColumnProps, any> {
  rootRef: any;
  maskRef: any;
  listRef: any;
  indicatorRef: any;
  itemHeight: number;
  scrollValue: number;

  scrollHanders: ScrollValueMap = (() => {
    let scrollY = -1;
    let lastY = 0;
    let startY = 0;
    let scrollDisabled = false;
    let isMoving = false;

    const setTransform = (nodeStyle: CSSStyleDeclaration, value: any) => {
      nodeStyle.transform = value;
      nodeStyle.webkitTransform = value;
    };

    const setTransition = (nodeStyle: CSSStyleDeclaration, value: any) => {
      nodeStyle.transition = value;
      nodeStyle.webkitTransition = value;
    };

    const scrollTo = (_x: number, y: number, time = 0.3) => {
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
        record: (y: number) => {
          const now = +new Date();
          _velocity = (y - _y) / (now - _time);
          if (now - _time >= minInterval) {
            _velocity = now - _time <= maxInterval ? _velocity : 0;
            _y = y;
            _time = now;
          }
        },
        getVelocity: (y: number) => {
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
      } else if (targetY > height) {
        targetY = height;
      }

      scrollTo(0, targetY, time < 0.3 ? 0.3 : time);
      this.onScrollChange();
    };

    const onStart = (y: number) => {
      if (scrollDisabled) {
        return;
      }

      isMoving = true;
      startY = y;
      lastY = scrollY;
    };

    const onMove = (y: number) => {
      if (scrollDisabled || !isMoving) {
        return;
      }

      scrollY = lastY - y + startY;
      Velocity.record(scrollY);

      this.onScrollChange();
      setTransform(this.listRef.style, `translate3d(0,${-scrollY}px,0)`);
    };

    return {
      touchstart: (evt: React.TouchEvent<HTMLDivElement>) => onStart(evt.touches[0].screenY),
      mousedown: (evt: React.MouseEvent<HTMLDivElement>) => onStart(evt.screenY),
      touchmove: (evt: React.TouchEvent<HTMLDivElement>) => {
        evt.preventDefault();
        onMove(evt.touches[0].screenY);
      },
      mousemove: (evt: React.MouseEvent<HTMLDivElement>) => {
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
      setDisabled: (disabled: boolean = false) => {
        scrollDisabled = disabled;
      },
    };
  })();

  constructor(props: PickerColumnProps) {
    super(props);

    let valueState;
    const { value, defaultValue, data } = this.props;
    if (value !== undefined) {
      valueState = value;
    } else if (defaultValue !== undefined) {
      valueState = defaultValue;
    } else {
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
        (rootRef as HTMLDivElement).addEventListener(key, this.scrollHanders[key], false);
      }
    });
  }

  componentWillUnmount() {
    Object.keys(this.scrollHanders).forEach(key => {
      if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
        (this.rootRef as HTMLDivElement).removeEventListener(key, this.scrollHanders[key]);
      }
    });
  }

  componentWillReceiveProps(nextProps: PickerColumnProps) {
    if ('value' in nextProps) {
      if (this.state.value !== nextProps.value) {
        this.setState(
          {
            value: nextProps.value,
          },
          () => {
            this.onSelect(nextProps.value, this.itemHeight, this.scrollTo);
          },
        );
      }
    }
    // this.scrollHanders.setDisabled(nextProps.disabled);
  }

  shouldComponentUpdate(_nextProps: any, nextState: any) {
    return this.state.value !== nextState.value;
  }

  componentDidUpdate() {
    this.onSelect(this.state.selectedValue, this.itemHeight, this.scrollToWithoutAnimation);
  }

  onSelect = (value: any, itemHeight: number, scrollTo: Function) => {
    const { data } = this.props;
    for (let i = 0, len = data.length; i < len; i++) {
      if (data[i].value === value) {
        this.selectByIndex(i, itemHeight, scrollTo);
        return;
      }
    }
    this.selectByIndex(0, itemHeight, scrollTo);
  };

  selectByIndex(index: number, itemHeight: number, zscrollTo: Function) {
    const { data } = this.props;
    if (index < 0 || index >= data.length || !itemHeight) {
      return;
    }
    zscrollTo(index * itemHeight);
  }

  scrollTo = (top: number) => {
    this.scrollHanders.scrollTo(0, top);
  };

  scrollToWithoutAnimation = (top: number) => {
    this.scrollHanders.scrollTo(0, top, 0);
  };

  onScrollChange = () => {
    const top = this.scrollHanders.getValue();
    if (top >= 0) {
      const { data } = this.props;
      const index = this.computeChildIndex(top, this.itemHeight, data.length);
      if (this.scrollValue !== index) {
        this.scrollValue = index;
        const item = data[index];
        if (item && this.props.onScrollChange) {
          this.props.onScrollChange(item.value);
        } else if (!item && console.warn) {
          console.warn('child not found', item, index);
        }
      }
    }
  };

  computeChildIndex = (top: number, itemHeight: number, childrenLength: number) => {
    const index = Math.round(top / itemHeight);
    return Math.min(index, childrenLength - 1);
  };

  scrollingComplete = () => {
    const top = this.scrollHanders.getValue();
    if (top >= 0) {
      const { data } = this.props;
      const index = this.computeChildIndex(top, this.itemHeight, data.length);
      const item = data[index];
      if (item) {
        this.fireValueChange(item.value);
      } else if (console.warn) {
        console.warn('child not found', item, index);
      }
    }
  };

  fireValueChange = (value: any) => {
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

    const items = data.map((item: PickerData) => {
      const itemCls = classNames(`${prefixCls}-item`, {
        [`${prefixCls}-item-selected`]: item.value === value,
      });
      return (
        <div className={itemCls} key={item.value}>
          {item.label}
        </div>
      );
    });

    return (
      <div className={`${prefixCls}`} ref={el => (this.rootRef = el)}>
        <div className={`${prefixCls}-mask`} ref={el => (this.maskRef = el)} />
        <div className={`${prefixCls}-indicator`} ref={el => (this.indicatorRef = el)} />
        <div className={`${prefixCls}-list`} ref={el => (this.listRef = el)}>
          {items}
        </div>
      </div>
    );
  }
}
