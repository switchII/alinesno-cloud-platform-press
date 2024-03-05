(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{655:function(t,a,s){"use strict";s.r(a);var n=s(8),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"工程脚手架构生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工程脚手架构生成"}},[t._v("#")]),t._v(" 工程脚手架构生成")]),t._v(" "),a("h2",{attrs:{id:"工程示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工程示例"}},[t._v("#")]),t._v(" 工程示例")]),t._v(" "),a("p",[t._v("系统应用集成示例工程"),a("a",{attrs:{href:"https://gitee.com/alinesno-cloud/alinesno-demo-gateway-open/tree/master/demo-business-shop",target:"_blank",rel:"noopener noreferrer"}},[t._v("打开"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("工程依赖于六边型思想，整合当前的项目工程结构特点，进行的规划和划分，以下为整体工程的规划架构：")]),t._v(" "),a("img",{staticStyle:{width:"100%"},attrs:{src:"/technique/service01.jpg"}}),t._v(" "),a("h2",{attrs:{id:"本内容你将获得"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本内容你将获得"}},[t._v("#")]),t._v(" 本内容你将获得")]),t._v(" "),a("ul",[a("li",[t._v("工程脚手架的工程结构")]),t._v(" "),a("li",[t._v("每个工程模块的职责")]),t._v(" "),a("li",[t._v("工程的后期的升级思路")]),t._v(" "),a("li",[t._v("生成基础平台字段")])]),t._v(" "),a("h2",{attrs:{id:"脚手架的生成说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚手架的生成说明"}},[t._v("#")]),t._v(" 脚手架的生成说明")]),t._v(" "),a("blockquote",[a("p",[t._v("与工程规范略有出入，主要是因为历史升级的原因")])]),t._v(" "),a("p",[t._v("工程脚手架基于多边型思想，并结合实际行业的 mvc 模式， 以最小的成本切入最新的灵活的架构，整合的思路，\n这里主要是面向接口编程")]),t._v(" "),a("h3",{attrs:{id:"工程脚手架的工程结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工程脚手架的工程结构"}},[t._v("#")]),t._v(" 工程脚手架的工程结构")]),t._v(" "),a("p",[t._v("这里的目标是将核心业务与其它的非核心业务分开，避免污染核心业务逻辑，如果分得再细一些，\ndao 层也可单独抽出，这里不抽出的原因是工程结构偏向中小企业，以 mysql 为主")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 接口包 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("alinesno-cloud-shop-manage-api"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 核心业务包 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("alinesno-cloud-shop-manage-domain"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n历史非前后端遗留包\n<module>alinesno-cloud-shop-manage-web</module>\n--\x3e")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 对外接口服务包 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("alinesno-cloud-shop-manage-gateway"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 启动包 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("alinesno-cloud-shop-manage-boot"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 前端工程包 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("alinesno-cloud-shop-manage-ui"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"每个工程模块的职责"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每个工程模块的职责"}},[t._v("#")]),t._v(" 每个工程模块的职责")]),t._v(" "),a("p",[t._v("每个模块职责详细说明：")]),t._v(" "),a("ul",[a("li",[t._v("接口包(api): 这里是一切面向接口编程，这里放置公共的非实现组件，主要用于第三方依赖，最小包的依赖，避免污染第三工程。")]),t._v(" "),a("li",[t._v("核心业务包(domain)：这里主要包含核心的业务落地，目标是达到可依赖，可单独跑，包含核心价值，颗粒度以实际架构设计为主")]),t._v(" "),a("li",[t._v("对外接口包(gateway)：这里不依赖核心业务落地包，目标是加入新的服务实现(dubbo/rpc/mq/rest)不影响核心包")]),t._v(" "),a("li",[t._v("启动包(boot)：这里主要用于工程配置，目标是只处理配置整合，这里可包含业务覆盖最小业务逻辑")]),t._v(" "),a("li",[t._v("前端包(ui)：对核心模板的管理，目标是对业务的最小逻辑管理，也仅管理此业务，面向 gateway 和 api 编程")])]),t._v(" "),a("p",[t._v("工程包结构为保留最核心的业务落地，同时避免各个污染。")]),t._v(" "),a("h3",{attrs:{id:"生成平台基础字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成平台基础字段"}},[t._v("#")]),t._v(" 生成平台基础字段")]),t._v(" "),a("p",[t._v("这里主要包括平台的一些默认字段，包含通用的平台字段，用于整体平台的考虑，主要包括如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//////////////////////////////// 通用应用字段 ///////////////////////")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 唯一ID号")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" fieldProp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字段属性")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" addTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加时间")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" deleteTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除时间")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" updateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新时间")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" hasDelete "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HasDeleteEnums")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LEGAL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否删除(1删除|0正常|null正常)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" hasStatus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// = HasStatusEnums.LEGAL.value ; // 状态(0启用|1禁用)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" deleteManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除的人")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" lastUpdateOperatorId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后更新操作员 用户权限: 只能看到自己操作的数据")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//////////////////////////////// 数据权限规划 _start ///////////////////////")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" applicationId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所属应用 应用权限: 只能看到所属应用的权限【默认】")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" applicationName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 应用名称，唯一性，用于做应用标识【最好与springboot的applicaiotn.name对应】")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" tenantId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所属租户 , 租户权限")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" operatorId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 操作员 用户权限: 只能看到自己操作的数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" fieldId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字段权限：部分字段权限无法加密或者不显示，或者大于某个值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" departmentId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 部门权限: 只能看到自己所在部门的数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/////////////////////////////// 数据权限规划 _end ///////////////////////")]),t._v("\n")])])]),a("p",[t._v("基类字段说明：")]),t._v(" "),a("ul",[a("li",[t._v("自定义基础字段，自定义基类即可，自定义基类的话，会有一部分方法不可用，根据特定业务重写即可")]),t._v(" "),a("li",[t._v("类似的场景主要是一些特殊的业务表，要求高的性能表等，此类表占系统部分较少，特殊业务特殊处理。")])]),t._v(" "),a("p",[t._v("在代码工程类中，已集成自动生成"),a("code",[t._v("CheckEvn.java")]),t._v("类，在boot模块下面，打开注释运行即可自动生成基础字段。")]),t._v(" "),a("h3",{attrs:{id:"工程的后期的升级思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工程的后期的升级思路"}},[t._v("#")]),t._v(" 工程的后期的升级思路")]),t._v(" "),a("p",[t._v("这里升级包括核心业务逻辑的升级，技术的升级，前端的升级，其它升级再讨论，其中如下：")]),t._v(" "),a("ul",[a("li",[t._v("业务落地升级：使用打补丁的方式，比如增加新的模块持续集成模块，则添加"),a("code",[t._v("-cicd")]),t._v("模块，同时在 boot 启动工程中集成")]),t._v(" "),a("li",[t._v("技术升级：由 rest 接口转成 grpc，则调整 gateway，不污染 domain 工程")]),t._v(" "),a("li",[t._v("前端升级：直接调整，同时切换即可")])]),t._v(" "),a("h2",{attrs:{id:"升级指导示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级指导示例"}},[t._v("#")]),t._v(" 升级指导示例")]),t._v(" "),a("p",[t._v("这里只列出通用的，提供对应的思路，复杂场景单独讨论，这里非绝对")]),t._v(" "),a("h4",{attrs:{id:"场景-1-核心包需要调用其它的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景-1-核心包需要调用其它的服务"}},[t._v("#")]),t._v(" 场景 1：核心包需要调用其它的服务")]),t._v(" "),a("p",[t._v("方案：添加 consumer 模块，在 consumer 中提供出集成，在接口包中提供接口，实现在 consumer 中，由内部其它其它包调用，这里 consumer 可依赖多可第三方 sdk，具体可查看工程规划"),a("RouterLink",{attrs:{to:"/technique/03_项目规范/01_服务工程规范.html"}},[t._v("查看")])],1),t._v(" "),a("h4",{attrs:{id:"场景-2-添加-elk-日志监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景-2-添加-elk-日志监控"}},[t._v("#")]),t._v(" 场景 2：添加 ELK 日志监控")]),t._v(" "),a("p",[t._v("方法：在 boot 中集成日志服务组件，有必要相关包需要提供出业务日志的相关输出能力")]),t._v(" "),a("h4",{attrs:{id:"场景-3-对外提供-sdk-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景-3-对外提供-sdk-服务"}},[t._v("#")]),t._v(" 场景 3：对外提供 sdk 服务")]),t._v(" "),a("p",[t._v("方案：添加 sdk 模块，调用 gateway 接口服务")]),t._v(" "),a("h4",{attrs:{id:"场景-4-新人开发新核心功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景-4-新人开发新核心功能"}},[t._v("#")]),t._v(" 场景 4：新人开发新核心功能")]),t._v(" "),a("p",[t._v("方案：核心包由业务高级工程师维护，新核心模块依赖 api 包，新人实现新的核心业务逻辑模块，稳定之后，再考虑是否有必要集成到核心包(也可不集成)，在 boot 包中依赖启动")]),t._v(" "),a("h2",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),a("ul",[a("li",[t._v("无")])])])}),[],!1,null,null,null);a.default=e.exports}}]);