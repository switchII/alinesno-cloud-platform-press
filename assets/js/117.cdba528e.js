(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{490:function(t,v,_){"use strict";_.r(v);var e=_(8),d=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"服务规划规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务规划规范"}},[t._v("#")]),t._v(" 服务规划规范")]),t._v(" "),v("h2",{attrs:{id:"设计原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设计原则"}},[t._v("#")]),t._v(" 设计原则")]),t._v(" "),v("blockquote",[v("p",[t._v("设计原则不可改变，任何业务小组如有冲突或者改变，直接调整业务组架构。")])]),t._v(" "),v("ul",[v("li",[t._v("服务单库设计,以减少迁移，服务之前影响等；")]),t._v(" "),v("li",[t._v("服务设计最初以 SDK 为主，共用 SDK 提升成服务，基础 SDK 则基础服务，业务 SDK 则为中台服务；")]),t._v(" "),v("li",[t._v("基础服务只为调用设计，位于服务的底层或者中间层，基础服务禁止调用业务服务；")]),t._v(" "),v("li",[t._v("业务服务调用基础服务，或者其它服务，业务服务为服务的顶层，用于定制化业务；")]),t._v(" "),v("li",[t._v("同一级服务之间可以互相调用，只能自下往下调用，平级调用，禁止自下往上调用，以避免服务混乱及维护混乱。")]),t._v(" "),v("li",[t._v("每种服务目录按 999 个服务规划")])]),t._v(" "),v("h2",{attrs:{id:"目录说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目录说明"}},[t._v("#")]),t._v(" 目录说明")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),v("th",[t._v("目录名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),v("td",[t._v("公共服务")]),t._v(" "),v("td",[t._v("基础公共包,所有工程的基础，包括配置，页面，核心包等")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",[t._v("组件服务")]),t._v(" "),v("td",[t._v("基础组件包，用于第三方等，组件包不能单独运行，只能被依赖")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),v("td",[t._v("平台服务")]),t._v(" "),v("td",[t._v("包括注册中心，配置中心等")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),v("td",[t._v("基础服务")]),t._v(" "),v("td",[t._v("公用基础组件，只能被调用或者调用公共或者组件包,不能主动调用其它服务")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),v("td",[t._v("业务服务")]),t._v(" "),v("td",[t._v("处理业务服务，可以服务之间互相调用，或者调用基础服务")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),v("td",[t._v("门户服务")]),t._v(" "),v("td",[t._v("与业务服务同级，用于统一门户服务")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),v("td",[t._v("网关服务")]),t._v(" "),v("td",[t._v("对外网关服务,与平台组件同级，但仅做为网关部分")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),v("td",[t._v("应用服务")]),t._v(" "),v("td",[t._v("前端应用或者手机应用")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),v("td",[t._v("监控服务")]),t._v(" "),v("td",[t._v("监控平台，用于运维平台，目前仅规划,有可能与平台服务合并一起")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),v("td",[t._v("示例服务")]),t._v(" "),v("td",[t._v("做示例工程，包含有所有服务调用示例")]),t._v(" "),v("td")])])]),t._v(" "),v("h2",{attrs:{id:"目录规划"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目录规划"}},[t._v("#")]),t._v(" 目录规划")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),v("th",[t._v("目录名称")]),t._v(" "),v("th",[t._v("目录规划")]),t._v(" "),v("th",[t._v("端口规划")]),t._v(" "),v("th",[t._v("权限")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),v("td",[t._v("平台服务")]),t._v(" "),v("td",[t._v("alinesno-cloud-platform")]),t._v(" "),v("td",[t._v("24000+")]),t._v(" "),v("td",[t._v("研发")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",[t._v("基础服务")]),t._v(" "),v("td",[t._v("alinesno-cloud-base")]),t._v(" "),v("td",[t._v("25000+")]),t._v(" "),v("td",[t._v("研发")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),v("td",[t._v("业务系统服务")]),t._v(" "),v("td",[t._v("alinesno-cloud-business")]),t._v(" "),v("td",[t._v("26000+")]),t._v(" "),v("td",[t._v("开发")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),v("td",[t._v("数据中台服务")]),t._v(" "),v("td",[t._v("alinesno-cloud-data")]),t._v(" "),v("td",[t._v("28000+")]),t._v(" "),v("td",[t._v("研发")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),v("td",[t._v("物联网中台服务")]),t._v(" "),v("td",[t._v("alinesno-cloud-iot")]),t._v(" "),v("td",[t._v("27000+")]),t._v(" "),v("td",[t._v("研发")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),v("td",[t._v("智慧中台服务")]),t._v(" "),v("td",[t._v("alinesno-cloud-ai")]),t._v(" "),v("td",[t._v("23000+")]),t._v(" "),v("td",[t._v("研发")]),t._v(" "),v("td")])])]),t._v(" "),v("h2",{attrs:{id:"其它"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),v("ul",[v("li",[t._v("无")])])])}),[],!1,null,null,null);v.default=d.exports}}]);