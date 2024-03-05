(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{511:function(t,_,v){"use strict";v.r(_);var d=v(8),r=Object(d.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"工程介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工程介绍"}},[t._v("#")]),t._v(" 工程介绍")]),t._v(" "),_("h2",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),_("p",[t._v("基于 Vue2 的前后端分离，内置模块如：部门管理、角色用户、菜单及按钮授权、数据权限、系统参数、代码生成等。")]),t._v(" "),_("h2",{attrs:{id:"系统要求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[t._v("#")]),t._v(" 系统要求")]),t._v(" "),_("ul",[_("li",[t._v("node >= 15.9.0")])]),t._v(" "),_("h2",{attrs:{id:"前端集成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前端集成"}},[t._v("#")]),t._v(" 前端集成")]),t._v(" "),_("p",[t._v("前端集成在代码生成器中，模块为"),_("code",[t._v("alinesno-ui")]),t._v("，此为npm的基础模块，\n同时与代码生成器集成"),_("RouterLink",{attrs:{to:"/technique/13_代码生成器/02_前端代码生成.html"}},[t._v("打开")]),t._v("，做为工程基础规范")],1),t._v(" "),_("h2",{attrs:{id:"前端功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前端功能"}},[t._v("#")]),t._v(" 前端功能")]),t._v(" "),_("p",[t._v("前端包括基础的功能模块和使用文档说明，主要包含如下:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("序号")]),t._v(" "),_("th",[t._v("模块")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("新增页面.md")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("请求流程.md")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("引入依赖.md")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("注册组件.md")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("5")]),t._v(" "),_("td",[t._v("权限使用.md")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("6")]),t._v(" "),_("td",[t._v("多级目录.md")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("7")]),t._v(" "),_("td",[t._v("页签缓存.md")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("8")]),t._v(" "),_("td",[t._v("使用图标.md")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("9")]),t._v(" "),_("td",[t._v("使用字典.md")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("10")]),t._v(" "),_("td",[t._v("使用参数.md")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("11")]),t._v(" "),_("td",[t._v("异常处理.md")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("12")]),t._v(" "),_("td",[t._v("应用路径.md")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("13")]),t._v(" "),_("td",[t._v("布局.md")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("14")]),t._v(" "),_("td",[t._v("路由和导航栏.md")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("15")]),t._v(" "),_("td",[t._v("权限验证.md")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("16")]),t._v(" "),_("td",[t._v("标签栏导航.md")]),t._v(" "),_("td")])])]),t._v(" "),_("h2",{attrs:{id:"前端容器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前端容器"}},[t._v("#")]),t._v(" 前端容器")]),t._v(" "),_("p",[t._v("前端集成基础的容器化配置，同时权限动态参数传递修改后端口路径")]),t._v(" "),_("h2",{attrs:{id:"安全问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安全问题"}},[t._v("#")]),t._v(" 安全问题")]),t._v(" "),_("blockquote",[_("p",[t._v("注意：此alinesno-ui包为公共的npmjs库，并未进行加密，当中包含了基础的布局和一些通用的界面处理，搜索处理")])]),t._v(" "),_("p",[t._v("需要修改的调整的事项，公共密钥和处理: 重新生成浏览器本地存储的密钥，将公共包上传到企业私服库或者在本地引用修改。")]),t._v(" "),_("p",[t._v("以上可以根据自定义的vue或者js进行覆盖调整")]),t._v(" "),_("h2",{attrs:{id:"其它"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),_("ul",[_("li",[t._v("此前端是基于"),_("a",{attrs:{href:"https://gitee.com/y_project/RuoYi-Vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("RuoYi-Vue"),_("OutboundLink")],1),t._v("前端进行改造调整")])])])}),[],!1,null,null,null);_.default=r.exports}}]);