---
order: 3
title:
  zh-CN: 表单控件
  en-US: Form
---

## zh-CN

配合([rc-form](https://github.com/react-component/form))使用

## en-US

Recommended use of [rc-form](https://github.com/react-component/form) for controlled component.

```jsx
import { InputItem, List, Button } from 'modo-mobile';
import { createForm } from 'rc-form';

class App extends React.Component {
  submit = () => {
    const { form } = this.props;
    form.validateFields((error, value) => {
      console.log(error, value);
    });
  };

  render() {
    const {
      form: { getFieldProps, getFieldError },
    } = this.props;

    return (
      <List>
        <InputItem
          title="必填表单"
          error={getFieldError('title') ? getFieldError('title').join(',') : null}
          {...getFieldProps('title', {
            rules: [{ required: true, message: '必填表单不能为空' }],
          })}
        />
        <div style={{ padding: 16 }}>
          <Button onClick={this.submit} type="primary">
            提交
          </Button>
        </div>
      </List>
    );
  }
}

const AppWrapper = createForm()(App);
ReactDOM.render(<AppWrapper />, mountNode);
```
