import "react-github-button/assets/style.css";
import React from "react";
import DocumentTitle from "react-document-title";
import { Link } from "bisheng/router";
import GitHubButton from "react-github-button";
import { injectIntl } from "react-intl";
import { Popover, Button, Row, Col } from "antd";
import * as utils from "../../../../utils";

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
      isZhCN
    };
  }

  render() {
    const { isZhCN } = this.state;

    const addSeparater = str => {
      const arr = str.split("|");
      // arr.splice(1, 0 <span>|</span>)
      return [arr[0], <span key="divider" className="divider" />, arr[1]];
    };

    return (
      <DocumentTitle
        title={`Modo Mobile - ${this.props.intl.formatMessage({
          id: "app.home.slogan"
        })}`}
      >
        <div className="main-wrapper">
          <section className="home-s1">
            <div className="banner-wrapper">
              <div className="banner-text-wrapper">
                <h2 key="h2">Modo Mobile</h2>
                <p>
                  {this.props.intl.formatMessage({ id: "app.home.epitomize" })}
                </p>
                <div key="button1" className="start-button">
                  <Link to={`/docs/react/introduce${isZhCN ? "-cn" : ""}`}>
                    <Button type="primary" size="large">
                      {this.props.intl.formatMessage({
                        id: "app.home.centerStart"
                      })}
                    </Button>
                  </Link>
                  <Popover
                    placement="bottom"
                    trigger="click"
                    content={
                      <img
                        className="home-qr"
                        src="https://zos.alipayobjects.com/rmsportal/TrdkqxQcrAUcmYelQUNK.png"
                        alt="qrcode"
                      />
                    }
                  >
                    <Button type="primary" ghost>
                      {this.props.intl.formatMessage({ id: "app.home.qrtip" })}
                    </Button>
                  </Popover>
                  <GitHubButton
                    key="github-button"
                    type="stargazers"
                    namespace="ant-design"
                    repo="ant-design-mobile"
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
