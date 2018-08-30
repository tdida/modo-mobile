import * as React from 'react';
import classnames from 'classnames';
import Icon from '../icon';

export interface ListItemProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  brief?: string;
  align?: 'left' | 'center' | 'right';
  disabled?: boolean;
  arrow?: 'down' | 'up' | 'empty' | 'left' | 'right' | '';
  extra?: React.ReactNode | string;
  wrap?: boolean;
  solid?: boolean;
}

export default class ListItem extends React.PureComponent<ListItemProps, any> {
  static defaultProps = {
    prefixCls: 'm-list-item',
    align: 'right',
    arrow: '',
    solid: false,
  };

  render() {
    const {
      prefixCls,
      children,
      className,
      style,
      disabled,
      align,
      title,
      brief,
      wrap,
      arrow,
      extra,
      solid,
      ...restProps
    } = this.props;

    const wrapCls = classnames(`${prefixCls}`, className, {
      [`${prefixCls}-has-arrow`]: arrow !== '',
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-${align}`]: align,
    });

    const contentCls = classnames(`${prefixCls}-content`, {
      [`${prefixCls}-content-wrap`]: wrap,
    });

    const arrowCls = classnames(`${prefixCls}-arrow`, {
      [`${prefixCls}-arrow-${arrow}`]: arrow,
    });

    const labelCls = classnames(`${prefixCls}-label`, {
      [`${prefixCls}-label-solid`]: solid,
    });

    const extraDom = extra ? (
      <div className={`${prefixCls}-extra`}>
        {typeof extra === 'string' ? <img src={extra} /> : extra}
      </div>
    ) : null;

    const arrowDom = arrow && (
      <div className={arrowCls} aria-hidden="true">
        <Icon type="right" />
      </div>
    );

    return (
      <div className={wrapCls} style={style} {...restProps}>
        <div className={`${prefixCls}-inner`}>
          {extraDom}
          <div className={labelCls}>
            <div className={`${prefixCls}-title`}>{title}</div>
            {brief ? <div className={`${prefixCls}-brief`}>{brief}</div> : null}
          </div>
          <div className={contentCls}>{children !== undefined && children}</div>
          {arrowDom}
        </div>
      </div>
    );
  }
}
