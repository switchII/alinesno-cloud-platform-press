(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{539:function(s,a,t){"use strict";t.r(a);var e=t(8),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"redis-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-配置"}},[s._v("#")]),s._v(" Redis 配置")]),s._v(" "),a("h3",{attrs:{id:"redis-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-安装"}},[s._v("#")]),s._v(" Redis 安装")]),s._v(" "),a("h4",{attrs:{id:"上传安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传安装"}},[s._v("#")]),s._v(" 上传安装")]),s._v(" "),a("p",[s._v("上传 Redis 至 Linux 服务器"),a("code",[s._v("/home/alinesno/soft")]),s._v("目录")]),s._v(" "),a("blockquote",[a("p",[s._v("此处用户可以使用 xftp 或者 xshell 等工具，书要简言")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("示例: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" redis-5.0.0.tar.gz alinesno@192.168.1.110:~/soft/\n")])])]),a("h4",{attrs:{id:"编译安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译安装"}},[s._v("#")]),s._v(" 编译安装")]),s._v(" "),a("p",[s._v("安装源码包")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" gcc*\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 创建目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /opt/alinesno/redis5\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" /home/alinesno/soft/redis-5.0.0.tar.gz "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" /opt/alinesno/redis5\n")])])]),a("p",[s._v("编译 redis")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis5\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("p",[s._v("修改参数")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-5.0.0/conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" redis.conf\ndaemonize "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" --原为no,后台运行redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("修改后启动redis,不出现那种所谓的蛋糕图"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),s._v(" "),a("h2",{attrs:{id:"redis-启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-启动"}},[s._v("#")]),s._v(" redis 启动")]),s._v(" "),a("p",[s._v("编写 redis-start.sh 启动脚本")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" redis-start.sh\n")])])]),a("p",[s._v("内容如下")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./bin/redis-server ./conf/redis.conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),a("p",[s._v("添加可执行权限")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 添加可执行权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x redis-start.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 启动")]),s._v("\n~/redis-5.0.0/redis-start.sh\n")])])]),a("h2",{attrs:{id:"添加-redis-开机自启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加-redis-开机自启动"}},[s._v("#")]),s._v(" 添加 redis 开机自启动")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/rc.d\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" rc.local\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis开机自启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" /opt/alinesno/redis5/redis-5.0.0/redis-start.sh\n")])])]),a("p",[s._v("保存后退出")])])}),[],!1,null,null,null);a.default=r.exports}}]);