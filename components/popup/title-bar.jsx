import * as React from 'react';
export default class TitleBar extends React.Component {
    constructor() {
        super(...arguments);
        this.handleCancel = () => {
            const { onCancel } = this.props;
            if (onCancel) {
                onCancel();
            }
        };
        this.handleConfirm = () => {
            const { onConfirm } = this.props;
            if (onConfirm)
                onConfirm();
        };
    }
    render() {
        const { prefixCls, title, describe, okText, cancelText } = this.props;
        return (<div className={`${prefixCls}-title-bar`}>
        <div className={`${prefixCls}-title-bar-left`} onClick={this.handleCancel}>
          {cancelText}
        </div>
        <div className={`${prefixCls}-title-bar-center`}>
          <div className={`${prefixCls}-title-bar-title`}>{title}</div>
          <div className={`${prefixCls}-title-bar-describe`}>{describe}</div>
        </div>
        <div className={`${prefixCls}-title-bar-right`} onClick={this.handleConfirm}>
          {okText}
        </div>
      </div>);
    }
}
TitleBar.defaultProps = {
    prefixCls: 'm-popup',
};
