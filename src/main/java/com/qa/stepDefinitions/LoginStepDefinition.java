package com.qa.stepDefinitions;


import com.qa.base.BaseClass;
import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.WebDriverUtils;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class LoginStepDefinition extends BaseClass{
	
	LoginPage loginPage;
	HomePage homePage;
	
	public LoginStepDefinition() {
		super();
	}
	

	@When("^user is in the login page$")
	public void user_is_in_the_login_page() throws Throwable {
		BaseClass.intialize();
		loginPage = new LoginPage();
	    WebDriverUtils.openURL(prop.getProperty("url"));
	    WebDriverUtils.waitForPageToBeLoaded(2000);
	}

	@Then("^Title should be \"([^\"]*)\"$")
	public void title_should_be(String title) throws Throwable {
	    
		String pageTitle=loginPage.validateLoginPageTitle();
		Assert.assertEquals(pageTitle, title);
	}

	@Then("^Close the browser$")
	public void close_the_browser() throws Throwable {
	    WebDriverUtils.closeBrowser();
	}
	
	@When("^User enters username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_enters_username_and_password(String user, String password)  {
	  
		 loginPage.enterUser(user);
		 loginPage.enterPassword(password);
	}

	@When("^clicks on Login button$")
	public void clicks_on_Login_button() {
	    homePage= loginPage.submit();
	}


    @SuppressWarnings("deprecation")
	@Then("^validate usename \"([^\"]*)\" is visible$")
    public void validate_usename_is_visible(String userName) throws Throwable {
           boolean flag=homePage.validateUser(userName);
           Assert.assertTrue(flag);
     }

	
}
