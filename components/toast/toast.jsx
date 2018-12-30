import classNames from 'classnames';
import * as React from 'react';
import Popup from '../popup';
// import Roller from "components/ActivityIndicator/roller";
// import Icon from "components/Icon";
import { defaultProps } from './PropsType';
import './style/index.less';
class Toast extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            visible: true,
        };
        this.clearCloseTimer = () => {
            const { duration } = this.props;
            if (duration) {
                clearTimeout(this.closeTimer);
                this.closeTimer = null;
            }
        };
        this.startCloseTimer = (duration) => {
            clearTimeout(this.closeTimer);
            this.setState({ visible: true });
            if (duration) {
                this.closeTimer = setTimeout(() => {
                    this.onClose();
                }, duration);
            }
        };
        this.onClose = () => {
            this.setState({ visible: false });
        };
        this.handleAnimateEnd = (exists) => {
            const { willUnmount } = this.props;
            if (!exists && willUnmount) {
                willUnmount();
            }
        };
    }
    componentDidMount() {
        this.startCloseTimer(this.props.duration);
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.clearCloseTimer();
        this.startCloseTimer(nextProps.duration);
    }
    componentWillUnmount() {
        this.clearCloseTimer();
    }
    render() {
        const { prefixCls, icon, content, hasMask, position } = this.props;
        const wrapCls = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-icon`]: icon,
            [position]: true,
        });
        return (<div className={wrapCls}>
        <Popup visible={this.state.visible} hasMask={hasMask} onAnimateEnd={this.handleAnimateEnd}>
          <div className={`${prefixCls}-wrapper`}>
            <div className={`${prefixCls}-content`}>{content ? <span>{content}</span> : ''}</div>
          </div>
        </Popup>
      </div>);
    }
}
Toast.defaultProps = defaultProps;
export default Toast;
