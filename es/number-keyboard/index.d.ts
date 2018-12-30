import * as React from 'react';
export interface NumberKeyboardProps {
    prefixCls?: string;
    type?: 'professional' | 'simple';
    okText?: string;
    disorder?: boolean;
    visible: boolean;
    hideDot?: boolean;
    onEnter?: (num: number | string) => void;
    onDelete?: () => void;
    onConfirm?: () => void;
    onHide?: () => void;
}
export default class NumberKeyboard extends React.PureComponent<NumberKeyboardProps, any> {
    static defaultProps: {
        prefixCls: string;
        type: string;
        okText: string;
        disorder: boolean;
        hideDot: boolean;
    };
    render(): JSX.Element;
}
