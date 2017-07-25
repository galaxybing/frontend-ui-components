import React from 'react'
import {Link} from 'react-router'
import './index.scss'

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="_namespace">
                <div className="navbar-header">
                    <div className="navbar-brand">
                        <Link to="/">首页</Link>
                    </div>
                    <div className="navbar-left">
                        <Link className="item"
                              activeClassName="active"
                              to="/components">开始说明</Link>
                        <Link className="item"
                              activeClassName="active"
                              to="/components/pc">web端</Link>
                        <Link className="item"
                              activeClassName="active"
                              to="/components/mobile">app端</Link>
                        <a className="item" href="javascript:;">基础图表组件</a>
                        <Link className="item"
                              activeClassName="active"
                              to="/components/common">通用</Link>
                        <a className="item" href="https://ant.design/index-cn" target="_blank">ANT DESIGN</a>
                    </div>
                    <div className="navbar-right">
                        <Link className="item"
                              activeClassName="active"
                              to="/components/doc">贡献者文档</Link>
                        <Link className="item"
                              activeClassName="active"
                              to="/components/write-standard">编写规范</Link>
                        <Link className="item"
                              activeClassName="active"
                              to="/components/change-log">发布记录</Link>
                        <a className="item"
                           href="http://npm.317hu.com/"
                           target="_blank">伯仲NPM</a>
                    </div>
                </div>
            </div>
        )
    }
}