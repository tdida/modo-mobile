import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Row, Col } from 'antd';

const Footer = () => (
  <footer id="footer" className="dark">
    <div className="footer-wrap">
      <Row>
        <Col md={6} sm={24} xs={24}>
          <div className="footer-center">
            <h2>
              <FormattedMessage id="app.footer.help" />
            </h2>
            <div>
              <a target="_blank " href="https://github.com/tdida/modo-mobile">
                GitHub
              </a>
            </div>
            <div>
              <a href="/changelog">
                <FormattedMessage id="app.footer.change-log" />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/tdida/modo-mobile/wiki/FAQ"
              >
                <FormattedMessage id="app.footer.faq" />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/tdida/modo-mobile/issues"
              >
                <FormattedMessage id="app.footer.issues" />
              </a>
            </div>
          </div>
        </Col>
        <Col lg={6} sm={24} xs={24}>
          <div className="footer-center">
            <h2>
              <FormattedMessage id="app.footer.resources" />
            </h2>
            <div>
              <a
                target="_blank "
                rel="noopener noreferrer"
                href="https://github.com/ant-design/ant-design-mobile"
              >
                Ant Design Mobile GitHub
              </a>
            </div>
            <div>
              <a target="_blank " rel="noopener noreferrer" href="https://ant.design">
                Ant Design
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    <Row className="bottom-bar">
      <Col lg={4} sm={24} />
      <Col lg={20} sm={24}>
        <span style={{ marginRight: 12 }}>
          <span>Copyright © </span>
          <FormattedMessage id="app.footer.company" />
        </span>
      </Col>
    </Row>
  </footer>
);

export default injectIntl(Footer);
