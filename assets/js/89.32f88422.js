(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{462:function(t,a,s){"use strict";s.r(a);var e=s(8),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"接口网关配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口网关配置"}},[t._v("#")]),t._v(" 接口网关配置")]),t._v(" "),a("h3",{attrs:{id:"使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),a("p",[t._v("网关接口配置用于第三方外部服务，当前为内部业务，通过网关进行访问，这里通过token进行接口访问，同时对外的token设置定期更换，内部服务内固定token的形式")]),t._v(" "),a("h2",{attrs:{id:"本内容你将获得"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本内容你将获得"}},[t._v("#")]),t._v(" 本内容你将获得")]),t._v(" "),a("ul",[a("li",[t._v("网关的使用场景")]),t._v(" "),a("li",[t._v("与服务集成的形式")])]),t._v(" "),a("h2",{attrs:{id:"网关的使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网关的使用场景"}},[t._v("#")]),t._v(" 网关的使用场景")]),t._v(" "),a("p",[t._v("网关集成的场景是类似于微服务，但是又不完全微服务，更类似于nginx的能力做业务转发能力，同时进行可编程式的接口转发：")]),t._v(" "),a("img",{staticStyle:{width:"50%"},attrs:{src:t.$withBase("/datacase/gateway_00.png")}}),t._v(" "),a("p",[t._v("以上规避掉了复杂的大中型工程，以中小型工程使用场景为主，同时做好服务之间的分层关系(这点非常重要)，过程结合DevOps能力进行把控。")]),t._v(" "),a("ul",[a("li",[t._v("网关的能力便于集成多个服务，但是又需要规避掉复杂的微服务化场景，以轻量级的能力运维")]),t._v(" "),a("li",[t._v("规避过度微服务化的工程设计，在中小型项目上，微服务使用不当会无形中增加运维和管理成本，可以参考宏服务")]),t._v(" "),a("li",[t._v("针对于大型的微服务化场景，建议集成k8s，更快而且更优化的落地微服务，此时k8s会提供负载能力")]),t._v(" "),a("li",[t._v("对内接口的复杂度，对内接口进行透明化处理，规避掉复杂的调用，同时又保留对外的调用能力")])]),t._v(" "),a("blockquote",[a("p",[t._v("这里定义的中小型项目3万-2000万之间，工程服务规模1-80个之间，类似的工程场景\n整体与各个工程服务化（注意:这里的服务化并不等于微服务)")])]),t._v(" "),a("h2",{attrs:{id:"服务集成方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务集成方式"}},[t._v("#")]),t._v(" 服务集成方式")]),t._v(" "),a("p",[t._v("这里集成通过统一网关地址调用，在"),a("code",[t._v("yaml")]),t._v("中配置如下:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("alinesno")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gate-token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 在网关获取到token\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authorty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//alinesno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gateway"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("proxy.beta.linesno.com\n")])])]),a("p",[t._v("获取token通过网关平台获取，如下:")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/datacase/gateway_01.png")}}),t._v(" "),a("p",[t._v("注意每个租户获取到的token不一致，注意不要互相引用，建议每个项目1个token，避免混乱。")]),t._v(" "),a("h2",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),a("ul",[a("li",[t._v("无")])])])}),[],!1,null,null,null);a.default=n.exports}}]);