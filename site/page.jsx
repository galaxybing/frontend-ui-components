import React from 'react';
import ScrollToTop from 'react-scroll-up';
import classnames from 'classnames';

import { i18n } from '../src';

import en from '../src/locale/lang/en';
import zh from '../src/locale/lang/zh-CN';

import locales from './locales';
import pages from './pages';

let docsearch;
let algoliasearch;
let indexDoc;
if (typeof window !== 'undefined') {
  docsearch = require('docsearch.js'); // eslint-disable-line
  algoliasearch = require('algoliasearch');
}

function initDocSearch(locale) {
  if (!docsearch) {
    return;
  }
  const lang = locale === 'zh-CN' ? 'cn' : 'en';
  docsearch({
    appId: 'J44NSAJVQG',
    apiKey: '55b131bc30366d215351dbf6891c49a2',
    indexName: 'com_ui_317hu',
    inputSelector: '#search-box input',
    algoliaOptions: { facetFilters: [`tags:`] }, // { facetFilters: [`tags:${lang}`] }
    transformData(hits) {
      hits.forEach((hit) => {

        hit.url = hit.url.replace('localhost', location.host);
        hit.url = hit.url.replace('http:', location.protocol);
      });
      return hits;
    },
    debug: false, // Set debug to true if you want to inspect the dropdown
  });

  // indexDoc.search('jimmie', function(err, content) {
  //   console.log(content.hits);
  // });
}

function createDocClient() {
  var client = algoliasearch('J44NSAJVQG', '5bc278be75857747ac2cc7bf85012d0e');
  indexDoc = client.initIndex('contacts');
  var contactsJSON = require('./assets/contacts.json');

  indexDoc.addObjects(contactsJSON, function(err, content) {
    if (err) {
      console.error(err);
    }
  });
  
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    window.addEventListener("hashchange", () => {
      window.scrollTo(0, 0);

      this.setPage();
    }, false);
    
    
  }

  componentDidMount() {
    // createDocClient()
    this.setPage(() => {
      if (!this.state.locale) {
        this.setLocale(localStorage.getItem('LOCALE_LANGUAGE') || 'zh-CN');
      }

      const { searchInput } = this;
      const locale = localStorage.getItem('LOCALE_LANGUAGE') || 'zh-CN';
      document.addEventListener('keyup', (event) => {
        if (event.keyCode === 83 && event.target === document.body) {
          searchInput.focus();
        }
      });
      initDocSearch(locale);
      
    });
  }

  componentDidUpdate(props, state) {
    if (state.locale != this.state.locale) {
      switch(this.state.locale) {
        case 'en-US':
          i18n.use(en); break;
        default:
          i18n.use(zh); break;
      }
    }
  }

  getLocale(key) {
    const map = locales[this.state.locale] || {};

    return key.split('.').reduce((a, b) => {
      const parent = map[a];

      if (b) {
        return (parent || {})[b];
      }

      return parent;
    });
  }

  setLocale(locale) {
    window.location.hash = `/${locale}/${this.state.page}`;
  }

  getPage() {
    const routes = location.hash.match(/(?:\/(.+))?\/(.+)/);

    if (routes) {
      if (locales.hasOwnProperty(routes[1])) {
        this.setState({ locale: routes[1] }, () => {
          localStorage.setItem('LOCALE_LANGUAGE', this.state.locale);
        });
      }

      return routes[2]; // button etc.
    }

    return 'quick-start';
  }

  setPage(fn) {
    this.setState({ page: this.getPage() }, fn);
  }

  getComponent(page) {
    this.components = this.components || Object.assign(Object.values(pages.components).reduce((a, b) => {
      return Object.assign(a, b);
    }, {}), pages.documents);

    const result = this.components[page];

    if (result) {
      return React.createElement(result.default, {
        locale: {
          show: this.getLocale('markdown.show'),
          hide: this.getLocale('markdown.hide')
        }
      });
    }
  }

  render() {
    const { locale } = this.state;
    const searchPlaceholder = locale === 'zh-CN' ? '请输入组件名称' : 'Search component in site';
    return (
      <div className="app">
        <header className="header">
          <div className="container">
            <h1>
              <img src={"http://www.317hu.com/images/317hu-logo.jpg"} />
            </h1>
            <ul className="nav">
              <li className="nav-item">
                
                <div id="search-box">
                  <input ref={ref => this.searchInput = ref} placeholder={searchPlaceholder} />
                </div>
              </li>
            </ul>
          </div>
        </header>
        <div className="main container">
          <nav className="side-nav">
            <ul>
              <li className="nav-item">
                <a>{this.getLocale('misc.development')}</a>
                <ul className="pure-menu-list sub-nav">
                  {
                    Object.keys(pages.documents).map(page => {
                      return (
                        <li className="nav-item" key={page}>
                          <a href={`#/${this.state.locale}/${page}`} className={page === this.state.page ? 'active' : ''}>{this.getLocale(`page.${page}`)}</a>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
              <li className="nav-item">
                <a>{this.getLocale('misc.components')}</a>
                {
                  Object.keys(pages.components).map(group => {
                    return (
                      <div className="nav-group" key={group}>
                        <div className="nav-group__title">{group}</div>
                        <ul className="pure-menu-list">
                          {
                            Object.keys(pages.components[group]).map(page => {
                              return (
                                <li key={page} className="nav-item">
                                  <a href={`#/${this.state.locale}/${page}`} className={page === this.state.page ? 'active' : ''}>{this.getLocale(`page.${page}`)}</a>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    )
                  })
                }
              </li>
            </ul>
          </nav>
          <div className="side-division">&nbsp;</div>
          <div className="content">
            { this.getComponent(this.state.page) }
            <ScrollToTop showUnder={210}>
              <div className="page-component-up">
                <i className="el-icon-caret-top"></i>
              </div>
            </ScrollToTop>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="footer-main-sprite">
              <div className="footer-main">
                <ul className="footer-mod-list">
                  <li><div className="tit">相关链接</div></li>
                  <li>前端开发<a href="http://npm.intra.317hu.com/" target="_blank"><i className="attachment">&nbsp;&nbsp;- 组件仓库</i></a></li>
                  <li>API<a href="http://api.317hu.com/" target="_blank"><i className="attachment">&nbsp;&nbsp;- 接口管理平台</i></a></li>
                  <li>后台管理系统<a href="http://hospital.317hu.com/hospital-admin/317hu-login/login.html" target="_blank"><i className="attachment">&nbsp;&nbsp;- 医院端</i></a></li>
                  <li>后台管理系统<a href="http://admin.317hu.com/bz-admin/login" target="_blank"><i className="attachment">&nbsp;&nbsp;- 运营管理平台</i></a></li>
                  <li>Bone<a href="http://bone.317hu.com/" target="_blank"><i className="attachment">&nbsp;&nbsp;- 发布平台</i></a></li>
                </ul>
              </div>
              <div className="footer-main">
                <ul className="footer-mod-list">
                  <li><div className="tit">帮助</div></li>
                  <li>Gitlab<a href="http://gitlab.317hu.com/dev-web/frontend-ui-components/wikis/home" target="_blank"><i className="attachment">&nbsp;&nbsp;- 前端组件管理平台</i></a></li>
                </ul>
              </div>
              <div className="footer-main">
                <ul className="footer-mod-list">
                  <li><div className="tit">资源</div></li>
                  <li>Algolia<a href="https://www.algolia.com/doc/api-client/javascript/getting-started/" target="_blank"><i className="attachment">&nbsp;&nbsp;- Doc</i></a></li>
                  <li>Marked<a href="https://github.com/markedjs/marked" target="_blank"><i className="attachment">&nbsp;&nbsp;- markedjs</i></a></li>
                  <li>Babel<a href="https://github.com/Daniel15/babel-standalone/issues" target="_blank"><i className="attachment">&nbsp;&nbsp;- babel-standalone</i></a></li>
                  <li>组件标识库<a href="https://shields.io/" target="_blank"><i className="attachment">&nbsp;&nbsp;- Shields</i></a></li>
                  
                </ul>
              </div>
            </div>
            <p className={"copy-right"}>317护 前端架构[fe-master]</p>
          </div>
        </footer>
      </div>
    )
  }
}
