(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{689:function(t,a,s){"use strict";s.r(a);var _=s(8),v=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"分布式消息架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式消息架构"}},[t._v("#")]),t._v(" 分布式消息架构")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("分布式消息是针对于多服务，微服务场景下的消息处理能力，包括分布式事务和常用消息管理能力，有 TCC/MQ/Seata 等多种解决方案，\n平台以避免分布式事务为基础原则，能不使用事务则不使用。")]),t._v(" "),a("h2",{attrs:{id:"本内容你将获得"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本内容你将获得"}},[t._v("#")]),t._v(" 本内容你将获得")]),t._v(" "),a("ul",[a("li",[t._v("消息事务的架构设计")]),t._v(" "),a("li",[t._v("消息的使用场景")]),t._v(" "),a("li",[t._v("消息的处理思路和流程")])]),t._v(" "),a("h2",{attrs:{id:"架构设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构设计"}},[t._v("#")]),t._v(" 架构设计")]),t._v(" "),a("p",[t._v("消息通过集成多种引擎，规避复杂度和场景，同时提供出公共的消息接口能力，针对于中小型项目使用场景，\n是基础研发中台的重要能力之一，以下为架构设计：")]),t._v(" "),a("img",{staticStyle:{"max-width":"860px"},attrs:{src:"/message/01_message_arc.png"}}),t._v(" "),a("p",[a("strong",[t._v("架构说明")]),t._v(" :")]),t._v(" "),a("ul",[a("li",[t._v("消息管理平台封装了消息的统一管理能力，包括统计和业务接口，规避消息的复杂度")]),t._v(" "),a("li",[t._v("集成多种消息能力，这里主要集成 kafka/redis/rocketmq 三种引擎，其中默认是 redis 消息")]),t._v(" "),a("li",[t._v("业务通过本地事务之后，发送到消息管理平台，消费端处理业务，完成业务之后，清理消息")]),t._v(" "),a("li",[t._v("消息管理平台集成消息通用的事务管理能力，包括补偿机制，异常机制，业务集成机制等")])]),t._v(" "),a("h2",{attrs:{id:"消息使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息使用场景"}},[t._v("#")]),t._v(" 消息使用场景")]),t._v(" "),a("p",[t._v("这里主要集成的是消息，主要的考虑场景是简单，便于业务处理，在强事务性的处理，通过服务规划和多数据库能力上来处理这个，\n这里的消息使用场景不仅仅是事务上的使用场景，这里主要列举的包括几个方面:")]),t._v(" "),a("ul",[a("li",[t._v("多服务分布式事务，比如微服务事务")]),t._v(" "),a("li",[t._v("多服务业务解耦操作，比如多应用拆分")]),t._v(" "),a("li",[t._v("大批量异步消息能力，比如秒杀")])]),t._v(" "),a("h2",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),a("ul",[a("li",[t._v("无")])])])}),[],!1,null,null,null);a.default=v.exports}}]);