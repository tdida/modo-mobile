import * as React from 'react';
import Animate from 'rc-animate';
import TitleBar from './title-bar';
import View from '../view';

export interface PopupProps {
  visible: boolean;
  prefixCls?: string;
  hasMask?: boolean;
  maskClosable?: boolean;
  destroyed?: boolean;
  position?: 'bottom' | 'top' | 'right' | 'left' | 'center';
  preventScroll?: boolean;
  preventScrollExclude?: string | object;
  onClose?: (e: any) => void;
  onAnimateEnd?: (exists: Boolean, key?: string) => void;
}

class Popup extends React.Component<PopupProps, any> {
  static TitleBar = TitleBar;

  static defaultProps = {
    closable: true,
    hasMask: true, // 是否有蒙层
    maskClosable: true, // 点击蒙层是否可关闭弹出层
    destroyed: false,
    position: 'center', // 弹出层位置
    prefixCls: 'm-popup',
    preventScroll: false, // 防止滚动穿透
    preventScrollExclude: '', // 禁止滚动的排除元素
    visible: false, // 弹出层是否可见
  };

  maskRef: any;
  boxRef: any;

  componentDidUpdate(prevProps: PopupProps) {
    if (this.props.visible && !prevProps.visible) {
      this.handleOpen();
    }
    if (this.props.preventScrollExclude !== prevProps.preventScrollExclude) {
      this.handlePreventScrollExclude(false, this.props.preventScrollExclude);
      this.handlePreventScrollExclude(true, prevProps.preventScrollExclude);
    }
  }

  handlePreventScroll = (isBind: boolean) => {
    const handler: string = isBind ? 'addEventListener' : 'removeEventListener';
    if (this.maskRef) {
      this.maskRef[handler]('touchmove', this.handlePreventDefault, false);
    }
    // if (this.boxRef) {
    //   this.boxRef[handler]('touchmove', this.handlePreventDefault, false);
    // }
    this.handlePreventScrollExclude(isBind, null);
  };

  handlePreventScrollExclude = (isBind: boolean, preventScrollExclude: any) => {
    const handler = isBind ? 'addEventListener' : 'removeEventListener';
    preventScrollExclude = preventScrollExclude || this.props.preventScrollExclude;
    const excluder: any = preventScrollExclude
      ? typeof preventScrollExclude === 'string'
        ? this.boxRef.querySelector(preventScrollExclude)
        : preventScrollExclude
      : null;

    if (excluder) {
      excluder[handler]('touchmove', this.handleStopImmediatePropagation, false);
    }
  };

  handleOpen = () => {
    if (this.props.preventScroll) {
      this.handlePreventScroll(true);
    }
  };

  handleClose = (e: any) => {
    const { onClose } = this.props;
    if (this.props.preventScroll) {
      this.handlePreventScroll(false);
    }
    if (onClose) {
      onClose(e);
    }
  };

  handleMaskClick = (e: any) => {
    if (this.props.maskClosable) {
      this.handleClose(e);
    }
  };

  handleOnEnd = (key: string, exists: Boolean) => {
    const { onAnimateEnd } = this.props;
    if (onAnimateEnd) onAnimateEnd(exists, key);
  };

  handlePreventDefault(e: any) {
    e.preventDefault();
  }

  handleStopImmediatePropagation(e: any) {
    e.stopImmediatePropagation();
  }

  render() {
    const { prefixCls, visible, children, hasMask, position, destroyed } = this.props;

    const transtion = (() => {
      switch (position) {
        case 'bottom':
          return 'move-down';
        case 'top':
          return 'move-up';
        case 'left':
          return 'move-left';
        case 'right':
          return 'move-right';
        default:
          return 'fade';
      }
    })();

    const maskNode = hasMask && (
      <Animate component="" transitionName="fade" showProp="show">
        {visible || !destroyed ? (
          <View show={visible}>
            <div
              ref={e => (this.maskRef = e)}
              className={`${prefixCls}-mask`}
              onClick={this.handleMaskClick}
            />
          </View>
        ) : null}
      </Animate>
    );

    return (
      <div className={`${prefixCls} ${prefixCls}-${position}`}>
        {maskNode}
        <Animate component="" transitionName={transtion} showProp="show" onEnd={this.handleOnEnd}>
          {visible || !destroyed ? (
            <View show={visible}>
              <div className={`${prefixCls}-box`} ref={e => (this.boxRef = e)}>
                {children}
              </div>
            </View>
          ) : null}
        </Animate>
      </div>
    );
  }
}

export default Popup;
