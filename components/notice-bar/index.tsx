import * as React from "react";
import Marquee from "./Marquee";
import Icon from "../icon";

function noop() {}

export interface NoticeBarProps {
  icon?: React.ReactNode;
  mode?: "closable" | "link";
  prefixCls?: string;
  duration?: number;
  action?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default class NoticeBar extends React.PureComponent<
  NoticeBarProps,
  any
> {
  static defaultProps = {
    prefixCls: "m-notice-bar",
    mode: "",
    duration: 0,
    icon: <Icon type="notification" />,
    onClick() {}
  };

  constructor(props: NoticeBarProps) {
    super(props);
    this.state = {
      closed: false
    };
  }

  componentDidMount() {
    const { duration } = this.props;
    if (duration) {
      this.handleHide(duration);
    }
  }

  handleHide = (time: number) => {
    const timer = setTimeout(() => {
      this.handleClose();
      clearTimeout(timer);
    }, time);
  };

  handleClose = () => {
    this.setState({
      closed: true
    });
    (this.props.onClick || noop)();
  };

  render() {
    const { icon, prefixCls, action, children, mode, onClick } = this.props;

    const extraProps: any = {};
    let closeIcon: any = null;
    if (mode === "closable") {
      closeIcon = (
        <div onClick={this.handleClose} className={`${prefixCls}-close-icon`}>
          {action || <Icon type="close" />}
        </div>
      );
    } else {
      if (mode === "link") {
        closeIcon = (
          <div className={`${prefixCls}-close-icon`}>
            {action || <Icon type="right" />}
          </div>
        );
      }
      extraProps.onClick = onClick;
    }

    return this.state.closed ? null : (
      <div className={prefixCls} {...extraProps}>
        <div className={`${prefixCls}-icon`}>{icon}</div>
        <div className={`${prefixCls}-content`}>
          <Marquee prefixCls={prefixCls} text={children as string} />
        </div>
        {closeIcon}
      </div>
    );
  }
}
