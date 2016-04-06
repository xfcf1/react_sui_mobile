###修改于淘宝sui mobile

###安装
```sh
$ npm i react-sm --save
```

####icon(http://m.sui.taobao.org/components/#icons)
```html

  <span class="icon icon-app"></span>
  <span class="icon icon-browser"></span>
  <span class="icon icon-card"></span>
  <span class="icon icon-cart"></span>
  <span class="icon icon-code"></span>
  <span class="icon icon-computer"></span>
  <span class="icon icon-remove"></span>
  <span class="icon icon-download"></span>
  <span class="icon icon-edit"></span>
  <span class="icon icon-emoji"></span>
  <span class="icon icon-star"></span>
  <span class="icon icon-friends"></span>
  <span class="icon icon-gift"></span>
  <span class="icon icon-phone"></span>
  <span class="icon icon-clock"></span>
  <span class="icon icon-home"></span>
  <span class="icon icon-menu"></span>
  <span class="icon icon-message"></span>
  <span class="icon icon-me"></span>
  <span class="icon icon-picture"></span>
  <span class="icon icon-share"></span>
  <span class="icon icon-settings"></span>
  <span class="icon icon-refresh"></span>
  <span class="icon icon-caret"></span>
  <span class="icon icon-down"></span>
  <span class="icon icon-up"></span>
  <span class="icon icon-right"></span>
  <span class="icon icon-left"></span>
  <span class="icon icon-check"></span>
  <span class="icon icon-search"></span>
```

####header
头部的导航条
```js

import { Header } from 'react-sm';
...
render(){
    return(
        <Header
            left={{text: '左', href:'#', icon:'icon-left', click: ()=>{}}}
            right={{text: '右', href:'#', icon:'icon-refresh', click: ()=>{}}}
            type="link">
            <h1 className="title">Nav</h1>
        </Header>
    )
}

```
<table>
    <tr>
        <td>属性</td>
        <td>类型</td>
        <td>详细</td>
    </tr>
    <tr>
        <td>left</td>
        <td>obj</td>
        <td>
            -text显示的文字内容-
            -href链接
            -icon显示的icon
            -click点击事件(function)
        </td>
    </tr>
    <tr>
        <td>right</td>
        <td>obj</td>
        <td>同left</td>
    </tr>
    <tr>
        <td>type</td>
        <td>string</td>
        <td>
            -默认显示children
            -button左右显示为按钮
            -icon左右显示为图标
            -link左右显示为图标 + 链接
        </td>
    </tr>
</table>

####nav
底部的菜单

```js

import { Nav } from 'react-sm';
...
navData:[
    {
        text: '文案',
        icon: 'icon-home',
        href: '#',
        click: function(){alert(1)},
        active: true
    },
    {
        text: '文案',
        icon: 'icon-me',
        badge: '2',
        href: '#',
    },
    {
        text: '文案',
        icon: 'icon-star',
        href: '#',
    },
    {
        text: '文案',
        icon: 'icon-cart',
        href: '#',
    },
    {
        text: '文案',
        icon: 'icon-settings',
        href: '#',
    },
    {
        text: '文案',
        icon: 'icon-message',
        href: '#',
    },
]
...
render(){
    return(
        <Nav data={this.state.navData}></Nav>
    )
}

```
<table>
    <tr>
        <td>属性</td>
        <td>类型</td>
        <td>详细</td>
    </tr>
    <tr>
        <td>text</td>
        <td></td>
        <td>
        </td>
    </tr>
    <tr>
        <td>icon</td>
        <td>string</td>
        <td>
        图标class
        </td>
    </tr>
    <tr>
        <td>href</td>
        <td>link</td>
        <td>
        点击的链接
        </td>
    </tr>
    <tr>
        <td>click</td>
        <td>function</td>
        <td>
        点击事件
        </td>
    </tr>
    <tr>
        <td>active</td>
        <td>bool</td>
        <td>
        true或者不添加此属性 , 表示选中高亮
        </td>
    </tr>
    <tr>
        <td>badge</td>
        <td>string/number</td>
        <td>
        显示新消息的红点
        </td>
    </tr>
</table>

####Search
顶部搜索栏

```js

import { Search } from 'react-sm';
...
render(){
    return(
        <Search click={()=>{}} placeholder="输入关键字..."/>
    )
}

```
####Form
表单 , 返回的不是form , 可以自行用form包住

```js

import { Form } from 'react-sm';
...
formData : [
    {
        label: '生日',
        placeholder: '选择日期',
        click: ()=>{},
        change: ()=>{},
        type: 'date',
        value: '',
        disabled: false,
        name: 'birthday'
    }
]
...
render(){
    return(
        <Form data={this.state.formData}/>
    )
}

```
<table>
    <tr>
        <td>属性</td>
        <td>类型</td>
        <td>详细</td>
    </tr>
    <tr>
        <td>label</td>
        <td>string</td>
        <td>
        label的显示文字
        </td>
    </tr>
    <tr>
        <td>placeholder</td>
        <td>string</td>
        <td>
        占位符的文字
        </td>
    </tr>
    <tr>
        <td>change</td>
        <td>function</td>
        <td>
        onChange事件
        </td>
    </tr>
    <tr>
        <td>click</td>
        <td>function</td>
        <td>
        点击事件
        </td>
    </tr>
    <tr>
        <td>type</td>
        <td>string</td>
        <td>
        -text
        -email
        -password
        -select
        -checkbox
        -textarea
        -date
        </td>
    </tr>
    <tr>
        <td>value</td>
        <td>string</td>
        <td></td>
    </tr>
    <tr>
        <td>disabled</td>
        <td>bool</td>
        <td></td>
    </tr>
    <tr>
        <td>name</td>
        <td>string/number</td>
        <td>
        表单元素的name
        </td>
    </tr>
</table>


####button

```js

import { Button } from 'react-sm';
...
render(){
    return(
        <Button href="#" color="default" style={{marginTop: '20px'}}>123</Button>
    )
}

```

<table>
    <tr>
        <td>属性</td>
        <td>类型</td>
        <td>详细</td>
    </tr>
    <tr>
        <td>href</td>
        <td>string</td>
        <td>
        如果添加href测返回a标签否则为button标签
        </td>
    </tr>
    <tr>
        <td>color</td>
        <td>string</td>
        <td>
        -default
        -success
        -danger
        -warning
        </td>
    </tr>
</table>

####tab
tab切换

```js

import { Tab } from 'react-sm';
...

tabData:[
    {
        text: '全部',
        href: '#',
        click: function(){alert(1)},
        active: true
    },
    {
        text: '待付款',
        href: '#',
    },
    {
        text: '待发货',
        href: '#',
    },
    {
        text: '待发货2',
        href: '#',
    },
]
...
render(){
    return(
        <Tab data={this.state.tabData}/>
    )
}

```

<table>
    <tr>
        <td>属性</td>
        <td>类型</td>
        <td>详细</td>
    </tr>
    <tr>
        <td>href</td>
        <td>string</td>
        <td>
        如果添加href测返回a标签否则为button标签
        </td>
    </tr>
    <tr>
        <td>text</td>
        <td>string</td>
        <td>
        显示文字
        </td>
    </tr>
    <tr>
        <td>click</td>
        <td>function</td>
        <td>
        点击事件
        </td>
    </tr>
    <tr>
        <td>active</td>
        <td>bool</td>
        <td>
        是否高亮
        </td>
    </tr>
</table>