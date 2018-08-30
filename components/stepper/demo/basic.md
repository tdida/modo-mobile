---
order: 1
title:
  zh-CN: 基本
  en-US: Basic
---

```jsx
import { Stepper, List } from 'modo-mobile';

class App extends React.Component {
  state = {
    value: 4,
  };

  handleChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <List>
        <List.Item title="禁用">
          <Stepper value={2} disabled />
        </List.Item>
        <List.Item title="只读">
          <Stepper readOnly />
        </List.Item>
        <List.Item title="最小值-10，最大值10">
          <Stepper min={-10} max={10} value={value} onChange={this.handleChange} />
        </List.Item>
        <List.Item title="步数2, 只允许输入整数">
          <Stepper step={2} integer />
        </List.Item>
        <List.Item title="步数1.3">
          <Stepper step={1.3} />
        </List.Item>
      </List>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
