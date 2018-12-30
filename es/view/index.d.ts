import * as React from 'react';
interface ViewProps {
    show: boolean;
    children: React.ReactElement<any>;
}
export default class View extends React.Component<ViewProps, any> {
    render(): React.ReactElement<any>;
}
export {};
