1 css属性
.cssContactList{
    padding:4px;
    height: 480px;;
    border:2px solid #000000;
    overflow: scroll;
}
overflow 属性规定当内容移除元素框时发生的事情。
默认值为visible，可用属性值：
visible 默认值，内容不会被修剪，会呈现在元素框之外。
hidden 内容会被修剪，并且其余内容是不可见的
scroll 内容会被修剪，但是浏览器会显示滚动条以便查看其余内容
auto 如果内容被修剪，则浏览器会显示滚动条以便查看其余内容
inherit 从父元素基础overflow属性值
 （1） div{
    background-color:#00000;
    width:150px;
    height:150px;'
    overflow: visible;
    }
  <div>这个属性定义溢出元素内容区的内容会如何处理。如果值为 scroll，不论是否需要，用户代理都会提供一种滚动机制。因此，有可能即使元素框中可以放下所有内容也会出现滚动条。默认值是 visible。</div>
