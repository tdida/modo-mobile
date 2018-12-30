import * as React from 'react';
export interface NoticeBarProps {
    icon?: React.ReactNode;
    mode?: 'closable' | 'link';
    prefixCls?: string;
    duration?: number;
    action?: React.ReactNode;
    children?: React.ReactNode;
    onClick?: () => void;
}
export default class NoticeBar extends React.PureComponent<NoticeBarProps, any> {
    static defaultProps: {
        prefixCls: string;
        mode: string;
        duration: number;
        icon: JSX.Element;
        onClick(): void;
    };
    constructor(props: NoticeBarProps);
    componentDidMount(): void;
    handleHide: (time: number) => void;
    handleClose: () => void;
    render(): JSX.Element | null;
}
