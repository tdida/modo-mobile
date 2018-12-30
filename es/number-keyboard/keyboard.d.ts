import * as React from 'react';
export interface KeyboardProps {
    prefixCls?: string;
    type?: 'professional' | 'simple';
    okText?: string;
    disorder?: boolean;
    hideDot?: boolean;
    onEnter?: (num: number | string) => void;
    onDelete?: () => void;
    onConfirm?: () => void;
    onHide?: () => void;
}
export default class Keyboard extends React.PureComponent<KeyboardProps, any> {
    static defaultProps: {
        prefixCls: string;
        type: string;
        okText: string;
        disorder: boolean;
        hideDot: boolean;
    };
    state: {
        baseStack: never[];
    };
    componentDidMount(): void;
    orderKeyNumber: () => void;
    onNumberClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, num: string | number) => void;
    onSlideDoneClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    onDeleteClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    onConfirmClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    render(): JSX.Element;
}
