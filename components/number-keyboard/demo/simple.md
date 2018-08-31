---
order: 2
title:
  zh-CN: 简单类型
  en-US: simple
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
          type="simple"
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
