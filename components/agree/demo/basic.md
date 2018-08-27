---
order: 0
title:
  zh-CN: 选中
  en-US: checked
---

```jsx
import { Agree } from 'modo-mobile';

class App extends React.Component {
  state = {
    value: true,
  };

  onChange = value => {
    console.log('agree checked', value);
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <Agree onChange={this.onChange} className="agree-demo" value={value}>
        本人承诺投保人已充分了解本保险产品，并保证投保信息的真实性，理解并同意
      </Agree>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

```css
.agree-demo {
  margin: 12px;
}
```
