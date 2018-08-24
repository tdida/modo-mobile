import * as React from "react";
import * as ReactDOM from "react-dom";

interface ITransitionProps {
  name: string;
  children: React.ReactElement<any>;
  onEnter?: () => {};
  onAfterEnter?: (event: any) => void;
  onLeave?: () => {};
  onAfterLeave?: (event: any) => void;
}

export default class Transition extends React.Component<ITransitionProps, any> {
  public el: any;
  constructor(props: ITransitionProps) {
    super(props);

    const { children } = props;

    this.state = {
      children: children && this.enhanceChildren(children, {})
    };

    this.didEnter = this.didEnter.bind(this);
    this.didLeave = this.didLeave.bind(this);
  }

  public UNSAFE_componentWillReceiveProps(nextProps: ITransitionProps) {
    const children =
      React.isValidElement(this.props.children) &&
      React.Children.only(this.props.children);
    const nextChildren =
      React.isValidElement(nextProps.children) &&
      React.Children.only(nextProps.children);

    if (!nextProps.name) {
      this.setState({
        children: nextChildren
      });
      return;
    }

    if (this.isViewComponent(nextChildren)) {
      this.setState({
        children: this.enhanceChildren(nextChildren, {
          show: children ? children.props.show : true
        })
      });
    } else {
      if (nextChildren) {
        this.setState({
          children: this.enhanceChildren(nextChildren, {})
        });
      }
    }
  }

  public componentDidUpdate(preProps: ITransitionProps) {
    if (!this.props.name) {
      return;
    }

    const children: any =
      React.isValidElement(this.props.children) &&
      React.Children.only(this.props.children);
    const preChildren =
      React.isValidElement(preProps.children) &&
      React.Children.only(preProps.children);

    if (this.isViewComponent(children)) {
      if ((!preChildren || !preChildren.props.show) && children.props.show) {
        this.toggleVisible();
      } else if (
        preChildren &&
        preChildren.props.show &&
        !children.props.show
      ) {
        this.toggleHidden();
      }
    } else {
      if (!preChildren && children) {
        this.toggleVisible();
      } else if (preChildren && !children) {
        this.toggleHidden();
      }
    }
  }

  public enhanceChildren(children: any, props: object) {
    return React.cloneElement(children, {
      ...props,
      ref: (el: any) => {
        this.el = el;
      }
    });
  }

  get transitionClass() {
    const { name } = this.props;

    return {
      enter: `${name}-enter`,
      enterActive: `${name}-enter-active`,
      enterTo: `${name}-enter-to`,
      leave: `${name}-leave`,
      leaveActive: `${name}-leave-active`,
      leaveTo: `${name}-leave-to`
    };
  }

  public isViewComponent(element: any) {
    return element && element.type.name === "View";
  }

  public didEnter(e: any) {
    const childDOM: any = ReactDOM.findDOMNode(this.el);

    if (!e || e.target !== childDOM) {
      return;
    }

    const { onAfterEnter } = this.props;
    const { enterActive, enterTo } = this.transitionClass;

    childDOM.classList.remove(enterActive, enterTo);

    childDOM.removeEventListener("transitionend", this.didEnter);
    childDOM.removeEventListener("animationend", this.didEnter);

    if (onAfterEnter) {
      onAfterEnter(e);
    }
  }

  public didLeave(e: any) {
    const childDOM: any = ReactDOM.findDOMNode(this.el);
    if (!e || e.target !== childDOM) {
      return;
    }

    const { onAfterLeave, children } = this.props;
    const { leaveActive, leaveTo } = this.transitionClass;

    if (this.isViewComponent(children)) {
      childDOM.removeEventListener("transitionend", this.didLeave);
      childDOM.removeEventListener("animationend", this.didLeave);

      requestAnimationFrame(() => {
        childDOM.style.display = "none";
        childDOM.classList.remove(leaveActive, leaveTo);

        requestAnimationFrame(() => {
          if (onAfterLeave) {
            onAfterLeave(e);
          }
        });
      });
    } else {
      this.setState({ children: null }, () => {
        if (onAfterLeave) {
          onAfterLeave(e);
        }
      });
    }
  }

  public toggleVisible() {
    const { onEnter } = this.props;
    const {
      enter,
      enterActive,
      enterTo,
      leaveActive,
      leaveTo
    } = this.transitionClass;
    const childDOM: any = ReactDOM.findDOMNode(this.el);

    childDOM.addEventListener("transitionend", this.didEnter);
    childDOM.addEventListener("animationend", this.didEnter);

    window.requestAnimationFrame(() => {
      // when hidden transition not end
      if (childDOM.classList.contains(leaveActive)) {
        childDOM.classList.remove(leaveActive, leaveTo);

        childDOM.removeEventListener("transitionend", this.didLeave);
        childDOM.removeEventListener("animationend", this.didLeave);
      }

      childDOM.style.display = "";
      childDOM.classList.add(enter, enterActive);

      if (onEnter) {
        onEnter();
      }

      window.requestAnimationFrame(() => {
        childDOM.classList.remove(enter);
        childDOM.classList.add(enterTo);
      });
    });
  }

  public toggleHidden() {
    const { onLeave } = this.props;
    const {
      leave,
      leaveActive,
      leaveTo,
      enterActive,
      enterTo
    } = this.transitionClass;
    const childDOM: any = ReactDOM.findDOMNode(this.el);

    childDOM.addEventListener("transitionend", this.didLeave);
    childDOM.addEventListener("animationend", this.didLeave);

    window.requestAnimationFrame(() => {
      // when enter transition not end
      if (childDOM.classList.contains(enterActive)) {
        childDOM.classList.remove(enterActive, enterTo);

        childDOM.removeEventListener("transitionend", this.didEnter);
        childDOM.removeEventListener("animationend", this.didEnter);
      }

      childDOM.classList.add(leave, leaveActive);

      if (onLeave) {
        onLeave();
      }

      window.requestAnimationFrame(() => {
        childDOM.classList.remove(leave);
        childDOM.classList.add(leaveTo);
      });
    });
  }

  public render() {
    return this.state.children || null;
  }
}
