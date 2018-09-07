---
order: 2
title:
  zh-CN: 业务场景
  en-US: Scene
---

```jsx
import { InputItem, List } from 'modo-mobile';

class App extends React.Component {
  onVirtualKeyboardConfirm = value => {
    console.log(value);
  };

  render() {
    return (
      <List>
        <InputItem title="银行卡" type="bankCard" placeholder="bankCard xxxx xxxx xxxx xxxx" />
        <InputItem title="手机号" type="phone" placeholder="phone xxx xxxx xxxx" />
        <InputItem
          title="金额键盘"
          type="money"
          value="1.11"
          placeholder="金额为虚拟键盘"
          clear
          onVirtualKeyboardConfirm={this.onVirtualKeyboardConfirm}
        />
        <InputItem title="数字" type="digit" placeholder="digit 0123456789" />
        <InputItem title="密码" type="password" placeholder="password *********" clear />
        <InputItem title="邮箱" type="email" placeholder="其他标准 html input 类型" />
      </List>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
