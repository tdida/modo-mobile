---
order: 1
title:
  zh-CN: 弹出位置
  en-US: Popup positions
---

```jsx
import { Popup, Button } from 'modo-mobile';

class App extends React.Component {
  state = {
    center: false,
    bottom: false,
    top: false,
    left: false,
    right: false,
  };

  handleCenterClick = () => {
    const { center } = this.state;
    this.setState({ center: !center });
  };

  handleCloseEnd = bool => {
    console.log('exists', bool);
  };

  handleBottomClick = () => {
    const { bottom } = this.state;
    this.setState({ bottom: !bottom });
  };

  handleTopClick = () => {
    const { top } = this.state;
    this.setState({ top: !top });
  };

  handleRightClick = () => {
    const { right } = this.state;
    this.setState({ right: !right });
  };

  handleLeftClick = () => {
    const { left } = this.state;
    this.setState({ left: !left });
  };

  render() {
    const { center, bottom, top, left, right } = this.state;
    return (
      <div className="m-example-popup-wrapper">
        <Button type="primary" style={{ marginBottom: 10 }} onClick={this.handleCenterClick}>
          屏幕中弹出
        </Button>
        <Popup visible={center} onClose={this.handleCenterClick} onAnimateEnd={this.handleCloseEnd}>
          <div className="m-example-popup m-example-popup-center">Popup Center</div>
        </Popup>

        <Button type="primary" style={{ marginBottom: 10 }} onClick={this.handleBottomClick}>
          底部弹出
        </Button>
        <Popup
          position="bottom"
          visible={bottom}
          onConfirm={this.handleBottomClick}
          onClose={this.handleBottomClick}
        >
          <Popup.TitleBar
            title="Popup Title"
            describe="Popup Description"
            okText="ok"
            cancelText="cancel"
            onCancel={this.handleBottomClick}
          />
          <div className="m-example-popup m-example-popup-bottom">Popup Bottom</div>
        </Popup>

        <Button type="primary" style={{ marginBottom: 10 }} onClick={this.handleTopClick}>
          顶部弹出
        </Button>
        <Popup position="top" visible={top} onClose={this.handleTopClick}>
          <div className="m-example-popup m-example-popup-top">Popup Top</div>
        </Popup>

        <Button type="primary" style={{ marginBottom: 10 }} onClick={this.handleLeftClick}>
          左侧弹出
        </Button>
        <Popup position="left" visible={left} onClose={this.handleLeftClick}>
          <div className="m-example-popup m-example-popup-left">Popup Left</div>
        </Popup>

        <Button type="primary" style={{ marginBottom: 10 }} onClick={this.handleRightClick}>
          右侧弹出
        </Button>
        <Popup position="right" visible={right} onClose={this.handleRightClick}>
          <div className="m-example-popup m-example-popup-right">Popup Right</div>
        </Popup>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

```css
.m-example-popup-wrapper {
  margin: 10px;
}

.m-example-popup {
  background-color: #fff;
}

.m-example-popup-center {
  padding: 16px;
  border-radius: 4px;
}

.m-example-popup-bottom {
  width: 100%;
  padding: 36px 0;
  box-sizing: border-box;
  text-align: center;
}

.m-example-popup-top {
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  background-color: #4a4c5b !important;
  color: #fff;
}

.m-example-popup-left {
  height: 100%;
  padding: 0 60px;
  display: center;
  align-items: center;
}

.m-example-popup-right {
  height: 100%;
  padding: 0 60px;
  display: center;
  align-items: center;
}
```
