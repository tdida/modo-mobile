import * as React from 'react';
import arrayTreeFilter from 'array-tree-filter';
import PickerColumn from './picker-column';
import { PickerData } from './PropsType';

export interface PickerViewProps {
  prefixCls?: string;
  data: PickerData[] | PickerData[][];
  value?: Array<string | number>;
  cols: number;
  cascade?: boolean;
  onChange?: (value: Array<string | number>) => void;
  onColumnChange?: (value: any, index: number) => void;
}

export default class PickerView extends React.Component<PickerViewProps, any> {
  static defaultProps = {
    prefixCls: 'm-picker',
    cascade: false,
  };

  state = {
    value: this.props.value || [],
  };

  componentWillReceiveProps(nextProps: PickerViewProps) {
    if ('value' in nextProps) {
      if (this.state.value !== nextProps.value) {
        this.setState({
          value: nextProps.value,
        });
      }
    }
  }

  onValueChange = (index: number, val: any) => {
    const { onChange, onColumnChange, data, cols, cascade } = this.props;
    const value = this.state.value.slice(0);
    value[index] = val;
    if (cascade) {
      const newData = data as PickerData[];
      let item = newData.find(v => v.value === value[0]);
      for (let i = 1; i < cols; i++) {
        if (item && item.children && item.children.length) {
          const child = item.children.find(v => v.value === value[i]);
          if (child) {
            item = child;
          } else {
            value[i] = item.children[0].value;
            item = item.children[0];
          }
        } else {
          value[i] = '';
        }
      }
    }
    this.setState({ value });
    if (onChange) onChange(value);
    if (onColumnChange) onColumnChange(val, index);
  };

  getColumn() {
    const { prefixCls, data, cascade, cols } = this.props;
    const { value } = this.state;
    let colums: any;
    if (cascade) {
      const childrenTree = arrayTreeFilter(data as PickerData[], (c, level) => {
        return c.value === value[level];
      }).map(c => c.children);
      const needPad = cols! - childrenTree.length;
      if (needPad > 0) {
        for (let i = 0; i < needPad; i++) {
          childrenTree.push([]);
        }
      }
      childrenTree.length = cols! - 1;
      childrenTree.unshift(data as PickerData[]);
      colums = childrenTree.map((col: PickerData[] = [], index) => (
        <PickerColumn
          key={index}
          prefixCls={`${prefixCls}-column`}
          data={col}
          value={value && value[index]}
          onValueChange={val => this.onValueChange(index, val)}
        />
      ));
    } else {
      colums = (data as PickerData[][]).map((col, index) => (
        <PickerColumn
          key={index}
          prefixCls={`${prefixCls}-column`}
          data={col}
          value={value && value[index]}
          onValueChange={val => this.onValueChange(index, val)}
        />
      ));
    }

    return colums;
  }

  render() {
    const { prefixCls } = this.props;

    return <div className={prefixCls}>{this.getColumn()}</div>;
  }
}
