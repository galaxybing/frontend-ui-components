import React from 'react'
import {Link} from 'react-router'
import SearchComponent from '../../components/search-components'
import './index.scss'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '伯仲信息科技-前端组件库'
    }

    render() {
        return (
            <div className="_namespace">
                <div className="hero">
                    <div className="container nav-bar">
                        <div className="nav-bar-second-container">
                          <p className="item arrow">&nbsp;</p>
                            <Link to="/components" className="item">开发者中心</Link>
                            {/*<Link to="/designer" className="disabled item">在线编辑器(V1.0.0)</Link>*/}
                        </div>
                        
                    </div>
                    <div className="super-content">
                        <div className="description" style={{marginBottom: 20}}>React 组件库管理平台</div>
                        <SearchComponent width={300}/>
                    </div>
                </div>
                <div className="container">
                    <div className="lists">
                        <div className="left">
                            <div className="title">一）实例</div>
                            <div className="description">快速了解功能</div>
                        </div>
                        <div className="right demo"></div>
                    </div>

                    <hr className="hr"/>

                    <div className="lists">
                        <div className="left">
                            <div className="title">二）源码</div>
                            <div className="description">快速上手</div>
                        </div>
                        <div className="right source"></div>
                    </div>

                    <hr className="hr"/>

                    <div className="lists">
                        <div className="left">
                            <div className="title">三）文档</div>
                            <div className="description">全面,详细的说明书</div>
                        </div>
                        <div className="right doc"></div>
                    </div>
                </div>
                <div className="footer">
                    <div className="split">
                        <div className="item">
                            <div className="title child">相关资源</div>
                            <a className="child"
                               href="http://gitlab.317hu.com/"
                               target="_blank">Gitlab 317护</a>
                        </div>
                        <div className="item">
                            <div className="title child">关于我们</div>
                            <a className="child"
                               href="http://www.317hu.com/" target="_blank">护士宣教助手</a>
                        </div>
                        <div className="item">
                            <div className="title child">联系我们</div>
                            <p className="contact-us">
                              400-666-3175<br />
                              business@317hu.com
                            </p>
                            <p>
                              浙江省杭州市滨江区六和路307号中控科技园E座10F
                            </p>
                        </div>
                    </div>
                    <div className="center">&copy; 2017<a href="http://www.317hu.com/" target="_blank">杭州伯仲信息科技有限公司  浙ICP备15042119号</a>
                    </div>
                </div>
            </div>
        )
    }
}