---
order: 1
title:
  zh-CN: 基本
  en-US: Basic
---

```jsx
import { NumberKeyboard, Button } from 'modo-mobile';

class App extends React.Component {
  state = {
    visible: false,
    dotVisible: false,
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

  handleDotClick = () => {
    const { dotVisible } = this.state;
    this.setState({ dotVisible: !dotVisible });
  };

  handleDotEnter = num => {
    const { value } = this.state;
    this.setState({ value: value + num });
  };

  handleDotDelete = () => {
    const { value } = this.state;
    if (value === '') return;
    this.setState({ value: value.substr(0, value.length - 1) });
  };

  render() {
    const { visible, dotVisible, value } = this.state;
    return (
      <div className="domo-keyboard">
        <Button type="primary" onClick={this.handleClick} style={{ marginBottom: 10 }}>
          {visible ? '收起键盘, 有小数点' : '唤起键盘, 有小数点'}
        </Button>
        <NumberKeyboard
          visible={visible}
          onHide={this.handleClick}
          onEnter={this.handleEnter}
          onDelete={this.handleDelete}
        />

        <Button type="primary" onClick={this.handleDotClick}>
          {dotVisible ? '收起键盘, 无小数点' : '唤起键盘, 无小数点'}
        </Button>
        <NumberKeyboard
          visible={dotVisible}
          hideDot
          onHide={this.handleDotClick}
          onEnter={this.handleDotEnter}
          onDelete={this.handleDotDelete}
        />
        <div className="demo-value">{value}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

```css
.domo-keyboard {
  margin: 10px;
}
.code-box-demo .domo-keyboard .m-popup-box {
  left: 50% !important;
  max-width: 500px !important;
  margin-left: -250px !important;
  z-index: 1104 !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.demo-value {
  position: fixed;
  top: 30%;
  left: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);
  font-size: 30px;
  text-shadow: 0 4px 10px #666;
}
```
