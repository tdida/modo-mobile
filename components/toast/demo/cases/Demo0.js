import * as React from "react";
import Button from "../../../button";
import Toast from "../../index";
export default class Demo0 extends React.PureComponent {
    showTextToast() {
        Toast.info("一段文字");
    }
    showSucceedToast() {
        Toast.success("操作成功");
    }
    showFailToast() {
        Toast.fail("操作成功");
    }
    showLoadingToast() {
        Toast.loading("载入中");
        setTimeout(() => {
            Toast.hide();
        }, 3000);
    }
    render() {
        return (React.createElement("section", { className: "m-example-section" },
            React.createElement("div", { className: "m-example-content" },
                React.createElement(Button, { type: "primary", onClick: this.showTextToast }, "\u7EAF\u6587\u5B57"),
                React.createElement(Button, { type: "primary", onClick: this.showSucceedToast }, "\u6210\u529F"),
                React.createElement(Button, { type: "primary", onClick: this.showFailToast }, "\u5931\u8D25"),
                React.createElement(Button, { type: "primary", onClick: this.showLoadingToast }, "\u8F7D\u5165"))));
    }
}
