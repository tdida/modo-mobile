import classNames from 'classnames';
import * as React from 'react';
import Popup from '../popup';
// import Roller from "components/ActivityIndicator/roller";
// import Icon from "components/Icon";
import { defaultProps, IToastPropsType } from './PropsType';
import './style/index.less';

class Toast extends React.PureComponent<IToastPropsType, any> {
  public static defaultProps = defaultProps;

  public closeTimer: any;
  public state = {
    visible: true,
  };

  public componentDidMount() {
    this.startCloseTimer(this.props.duration);
  }

  public UNSAFE_componentWillReceiveProps(nextProps: IToastPropsType) {
    this.clearCloseTimer();
    this.startCloseTimer(nextProps.duration);
  }

  public componentWillUnmount() {
    this.clearCloseTimer();
  }

  public clearCloseTimer = () => {
    const { duration } = this.props;
    if (duration) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  };

  public startCloseTimer = (duration: number) => {
    clearTimeout(this.closeTimer);
    this.setState({ visible: true });
    if (duration) {
      this.closeTimer = setTimeout(() => {
        this.onClose();
      }, duration);
    }
  };

  public onClose = () => {
    this.setState({ visible: false });
  };

  handleAnimateEnd = (exists: boolean) => {
    const { willUnmount } = this.props;
    if (!exists && willUnmount) {
      willUnmount();
    }
  };

  public render() {
    const { prefixCls, icon, content, hasMask, position } = this.props;

    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-icon`]: icon,
      [position]: true,
    });

    return (
      <div className={wrapCls}>
        <Popup visible={this.state.visible} hasMask={hasMask} onAnimateEnd={this.handleAnimateEnd}>
          <div className={`${prefixCls}-wrapper`}>
            <div className={`${prefixCls}-content`}>{content ? <span>{content}</span> : ''}</div>
          </div>
        </Popup>
      </div>
    );
  }
}

export default Toast;
