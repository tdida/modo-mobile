---
order: 0
title:
  zh-CN: 不可用状态
  en-US: disabled
---

```jsx
import { Agree } from 'modo-mobile';

class App extends React.Component {
  onChange = value => {
    console.log('agree checked', value);
  };

  render() {
    return (
      <div>
        <Agree onChange={this.onChange} value className="agree-demo" disable>
          本人承诺投保人已充分了解本保险产品，并保证投保信息的真实性，理解并同意
        </Agree>

        <Agree onChange={this.onChange} className="agree-demo" disabled>
          本人承诺投保人已充分了解本保险产品，并保证投保信息的真实性，理解并同意
        </Agree>
      </div>
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
