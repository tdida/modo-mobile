import * as React from "react";
import Button from "../../../button";
import Toast from "../../index";

export default class Demo0 extends React.PureComponent {
  public showTextToast() {
    Toast.info("一段文字");
  }

  public showSucceedToast() {
    Toast.success("操作成功");
  }

  public showFailToast() {
    Toast.fail("操作成功");
  }

  public showLoadingToast() {
    Toast.loading("载入中");
    setTimeout(() => {
      Toast.hide();
    }, 3000);
  }
  public render() {
    return (
      <section className="m-example-section">
        <div className="m-example-content">
          <Button type="primary" onClick={this.showTextToast}>
            纯文字
          </Button>
          <Button type="primary" onClick={this.showSucceedToast}>
            成功
          </Button>
          <Button type="primary" onClick={this.showFailToast}>
            失败
          </Button>
          <Button type="primary" onClick={this.showLoadingToast}>
            载入
          </Button>
        </div>
      </section>
    );
  }
}
