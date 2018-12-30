import * as React from 'react';
import Marquee from './Marquee';
import Icon from '../icon';
export default class NoticeBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleHide = (time) => {
            const timer = setTimeout(() => {
                this.handleClose();
                clearTimeout(timer);
            }, time);
        };
        this.handleClose = () => {
            this.setState({
                closed: true,
            });
            const { onClick } = this.props;
            if (onClick)
                onClick();
        };
        this.state = {
            closed: false,
        };
    }
    componentDidMount() {
        const { duration } = this.props;
        if (duration) {
            this.handleHide(duration);
        }
    }
    render() {
        const { icon, prefixCls, action, children, mode, onClick } = this.props;
        const extraProps = {};
        let closeIcon = null;
        if (mode === 'closable') {
            closeIcon = (<div onClick={this.handleClose} className={`${prefixCls}-close-icon`}>
          {action || <Icon type="close"/>}
        </div>);
        }
        else {
            if (mode === 'link') {
                closeIcon = (<div className={`${prefixCls}-close-icon`}>{action || <Icon type="right"/>}</div>);
            }
            extraProps.onClick = onClick;
        }
        return this.state.closed ? null : (<div className={prefixCls} {...extraProps}>
        <div className={`${prefixCls}-icon`}>{icon}</div>
        <div className={`${prefixCls}-content`}>
          <Marquee prefixCls={prefixCls} text={children}/>
        </div>
        {closeIcon}
      </div>);
    }
}
NoticeBar.defaultProps = {
    prefixCls: 'm-notice-bar',
    mode: '',
    duration: 0,
    icon: <Icon type="info-circle"/>,
    onClick() { },
};
