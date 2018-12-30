import * as React from 'react';
import Keyboard from './keyboard';
import Popup from '../popup';
export default class NumberKeyboard extends React.PureComponent {
    render() {
        const { prefixCls, type, okText, visible, disorder, hideDot, onConfirm, onDelete, onEnter, onHide, } = this.props;
        return (<div className={`${prefixCls}-wrapper`}>
        <Popup visible={visible} position="bottom" hasMask={false}>
          <Keyboard disorder={disorder} hideDot={hideDot} prefixCls={prefixCls} type={type} okText={okText} onConfirm={onConfirm} onDelete={onDelete} onEnter={onEnter} onHide={onHide}/>
        </Popup>
      </div>);
    }
}
NumberKeyboard.defaultProps = {
    prefixCls: 'm-number-keyboard',
    type: 'professional',
    okText: '确定',
    disorder: false,
    hideDot: false,
};
