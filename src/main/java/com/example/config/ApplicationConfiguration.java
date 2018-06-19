package com.example.config;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

@Configuration
@ComponentScan("com.example")
@EnableAutoConfiguration
public class ApplicationConfiguration {

	@Bean
	@ConfigurationProperties(prefix = "sql.db")
	public BasicDataSource dataSourceMySql(){
		return new BasicDataSource();
	}
	
	@Bean(name = "jdbcTemplate")
	public JdbcTemplate configureJdbcTemplate(BasicDataSource basicDataSource){
		return new JdbcTemplate(basicDataSource);
	}
	
}
