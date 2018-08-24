import classnames from "classnames";
import * as React from "react";
import Icon from "../icon";
import { IButtonPropsType } from "./PropsType";

export interface IButtonProps extends IButtonPropsType {
  prefixCls?: string;
  className?: string;
  inline?: boolean;
  icon?: string;
  shape?: "circle" | "circle-outline";
  style?: React.CSSProperties;
  htmlType?: "submit" | "button" | "reset";
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str: any) {
  return typeof str === "string";
}

// Insert one space between two chinese characters automatically.
function insertSpace(child: React.ReactChild, needInserted: boolean) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }
  const SPACE = needInserted ? " " : "";
  // strictNullChecks oops.
  if (
    typeof child !== "string" &&
    typeof child !== "number" &&
    isString(child.type) &&
    isTwoCNChar(child.props.children)
  ) {
    return React.cloneElement(
      child,
      {},
      child.props.children.split("").join(SPACE)
    );
  }
  if (typeof child === "string") {
    if (isTwoCNChar(child)) {
      child = child.split("").join(SPACE);
    }
    return <span>{child}</span>;
  }
  return child;
}

class Button extends React.PureComponent<IButtonProps, any> {
  public static defaultProps = {
    disabled: false,
    inline: false,
    loading: false,
    prefixCls: "m-button"
  };

  public handleClick: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = e => {
    const { onClick } = this.props;
    if (onClick) {
      (onClick as React.MouseEventHandler<
        HTMLButtonElement | HTMLAnchorElement
      >)(e);
    }
  };

  public isNeedInserted() {
    const { icon, children } = this.props;
    return React.Children.count(children) === 1 && !icon;
  }

  public render() {
    const {
      children,
      className,
      prefixCls,
      type,
      size,
      shape,
      inline,
      icon,
      loading,
      onClick,
      ...restProps
    } = this.props;

    let sizeCls = "";
    switch (size) {
      case "large":
        sizeCls = "lg";
        break;
      case "small":
        sizeCls = "sm";
      default:
        break;
    }

    const iconType: any = loading ? "loading" : icon;
    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-inline`]: inline || shape,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-icon`]: !!iconType
    });

    const iconNode = iconType ? <Icon type={iconType} /> : null;

    const kids =
      children || children === 0
        ? React.Children.map(children, child =>
            insertSpace(child, this.isNeedInserted())
          )
        : null;

    if ("href" in restProps) {
      return (
        <a {...restProps} className={wrapCls} onClick={this.handleClick}>
          {iconNode}
          {kids}
        </a>
      );
    } else {
      const { htmlType, ...otherProps } = restProps;

      return (
        <button
          {...otherProps}
          type={htmlType || "button"}
          className={wrapCls}
          onClick={this.handleClick}
        >
          {iconNode}
          {kids}
        </button>
      );
    }
  }
}

export default Button;
