import React, { cloneElement } from 'react';
// import ReactDom from 'react-dom';

import ReactDOM from './Mreact/react-dom'
import Component from './Mreact/Component'
import './index.css'

function FunctionComponent(props) {
  return <div className='fuc-component'>函数组件={props.name}</div>
}

class ClassComponent extends Component {
  render() {
    return <div className='class-component'>class组件={this.props.name}</div>
  }
}

const jsx = (
   <div className="content">
     <h1>手写react render component组件</h1>
     <a href="www.baidu.com">明非</a>
     <FunctionComponent name="func" />
     <ClassComponent name='class'/>
   </div>
 )



 ReactDOM.render(jsx, document.getElementById("root"))

 // 原生标签节点
 // 文本节点

 // React 自动转换为jsx转化js
 // js对象就是vdom， 能够完整的描述dom结构
// ReactDom.render(vdom, container)将vdom转化为dom并且追加到container中
// 
