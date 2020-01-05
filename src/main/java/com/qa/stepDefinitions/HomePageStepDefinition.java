package com.qa.stepDefinitions;

import com.qa.base.BaseClass;
import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.WebDriverUtils;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Assert;


public class HomePageStepDefinition extends BaseClass{

	HomePage homePage;
	LoginPage loginPage;
	public HomePageStepDefinition() {
		super();
	}

	@When("^user logs in to the application using user \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_logs_in_to_the_application_using_user_and_password(String arg1, String arg2) throws Throwable {
		BaseClass.intialize();
		loginPage= new LoginPage();
		homePage = new HomePage();
		WebDriverUtils.openURL(prop.getProperty("url"));
		WebDriverUtils.waitForPageToBeLoaded(2000);
		loginPage.enterUser("Luke");
        loginPage.enterPassword("Skywalker");
        loginPage.submit();
	}
	
	@SuppressWarnings("deprecation")
	@When("^user is in the home page$")
	public void user_is_in_the_home_page() throws Throwable {
	    
		boolean flag=homePage.isCreateLinkVisible();
	    Assert.assertTrue(flag);
	}
	
	@When("^user clicks on create link$")
	public void user_clicks_on_create_link() throws Throwable {
		homePage.clickOnCreateLink();
	}

	
	@Then("^user enters fname \"([^\"]*)\"$")
	public void user_enters_fname(String firstName) throws Throwable {
	 	  homePage.enterFirstName(firstName);
	}

	@Then("^user will provide lname \"([^\"]*)\"$")
	public void user_will_provide_lname(String lastName) throws Throwable {
	      homePage.enterLastName(lastName);
	}

	@Then("^user will give stDate \"([^\"]*)\"$")
	public void user_will_give_stDate(String startDate) throws Throwable {
	   homePage.enterStartDate(startDate);
	}

	@Then("^user should enter email \"([^\"]*)\"$")
	public void user_should_enter_email(String email) throws Throwable {
	    homePage.enterEmail(email);
	}
	@Then("^user clicks Add button$")
	public void user_clicks_Add_button() throws Throwable {
	     homePage.clickAdd();
	}


	
	@Then("^validate \"([^\"]*)\" appears in the table$")
	public void validate_appears_in_the_table(String userName) throws Throwable {
	    boolean flag=homePage.validateUser(userName);
	    Assert.assertTrue(flag);
	}

	@When("^user Clicks on user \"([^\"]*)\" entry$")
	public void user_Clicks_on_user_entry(String user) throws Throwable {
		homePage.clickOnUserName(user);   
	}

	@When("^user clicks on edit link$")
	public void user_clicks_on_edit_link() throws Throwable {
	    homePage.clickEditLink();
	}

	@Then("^user clicks on update button$")
	public void user_clicks_on_update_button()throws Throwable {
		homePage.clickUpdateButton();
	}
	
	
	@Then("^updated name \"([^\"]*)\" should reflect$")
	public void updated_name_should_reflect(String name) throws Throwable {
	 
	  boolean flag=homePage.verifyUpdatedName(name);	
	  Assert.assertTrue(flag);
				
	}

	@When("^user clicks on delete link$")
	public void user_clicks_on_delete_link() throws Throwable {
	    homePage.clickDeleteLink();
	}

	@Then("^user clicks on OK button$")
	public void user_clicks_on_OK_button() throws Throwable {
	    
	    homePage.clickAlertOK();
	}

	@Then("^the username \"([^\"]*)\" should not be visible$")
	public void the_username_should_not_be_visible(String name) throws Throwable {
		  boolean flag=homePage.verifyUpdatedName(name);	
		  Assert.assertTrue(flag);
	}

	@Then("^close browser$")
	public void close_browser() throws Throwable {
	    WebDriverUtils.closeBrowser();
	}

	
}
