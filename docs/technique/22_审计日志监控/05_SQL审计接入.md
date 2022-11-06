# SQL审计接入

## 概述

这里sql审计监控接入是一个统一的sql运行状态接入，偏向于sql操作日志的监控集成，包括sql执行快慢，条数等，
每个应用的聚合

## 本内容你将获得

- SQL审计监控日志接入说明

## 接入配置

这里主要是通过配置druid接入配置，然后采集监控的日志进行统一汇总聚合，集成如下:

配置druid数据库的驱动，使`yaml`配置如下:
```yaml
spring:
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource  # 配置druid驱动
    url: jdbc:mysql://127.0.0.1:3306/DB_NAME?useUnicode=true&characterEncoding=utf8&characterSetResults=utf8&useSSL=false&serverTimezone=GMT&allowPublicKeyRetrieval=true
    username: DB_USERNAME
    password: DB_PASSWORD
```

配置SQL数据采集和自定义stat类`DruidMonitorStatLogger`，同时配置相关参数，如下:
```java
@Configuration
public class DruidConfig {

	@Bean(initMethod = "init", destroyMethod = "close")
	@ConfigurationProperties(prefix = "spring.datasource")
	public DruidDataSource dataSource(Filter statFilter) throws SQLException {

		DruidDataSource dataSource = new DruidDataSource();

		// 添加自定义的stat，以输出到统一集成平台上面
		DruidMonitorStatLogger logger = new DruidMonitorStatLogger();

		dataSource.setTimeBetweenLogStatsMillis(5*1000);
		dataSource.setFilters("wall,stat");
		dataSource.setUseGlobalDataSourceStat(false);
		dataSource.setStatLogger(logger);
		dataSource.setProxyFilters(Lists.newArrayList(statFilter()));

		return dataSource;
	}

	@Bean
	public Filter statFilter() {
		StatFilter filter = new StatFilter();
		filter.setSlowSqlMillis(90);
		filter.setLogSlowSql(true);
		filter.setMergeSql(true);
		return filter;
	}
}
```

配置成功即可，则整个的审计日志监控采集管理界面如下:

<img src="/technique/watcher/05_sql_audit.png" style="width:90%" />

注意: 审计日志监控服务属于内部业务系统，不要对外和外部访问

## 其它

- 无
