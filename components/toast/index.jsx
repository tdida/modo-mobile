import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ToastOptions from './toast';
let toastComponent;
let div;
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
    }
    else {
        div = document.createElement('div');
        document.body.appendChild(div);
    }
    next(props);
}
function next(props) {
    const component = React.createElement(ToastOptions, Object.assign(props, {
        ref: (el) => {
            toastComponent = el;
        },
        willUnmount: () => {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
            div = null;
            toastComponent = null;
        },
    }));
    ReactDOM.render(component, div);
}
export default {
    info(content, duration = 2000, hasMask = false) {
        return Toast({
            content,
            duration,
            hasMask,
        });
    },
    success(content, duration = 2000, hasMask = false) {
        return Toast({
            content,
            duration,
            hasMask,
            icon: 'check-circle',
        });
    },
    fail(content, duration = 2000, hasMask = false) {
        return Toast({
            content,
            duration,
            hasMask,
            icon: 'close-circle',
        });
    },
    loading(content, duration = 0, hasMask = true) {
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
