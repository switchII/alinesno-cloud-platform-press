# Jenkins 权限插件配置

## 本内容你将获得

- Jenkins 安装及插件配置
- Jenkins 权限配置

## 插件安装

### 说明

jenkins 本身带有一定的权限配置,但是通用情况下，更推荐一个细分的权限插件`Role-based Authorization Strategy`

主要安装的插件如下:

- 权限管理插件：Role-based Authorization Strategy
- Maven构建插件：Maven Integration plugin
- 远程服务器插件: Publish Over SSH
- 单元测试报表插件：Allure Jenkins Plugin
- 钉钉通知插件: Dingtalk

配置的环境变量:

> 这里注意一下jdk和maven的版本号

- docker认证: 环境变量名称是`alinesno-cloud-docker-cret`
- jdk: 环境名称是`jdk-11.0.9`
- maven: 环境变量名称是`apache-maven-3.8.6`
- dingtalk机器人: 环境变量ID是`alinesno-operation-dingtalk-robot`

## 插件安装

点击系统管理，进入系统管理页面，点击插件管理选项
<img src="/operation/jenkins_18.jpg" style="width:80%"/>

进入插件管理页面之后，可在右上角的搜索框进行搜索，搜索自己需要安装的插件即可
<img src="/operation/jenkins_19.jpg" style="width:80%"/>

找到需要安装的插件时，在选择框内勾选，然后点击底部的安装方式。根据实际情况选择“直接安装”或“下载待重启后安装”
<img src="/operation/jenkins_20.jpg" style="width:80%"/>

## 权限配置

在插件安装完成之后，还不能出现插件的配置，需要调整插件配置策略,选择`Role-Based Strategy`
<img src="/operation/jenkins_15.jpg" style="width:80%"/>

在选择之后，返回 jenkins 配置，出现以下的选择功能，点击进去配置即可
<img src="/operation/jenkins_16.jpg" style="width:80%"/>

点击进入`Manager Roles`配置。配置目标是建立一个开发角色,角色名为`developer`功能选择按如下即可
<img src="/operation/jenkins_21.jpg" style="width:80%"/>

返回上一层，进入`Assign Roles`配置，为目标用户分配角色即可。此处为`平台开发管理员`用户分配`developer`角色
<img src="/operation/jenkins_22.jpg" style="width:80%"/>

## 环境变量

参考以下链接，配置jdk和maven的环境变量

- [CENTOS7下安装配置JENKINS+GIT+MAVEN+JDK](https://www.cnblogs.com/zuidongfeng/p/10054831.html)

Dingtalk插件的配置

- [Jenkins 集成 DingTalk 插件实现项目构建状态钉钉消息推送](https://blog.csdn.net/xu990128638/article/details/106643585)

## 其它

- 无


