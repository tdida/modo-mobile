import * as React from 'react';

export interface KeyboardProps {
  prefixCls?: string;
  type?: 'professional' | 'simple';
  okText?: string;
  disorder?: boolean;
  onEnter?: (num: number | string) => void;
  onDelete?: () => void;
  onConfirm?: () => void;
  onHide?: () => void;
}

export default class Keyboard extends React.PureComponent<KeyboardProps, any> {
  static defaultProps = {
    prefixCls: 'm-number-keyboard',
    type: 'professional',
    okText: '确定',
    disorder: false,
  };

  state = {
    baseStack: [],
  };

  componentDidMount() {
    this.orderKeyNumber();
  }

  orderKeyNumber = () => {
    const { disorder } = this.props;
    const baseStack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let keyNumberList = [];
    if (disorder) {
      let index = 0;
      while (index < 10) {
        keyNumberList[index] =
          baseStack.splice(Math.floor(Math.random() * baseStack.length), 1)[0] || 0;
        index++;
      }
    } else {
      keyNumberList = baseStack;
    }
    this.setState({ baseStack: keyNumberList });
  };

  onNumberClick = (e: React.TouchEvent<HTMLDivElement>, num: number | string) => {
    e.stopPropagation();
    const { onEnter } = this.props;
    if (onEnter) onEnter(num);
  };

  onSlideDoneClick = () => {
    const { onHide } = this.props;
    if (onHide) onHide();
  };

  onDeleteClick = () => {
    const { onDelete } = this.props;
    if (onDelete) onDelete();
  };

  onConfirmClick = () => {
    const { onConfirm } = this.props;
    if (onConfirm) onConfirm();
  };

  render() {
    const { prefixCls, type, okText } = this.props;
    const { baseStack } = this.state;

    const numberNode = baseStack.map(
      (num: number, index: number) =>
        index !== 9 ? (
          <li
            key={num}
            className={`${prefixCls}-number-item`}
            onClick={(e: any) => this.onNumberClick(e, num)}
          >
            {num}
          </li>
        ) : null,
    );

    const numOperateNode =
      type === 'professional' ? (
        <React.Fragment>
          <li
            className={`${prefixCls}-number-item`}
            onClick={(e: any) => this.onNumberClick(e, '.')}
          >
            .
          </li>
          <li
            className={`${prefixCls}-number-item`}
            onClick={(e: any) => this.onNumberClick(e, baseStack[9])}
          >
            {baseStack[9]}
          </li>
          <li
            className={`${prefixCls}-number-item ${prefixCls}-number-item-slidedown`}
            onClick={this.onSlideDoneClick}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <li className={`${prefixCls}-number-item ${prefixCls}-number-item-no`} />
          <li
            className={`${prefixCls}-number-item`}
            onClick={(e: any) => this.onNumberClick(e, baseStack[9])}
          >
            {baseStack[9]}
          </li>
          <li
            className={`${prefixCls}-number-item ${prefixCls}-number-item-delete`}
            onClick={this.onDeleteClick}
          />
        </React.Fragment>
      );

    return (
      <div className={prefixCls}>
        <div className={`${prefixCls}-number`}>
          <ul className={`${prefixCls}-number-list`}>
            {numberNode}
            {numOperateNode}
          </ul>
        </div>
        {type === 'professional' ? (
          <div className={`${prefixCls}-operate`}>
            <ul className={`${prefixCls}-operate-list`}>
              <li
                className={`${prefixCls}-operate-item ${prefixCls}-operate-item-delete`}
                onClick={this.onDeleteClick}
              />
              <li
                className={`${prefixCls}-operate-item ${prefixCls}-operate-item-confirm`}
                onClick={this.onConfirmClick}
              >
                {okText}
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}
