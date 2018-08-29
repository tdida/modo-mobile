import * as React from 'react';

interface IViewProps {
  show: boolean;
  children: React.ReactElement<any>;
}

export default class View extends React.PureComponent<IViewProps, any> {
  render() {
    const style = this.props.hasOwnProperty('show') &&
      !this.props.show && {
        display: 'none',
      };

    return React.cloneElement(React.Children.only(this.props.children), {
      style: { ...this.props.children.props.style, style },
    });
  }
}
