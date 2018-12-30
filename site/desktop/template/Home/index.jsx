/* eslint react/no-danger: 0 */

import 'react-github-button/assets/style.css';
import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'bisheng/router';
import GitHubButton from 'react-github-button';
import { injectIntl } from 'react-intl';
import { Popover } from 'antd';
import * as utils from '../../../../utils';

function getStyle() {
  return `
    .main-wrapper {
      padding: 0;
    }
    #header {
      box-shadow: none;
      width: 100%;
    }
    #header,
    #header .ant-select-selection,
    #header .ant-menu {
      background: transparent;
    }
  `;
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    const { pathname } = props.location;
    const isZhCN = utils.isZhCN(pathname);
    this.state = {
      isZhCN,
    };
  }

  render() {
    const { isZhCN } = this.state;
    const { intl } = this.props;

    const imgNode = (
      <img
        className="home-qr"
        src="https://pic.modo-modo.com/saas-1535108254349-21154.png"
        alt="qrcode"
      />
    );

    return (
      <DocumentTitle
        title={`Modo Mobile - ${intl.formatMessage({
          id: 'app.home.slogan',
        })}`}
      >
        <div className="main-wrapper">
          <section className="home-s1">
            <div className="banner-wrapper">
              <div className="banner-text-wrapper">
                <h2 key="h2">Modo Mobile</h2>
                <p>{intl.formatMessage({ id: 'app.home.epitomize' })}</p>
                <div key="button1" className="home-button">
                  <Link to={`/docs/introduce${isZhCN ? '-cn' : ''}`} className="home-button-start">
                    {intl.formatMessage({
                      id: 'app.home.centerStart',
                    })}
                  </Link>
                  <Popover placement="bottom" trigger="click" content={imgNode}>
                    <a className="home-button-demo">
                      {intl.formatMessage({ id: 'app.home.qrtip' })}
                    </a>
                  </Popover>
                  <GitHubButton
                    key="home-button-github"
                    type="stargazers"
                    namespace="tdida"
                    repo="modo-mobile"
                  />
                </div>
              </div>
              <div className="banner-image">
                <img
                  src="https://pic.modo-modo.com/saas-1535341906110-28486.png"
                  alt="modo-mobile"
                />
              </div>
            </div>
          </section>
          <style dangerouslySetInnerHTML={{ __html: getStyle() }} />
        </div>
      </DocumentTitle>
    );
  }
}

export default injectIntl(Home);
