import * as React from "react";
import classnames from "classnames";
import Icon from "../icon";

export interface ListItemProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  brief?: string;
  align?: "left" | "center" | "right";
  disabled?: boolean;
  arrow?: "down" | "up" | "empty" | "left" | "right" | "";
  extra?: React.ReactNode | string;
  wrap?: boolean;
}

export default class ListItem extends React.PureComponent<ListItemProps, any> {
  static defaultProps = {
    prefixCls: "m-list-item",
    align: "right",
    arrow: "right"
  };

  render() {
    const {
      prefixCls,
      children,
      className,
      style,
      disabled,
      align,
      title,
      brief,
      wrap,
      arrow,
      extra,
      ...restProps
    } = this.props;

    const wrapCls = classnames(`${prefixCls}`, className, {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-${align}`]: align
    });

    const contentCls = classnames(`${prefixCls}-content`, {
      [`${prefixCls}-content-wrap`]: wrap
    });

    const arrowCls = classnames(`${prefixCls}-arrow`, {
      [`${prefixCls}-arrow-${arrow}`]: arrow
    });

    return (
      <div className={wrapCls} style={style} {...restProps}>
        <div className={`${prefixCls}-inner`}>
          {extra ? (
            <div className={`${prefixCls}-extra`}>
              {typeof extra === "string" ? <img src={extra} /> : extra}
            </div>
          ) : null}
          <div className={`${prefixCls}-label`}>
            <div className={`${prefixCls}-title`}>{title}</div>
            {brief ? <div className={`${prefixCls}-brief`}>{brief}</div> : null}
          </div>
          <div className={contentCls}>{children !== undefined && children}</div>
          {arrow && (
            <div className={arrowCls} aria-hidden="true">
              <Icon type="right" />
            </div>
          )}
        </div>
      </div>
    );
  }
}
