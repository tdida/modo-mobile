import classnames from 'classnames';
import * as React from 'react';
import Item from './ListItem';

export interface ListProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  extra?: React.ReactNode | string;
}

export default class List extends React.PureComponent<ListProps, any> {
  static Item = Item;

  static defaultProps = {
    prefixCls: 'm-list',
  };

  render() {
    const { prefixCls, children, className, style, title, extra, ...restProps } = this.props;

    const wrapCls = classnames(prefixCls, className);

    const headerNode =
      title || extra ? (
        <div className={`${prefixCls}-header`}>
          <div className={`${prefixCls}-title`}>{title}</div>
          <div className={`${prefixCls}-extra`}>{extra}</div>
        </div>
      ) : null;

    return (
      <div className={wrapCls} style={style} {...restProps}>
        {headerNode}
        {children ? <div className={`${prefixCls}-body`}>{children}</div> : null}
      </div>
    );
  }
}
