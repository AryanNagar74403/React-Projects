// // const { Children } = require("react");

// const { version } = require("react");

// function customRender (reactElement,container){

// const domElement = document.createElement(reactElement.type) 
// domElement.innerHTML= reactElement.children
// domElement.setAttribute('href',reactElement.props.href)
// domElement.setAttribute('target',reactElement.props.target)
// container.appendChild(domElement)

// }
// function customRender1 (reactElement1,container){
//     const domElement1 = document.createElement(reactElement1.type)
//     domElement1.innerHTML = reactElement1.children
//     domElement1.setAttribute('href', reactElement1.props.href)
//     domElement1.setAttribute('target',reactElement1.props.target)
//     container.appendChild(domElement1)
// }
// const reactElement ={
//     type: 'a',
//     props: {
//         href:'https://google.com'
//         ,target:'_blank'
//     },
//     children: 'Click me to visit google'
// }

// const reactElement1 = {
//     type:'a',
//     props: {
        
//             href:'https://youtube.com',
//             target:'_blank'
//          },
//     children:'Click me to visit youtube.com'
// }
// const mainContainer = document.querySelector('#root')
// const mainContainer1 = document.querySelector('#root')
// customRender(reactElement,mainContainer)
// customRender1(reactElement1,mainContainer1)


// version2----------------------------------------------------------------------------------------------------------


 function customRender (reactElement,container){

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue ;
        domElement.setAttribute(prop, reactElement.props [prop])
    }
    container.appendChild(domElement)
 }

const reactElement ={
    type: 'a',
    props: {
        href:'https://google.com'
        ,target:'_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')
customRender(reactElement,mainContainer)
