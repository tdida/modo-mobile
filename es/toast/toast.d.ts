import * as React from 'react';
import { IToastPropsType } from './PropsType';
import './style/index.less';
declare class Toast extends React.PureComponent<IToastPropsType, any> {
    static defaultProps: {
        duration: number;
        hasMask: boolean;
        position: string;
        prefixCls: string;
    };
    closeTimer: any;
    state: {
        visible: boolean;
    };
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: IToastPropsType): void;
    componentWillUnmount(): void;
    clearCloseTimer: () => void;
    startCloseTimer: (duration: number) => void;
    onClose: () => void;
    handleAnimateEnd: (exists: boolean) => void;
    render(): JSX.Element;
}
export default Toast;
