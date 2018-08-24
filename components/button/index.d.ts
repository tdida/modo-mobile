import * as React from "react";
import { IButtonPropsType } from "./PropsType";
export interface IButtonProps extends IButtonPropsType {
    prefixCls?: string;
    className?: string;
    inline?: boolean;
    icon?: string;
    shape?: "circle" | "circle-outline";
    style?: React.CSSProperties;
    htmlType?: "submit" | "button" | "reset";
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
declare class Button extends React.PureComponent<IButtonProps, any> {
    static defaultProps: {
        disabled: boolean;
        inline: boolean;
        loading: boolean;
        prefixCls: string;
    };
    handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    isNeedInserted(): boolean;
    render(): JSX.Element;
}
export default Button;
