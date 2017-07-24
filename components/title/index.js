import React from 'react'
import Highlight from 'react-highlight'
import marked from 'marked'
import classNames from 'classnames'
import './index.scss'

export default class Title extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'demo'
        }
    }

    handleChange(value) {
        this.setState({
            value: value
        })
        this.props.onChange(value)
    }

    render() {
        // 处理markdown信息
        // 根据 --- 拆分为描述块和代码块
        let infoArray = this.props.children.split('---')

        let description = marked(infoArray[0])
        let code = infoArray[1].replace(/(````jsx|````)/g, '').replace(/^\s*\n*/g, '')

        let demoClass = classNames({
            active: this.state.value === 'demo'
        })

        let documentClass = classNames({
            active: this.state.value === 'document'
        })

        return (
            <div className="_namespace">
                <div className="bar-header">
                    <div className="bar-header-left">
                        <div className="title"
                             dangerouslySetInnerHTML={{__html: description}}/>
                        <Highlight className='jsx'>
                            {code}
                        </Highlight>
                    </div>
                </div>
            </div>
        )
    }
}

Title.defaultProps = {
    onChange: ()=> {
    }
}