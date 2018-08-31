---
order: 3
title:
  zh-CN: 数字键乱序
  en-US: disorder
---

```jsx
import { NumberKeyboard, Button } from 'modo-mobile';

class App extends React.Component {
  state = {
    visible: false,
    value: '',
  };

  handleClick = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };

  handleEnter = num => {
    const { value } = this.state;
    this.setState({ value: value + num });
  };

  handleDelete = () => {
    const { value } = this.state;
    if (value === '') return;
    this.setState({ value: value.substr(0, value.length - 1) });
  };

  render() {
    const { visible, value } = this.state;
    return (
      <div className="domo-keyboard">
        <Button type="primary" onClick={this.handleClick}>
          {visible ? '收起键盘' : '唤起键盘'}
        </Button>
        <NumberKeyboard
          visible={visible}
          disorder
          okText="支付"
          onHide={this.handleClick}
          onEnter={this.handleEnter}
          onDelete={this.handleDelete}
        />
        <div className="demo-value">{value}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
