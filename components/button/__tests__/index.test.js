import React from 'react';
import { render, mount } from 'enzyme';
import Button from '..';
import Icon from '../../icon';

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = render(<Button>Default</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Chinese characters correctly', () => {
    const wrapper = render(<Button>按钮</Button>);
    expect(wrapper).toMatchSnapshot();
    // should not insert space when there is icon
    const wrapper1 = render(<Button icon="search">按钮</Button>);
    expect(wrapper1).toMatchSnapshot();
    // should not insert space when there is icon
    const wrapper2 = render(
      <Button>
        <Icon type="search" />
        按钮
      </Button>
    );
    expect(wrapper2).toMatchSnapshot();
    // should not insert space when there is icon
    const wrapper3 = render(<Button icon="search">按钮</Button>);
    expect(wrapper3).toMatchSnapshot();
    // should not insert space when there is icon while loading
    const wrapper4 = render(
      <Button icon="search" loading>
        按钮
      </Button>
    );
    expect(wrapper4).toMatchSnapshot();
    // should insert space while loading
    const wrapper5 = render(<Button loading>按钮</Button>);
    expect(wrapper5).toMatchSnapshot();

    const wrapper6 = render(
      <Button>
        <span>按钮</span>
      </Button>
    );
    expect(wrapper6).toMatchSnapshot();
  });

  it('should change loading state instantly by default', () => {
    class DefaultButton extends React.Component {
      state = {
        loading: false,
      };

      enterLoading = () => {
        this.setState({ loading: true });
      };

      render() {
        const { loading } = this.state;
        return (
          <Button loading={loading} onClick={this.enterLoading}>
            Button
          </Button>
        );
      }
    }

    const wrapper = mount(<DefaultButton />);
    wrapper.simulate('click');

    expect(wrapper.find('.m-button-loading').length).toBe(1);
  });

  it('should change loading state with delay', () => {
    // eslint-disable-next-line
    class DefaultButton extends React.Component {
      state = {
        loading: false,
      };

      enterLoading = () => {
        this.setState({ loading: { delay: 1000 } });
      };

      render() {
        const { loading } = this.state;
        return (
          <Button loading={loading} onClick={this.enterLoading}>
            Button
          </Button>
        );
      }
    }
    const wrapper = mount(<DefaultButton />);
    wrapper.simulate('click');
    expect(wrapper.hasClass('ant-btn-loading')).toBe(false);
  });
});
