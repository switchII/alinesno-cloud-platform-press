(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{692:function(t,a,r){"use strict";r.r(a);var s=r(8),_=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"业务集成最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#业务集成最佳实践"}},[t._v("#")]),t._v(" 业务集成最佳实践")]),t._v(" "),a("blockquote",[a("p",[t._v("这里说的消息是指ACP消息服务，而不是消息中间件")])]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("消息使用有一定的场景，也有一定的限制，这里针对消息使用的一些注意事项和实践中的一些问题点做总结")]),t._v(" "),a("h2",{attrs:{id:"本内容你将获得"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本内容你将获得"}},[t._v("#")]),t._v(" 本内容你将获得")]),t._v(" "),a("ul",[a("li",[t._v("分布式消息使用场景的限制")]),t._v(" "),a("li",[t._v("分布式消息的异常处理思路")]),t._v(" "),a("li",[t._v("业务集成过程中需要注意的地方")]),t._v(" "),a("li",[t._v("消息服务使用过程中的丢失问题")]),t._v(" "),a("li",[t._v("消息重复消费的处理")])]),t._v(" "),a("h2",{attrs:{id:"实践总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实践总结"}},[t._v("#")]),t._v(" 实践总结")]),t._v(" "),a("p",[t._v("以下为针对以前项目的总结点，并不代表所有和唯一，后期根据过程收集进一步输出。")]),t._v(" "),a("h3",{attrs:{id:"过程需要有的监控性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过程需要有的监控性"}},[t._v("#")]),t._v(" 过程需要有的监控性")]),t._v(" "),a("p",[t._v("消息过程部分情况下，处理分布式事务和相关关键业务性，过程中出现异常，应该及时预警和处理，\n消息服务需要保障好异常处理机制，自动发送自动恢复，补偿机制等，这些是消息异常处理能力。\n需要一个是保留人工处理能力，即手工处理机制，避免物理或者不可控因素。")]),t._v(" "),a("h3",{attrs:{id:"消息列队名称的定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息列队名称的定义"}},[t._v("#")]),t._v(" 消息列队名称的定义")]),t._v(" "),a("p",[t._v("消息队列的名称建议添加业务的属性，同时消息内容添加业务关键字，让消费端可进行业务查询，\n做好幂等处理。")]),t._v(" "),a("h3",{attrs:{id:"消费端需要做好的工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消费端需要做好的工作"}},[t._v("#")]),t._v(" 消费端需要做好的工作")]),t._v(" "),a("p",[t._v("消息组件建议在业务中保留消费端回写机制，即将消息的结果写入消息服务中，进行查询状态的监控，\n在消息的监控性处理和自我恢复时，进行业务状态的回写，包括异常消息，完成状态等，这些便于业务\n组在消息服务中查询管理。")]),t._v(" "),a("h3",{attrs:{id:"消费端和发送端职责"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消费端和发送端职责"}},[t._v("#")]),t._v(" 消费端和发送端职责")]),t._v(" "),a("p",[t._v("两端的职责需要明确点，避免出现发送端之后，还需要负责消费端的情况。消息发送成功之后，职责就往\n下一个阶段，职责分开，小组和小组职责明确，避免过程存在互相推责还有沟通内耗上面。")]),t._v(" "),a("h3",{attrs:{id:"消息集群和环境的注意项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息集群和环境的注意项"}},[t._v("#")]),t._v(" 消息集群和环境的注意项")]),t._v(" "),a("p",[t._v("消息环境避免不要跟其它业务的环境混在一起，消息需要做的稳定性强，业务稳定。")]),t._v(" "),a("h3",{attrs:{id:"使用场景有选择性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景有选择性"}},[t._v("#")]),t._v(" 使用场景有选择性")]),t._v(" "),a("p",[t._v("消息的使用场景是不可回退的，有延迟性的，有缓冲性的，针对的限制不适合事务性比较强的范围，\n发送过程顺序还有消息丢失，重复发送需要业务有包容性，场景是可延迟性的业务，另一种是\n消息具备高可靠性，同时具备可治理，异常可处理性，所以针对业务来说，消息结合使用的业务\n场景更具备强的业务交互可靠，比如分布式事务，秒杀，结算交易等。")]),t._v(" "),a("h2",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/142696374",target:"_blank",rel:"noopener noreferrer"}},[t._v("可靠消息的原理总结"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=_.exports}}]);