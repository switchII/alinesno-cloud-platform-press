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

## 插件安装

点击系统管理，进入系统管理页面，点击插件管理选项 
<img src="/operation/jenkins_18.png" style="width:80%"/>

进入插件管理页面之后，可在右上角的搜索框进行搜索，搜索自己需要安装的插件即可 
<img src="/operation/jenkins_19.png" style="width:80%"/>

找到需要安装的插件时，在选择框内勾选，然后点击底部的安装方式。根据实际情况选择“直接安装”或“下载待重启后安装” 
<img src="/operation/jenkins_20.png" style="width:80%"/>

## 权限配置

在插件安装完成之后，还不能出现插件的配置，需要调整插件配置策略,选择`Role-Based Strategy` 
<img src="/operation/jenkins_15.png" style="width:80%"/>

在选择之后，返回 jenkins 配置，出现以下的选择功能，点击进去配置即可
<img src="/operation/jenkins_16.png" style="width:80%"/>

点击进入`Manager Roles`配置。配置目标是建立一个开发角色,角色名为`developer`功能选择按如下即可 
<img src="/operation/jenkins_21.png" style="width:80%"/>

返回上一层，进入`Assign Roles`配置，为目标用户分配角色即可。此处为`平台开发管理员`用户分配`developer`角色 
<img src="/operation/jenkins_22.png" style="width:80%"/>

## 其它 
- 无
