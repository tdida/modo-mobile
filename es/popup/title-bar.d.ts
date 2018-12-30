import * as React from 'react';
export interface TitleBarProps {
    title?: string;
    describe?: string;
    okText?: String | React.ReactNode;
    cancelText?: String | React.ReactNode;
    prefixCls?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}
export default class TitleBar extends React.Component<TitleBarProps, any> {
    static defaultProps: {
        prefixCls: string;
    };
    handleCancel: () => void;
    handleConfirm: () => void;
    render(): JSX.Element;
}
