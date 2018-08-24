import * as React from 'react';
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
}
export default class ListItem extends React.PureComponent<ListItemProps, any> {
  static defaultProps: {
    prefixCls: string;
    align: string;
    arrow: string;
  };
  render(): JSX.Element;
}
