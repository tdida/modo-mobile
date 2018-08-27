import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'bisheng/router';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Menu, Row, Col, Icon, Popover, Input, Button } from 'antd';
import { version as modoVersion } from '../../../../../package.json';
import * as utils from '../../../../utils';

// let docsearch;
// if (typeof window !== 'undefined') {
//   docsearch = require('docsearch.js'); // eslint-disable-line
// }

// function initDocSearch(locale) {
//   if (!docsearch) {
//     return;
//   }
//   const lang = locale === 'zh-CN' ? 'cn' : 'en';
//   docsearch({
//     apiKey: '60ac2c1a7d26ab713757e4a081e133d0',
//     indexName: 'ant_design',
//     inputSelector: '#search-box input',
//     algoliaOptions: { facetFilters: [`tags:${lang}`] },
//     transformData(hits) {
//       hits.forEach(hit => {
//         hit.url = hit.url.replace('ant.design', location.host);
//         hit.url = hit.url.replace('https:', location.protocol);
//       });
//       return hits;
//     },
//     debug: false, // Set debug to true if you want to inspect the dropdown
//   });
// }

export default class Header extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    isMobile: PropTypes.bool.isRequired,
  };

  state = {
    menuVisible: false,
  };

  componentDidMount() {
    const { router } = this.context;
    router.listen(this.handleHideMenu);
    const { searchInput } = this;
    document.addEventListener('keyup', event => {
      if (event.keyCode === 83 && event.target === document.body) {
        searchInput.focus();
      }
    });
    // initDocSearch(intl.locale);
  }

  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  };

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  };

  onMenuVisibleChange = visible => {
    this.setState({
      menuVisible: visible,
    });
  };

  handleLangChange = () => {
    const { location } = this.props;
    const pathname = location.basename + (location.pathname === '/' ? '' : location.pathname);

    const currentProtocol = `${window.location.protocol}//`;
    const currentHref = window.location.href.substr(currentProtocol.length);

    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem('locale', utils.isZhCN(pathname) ? 'en-US' : 'zh-CN');
    }

    window.location.href =
      currentProtocol +
      currentHref.replace(
        window.location.pathname,
        utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname))
      );
  };

  render() {
    const { menuVisible } = this.state;
    const { isMobile } = this.context;
    const menuMode = isMobile ? 'inline' : 'horizontal';
    const { location, themeConfig } = this.props;

    const module = location.pathname
      .replace(/(^\/|\/$)/g, '')
      .split('/')
      .slice(0, -1)
      .join('/');
    let activeMenuItem = module || 'home';
    if (activeMenuItem === 'components' || location.pathname === 'changelog') {
      activeMenuItem = 'docs';
    }
    const {
      intl: { locale },
    } = this.context;
    const isZhCN = locale === 'zh-CN';

    const headerClassName = classNames({
      clearfix: true,
    });

    const menu = [
      <Button
        ghost
        size="small"
        onClick={this.handleLangChange}
        className="header-lang-button"
        key="lang-button"
      >
        <FormattedMessage id="app.header.lang" />
      </Button>,
      <Menu
        className="menu-site"
        mode={menuMode}
        selectedKeys={[activeMenuItem]}
        id="nav"
        key="nav"
      >
        <Menu.Item key="home">
          <Link to={utils.getLocalizedPathname('/', isZhCN)}>
            <FormattedMessage id="app.header.menu.home" />
          </Link>
        </Menu.Item>
        <Menu.Item key="docs">
          <Link to={utils.getLocalizedPathname('/docs/introduce', isZhCN)}>
            <FormattedMessage id="app.header.menu.components" />
          </Link>
        </Menu.Item>
      </Menu>,
    ];

    return (
      <header id="header" className={headerClassName}>
        {isMobile && (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon className="nav-phone-icon" type="menu" onClick={this.handleShowMenu} />
          </Popover>
        )}
        <Row>
          <Col xxl={4} xl={5} lg={5} md={6} sm={24} xs={24}>
            <Link to={utils.getLocalizedPathname('/', isZhCN)} id="logo">
              <img alt="logo" src="https://pic.modo-modo.com/saas-1535350845166-32697.png" />
              <span>{themeConfig.siteTitle}</span>
              <sup>{`v${modoVersion}`}</sup>
            </Link>
          </Col>
          <Col xxl={20} xl={19} lg={19} md={18} sm={0} xs={0}>
            <div id="search-box">
              <Icon type="search" />
              <Input ref={ref => (this.searchInput = ref)} />
            </div>
            {!isMobile && menu}
          </Col>
        </Row>
      </header>
    );
  }
}
