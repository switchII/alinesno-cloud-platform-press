(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{536:function(a,s,t){"use strict";t.r(s);var r=t(8),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"sonarqube7-4-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sonarqube7-4-安装"}},[a._v("#")]),a._v(" sonarqube7.4 安装")]),a._v(" "),s("h2",{attrs:{id:"snarqube-安装说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#snarqube-安装说明"}},[a._v("#")]),a._v(" snarqube 安装说明")]),a._v(" "),s("p",[a._v("条件限制：")]),a._v(" "),s("ol",[s("li",[a._v("jdk1.8")]),a._v(" "),s("li",[a._v("数据库 oracle 的运行环境是 jre8 ,mysql 支持 5.6 ，5.7")]),a._v(" "),s("li",[a._v("浏览器必须启动支持 javascript ，支持火狐，谷歌，苹果等浏览器，支持 IE11 以上的版本。")])]),a._v(" "),s("h2",{attrs:{id:"下载-sonar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载-sonar"}},[a._v("#")]),a._v(" 下载 Sonar")]),a._v(" "),s("p",[a._v("链接：https://pan.baidu.com/s/10FIvnR0Me48EFG2kGX1vUg\n提取码：v430")]),a._v(" "),s("h2",{attrs:{id:"上传解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传解压"}},[a._v("#")]),a._v(" 上传解压")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" sonarqube\n上传到目录 /opt/alinesno/sonarqube\n解压: "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" sonarqube-7.4.zip\n")])])]),s("h2",{attrs:{id:"新建-sonar-用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建-sonar-用户"}},[a._v("#")]),a._v(" 新建 sonar 用户")]),a._v(" "),s("p",[a._v("由于 sonar 是不允许 root 用户情况下运行的，因此需要先创建一个非 root 用户。 这里，创建一个名为 sonar 的用户\nuseradd sonar\n设置密码\npasswd sonar\n密码为：Alinesno123$%^123")]),a._v(" "),s("h2",{attrs:{id:"设置目录权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置目录权限"}},[a._v("#")]),a._v(" 设置目录权限")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-R")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("777")]),a._v(" sonarqube-7.4\n")])])]),s("p",[a._v("执行完以后,使用 ll 命令查看目录下文件详细,发现权限已经全部打开了,所有用户都可访问")]),a._v(" "),s("h2",{attrs:{id:"设置文件所属用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置文件所属用户"}},[a._v("#")]),a._v(" 设置文件所属用户")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-R")]),a._v(" sonar:sonar /opt/alinesno/sonarqube/sonarqube-7.4\n")])])]),s("h2",{attrs:{id:"修改配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[a._v("#")]),a._v(" 修改配置文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /sonarqube-7.4/conf\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" sonar.properties\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改以下内容")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("sonar.jdbc.url")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("jdbc:mysql://47.113.116.150:3306/qjfsonar?useUnicode"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("characterEncoding")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("utf8"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("rewriteBatchedStatements")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("useConfigs")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("maxPerformance\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("sonar.jdbc.username")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("sonar.jdbc.password")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("HouGuiYu@123"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("@"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("sonar.sorceEncoding")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("UTF-8\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("sonar.login")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("admin\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("sonar.password")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("admin\n")])])]),s("p",[a._v("这里是修改数据库配置，请务必在事先创建好名为 qjfsonar 的数据库，否则将启动失败")]),a._v(" "),s("h2",{attrs:{id:"启动-sonarqube"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-sonarqube"}},[a._v("#")]),a._v(" 启动 sonarqube")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /opt/alinesno/sonarqube/sonarqube-7.4/bin/linux-x86-64\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" sonar.sh  start     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#启动服务")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" sonar.sh stop       "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#停止服务")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" sonar.sh restart    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#重启服务")]),a._v("\n")])])]),s("p",[a._v("查看日志")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-F")]),a._v(" sonarqube-7.4/logs/sonar.log\n")])])]),s("h2",{attrs:{id:"访问-sonarqube"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问-sonarqube"}},[a._v("#")]),a._v(" 访问 sonarqube")]),a._v(" "),s("p",[a._v("访问 "),s("a",{attrs:{href:"http://sonarqube.lbxinhu.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://sonarqube.lbxinhu.com/"),s("OutboundLink")],1),a._v("\n登录：admin/admin\n设置 token 为:alinesno\n这里生成的密码串为 alinesno: 37231eae21cf053709a1fc93b99ba4503a91b532，请注意保存")]),a._v(" "),s("h2",{attrs:{id:"中文插件的安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中文插件的安装"}},[a._v("#")]),a._v(" 中文插件的安装")]),a._v(" "),s("p",[a._v("7.4 版本的只能使用 sonar-l10n-zh-plugin-1.24 版的中文插件\n下载完成后，将插件包上传至/extensions/plugins 目录中，重启 sonar 生效")]),a._v(" "),s("h1",{attrs:{id:"添加-sonarqube-开机自启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加-sonarqube-开机自启动"}},[a._v("#")]),a._v(" 添加 sonarqube 开机自启动")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /etc/rc.d\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" rc.local\n sonarqube开机自启\n/opt/alinesno/sonarqube/sonarqube-7.4/bin/sonar.sh  start\n")])])]),s("p",[a._v("保存后退出")]),a._v(" "),s("h1",{attrs:{id:"添加-maven-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加-maven-配置"}},[a._v("#")]),a._v(" 添加 maven 配置")]),a._v(" "),s("p",[a._v("在全局的 settings 文件中加入如下配置:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/profiles"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("profile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("sonarqube"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("activation"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("activeByDefault"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("true"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/activeByDefault"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("jdk"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("."),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("8")]),a._v("<")]),a._v("/jdk"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/activation"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("properties"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("--\n                        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sonar.host.url"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("http://sonarqube.lbxinhu.com"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/sonar.host.url"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sonar.host.url"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("http://localhost:900"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("0")]),a._v("<")]),a._v("/sonar.host.url"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                        --"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sonar.host.url"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("http://localhost:900"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("0")]),a._v("<")]),a._v("/sonar.host.url"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sonar.login"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("37231eae21cf053709a1fc93b99ba4503a91b53"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v("<")]),a._v("/sonar.login"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sonar.password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/sonar.password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sonar.inclusions"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("**/*.java,**/*.xml"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/sonar.inclusions"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/properties"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/profile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/profiles"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("--激活profile --"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("activeProfiles"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("activeProfile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("linesno"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/activeProfile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("activeProfile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("sonarqube"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/activeProfile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/activeProfiles"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("由于是设置 token 为 sonar 的身份认证信息，所以 password 留空即可")]),a._v(" "),s("h1",{attrs:{id:"在-nginx-中配置超时设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-nginx-中配置超时设置"}},[a._v("#")]),a._v(" 在 nginx 中配置超时设置")]),a._v(" "),s("p",[a._v("vim sonarqube.lbxinhu.com.conf\n添加一下内容")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        listen       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        server_name  sonarqube.lbxinhu.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n        location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                 proxy_pass http://47.113.116.150:9000/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#来自jsp请求交给tomcat处理")]),a._v("\n                proxy_pass http://localhost:9000/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#来自jsp请求交给tomcat处理")]),a._v("\n                proxy_redirect off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                proxy_next_upstream_tries "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("     超时重复请求次数\n                proxy_set_header Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#后端的Web服务器可以通过X-Forwarded-For获取用户真实IP")]),a._v("\n                proxy_set_header X-Real-IP "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$remote_addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                proxy_set_header X-Forwarded-For "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$proxy_add_x_forwarded_for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                client_max_body_size 10m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#允许客户端请求的最大单文件字节数")]),a._v("\n                client_body_buffer_size 128k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#缓冲区代理缓冲用户端请求的最大字节数")]),a._v("\n                proxy_connect_timeout "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#nginx跟后端服务器连接超时时间(代理连接超时)")]),a._v("\n                proxy_read_timeout "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#连接成功后，后端服务器响应时间(代理接收超时)")]),a._v("\n                proxy_buffer_size 4k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#设置代理服务器（nginx）保存用户头信息的缓冲区大小")]),a._v("\n                proxy_buffers "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(" 32k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#proxy_buffers缓冲区，网页平均在32k以下的话，这样设置")]),a._v("\n                proxy_busy_buffers_size 64k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#高负荷下缓冲大小（proxy_buffers*2）")]),a._v("\n                proxy_temp_file_write_size 64k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#设定缓存文件夹大小，大于这个值，将从upstream服务器传")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h1",{attrs:{id:"使用-sonar-执行分析时的注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-sonar-执行分析时的注意事项"}},[a._v("#")]),a._v(" 使用 sonar 执行分析时的注意事项")]),a._v(" "),s("p",[a._v("1、出现 sonar 权限不足异常\n参考解决方案：在 sonar:sonar 后添加身份信息，如")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("  mvn sonar:sonar "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Dsonar.host.url")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://sonarqube.lbxinhu.com "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Dsonar.login")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("37231eae21cf053709a1fc93b99ba4503a91b532\n")])])]),s("p",[a._v("2、出现"),s("code",[a._v("Please provide compiled classes of your project with sonar.java.binaries property")]),a._v("\n错误分析：sonar 执行代码分析时，会涉及到其他编译后源码的分析，由于没有编译导致源码缺失报错")]),a._v(" "),s("p",[a._v("参考解决方案:\n在执行 maven 的 compile 命令后再执行 sonar:sonar\n如")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mvn  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-B")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-U")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${WORKSPACE}")]),a._v("/pom.xml clean compile sonar:sonar\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);