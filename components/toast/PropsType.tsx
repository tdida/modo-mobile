export interface IToastPropsType {
  prefixCls?: string;
  icon: string;
  content: string;
  hasMask: boolean;
  duration: number;
  position: string;
  willUnmount?: () => {};
}

export const defaultProps = {
  duration: 0,
  hasMask: false,
  position: "center",
  prefixCls: "m-toast"
};
