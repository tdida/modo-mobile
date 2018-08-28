/* eslint react/no-danger: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import collect from 'bisheng/collect';
import { getQuery } from '../../../../utils';

@collect(async nextProps => {
  const { pathname } = nextProps.location;
  const pageDataPath = pathname.replace('-cn', '').split('/');
  const pageData = nextProps.utils.get(nextProps.data, pageDataPath);
  if (!pageData) {
    throw 404; // eslint-disable-line no-throw-literal
  }

  const locale = getQuery('lang') || window.navigator.language;
  const pageDataPromise =
    typeof pageData === 'function'
      ? pageData()
      : (pageData[locale] || pageData.index[locale] || pageData.index)();
  const demosFetcher = nextProps.utils.get(nextProps.data, [
    'components',
    nextProps.params.component,
    'demo',
  ]);
  if (demosFetcher) {
    const [localizedPageData, demos] = await Promise.all([pageDataPromise, demosFetcher()]);
    return { localizedPageData, demos, locale };
  }

  return { localizedPageData: await pageDataPromise, locale };
})
export default class Demo extends React.Component {
  componentDidMount() {
    window.addEventListener('hashchange', this.update, false);
  }

  componentWillUnmount() {
    window.removeEventListener('hashChange', this.update, false);
  }

  goToPage = (name, index) => () => {
    window.location.hash = `${name}-demo-${index}`;
  };

  update = () => {
    this.forceUpdate();
  };

  render() {
    const { demos, location, picked, themeConfig: config, locale, params } = this.props;
    let demoMeta;
    const name = params.component;
    picked.components.forEach(i => {
      const { meta } = i;
      if (meta.filename.split('/')[1] === name) {
        demoMeta = meta;
      }
    });

    const demoArr = [];
    let demoContent;
    Object.keys(demos).forEach(k => {
      demoArr.push(demos[k]);
    });
    let demoSort = demoArr.sort((a, b) => parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10));

    const hashArr = location.hash.split(config.hashSpliter);
    const order = hashArr[1] && parseInt(hashArr[1], 10);
    if (location.hash && config.indexDemos.concat(config.subListDemos).indexOf(name) > -1) {
      // 处理 config.indexDemos 里的组件 demo ，使其能只展示一个
      demoSort = demoSort.filter(i => parseInt(i.meta.order, 10) === order);
    }

    if (!location.hash && config.subListDemos.indexOf(name) > -1) {
      // 处理 config.subListDemos 的 demo，使其展示一个二级菜单
      demoContent = demoSort.map((item, index) => (
        <div key={`sub${index}`}>
          <div>
            <button type="button" onClick={this.goToPage(name, index)}>
              {item.meta.title[locale === 'en-US' ? 'en-US' : 'zh-CN']}
            </button>
          </div>
        </div>
      ));
    } else {
      demoContent = demoSort.map((i, index) => (
        <div className="demo-item" id={`${name}-demo-${i.meta.order}`} key={index}>
          <div className="demo-item-title">{i.meta.title[locale]}</div>
          <div className="demo-item-content">{i.preview(React, ReactDOM)}</div>
          {i.style ? <style dangerouslySetInnerHTML={{ __html: i.style }} /> : null}
        </div>
      ));
    }

    const isLocalMode = window.location.port;
    const linkUrl = isLocalMode ? '/' : '/modo-mobile/mobile/';

    return (
      <div id={name} className="demo-container">
        <div className="demo-header">
          <a className="icon" href={`${linkUrl}${window.location.search}`} />
          {demoMeta.title}
          {!demoMeta.subtitle || locale === 'en-US' ? null : (
            <span className="ch">{demoMeta.subtitle}</span>
          )}
        </div>
        <div className="demo-list">{demoContent}</div>
      </div>
    );
  }
}
