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
  static Item: typeof Item;
  static defaultProps: {
    prefixCls: string;
  };
  render(): JSX.Element;
}
