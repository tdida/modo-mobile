---
order: 3
title:
  zh-CN: 弹出展示
  en-US: Display in Popup
---

```jsx
import { Picker, List } from 'modo-mobile';
import data from './data/simple.tsx';
import district from './data/district.tsx';

const CustomPop = ({ title, children, onClick }) => (
  <div style={{ padding: '10px 16px' }} onClick={onClick}>
    <span>{title}</span>
    <span>: </span>
    <span>{children}</span>
  </div>
);

class App extends React.Component {
  state = {
    value: ['810000', '810300', '810309'],
    valueTime: [],
  };

  handleChange = value => {
    this.setState({ value });
  };

  handleTimeChange = value => {
    this.setState({ valueTime: value });
  };

  onColumnChange = (val, index) => {
    console.log(val, index);
  };

  render() {
    const { value, valueTime } = this.state;

    return (
      <div>
        <Picker title="自定义弹出" data={data} cols={2} defaultValue={[1, 1]}>
          <CustomPop title="自定义弹出" />
        </Picker>
        <List>
          <Picker
            title="选择时间"
            data={data}
            cols={2}
            value={valueTime}
            onChange={this.handleTimeChange}
          >
            <List.Item title="选择时间" />
          </Picker>
          <Picker title="禁用选择" data={data} cols={3} disabled defaultValue={[1, 1]}>
            <List.Item title="禁用选择" />
          </Picker>
          <Picker
            title="选择城市"
            data={district}
            cascade
            cols={3}
            value={value}
            onChange={this.handleChange}
            onColumnChange={this.onColumnChange}
          >
            <List.Item title="选择城市" />
          </Picker>
        </List>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
