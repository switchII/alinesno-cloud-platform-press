(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{456:function(t,a,_){"use strict";_.r(a);var v=_(8),s=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据抽取上报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据抽取上报"}},[t._v("#")]),t._v(" 数据抽取上报")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("案例业务系统数据上报服务提供通过导入模板上报数据的入口。业务员从数据上报服务下载导入模板，按照导入模板的格式要求填写数据，\n填好数据后在数据服务平台上传文件，执行上报操作，完成数据上报。数据上报服务是大数据开发环节中的重要一环")]),t._v(" "),a("h2",{attrs:{id:"针对人员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对人员"}},[t._v("#")]),t._v(" 针对人员")]),t._v(" "),a("ul",[a("li",[t._v("数据开发工程师")]),t._v(" "),a("li",[t._v("业务开发人员")])]),t._v(" "),a("h2",{attrs:{id:"本内容你将获得"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本内容你将获得"}},[t._v("#")]),t._v(" 本内容你将获得")]),t._v(" "),a("ul",[a("li",[t._v("了解部门业务数据的上报流程")])]),t._v(" "),a("h3",{attrs:{id:"需求沟通"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求沟通"}},[t._v("#")]),t._v(" 需求沟通")]),t._v(" "),a("p",[t._v("需求分析工程师与业务部门进行沟通，在充分了解客户的需求后，整理出数据模型，并列出可通过excel导入模板上报数据的清单，\n这里主要是采集的数据项:")]),t._v(" "),a("ul",[a("li",[t._v("案件清单")]),t._v(" "),a("li",[t._v("案件处理流程")]),t._v(" "),a("li",[t._v("案件涉及物品表")]),t._v(" "),a("li",[t._v("业务部门表")]),t._v(" "),a("li",[t._v("办理员表")])]),t._v(" "),a("p",[t._v("以上的数据采集到数据仓库中。")]),t._v(" "),a("h2",{attrs:{id:"数据抽取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据抽取"}},[t._v("#")]),t._v(" 数据抽取")]),t._v(" "),a("blockquote",[a("p",[t._v("这里列出某1个抽取的脚本")])]),t._v(" "),a("h3",{attrs:{id:"配置抽取脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置抽取脚本"}},[t._v("#")]),t._v(" 配置抽取脚本")]),t._v(" "),a("p",[t._v("这里抽取通过kettle编写成任务脚本，抽取的数据表作业和任务")]),t._v(" "),a("table",[a("tr",[a("td",[a("img",{attrs:{src:t.$withBase("/datacase/kettle_01.png")}})]),t._v(" "),a("td",[a("img",{attrs:{src:t.$withBase("/datacase/kettle_02.png")}})])])]),t._v(" "),a("p",[t._v("这里获取到数据抽取的脚本，导出"),a("code",[t._v(".ktr")]),t._v("脚本文件\n在kettle工具中，开发从mysql数据库抽取数据导入hive数据仓库的任务")]),t._v(" "),a("p",[t._v("配置说明：")]),t._v(" "),a("ul",[a("li",[t._v("连接mysql数据库，抽取出数据并导出生成数据文件。在读取数据控件中，设置时间变量，通过动态生成的时间变量批量获取业务数据")]),t._v(" "),a("li",[t._v("将数据文件上传到大数据集群服务器")]),t._v(" "),a("li",[t._v("在大数据集群上调用hive命令，将数据文件抽取到hive表")])]),t._v(" "),a("h3",{attrs:{id:"数据抽取服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据抽取服务"}},[t._v("#")]),t._v(" 数据抽取服务")]),t._v(" "),a("p",[t._v("这里将数据抽取的脚本导出，更新上传到抽取调度服务，如下图:")]),t._v(" "),a("p",[t._v("将ETL任务上传到数据集成服务，由数据集成服务进行统一管理和调度，减少etl任务的部署工作量及难度")]),t._v(" "),a("h4",{attrs:{id:"新增定时策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增定时策略"}},[t._v("#")]),t._v(" 新增定时策略")]),t._v(" "),a("p",[t._v("进入数据集成服务，导航到服务配置-定时策略，新增定时策略")]),t._v(" "),a("p",[t._v("配置说明：")]),t._v(" "),a("ul",[a("li",[t._v("用户根据业务需求定义定时器的名称")]),t._v(" "),a("li",[t._v("设置定时器的调度表达式，如每隔5秒执行一次："),a("code",[t._v("*/5 * * * * ?")])])]),t._v(" "),a("h4",{attrs:{id:"上传转换任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传转换任务"}},[t._v("#")]),t._v(" 上传转换任务")]),t._v(" "),a("p",[t._v("进入数据集成服务，导航到任务管理-转换管理，新增转换记录")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/datacase/jicheng_02.png")}}),t._v(" "),a("p",[t._v("配置说明：")]),t._v(" "),a("ul",[a("li",[t._v("如果转换任务为单独运行，需要选择调度策略；如果转换任务为作业任务的一部分，则调度策略选择任务暂停，由作业任务进行调用")]),t._v(" "),a("li",[t._v("用户根据需要设置执行方式、日志级别和转换描述")])]),t._v(" "),a("h4",{attrs:{id:"上传作业任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传作业任务"}},[t._v("#")]),t._v(" 上传作业任务")]),t._v(" "),a("p",[t._v("进入数据集成服务，导航到任务管理-作业管理，新增作业记录")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/datacase/jicheng_03.png")}}),t._v(" "),a("p",[t._v("配置说明：")]),t._v(" "),a("ul",[a("li",[t._v("选择归属于作业任务的转换任务并选择调度策略")]),t._v(" "),a("li",[t._v("用户根据需要设置执行方式、日志级别和转换描述")])]),t._v(" "),a("h4",{attrs:{id:"监控抽取任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控抽取任务"}},[t._v("#")]),t._v(" 监控抽取任务")]),t._v(" "),a("p",[t._v("数据集成服务调度ETL任务时，记录ETL任务的执行日志，系统根据执行日志呈现作业、转换的执行日志界面及监控界面")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/datacase/jicheng_04.png")}}),t._v(" "),a("p",[t._v("此处数据抽取完成。")]),t._v(" "),a("h2",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),a("ul",[a("li",[t._v("无")])])])}),[],!1,null,null,null);a.default=s.exports}}]);