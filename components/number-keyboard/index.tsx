import * as React from 'react';
import Keyboard from './keyboard';
import Popup from '../popup';

export interface NumberKeyboardProps {
  prefixCls?: string;
  type?: 'professional' | 'simple';
  okText?: string;
  disorder?: boolean;
  visible: boolean;
  onEnter?: (num: number | string) => void;
  onDelete?: () => void;
  onConfirm?: () => void;
  onHide?: () => void;
}

export default class NumberKeyboard extends React.PureComponent<NumberKeyboardProps, any> {
  static defaultProps = {
    prefixCls: 'm-number-keyboard',
    type: 'professional',
    okText: '确定',
    disorder: false,
  };

  render() {
    const {
      prefixCls,
      type,
      okText,
      visible,
      disorder,
      onConfirm,
      onDelete,
      onEnter,
      onHide,
    } = this.props;

    return (
      <div className={`${prefixCls}-wrapper`}>
        <Popup visible={visible} position="bottom" hasMask={false}>
          <Keyboard
            disorder={disorder}
            prefixCls={prefixCls}
            type={type}
            okText={okText}
            onConfirm={onConfirm}
            onDelete={onDelete}
            onEnter={onEnter}
            onHide={onHide}
          />
        </Popup>
      </div>
    );
  }
}
