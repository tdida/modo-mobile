export interface IPopupPropsType {
  visible: boolean;
  prefixCls?: string;
  hasMask?: boolean;
  maskClosable?: boolean;
  position?: string;
  preventScroll?: boolean;
  preventScrollExclude?: string | object;
  onClose?: (e: any) => {};
  onOpen?: () => {};
  willUnmount?: () => {};
}

export const defaultProps = {
  closable: true,
  hasMask: true, // 是否有蒙层
  maskClosable: true, // 点击蒙层是否可关闭弹出层
  position: 'center', // 弹出层位置
  prefixCls: 'm-popup',
  preventScroll: false, // 防止滚动穿透
  preventScrollExclude: {}, // 禁止滚动的排除元素
  visible: false, // 弹出层是否可见
};
