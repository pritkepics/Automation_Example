package com.qa.runner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features="src/main/java/com/qa/Features",
		glue="com/qa/stepDefinitions",
		strict=true,
		dryRun = false,
		format = {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}
		
		)

 public class TestRunner {

	    }
