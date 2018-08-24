import * as React from "react";
import Demo0 from "./cases/Demo0";
export default class Dome extends React.PureComponent {
    render() {
        return (React.createElement("div", { className: "m-example" },
            React.createElement(Demo0, null)));
    }
}
