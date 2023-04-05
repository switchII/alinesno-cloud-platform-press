# Trivy 镜像检测安装

## 概述

Trivy 是一种适用于 CI 的简单而全面的容器漏洞扫描程序。软件漏洞是指软件或操作系统中存在的故障、缺陷或弱点。
Trivy 检测操作系统包（Alpine、RHEL、CentOS等）和应用程序依赖（Bundler、Composer、npm、yarn等）的漏洞。

## 针对场景

- DevSecOps安装检测场景

## 安装

这里针对的是CentOS7的安装，其它环境自行找安装包

```sh
wget https://github.com/aquasecurity/trivy/releases/download/v0.16.0/trivy_0.16.0_Linux-64bit.rpm
```

安装下载的包
```sh
rpm -ivh trivy_0.16.0_Linux-64bit.rpm
准备中...                          ################################# [100%]
正在升级/安装...
   1:trivy-0:0.16.0-1                 ################################# [100%]
```

查看版本号
```sh
trivy -v
Version: 0.16.0
```

## 配置离线库

由于内网还有网络等原因，下载的速度比较库，配置离线库，脚本如下:
```sh
cp /root/trivy-offline.db.tgz .cache/trivy/db/
cd .cache/trivy/db/
tar zxvf trivy-offline.db.tgz

# ls
metadata.json  trivy.db  trivy-offline.db.tgz
rm trivy-offline.db.tgz
```

离线库github下载即可

## 验证

```sh
trivy registry-vpc.cn-shenzhen.aliyuncs.com/alinesno-cloud-base/alinesno-cloud-data-assets-boot
```

## 其它

- 无
