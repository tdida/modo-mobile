import * as React from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import Carousel from './carousel';

export interface ActivityIndicatorProps {
  prefixCls?: string;
  type?: 'carousel' | 'roller';
  size?: number;
  color?: string;
  vertical?: boolean;
  children?: React.ReactNode;
}

export default class ActivityIndicator extends React.PureComponent<ActivityIndicatorProps, any> {
  static defaultProps = {
    type: 'roller',
    vertical: false,
  };

  render() {
    const {
      prefixCls = 'm-activity-indicator',
      type,
      size = 16,
      color = '#1e9eff',
      vertical,
      children,
    } = this.props;

    let node;
    switch (type) {
      case 'carousel':
        node = <Carousel size={size} color={color} prefixCls={prefixCls} />;
        break;
      default:
        node = <Icon type="loading" style={{ color, fontSize: size }} />;
        break;
    }

    const wrapCls = classnames({
      [prefixCls]: true,
      [`${prefixCls}-vertical`]: vertical,
    });

    return (
      <div className={wrapCls}>
        <div className={`${prefixCls}-loading`}>{node}</div>
        <div className={`${prefixCls}-text`}>{children}</div>
      </div>
    );
  }
}
