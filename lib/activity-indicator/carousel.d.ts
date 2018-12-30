import * as React from 'react';
export interface CarouselProps {
    size: number;
    color: string;
    prefixCls: string;
}
export default class Carousel extends React.PureComponent<CarouselProps, any> {
    state: {
        animateValues: number[][];
    };
    render(): JSX.Element;
}
