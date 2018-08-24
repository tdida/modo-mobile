/* eslint react/no-danger: 0 */

import 'react-github-button/assets/style.css';
import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'bisheng/router';
import GitHubButton from 'react-github-button';
import { injectIntl } from 'react-intl';
import { Popover, Button } from 'antd';
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
                <div key="button1" className="start-button">
                  <Link to={`/docs/react/introduce${isZhCN ? '-cn' : ''}`}>
                    <Button type="primary" size="large">
                      {intl.formatMessage({
                        id: 'app.home.centerStart',
                      })}
                    </Button>
                  </Link>
                  <Popover placement="bottom" trigger="click" content={imgNode}>
                    <Button type="primary" ghost>
                      {intl.formatMessage({ id: 'app.home.qrtip' })}
                    </Button>
                  </Popover>
                  <GitHubButton
                    key="github-button"
                    type="stargazers"
                    namespace="tdida"
                    repo="modo-mobile"
                  />
                </div>
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
