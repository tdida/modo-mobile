import * as React from 'react';
import arrayTreeFilter from 'array-tree-filter';
import PickerView from './picker-view';
import Popup from '../popup';

function noop() {}

export interface PickerData {
  value: string | number;
  label: React.ReactNode;
  children?: PickerData[];
}

export interface PickerProps {
  prefixCls?: string;
  data: PickerData[] | PickerData[][];
  value?: Array<string | number>;
  defaultValue?: Array<string | number>;
  isView?: boolean;
  cols?: number;
  cascade?: boolean;
  disabled?: boolean;
  title?: string;
  okText?: string | React.ReactNode;
  cancelText?: string | React.ReactNode;
  children?: React.ReactChildren;
  onChange?: (value: Array<string | number>) => void;
  onCancel?: () => void;
  onConfirm?: (value: Array<string | number>) => void;
  onColumnChange?: (value: any, index: number) => void;
}

export default class Picker extends React.Component<PickerProps, any> {
  static defaultProps = {
    prefixCls: 'm-picker',
    isView: false,
    cols: 3,
    cascade: false,
    disabled: false,
    okText: '确定',
    cancelText: '取消',
    onChange: noop,
    onCancel: noop,
    onConfirm: noop,
    onColumnChange: noop,
  };

  state = {
    value: this.getValue(),
    visible: false,
  };

  componentWillReceiveProps(nextProps: PickerProps) {
    if ('value' in nextProps) {
      this.setState({
        value: this.getValue(nextProps.data as PickerData[], nextProps.value),
      });
    }
  }

  getValue(d?: PickerData[], val?: any) {
    let value = val || this.props.value || this.props.defaultValue || [];
    if (!value || !value.length || value.indexOf(undefined) > -1) {
      value = [];
      if (this.props.cascade) {
        let data = (d || this.props.data) as PickerData[];
        const cols = data.length > this.props.cols! ? this.props.cols! : data.length;
        for (let i = 0; i < cols; i++) {
          value[i] = data[0].value;
        }
      } else {
        let data = (d || this.props.data) as PickerData[][];
        const cols = data.length > this.props.cols! ? this.props.cols! : data.length;
        for (let i = 0; i < cols; i++) {
          value[i] = data[i][0].value;
        }
      }
    }
    return value.slice(0, this.props.cols!) as Array<string | number>;
  }

  handleChange = (value: any) => {
    this.setState({ value });
  };

  handlePopupCancel = () => {
    this.props.onCancel!();
    this.setState({ visible: false });
  };

  handlePopupConfirm = () => {
    this.props.onConfirm!(this.state.value);
    this.props.onChange!(this.state.value);
    this.setState({ visible: false });
  };

  fireVisibleChange = () => {
    const { disabled } = this.props;
    if (!disabled) {
      this.setState({ visible: !this.state.visible });
    }
  };

  getLabel = () => {
    const { cascade, data, cols } = this.props;
    const value = (this.props.value || this.state.value || this.props.defaultValue).slice(0, cols);
    let treeChildren: PickerData[] = [];
    if (cascade) {
      treeChildren = arrayTreeFilter(data as PickerData[], (c: any, level: any) => {
        return c.value === value[level];
      });
    } else {
      value.forEach((v, i) => {
        const item = (data as PickerData[][])[i].find((col: PickerData) => col.value === v);
        if (item) treeChildren.push(item);
      });
    }
    return treeChildren.map(v => v.label).join(' ');
  };

  render() {
    const {
      prefixCls,
      isView,
      cols,
      children,
      data,
      cascade,
      disabled,
      title,
      okText,
      cancelText,
      onColumnChange,
    } = this.props;
    const { value, visible } = this.state;

    const pickerNode = (
      <PickerView
        prefixCls={prefixCls}
        data={data}
        cols={cols!}
        value={value}
        cascade={cascade}
        onChange={this.handleChange}
        onColumnChange={onColumnChange}
      />
    );

    this.getLabel();

    return (
      <React.Fragment>
        {isView ? (
          pickerNode
        ) : (
          <React.Fragment>
            {children &&
              typeof children !== 'string' &&
              React.isValidElement(children) &&
              React.cloneElement(children, {
                disabled: disabled,
                onClick: this.fireVisibleChange,
                children: this.getLabel(),
              })}
            <Popup
              position="bottom"
              visible={visible}
              maskClosable
              destroyed
              onClose={this.fireVisibleChange}
            >
              <Popup.TitleBar
                title={title}
                okText={okText}
                cancelText={cancelText}
                onCancel={this.handlePopupCancel}
                onConfirm={this.handlePopupConfirm}
              />
              {pickerNode}
            </Popup>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
