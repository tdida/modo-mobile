import * as React from 'react';

export interface CarouselCircleProps {
  size: number;
  index: number;
  animateValues: Array<number>;
}

export default class CarouselCircle extends React.PureComponent<CarouselCircleProps, any> {
  static defaultProps = {
    index: 0,
    size: 16,
    animateValues: [],
  };

  render() {
    const { size, index, animateValues } = this.props;

    const cx = index * size * 1.5 + size / 2;
    const opacityValues = animateValues.join(';');
    const sizeValues = animateValues
      .map(val => {
        return (val * size) / 2;
      })
      .join(';');

    return (
      <circle cx={cx} cy={size / 2} r={size / 2}>
        <animate
          attributeName="fill-opacity"
          calcMode="linear"
          repeatCount="indefinite"
          attributeType="XML"
          begin="0s"
          dur="1s"
          values={opacityValues}
        />
        <animate
          attributeName="r"
          calcMode="linear"
          repeatCount="indefinite"
          attributeType="XML"
          begin="0s"
          dur="1s"
          values={sizeValues}
        />
      </circle>
    );
  }
}
