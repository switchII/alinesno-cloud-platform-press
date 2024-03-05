(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{631:function(t,_,v){"use strict";v.r(_);var r=v(8),a=Object(r.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"熔断器说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#熔断器说明"}},[t._v("#")]),t._v(" 熔断器说明")]),t._v(" "),_("h3",{attrs:{id:"使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),_("blockquote",[_("p",[t._v("并非每个业务服务都需要使用熔断器")])]),t._v(" "),_("p",[t._v("在微服务架构中，根据业务来拆分成一个个的服务，服务与服务之间可以通过 RPC 相互调用。\n为了保证其高可用，单个服务通常会集群部署。由于网络原因或者自身的原因，服务并不能保\n证 100% 可用，如果单个服务出现问题，调用这个服务就会出现线程阻塞，此时若有大量的\n请求涌入，Servlet 容器的线程资源会被消耗完毕，导致服务瘫痪。服务与服务之间的依赖性，\n故障会传播，会对整个微服务系统造成灾难性的严重后果，这就是服务故障的 “雪崩” 效应。")]),t._v(" "),_("p",[t._v("为了解决这个问题，业界提出了熔断器模型。")]),t._v(" "),_("p",[t._v("Netflix 开源了 Hystrix 组件，实现了熔断器模式，Spring Cloud 对这一组件进行了整合。\n在微服务架构中，一个请求需要调用多个服务是非常常见的，如下图：")]),t._v(" "),_("img",{attrs:{src:t.$withBase("/technique/hystric_04.png")}}),t._v(" "),_("p",[t._v("较底层的服务如果出现故障，会导致连锁故障。当对特定的服务的调用的不可用达到一个阀值(Hystrix 是 5 秒 20 次)\n熔断器将会被打开。")]),t._v(" "),_("img",{attrs:{src:t.$withBase("/technique/hystric_05.png")}}),t._v(" "),_("p",[t._v("熔断器打开后，为了避免连锁故障，通过 fallback 方法可以直接返回一个固定值。")]),t._v(" "),_("h3",{attrs:{id:"什么情况下会触发-fallback-方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么情况下会触发-fallback-方法"}},[t._v("#")]),t._v(" 什么情况下会触发 fallback 方法")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名字")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("触发 fallback")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("EMIT")]),t._v(" "),_("td",[t._v("值传递")]),t._v(" "),_("td",[t._v("NO")])]),t._v(" "),_("tr",[_("td",[t._v("SUCCESS")]),t._v(" "),_("td",[t._v("执行完成")]),t._v(" "),_("td",[t._v("，没有错误 NO")])]),t._v(" "),_("tr",[_("td",[t._v("FAILURE")]),t._v(" "),_("td",[t._v("执行抛出异常")]),t._v(" "),_("td",[t._v("YES")])]),t._v(" "),_("tr",[_("td",[t._v("TIMEOUT")]),t._v(" "),_("td",[t._v("执行开始")]),t._v(" "),_("td",[t._v("，但没有在允许的时间内完成 YES")])]),t._v(" "),_("tr",[_("td",[t._v("BAD_REQUEST")]),t._v(" "),_("td",[t._v("执行抛出")]),t._v(" "),_("td",[t._v("HystrixBadRequestException NO")])]),t._v(" "),_("tr",[_("td",[t._v("SHORT_CIRCUITED")]),t._v(" "),_("td",[t._v("断路器打开")]),t._v(" "),_("td",[t._v("，不尝试执行 YES")])]),t._v(" "),_("tr",[_("td",[t._v("THREAD_POOL_REJECTED")]),t._v(" "),_("td",[t._v("线程池拒绝")]),t._v(" "),_("td",[t._v("，不尝试执行 YES")])]),t._v(" "),_("tr",[_("td",[t._v("SEMAPHORE_REJECTED")]),t._v(" "),_("td",[t._v("信号量拒绝")]),t._v(" "),_("td",[t._v("，不尝试执行 YES")])])])]),t._v(" "),_("h3",{attrs:{id:"fallback-方法在什么情况下会抛出异常"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fallback-方法在什么情况下会抛出异常"}},[t._v("#")]),t._v(" fallback 方法在什么情况下会抛出异常")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名字")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("抛异常")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("FALLBACK_EMIT")]),t._v(" "),_("td",[t._v("Fallback 值传递")]),t._v(" "),_("td",[t._v("NO")])]),t._v(" "),_("tr",[_("td",[t._v("FALLBACK_SUCCESS")]),t._v(" "),_("td",[t._v("Fallback 执行完成，没有错误")]),t._v(" "),_("td",[t._v("NO")])]),t._v(" "),_("tr",[_("td",[t._v("FALLBACK_FAILURE")]),t._v(" "),_("td",[t._v("Fallback 执行抛出出错")]),t._v(" "),_("td",[t._v("YES")])]),t._v(" "),_("tr",[_("td",[t._v("FALLBACK_REJECTED")]),t._v(" "),_("td",[t._v("Fallback 信号量拒绝，不尝试执行")]),t._v(" "),_("td",[t._v("YES")])]),t._v(" "),_("tr",[_("td",[t._v("FALLBACK_MISSING")]),t._v(" "),_("td",[t._v("没有 Fallback 实例")]),t._v(" "),_("td",[t._v("YES")])])])]),t._v(" "),_("h3",{attrs:{id:"hystrix-dashboard-界面监控参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hystrix-dashboard-界面监控参数"}},[t._v("#")]),t._v(" Hystrix Dashboard 界面监控参数")]),t._v(" "),_("img",{attrs:{src:t.$withBase("/technique/hystric_03.png")}}),t._v(" "),_("h3",{attrs:{id:"其它说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其它说明"}},[t._v("#")]),t._v(" 其它说明")]),t._v(" "),_("p",[t._v("由于 Hystrix 是一个容错框架，因此我们在使用的时候，要达到熔断的目的只需配置一些参数就可以了。但我们要达到真正的效果，就必须要了解这些参数。Circuit Breaker 一共包括如下 6 个参数。")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("circuitBreaker.enabled\n是否启用熔断器，默认是 TURE。")])]),t._v(" "),_("li",[_("p",[t._v("circuitBreaker.forceOpen\n熔断器强制打开，始终保持打开状态。默认值 FLASE。")])]),t._v(" "),_("li",[_("p",[t._v("circuitBreaker.forceClosed\n熔断器强制关闭，始终保持关闭状态。默认值 FLASE。")])]),t._v(" "),_("li",[_("p",[t._v("circuitBreaker.errorThresholdPercentage\n设定错误百分比，默认值 50%，例如一段时间（10s）内有 100 个请求，其中有 55 个超时或者异常返回了，那么这段时间内的错误百分比是 55%，大于了默认值 50%，这种情况下触发熔断器-打开。")])]),t._v(" "),_("li",[_("p",[t._v("circuitBreaker.requestVolumeThreshold\n默认值 20.意思是至少有 20 个请求才进行 errorThresholdPercentage 错误百分比计算。比如一段时间（10s）内有 19 个请求全部失败了。错误百分比是 100%，但熔断器不会打开，因为 requestVolumeThreshold 的值是 20.")])])])])}),[],!1,null,null,null);_.default=a.exports}}]);