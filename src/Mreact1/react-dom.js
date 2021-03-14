/* vnode   虚拟dom对象
*  node  真实dom对象
*/

function render(vnode, container) {
  console.log('vnode', vnode)
  // vnode => node

  const node = createNode(vnode)
  // node => container

  container.appendChild(node)
}

// 生成node节点
function createNode(vnode) {
  let node;
  const {type} = vnode
  if (typeof type === 'string') {
    node = updateHostComponent(vnode);
  } else if(typeof type === 'function') {
    node = type.prototype.isReactComponent ? updateClassComponent(vnode) : updateFunctionCompoment(vnode)
  }
  else {
    node = updateTextComponent(vnode)
  }
  return node;
}

// 原生标签节点
function updateHostComponent(vnode) {
  const {type, props} = vnode;
  const node  = document.createElement(type);
  updateNode(node, props)
  reconcileChildren(node, props.children)
  return node
}

// 文本标签
function updateTextComponent(vnode) {
  const {type} = vnode
  const node = document.createTextNode(vnode);
  return node
}


// 函数组件
function updateFunctionCompoment(vnode) {
  const {type, props} = vnode;
  const vvnode = type(props)
  const node = createNode(vvnode)
  return node
}

// class 组件
function updateClassComponent(vnode) {
  const {type, props} = vnode;
  const instance = new type(props)
  const vvnode = instance.render()
  const node = createNode(vvnode)
  return node
}

// 更新属性
function updateNode(node, nextValue) {
  Object.keys(nextValue)
  .filter(k=> k!== 'children')
  .forEach((k) => (node[k] = nextValue[k]))
}

function reconcileChildren(parentNode, children) {
  // 这里如果由多个子元素使用数组包裹（react16版本之后可以使用数组，不必用唯一的父元素来包裹）
  const newChildren = Array.isArray(children) ? children : [children]
  for(let i = 0; i < newChildren.length; i++) {
    let child = newChildren[i]
    // node 插入到parentNode
    render(child, parentNode)
  }
}


export default {render};