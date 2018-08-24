import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IToastPropsType } from './PropsType';
import ToastOptions from './toast';

let toastComponent: any;
let div: any;

function Toast({ content = '', icon = '', duration = 0, position = 'center', hasMask = false }) {
  const props = {
    content,
    duration,
    hasMask,
    icon,
    position,
  };

  if (toastComponent) {
    toastComponent.props = props;
  } else {
    div = document.createElement('div');
    document.body.appendChild(div);
  }

  next(props);
}

function next(props: IToastPropsType) {
  const component = React.createElement(
    ToastOptions,
    Object.assign(props, {
      ref: (el: any) => {
        toastComponent = el;
      },
      willUnmount: () => {
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
        div = null;
        toastComponent = null;
      },
    }),
  );

  ReactDOM.render(component, div);
}

export default {
  info(content: string, duration = 2000, hasMask?: boolean) {
    return Toast({
      content,
      duration,
      hasMask,
    });
  },
  success(content: string, duration = 2000, hasMask?: boolean) {
    return Toast({
      content,
      duration,
      hasMask,
      icon: 'check-circle',
    });
  },
  fail(content: string, duration = 2000, hasMask?: boolean) {
    return Toast({
      content,
      duration,
      hasMask,
      icon: 'close-circle',
    });
  },
  loading(content: string, duration = 0, hasMask = true) {
    return Toast({
      content,
      duration,
      hasMask,
      icon: 'loading',
    });
  },
  hide() {
    if (div) {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
      div = null;
      toastComponent = null;
    }
  },
};
