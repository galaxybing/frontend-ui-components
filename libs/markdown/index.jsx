import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import prism from 'prismjs';

import Canvas from './canvas';

export default class Markdown extends React.Component {
  constructor(props) {
    super(props);

    this.components = new Map;

    this.renderer = new marked.Renderer();
    this.renderer.table = (header, body) => {
      return `<table class="grid"><thead>${header}</thead><tbody>${body}</tbody></table>`;
    };
  }

  componentDidMount() {
    this.renderDOM();
  }

  componentDidUpdate() {
    this.renderDOM();
  }

  renderDOM() {
    for (const [id, component] of this.components) {
      const div = document.getElementById(id);

      if (div instanceof HTMLElement) {
        ReactDOM.render(component, div);
      }
    }
    prism.highlightAll();
  }

  render() {
    const doc = this.document(localStorage.getItem('LOCALE_LANGUAGE') || 'zh-CN');

    if (typeof doc === 'string') {
      this.components.clear();
      // :::\s?demo\s?([\s\S]+?):::
      //
      const html = marked(doc.replace(/:::\s?demo\s?([^]+?):::/g, (match, p1, offset) => { // +? 从左侧第一个字符开始向右匹配
        const id = offset.toString(36); // 按偏移位置索引值，计算元素id
        this.components.set(id, React.createElement(Canvas, Object.assign({
          name: this.constructor.name.toLowerCase()
        }, this.props), p1));

        return `<div id=${id}></div>`; // 以供上面的 renderDOM() 操作使用
      }), { renderer: this.renderer });

      return (
        <div dangerouslySetInnerHTML={{
          __html: html
        }} />
      )
    } else {
      return <span />
    }
  }
}
