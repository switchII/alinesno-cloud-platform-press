# 该镜像需要依赖的基础镜像
FROM registry.cn-shenzhen.aliyuncs.com/alinesno-base/nginx-alpha:1.1.4

RUN wget -c https://github.com/hnlq715/nginx-vts-exporter/releases/download/v0.9.1/nginx-vts-exporter-0.9.1.linux-amd64.tar.gz
RUN tar -xvf nginx-vts-exporter-0.9.1.linux-amd64.tar.gz -C /usr/local/

WORKDIR /usr/share/nginx/html
COPY docs/.vuepress/dist ./

# 声明服务运行在80端口
EXPOSE 80 9113

ADD run.sh ./
CMD ["sh", "run.sh"]
