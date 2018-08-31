---
order: 2
title:
  zh-CN: 其他配置
  en-US: Others
---

```jsx
import { Popup, Button, Icon } from 'modo-mobile';

class App extends React.Component {
  state = {
    mask: false,
    noMask: false,
    scroll: false,
  };

  handleMaskClick = () => {
    const { mask } = this.state;
    this.setState({ mask: !mask });
  };

  handleNoMaskClick = () => {
    const { noMask } = this.state;
    this.setState({ noMask: !noMask });
  };

  handleScrollClick = () => {
    const { scroll } = this.state;
    this.setState({ scroll: !scroll });
  };

  render() {
    const { mask, scroll, noMask } = this.state;

    return (
      <div className="m-example-popup-wrapper">
        <Button type="primary" style={{ marginBottom: 10 }} onClick={this.handleNoMaskClick}>
          无遮罩层
        </Button>
        <Popup position="top" hasMask={false} visible={noMask} onClose={this.handleNoMaskClick}>
          <div className="m-example-popup m-example-popup-top">Popup Top</div>
        </Popup>

        <Button type="primary" style={{ marginBottom: 10 }} onClick={this.handleMaskClick}>
          禁用遮罩层点击
        </Button>
        <Popup position="bottom" maskClosable={false} visible={mask} onClose={this.handleMaskClick}>
          <Popup.TitleBar
            title="禁用遮罩层点击"
            cancelText={<Icon type="close-circle-o" />}
            onCancel={this.handleMaskClick}
          />
          <div className="m-example-popup m-example-popup-mask">Popup Bottom</div>
        </Popup>

        <Button type="primary" style={{ marginBottom: 10 }} onClick={this.handleScrollClick}>
          防止滚动穿透
        </Button>
        <Popup position="bottom" preventScroll visible={scroll} onClose={this.handleScrollClick}>
          <Popup.TitleBar
            title="防止滚动穿透"
            cancelText="关闭"
            onCancel={this.handleScrollClick}
          />
          <div className="m-example-popup m-example-popup-scroll">
            <div>Popup Bottom</div>
            <div>Popup Bottom</div>
            <div>Popup Bottom</div>
            <div>Popup Bottom</div>
            <div>Popup Bottom</div>
            <div>Popup Bottom</div>
            <div>Popup Bottom</div>
            <div>Popup Bottom</div>
            <div>Popup Bottom</div>
            <div>Popup Bottom</div>
          </div>
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

.m-example-popup-scroll {
  height: 200px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  text-align: center;
}

.m-example-popup-scroll div {
  padding: 6px 0;
}

.m-example-popup-mask {
  padding: 36px;
  text-align: center;
}
```
