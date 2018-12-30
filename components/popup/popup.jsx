import * as React from 'react';
import Animate from 'rc-animate';
import TitleBar from './title-bar';
import View from '../view';
class Popup extends React.Component {
    constructor() {
        super(...arguments);
        this.handlePreventScroll = (isBind) => {
            const handler = isBind ? 'addEventListener' : 'removeEventListener';
            if (this.maskRef) {
                this.maskRef[handler]('touchmove', this.handlePreventDefault, false);
            }
            // if (this.boxRef) {
            //   this.boxRef[handler]('touchmove', this.handlePreventDefault, false);
            // }
            this.handlePreventScrollExclude(isBind, null);
        };
        this.handlePreventScrollExclude = (isBind, preventScrollExclude) => {
            const handler = isBind ? 'addEventListener' : 'removeEventListener';
            preventScrollExclude = preventScrollExclude || this.props.preventScrollExclude;
            const excluder = preventScrollExclude
                ? typeof preventScrollExclude === 'string'
                    ? this.boxRef.querySelector(preventScrollExclude)
                    : preventScrollExclude
                : null;
            if (excluder) {
                excluder[handler]('touchmove', this.handleStopImmediatePropagation, false);
            }
        };
        this.handleOpen = () => {
            if (this.props.preventScroll) {
                this.handlePreventScroll(true);
            }
        };
        this.handleClose = (e) => {
            const { onClose } = this.props;
            if (this.props.preventScroll) {
                this.handlePreventScroll(false);
            }
            if (onClose) {
                onClose(e);
            }
        };
        this.handleMaskClick = (e) => {
            if (this.props.maskClosable) {
                this.handleClose(e);
            }
        };
        this.handleOnEnd = (key, exists) => {
            const { onAnimateEnd } = this.props;
            if (onAnimateEnd)
                onAnimateEnd(exists, key);
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.visible && !prevProps.visible) {
            this.handleOpen();
        }
        if (this.props.preventScrollExclude !== prevProps.preventScrollExclude) {
            this.handlePreventScrollExclude(false, this.props.preventScrollExclude);
            this.handlePreventScrollExclude(true, prevProps.preventScrollExclude);
        }
    }
    handlePreventDefault(e) {
        e.preventDefault();
    }
    handleStopImmediatePropagation(e) {
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
        const maskNode = hasMask && (<Animate component="" transitionName="fade" showProp="show">
        {visible || !destroyed ? (<View show={visible}>
            <div ref={e => (this.maskRef = e)} className={`${prefixCls}-mask`} onClick={this.handleMaskClick}/>
          </View>) : null}
      </Animate>);
        return (<div className={`${prefixCls} ${prefixCls}-${position}`}>
        {maskNode}
        <Animate component="" transitionName={transtion} showProp="show" onEnd={this.handleOnEnd}>
          {visible || !destroyed ? (<View show={visible}>
              <div className={`${prefixCls}-box`} ref={e => (this.boxRef = e)}>
                {children}
              </div>
            </View>) : null}
        </Animate>
      </div>);
    }
}
Popup.TitleBar = TitleBar;
Popup.defaultProps = {
    closable: true,
    hasMask: true,
    maskClosable: true,
    destroyed: false,
    position: 'center',
    prefixCls: 'm-popup',
    preventScroll: false,
    preventScrollExclude: '',
    visible: false,
};
export default Popup;
