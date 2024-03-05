(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{536:function(s,t,a){"use strict";a.r(t);var e=a(8),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nexus-安装及权限配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nexus-安装及权限配置"}},[s._v("#")]),s._v(" Nexus 安装及权限配置")]),s._v(" "),t("h2",{attrs:{id:"nexus-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nexus-安装"}},[s._v("#")]),s._v(" Nexus 安装")]),s._v(" "),t("h3",{attrs:{id:"上传安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传安装"}},[s._v("#")]),s._v(" 上传安装")]),s._v(" "),t("p",[s._v("上传 Nexus 至 Linux 服务器"),t("code",[s._v("/home/alinesno/soft")]),s._v("目录")]),s._v(" "),t("blockquote",[t("p",[s._v("此处用户可以使用 xftp 或者 xshell 等工具，书要简言")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("示例: "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" nexus-2.14.1-01-bundle.tar.gz alinesno@192.168.1.110:~/soft/\n")])])]),t("p",[s._v("安装 nexus")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" ~/nexus\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" ~/soft/nexus-2.14.1-01-bundle.tar.gz "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" ~/nexus/\n")])])]),t("blockquote",[t("p",[s._v("Nexus 的私服库会默认安装在~/.m2 目录下面，此处我们使用的默认的即可")])]),s._v(" "),t("p",[s._v("启动 nexus")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/nexus/nexus-2.14.1-01/bin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RUN_AS_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n./nexus start\n")])])]),t("p",[s._v("访问http://192.168.1.110:8081/nexus ,出现如下界面:")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/operation/nexus_01.png")}}),s._v(" "),t("h3",{attrs:{id:"国内代理库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#国内代理库"}},[s._v("#")]),s._v(" 国内代理库")]),s._v(" "),t("blockquote",[t("p",[s._v("管理员账号:"),t("code",[s._v("admin/1234qwer")])])]),s._v(" "),t("blockquote",[t("p",[s._v("开发人员账号:"),t("code",[s._v("deployment/1234qwer")]),s._v("(后面配置使用统一使用开发人员账号)")])]),s._v(" "),t("p",[s._v("登陆 nexus,默认密码"),t("code",[s._v("admin/admin1234")]),s._v(",修改密码为:"),t("code",[s._v("1234qwer")]),s._v(":")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/operation/nexus_02.png")}}),s._v(" "),t("p",[s._v("修改开发人员密码")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/operation/nexus_06.png")}}),s._v(" "),t("p",[s._v("添加阿里云库")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/operation/nexus_03.png")}}),s._v(" "),t("p",[s._v("填写配置库配置信息,点击保存即可")]),s._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("Repository")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("ID: Aliyun")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("Repository")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("Name: Aliyun")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("Remote")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("Storage Location: http://maven.aliyun.com/nexus/content/groups/public/")]),s._v("\n")])])]),t("img",{attrs:{src:s.$withBase("/operation/nexus_04.png")}}),s._v(" "),t("p",[s._v("将阿里云库添加到公共库中（公共库为对外统一库，maven 连接使用的就是这个库)")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/operation/nexus_05.png")}}),s._v(" "),t("p",[s._v("配置点击保存即可")]),s._v(" "),t("h2",{attrs:{id:"添加-nexus-开机自启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加-nexus-开机自启动"}},[s._v("#")]),s._v(" 添加 nexus 开机自启动")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/rc.d\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" rc.local\n nexus开机自启\n/root/nexus/nexus-2.14.1-01/bin/nexus start\n")])])]),t("p",[s._v("保存后退出")]),s._v(" "),t("h2",{attrs:{id:"添加-nexus-在-nginx-中的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加-nexus-在-nginx-中的配置"}},[s._v("#")]),s._v(" 添加 nexus 在 nginx 中的配置")]),s._v(" "),t("p",[s._v("vim nexus.lbxinhu.com.conf")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name  nexus.lbxinhu.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        location /nexus "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         http://47.113.116.150 :8081/nexus/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#welcome")]),s._v("\n                proxy_pass http://127.0.0.1:8081/nexus "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#来自jsp请求交给tomcat处理")]),s._v("\n                proxy_cookie_path  / /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                proxy_redirect off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                proxy_set_header Host "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#后端的Web服务器可以通过X-Forwarded-For获取用户真实IP")]),s._v("\n                proxy_set_header X-Real-IP "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                proxy_set_header X-Forwarded-For "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        client_max_body_size 100m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许客户端请求的最大单文件字节数")]),s._v("\n        client_body_buffer_size 100m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#缓冲区代理缓冲用户端请求的最大字节数")]),s._v("\n        proxy_connect_timeout "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#nginx跟后端服务器连接超时时间(代理连接超时)")]),s._v("\n        proxy_read_timeout "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#连接成功后，后端服务器响应时间(代理接收超时)")]),s._v("\n         proxy_buffer_size 32k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置代理服务器（nginx）保存用户头信息的缓冲区大小")]),s._v("\n         proxy_busy_buffers_size 128k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#高负荷下缓冲大小（proxy_buffers*2）")]),s._v("\n        proxy_temp_file_write_size 24m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设定缓存文件夹大小，大于这个值，将从upstream服务器传")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);