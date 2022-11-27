# 应用接入监控

## 示例

以下为接入示例的springboot日志接入`logback-spring.xml`示例文件文件[示例][logback-spring]

## 本内容你将获得

- [后端]SpringBoot应用接入的示例
- [前端]Nginx日志接入的示例

## 接入配置

这里接入配置按最简化配置接入，实现日志的收集和管理即可

### 后端接入

添加日志用依赖, 如下：

```xml
<dependency>
  <groupId>com.alinesno.cloud.watcher</groupId>
  <artifactId>alinesno-cloud-watcher-core</artifactId>
  <version>${revison}</version>
</dependency>

<dependency>
  <groupId>com.alinesno.cloud.watcher</groupId>
  <artifactId>alinesno-cloud-watcher-logback</artifactId>
  <version>${revison}</version>
</dependency>
```

这里接入当前为支持kafka接入，配置替换掉springboot的日志服务即可，主要配置说明，
这里主要是配置kafka地址即可

```xml
<springProperty scope="context" name="watcher.appName" source="spring.application.name"/>
<springProperty scope="context" name="watcher.env" source="spring.profiles.active"/>

 <!-- 使用kafka队列配置 -->
<appender name="ALINESNO-CLOUD-WATCHER" class="com.alinesno.cloud.watcher.logback.appender.KafkaAppender">
    <appName>${watcher.appName}</appName>

    <!-- 这里配置kafka的接入地址-->
    <kafkaHosts>192.168.1.1:9092</kafkaHosts>
    <env>${watcher.env}</env>
</appender>

<root level="INFO">
    <!-- 添加appender -->
    <appender-ref ref="ALINESNO-CLOUD-WATCHER"/>
</root>
```

容器发布指定发布日志，例如K8S发布中配置如下:
```yml
- name: JAVA_TOOL_OPTIONS
  value: '-Xms128m -Xmx512m -Dspring.profiles.active=test -Dlogging.config=classpath:logback/logback-spring.xml'
```

完善代码请查看示例文件[示例][logback-spring]

### 前端接入

nginx的log日志格式配置如下,这里注意配置下`appName`:
```json
log_format json '{"dtTime":"$time_iso8601",'
           '"logLevel":"INFO",'
           '"className":"$uri",'
           '"content":"requestParam=>$query_string \n status=>$status \n size=>$body_bytes_sent \n request_time=>$request_time",'
           '"serverName":"$server_addr",'
           '"traceId":"$remote_addr",'
           '"method":"$http_user_agent",'
           '"appName":"alinesno-cloud-watcher-ui"'  # 注意修改成自己的appName
           '}';
access_log  /var/log/nginx/logs/access.log  json;
```

这里有一个比较全的，可参考集成nginx日志服务信息:

```json
log_format json_analytics '{'
                    '"msec": "$msec", ' # request unixtime in seconds with a milliseconds resolution
                    '"connection": "$connection", ' # connection serial number
                    '"connection_requests": "$connection_requests", ' # number of requests made in connection
                    '"pid": "$pid", ' # process pid
                    '"request_id": "$request_id", ' # the unique request id
                    '"request_length": "$request_length", ' # request length (including headers and body)
                    '"remote_addr": "$remote_addr", ' # client IP
                    '"remote_user": "$remote_user", ' # client HTTP username
                    '"remote_port": "$remote_port", ' # client port
                    '"time_local": "$time_local", '
                    '"time_iso8601": "$time_iso8601", ' # local time in the ISO 8601 standard format
                    '"request": "$request", ' # full path no arguments if the request
                    '"request_uri": "$request_uri", ' # full path and arguments if the request
                    '"args": "$args", ' # args
                    '"status": "$status", ' # response status code
                    '"body_bytes_sent": "$body_bytes_sent", ' # the number of body bytes exclude headers sent to a client
                    '"bytes_sent": "$bytes_sent", ' # the number of bytes sent to a client
                    '"http_referer": "$http_referer", ' # HTTP referer
                    '"http_user_agent": "$http_user_agent", ' # user agent
                    '"http_x_forwarded_for": "$http_x_forwarded_for", ' # http_x_forwarded_for
                    '"http_host": "$http_host", ' # the request Host: header
                    '"server_name": "$server_name", ' # the name of the vhost serving the request
                    '"request_time": "$request_time", ' # request processing time in seconds with msec resolution
                    '"upstream": "$upstream_addr", ' # upstream backend server for proxied requests
                    '"upstream_connect_time": "$upstream_connect_time", ' # upstream handshake time incl. TLS
                    '"upstream_header_time": "$upstream_header_time", ' # time spent receiving upstream headers
                    '"upstream_response_time": "$upstream_response_time", ' # time spend receiving upstream body
                    '"upstream_response_length": "$upstream_response_length", ' # upstream response length
                    '"upstream_cache_status": "$upstream_cache_status", ' # cache HIT/MISS where applicable
                    '"ssl_protocol": "$ssl_protocol", ' # TLS protocol
                    '"ssl_cipher": "$ssl_cipher", ' # TLS cipher
                    '"scheme": "$scheme", ' # http or https
                    '"request_method": "$request_method", ' # request method
                    '"server_protocol": "$server_protocol", ' # request protocol, like HTTP/1.1 or HTTP/2.0
                    '"pipe": "$pipe", ' # "p" if request was pipelined, "." otherwise
                    '"gzip_ratio": "$gzip_ratio", '
                    '"http_cf_ray": "$http_cf_ray"'
                    '}';
access_log logs/json_access.log json_analytics;

```

前端接入这里集成的是`filebeat`数据抽取服务，输入到kafka队列中，`filebeat`配置如下:

```yaml
filebeat.prospectors:
- input.type: log	# 来源的类型
  enabled: true	  	# 表示这个input源启动
  include_lines: ['content'] #包含 content 的行
  paths:
    - /var/log/nginx/logs/*.log # 监听文件的路径
  tail_files: true	# 是否 tail 的方式
  fields:
    topicname: watcher_log_list # 自定义的字段名，可以在配置文件的别的地方引用

#输出源为kafka，下面配置 kafka 的连接地址和 topic
output.kafka:
    hosts: ["192.168.1.1:9092"]
    topic: '%{[fields.topicname]}'
```

这里filebeta的使用安装请查询相关文档

## 其它

- 后端也可以不接入spring-logback.xml的配置，使用filebeat收集日志，这个主要还是需要看项目的情况

[logback-spring]: https://gitee.com/alinesno-cloud/alinesno-demo-gateway-open/blob/master/demo-watcher/logback-spring.xml
