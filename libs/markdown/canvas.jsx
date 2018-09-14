import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import marked from 'marked'
import { transform } from 'babel-standalone'

import Editor from '../editor'

export default class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.playerId = `${parseInt(Math.random() * 1e9).toString(36)}` // 计算元素容器层 id
    this.document = this.props.children.match(/([^]*)\n?(```[^]+```)/)
    this.description = marked(this.document[1])
    this.source = this.document[2].match(/```(.*)\n?([^]+)```/)

    this.state = {
      showBlock: false
    }
  }
  componentDidMount() {
    this.renderSource(this.source[2])
  }

  blockControl() {
    this.setState({
      showBlock: !this.state.showBlock
    })
  }

  renderSource(value) {
    // 直接从 /src/index.js 引用，而不是： import(`../../src/${this.props.name}/src/components/`).then(Element => {
    import(`../../src/`).then(Element => {
      const args = ['context', 'React', 'ReactDOM'] // 函数对象的标识符
      const argv = [this, React, ReactDOM] // 参数值对象

      for (const key in Element) {
        //if (key !== 'default') { // 过滤掉，组件 export default class  内的default属性名称
          args.push(key)
          argv.push(Element[key])
        //};
      }
      return {
        args,
        argv
      }
    }).then(({ args, argv }) => {
      const code = transform(`
        class Demo extends React.Component {
          ${value}
        }

        ReactDOM.render(<Demo {...context.props} />, document.getElementById('${this.playerId}'))
      `, {
        presets: ['es2015', 'react']
      }).code
      
      args.push(code) // 最后的一个参数code，压入成为 functionBody - 即一个含有包括函数定义的JavaScript语句的字符串。

      new Function(...args).apply(null, argv) // 构造函数，且执行后；渲染至 document.getElementById('${this.playerId}')
                                              // ？？argv即使传进了functionBody 也没有被使用啊
      /* 是这里起作用，才能让.md 内容里面 <Button 等所有组件列表都能被 Demo 引用
       * 其中，args 是组件名称键数组； argv 是组件实例对象
       */

      this.source[2] = value
    }).catch((err) => {
      if (process.env.NODE_ENV !== 'production') {
        throw err;
      }
    })
  }

  render() {

    return (
      <div className={`demo-block demo-box demo-${this.props.name}`}>
        <div className="source" id={this.playerId} />
        {
          this.description && (
            <div className="description-sprite">
              <div
                ref="description"
                className="description"
                dangerouslySetInnerHTML={{ __html: this.description }}
              />
              <span className="code-expand-icon" onClick={this.blockControl.bind(this)}>
                {
                  this.state.showBlock ? (
                    <img alt="" src={require("../../site/assets/code-show.svg")} className="code-expand-icon-show" />
                  ) : (
                    <img alt="" src={require("../../site/assets/code-hide.svg")} className="code-expand-icon-hide" />
                  )
                }
                
              </span>
            </div>
          )
        }
        {
          this.state.showBlock && (
            <div className="meta">
              
              <Editor
                value={this.source[2]}
                onChange={code => this.renderSource(code)}
              />
            </div>
          )
        }
        {/* <div className="demo-block-control" onClick={this.blockControl.bind(this)}>
          {
            this.state.showBlock ? (
              <span>
                <i className="el-icon-caret-top" />{this.props.locale.hide}
              </span>
            ) : (
              <span>
                <i className="el-icon-caret-bottom" />{this.props.locale.show}
              </span>
            )
          }
        </div> */}
      </div>
    )
  }
}

Canvas.propTypes = {
  locale: PropTypes.object
}

Canvas.defaultProps = {
  locale: {}
}
