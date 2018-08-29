---
order: 0
title:
  zh-CN: Carousel
  en-US: Carousel
---

```jsx
import { Button, ActivityIndicator } from 'modo-mobile';

class App extends React.Component {
  state = {
    loading: false,
  };

  handleClick = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="m-demo-list">
        <ActivityIndicator type="carousel" />
        <Button type="primary" disabled={loading} onClick={this.handleClick}>
          {loading ? <ActivityIndicator type="carousel" color="#fff" size="12" /> : '确认支付'}
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

```css
.m-demo-list {
  padding: 10px;
}

.m-demo-list > .m-activity-indicator {
  margin-bottom: 16px;
}
```
