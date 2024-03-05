(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{558:function(t,v,_){"use strict";_.r(v);var a=_(8),e=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"基础规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础规则"}},[t._v("#")]),t._v(" 基础规则")]),t._v(" "),v("h2",{attrs:{id:"概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),v("p",[t._v("基础规则提供的是 ansible 操作的规则，对应的 ansible 脚本基线,\n这里建议与"),v("code",[t._v("jenkinsfile")]),t._v("，实现自动化和流程化，环境规划并不代表所有的都需要安装，按需求处理即可。")]),t._v(" "),v("p",[t._v("比如研发中台的环境，安装 "),v("code",[t._v("mysql/redis/docker")]),t._v(" 即可")]),t._v(" "),v("h2",{attrs:{id:"规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#规则"}},[t._v("#")]),t._v(" 规则")]),t._v(" "),v("ul",[v("li",[t._v("软件始终从软件库中获取")]),t._v(" "),v("li",[t._v("软件只针对"),v("code",[t._v("CentOS")]),t._v("系统，其它系统暂不考虑")]),t._v(" "),v("li",[t._v("软件放置目录"),v("code",[t._v("/opt/alinesno-soft")]),t._v("，按软件名称放置，如 tomcat ,路径为: "),v("code",[t._v("/opt/alinesno-soft/tomcat")])]),t._v(" "),v("li",[t._v("集成"),v("code",[t._v("jenkins")]),t._v("，初始化工程前缀为"),v("code",[t._v("ansible")])])]),t._v(" "),v("h2",{attrs:{id:"软件管理规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#软件管理规范"}},[t._v("#")]),t._v(" 软件管理规范")]),t._v(" "),v("ul",[v("li",[t._v("统一软件管理及上传,为平台内部统一软件，开发过程只允许从统一库中获取")]),t._v(" "),v("li",[t._v("软件新版本需及更新至软件库")]),t._v(" "),v("li",[t._v("软件名称规则按:"),v("code",[t._v("软件名称")]),t._v("+"),v("code",[t._v("版本号")]),t._v("+"),v("code",[t._v("压缩格式")]),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("正例: apache-tomcat-8.5.8.tar.gz\n")])])])]),t._v(" "),v("li",[t._v("如无版本号,则按日期("),v("code",[t._v("年月日时分")]),t._v(")加后缀"),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("正例: apache-tomcat-201811130747.tar.gz\n")])])])]),t._v(" "),v("li",[t._v("软件上传之前需要做验证，确定软件可用")]),t._v(" "),v("li",[t._v("软件如需配置，需将配置文件放置于软件管理文件夹中"),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("正例: apache-maven-3.1.1.tar.gz  // 软件\n      person-settings.xml        //个人配置文件\n")])])])])]),t._v(" "),v("h2",{attrs:{id:"linux-安装规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#linux-安装规范"}},[t._v("#")]),t._v(" Linux 安装规范")]),t._v(" "),v("blockquote",[v("p",[t._v("为了避免 Linux 上文件的乱置乱放及目录，定以下目录的规范,操作统一使用 alinesno 用户")])]),t._v(" "),v("h3",{attrs:{id:"目录规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目录规范"}},[t._v("#")]),t._v(" 目录规范")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("序号")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("是否集成")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("/home/alinesno/soft")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("/opt/jdk8")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("全局")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("/opt/alinesno/nginx")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("/opt/alinesno/redis5")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("/opt/alinesno/keepalived")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("略")])])])]),t._v(" "),v("h2",{attrs:{id:"部署环境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#部署环境"}},[t._v("#")]),t._v(" 部署环境")]),t._v(" "),v("ul",[v("li",[t._v("基础环境完善及配置，为整个开发平台做基础，以环境搭建为主,为本地开发环境，")]),t._v(" "),v("li",[t._v("目前的服务器应该是不够的,也并不是代表所有的软件需要完善才可以进入下一步开发，比如 elk，前期搭建并一定是需要的，")]),t._v(" "),v("li",[t._v("比如说集群，也并不一定是一开始就是集群,")]),t._v(" "),v("li",[t._v("平台搭建一个人的话是比较长期，所以，以先投入组件构建为主，在完成第一步之后，再进一步完善，")]),t._v(" "),v("li",[t._v("即使在公司，也是如此建议，一步到位，也是比较难的，如果可以就更好。")])]),t._v(" "),v("h2",{attrs:{id:"其它"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),v("ul",[v("li",[t._v("略")])])])}),[],!1,null,null,null);v.default=e.exports}}]);