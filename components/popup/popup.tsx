import * as React from "react";
import { Transition, View } from "../libs";
import { defaultProps, IPopupPropsType } from "./PropsType";
import "./style/index.less";

class Popup extends React.Component<IPopupPropsType, any> {
  public static defaultProps = defaultProps;

  public componentDidUpdate(prevProps: IPopupPropsType) {
    if (this.props.visible && !prevProps.visible) {
      this.handleOpen();
    }
    if (this.props.preventScrollExclude !== prevProps.preventScrollExclude) {
      this.handlePreventScrollExclude(false, this.props.preventScrollExclude);
      this.handlePreventScrollExclude(true, prevProps.preventScrollExclude);
    }
  }

  public handlePreventScroll = (isBind: boolean) => {
    const { prefixCls } = this.props;
    const handler: string = isBind ? "addEventListener" : "removeEventListener";
    const masker: any = document.querySelector(`.${prefixCls}-mask`);
    const boxer: any = document.querySelector(`.${prefixCls}-box`);
    if (masker) {
      masker[handler]("touchmove", this.handlePreventDefault, false);
    }
    if (boxer) {
      boxer[handler]("touchmove", this.handlePreventDefault, false);
    }
    this.handlePreventScrollExclude(isBind, null);
  };

  public handlePreventScrollExclude = (
    isBind: boolean,
    preventScrollExclude: any
  ) => {
    const handler = isBind ? "addEventListener" : "removeEventListener";
    const excluder: any =
      preventScrollExclude && typeof preventScrollExclude === "string"
        ? document.querySelector(preventScrollExclude)
        : preventScrollExclude;

    if (excluder) {
      excluder[handler](
        "touchmove",
        this.handleStopImmediatePropagation,
        false
      );
    }
  };

  public handleOpen = () => {
    if (this.props.preventScroll) {
      this.handlePreventScroll(true);
    }
  };

  public handleClose = (e: any) => {
    const { onClose } = this.props;
    if (this.props.preventScroll) {
      this.handlePreventScroll(false);
    }
    if (onClose) {
      onClose(e);
    }
  };

  public handleMaskClick = (e: any) => {
    if (this.props.maskClosable) {
      this.handleClose(e);
    }
  };

  public handleAfterLeave = () => {
    const { willUnmount } = this.props;
    if (willUnmount) {
      willUnmount();
    }
  };

  public handlePreventDefault(e: any) {
    e.preventDefault();
  }

  public handleStopImmediatePropagation(e: any) {
    e.stopImmediatePropagation();
  }

  public render() {
    const { prefixCls, visible, children, hasMask, position } = this.props;

    const transtion = (() => {
      switch (position) {
        case "bottom":
          return "slide-up";
        case "top":
          return "slide-down";
        case "left":
          return "slide-right";
        case "right":
          return "slide-left";
        default:
          return "fade";
      }
    })();

    return (
      <div className={`${prefixCls} ${position}`}>
        {hasMask && (
          <Transition name="fade">
            <View show={visible}>
              <div
                className={`${prefixCls}-mask`}
                onClick={this.handleMaskClick}
              />
            </View>
          </Transition>
        )}
        <Transition name={transtion} onAfterLeave={this.handleAfterLeave}>
          <View show={visible}>
            <div className={`${prefixCls}-box`}>{children}</div>
          </View>
        </Transition>
      </div>
    );
  }
}

export default Popup;
