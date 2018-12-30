import * as React from 'react';
import TitleBar from './title-bar';
export interface PopupProps {
    visible: boolean;
    prefixCls?: string;
    hasMask?: boolean;
    maskClosable?: boolean;
    destroyed?: boolean;
    position?: 'bottom' | 'top' | 'right' | 'left' | 'center';
    preventScroll?: boolean;
    preventScrollExclude?: string | object;
    onClose?: (e: any) => void;
    onAnimateEnd?: (exists: Boolean, key?: string) => void;
}
declare class Popup extends React.Component<PopupProps, any> {
    static TitleBar: typeof TitleBar;
    static defaultProps: {
        closable: boolean;
        hasMask: boolean;
        maskClosable: boolean;
        destroyed: boolean;
        position: string;
        prefixCls: string;
        preventScroll: boolean;
        preventScrollExclude: string;
        visible: boolean;
    };
    maskRef: any;
    boxRef: any;
    componentDidUpdate(prevProps: PopupProps): void;
    handlePreventScroll: (isBind: boolean) => void;
    handlePreventScrollExclude: (isBind: boolean, preventScrollExclude: any) => void;
    handleOpen: () => void;
    handleClose: (e: any) => void;
    handleMaskClick: (e: any) => void;
    handleOnEnd: (key: string, exists: Boolean) => void;
    handlePreventDefault(e: any): void;
    handleStopImmediatePropagation(e: any): void;
    render(): JSX.Element;
}
export default Popup;
