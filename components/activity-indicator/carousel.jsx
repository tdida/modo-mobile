import * as React from 'react';
import CarouselCircle from './carousel-circle';
export default class Carousel extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            animateValues: [
                [1, 0.8, 0.6, 0.6, 0.6, 0.8, 1],
                [0.6, 0.8, 1, 0.8, 0.6, 0.6, 0.6],
                [0.6, 0.6, 0.6, 0.8, 1, 0.8, 0.6],
            ],
        };
    }
    render() {
        const { prefixCls, size, color } = this.props;
        const { animateValues } = this.state;
        const circleNode = animateValues.map((value, index) => (<CarouselCircle key={index} size={size} index={index} animateValues={value}/>));
        const viewWidth = animateValues.length * size + ((animateValues.length - 1) * size) / 2;
        const viewBox = `0 0 ${viewWidth} ${size}`;
        const svgStyle = { width: viewWidth, height: size };
        return (<div className={`${prefixCls}-carousel`}>
        <svg viewBox={viewBox} className={`${prefixCls}-carousel-svg`} style={svgStyle} fill={color} xmlns="http://www.w3.org/2000/svg">
          {circleNode}
        </svg>
      </div>);
    }
}
