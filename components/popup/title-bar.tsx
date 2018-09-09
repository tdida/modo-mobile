import * as React from 'react';

export interface TitleBarProps {
  title?: string;
  describe?: string;
  okText?: String | React.ReactNode;
  cancelText?: String | React.ReactNode;
  prefixCls?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export default class TitleBar extends React.Component<TitleBarProps, any> {
  static defaultProps = {
    prefixCls: 'm-popup',
  };

  handleCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  };

  handleConfirm = () => {
    const { onConfirm } = this.props;
    if (onConfirm) onConfirm();
  };

  render() {
    const { prefixCls, title, describe, okText, cancelText } = this.props;

    return (
      <div className={`${prefixCls}-title-bar`}>
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
      </div>
    );
  }
}
