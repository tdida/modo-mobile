import React from 'react';
import classNames from 'classnames';
import CopyableIcon from './CopyableIcon';

export default class IconSet extends React.Component {
  static defaultProps = {
    icons: [],
  };

  state = {
    justCopied: null,
  };

  onCopied = type => {
    this.setState({ justCopied: type }, () => {
      setTimeout(() => {
        this.setState({ justCopied: null });
      }, 2000);
    });
  };

  icons = [
    'search',
    'loading',
    'loading-spinner',
    'add',
    'reduce',
    'right',
    'info-circle-o',
    'info-circle',
    'question-circle-o',
    'question-circle',
    'close-circle-o',
    'close-circle',
    'check-circle-o',
    'check-circle',
  ];

  // Show badges
  newIcons = [];

  render() {
    const { justCopied } = this.state;
    const { className } = this.props;

    const listClassName = classNames({
      'anticons-list': true,
      clearfix: true,
      [className]: !!className,
    });
    return (
      <ul className={listClassName}>
        {this.icons.map(type => (
          <CopyableIcon
            key={type}
            type={type}
            isNew={this.newIcons.indexOf(type) >= 0}
            justCopied={justCopied}
            onCopied={this.onCopied}
          />
        ))}
      </ul>
    );
  }
}
