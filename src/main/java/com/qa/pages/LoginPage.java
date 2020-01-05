package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.base.BaseClass;
import com.qa.util.WebDriverUtils;

public class LoginPage extends BaseClass{
	
	//Page Factory
	@FindBy(xpath = "//input[@ng-model='user.name']")
	static WebElement username; 
	
	@FindBy(xpath= "//input[@type='password']")
	static WebElement password;
	
	@FindBy(xpath="//button[@type='submit']")
	static WebElement loginBtn;
	
	
	//Initializing the Page Objects:
	public LoginPage(){
		PageFactory.initElements(driver, this);
	}
	
	//Actions:
	public String validateLoginPageTitle(){
		return driver.getTitle();
	}
	
	public void enterUser(String user) {
	     WebDriverUtils.setText(username, user);     
	}
	
	public  void enterPassword(String pwd) {
		 WebDriverUtils.setText(password, pwd);
	}
	
	public HomePage submit(){
		
        loginBtn.click();
		return new HomePage();
	}
	
}