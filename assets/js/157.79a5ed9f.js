(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{531:function(a,s,t){"use strict";t.r(s);var e=t(8),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"kafka-单点教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka-单点教程"}},[a._v("#")]),a._v(" Kafka 单点教程")]),a._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("p",[a._v("上传软件至 Linux 服务器"),s("code",[a._v("/home/alinesno/soft/")]),a._v("目录")]),a._v(" "),s("blockquote",[s("p",[a._v("此处用户可以使用 xftp 或者 xshell 等工具，书要简言")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" kafka_2.11-2.0.1.tgz alinesno@192.168.1.110:~/soft/\n")])])]),s("p",[a._v("解压安装包")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" ~/kafka\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xzvf")]),a._v(" ~/soft/kafka_2.11-2.0.1.tgz "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" ~/kafka\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/kafka/kafka_2.11-2.0.1/\n")])])]),s("p",[a._v("启动 kafka 服务")]),a._v(" "),s("blockquote",[s("p",[a._v("kafka 注册中心需要 zk，但是考虑到单点的情况，我们使用 kafka 内置的 zk 服务即可,在集群的时候，我们再配置 zk 集群,后面如果需要使用到 zk 的地方，我们也可以暂时连接此 zk")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" 启动zk服务,并查看启动日志\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" bin/zookeeper-server-start.sh config/zookeeper.properties "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" zookeeper.nohup.out "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" zookeeper.nohup.out\n 启动kafka服务,并查看启动日志\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" bin/kafka-server-start.sh config/server.properties "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" producer.nohup.out "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" producer.nohup.out\n")])])]),s("h2",{attrs:{id:"消息收发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息收发"}},[a._v("#")]),a._v(" 消息收发")]),a._v(" "),s("p",[a._v("创建一个"),s("code",[a._v("test")]),a._v("主题")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" 创建主题\nbin/kafka-topics.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--create")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zookeeper")]),a._v(" localhost:2181 --replication-factor "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--partitions")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--topic")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v("\n 查看主题\nbin/kafka-topics.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--list")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zookeeper")]),a._v(" localhost:2181\n")])])]),s("p",[a._v("启动消息接收服务,监听"),s("code",[a._v("test")]),a._v("主题,消息会不断的监听，所以建议起另一个窗口用于专门接收消息，开始启动的时候是没有消息的，保留着就可以")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--topic")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" --from-beginning\n")])])]),s("p",[a._v("启动消息发送服务,发送给"),s("code",[a._v("test")]),a._v("主题,在启动发送服务之后，你再输入字符，然后再看消息服务窗口是否能接收得到")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("bin/kafka-console-producer.sh --broker-list localhost:9092 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--topic")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v("\n")])])]),s("p",[a._v("发送一条消息")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("this is a test from message\n")])])]),s("p",[a._v("效果如下图,用了"),s("code",[a._v("tmux")]),a._v("做了窗口分隔处理:")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/operation/kafka_01.png")}}),a._v(" "),s("h1",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),s("ul",[s("li",[a._v("略\n")])])])}),[],!1,null,null,null);s.default=r.exports}}]);