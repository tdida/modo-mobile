import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import DocumentTitle from "react-document-title";
import { FormattedMessage } from "react-intl";
import { Row, Col, Icon, Affix, Popover } from "antd";
import QRCode from "qrcode.react";
import { getChildren } from "jsonml.js/lib/utils";
import Demo from "./Demo";

function getDemos(props) {
  return Object.keys(props.demos)
    .map(key => props.demos[key])
    .filter(demoData => !demoData.meta.hidden);
}
export default class ComponentDoc extends React.Component {
  static contextTypes = {
    intl: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      expandAll: false
    };
  }

  handleExpandToggle = () => {
    const { expandAll } = this.state;
    this.setState({
      expandAll: !expandAll
    });
  };

  render() {
    const { props } = this;
    const { doc, location } = props;
    const { content, meta } = doc;
    const {
      intl: { locale }
    } = this.context;
    const demos = Object.keys(props.demos).map(key => props.demos[key]);
    const { expandAll } = this.state;

    const { protocol } = window.location;
    const path = doc.meta.filename.split("/")[1];
    const isLocalMode = window.location.port;
    const host = isLocalMode ? "localhost:8002" : window.location.host;
    const demoUrl = `${protocol}//${host}/mobile/components/${path}`;

    const PopoverContent = (
      <div>
        <h4 style={{ margin: "8Px 0 12Px", textAlign: "center" }}>
          <FormattedMessage id="app.ComponentDoc.codeQrcode" />
        </h4>
        <QRCode size={144} value={demoUrl} />
      </div>
    );

    const isSingleCol = meta.cols === 1;
    const leftChildren = [];
    const rightChildren = [];
    const showedDemo = demos.some(demo => demo.meta.only)
      ? demos.filter(demo => demo.meta.only)
      : demos.filter(demo => demo.preview);
    showedDemo
      .sort((a, b) => a.meta.order - b.meta.order)
      .forEach((demoData, index) => {
        const demoElem = (
          <Demo
            {...demoData}
            key={demoData.meta.filename}
            utils={props.utils}
            expand={expandAll}
            location={location}
          />
        );
        if (index % 2 === 0 || isSingleCol) {
          leftChildren.push(demoElem);
        } else {
          rightChildren.push(demoElem);
        }
      });
    const expandTriggerClass = classNames({
      "code-box-expand-trigger": true,
      "code-box-expand-trigger-active": expandAll
    });

    const jumper = showedDemo.map(demo => {
      const { title } = demo.meta;
      const localizeTitle = title[locale] || title;
      return (
        <li key={demo.meta.id} title={localizeTitle}>
          <a href={`#${demo.meta.id}`}>{localizeTitle}</a>
        </li>
      );
    });

    const { title, subtitle, chinese, english } = meta;

    return (
      <DocumentTitle
        title={`${subtitle || chinese || ""} ${title || english} - Modo Mobile`}
      >
        <article>
          <Affix className="toc-affix" offsetTop={16}>
            <ul id="demo-toc" className="toc">
              {jumper}
            </ul>
          </Affix>
          <section className="markdown">
            <h1 className="section-title">
              {meta.title || meta.english} {meta.subtitle || meta.chinese}
              <Popover content={PopoverContent} placement="bottom">
                <Icon type="qrcode" />
              </Popover>
            </h1>
            {props.utils.toReactComponent(
              ["section", { className: "markdown" }].concat(
                getChildren(content)
              )
            )}

            <section id="demoTitle" className="demo-title-wrapper">
              <h2 id="demoTitle" className="demo-title">
                <FormattedMessage id="app.ComponentDoc.codeTitle" />
              </h2>
            </section>
          </section>

          <Row gutter={16}>
            <Col
              span={isSingleCol ? "24" : "12"}
              className={
                isSingleCol ? "code-boxes-col-1-1" : "code-boxes-col-2-1"
              }
            >
              {leftChildren}
            </Col>
            {isSingleCol ? null : (
              <Col className="code-boxes-col-2-1" span={12}>
                {rightChildren}
              </Col>
            )}
          </Row>

          {props.utils.toReactComponent(
            [
              "section",
              {
                id: "api",
                className: "markdown api-container"
              }
            ].concat(getChildren(doc.api || ["placeholder"]))
          )}
        </article>
      </DocumentTitle>
    );
  }
}
