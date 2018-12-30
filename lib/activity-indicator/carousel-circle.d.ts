import * as React from 'react';
export interface CarouselCircleProps {
    size: number;
    index: number;
    animateValues: Array<number>;
}
export default class CarouselCircle extends React.PureComponent<CarouselCircleProps, any> {
    static defaultProps: {
        index: number;
        size: number;
        animateValues: never[];
    };
    render(): JSX.Element;
}
