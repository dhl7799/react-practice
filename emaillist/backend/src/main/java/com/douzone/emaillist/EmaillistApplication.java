package com.douzone.emaillist;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;



@SpringBootApplication
public class EmaillistApplication {

	
	public static void main(String[] args) {
		SpringApplication.run(EmaillistApplication.class, args);
	}
	
	/*
	@Bean
	public ApplicationRunner scriptRunner() {
		return new ApplicationRunner() {
			@Autowired
			private SqlSessionFactory sqlSessionFactory;
			
			@Override
			public void run(ApplicationArguments args) throws Exception {
				ScriptRunner scriptRunner = new ScriptRunner(sqlSessionFactory.getConfiguration().getEnvironment().getDataSource().getConnection());
				scriptRunner.runScript(Resources.getResourceAsReader("sql/db-setup.sql"));
			}
		};
	}*/

}
