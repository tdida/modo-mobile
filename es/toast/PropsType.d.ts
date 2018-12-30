export interface IToastPropsType {
    prefixCls?: string;
    icon: string;
    content: string;
    hasMask: boolean;
    duration: number;
    position: string;
    willUnmount?: () => {};
}
export declare const defaultProps: {
    duration: number;
    hasMask: boolean;
    position: string;
    prefixCls: string;
};
