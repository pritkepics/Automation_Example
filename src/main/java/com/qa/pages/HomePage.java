package com.qa.pages;

import org.openqa.selenium.By;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.base.BaseClass;
import com.qa.util.WebDriverUtils;

import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class HomePage extends BaseClass {

	// page factory
	@FindBy(xpath = "//a[contains(.,'Create')]")
	static WebElement createLink;
	
	@FindBy(xpath = "//input[@ng-model='selectedEmployee.firstName']")
	static WebElement fName;
	
	@FindBy(xpath = "//input[@ng-model='selectedEmployee.lastName']")
	static WebElement lName;
	
	@FindBy(xpath = "//input[@title='Please enter a date formatting YYYY-MM-DD']")
	static WebElement startDt;
	
	@FindBy(xpath = "//input[@type='email']")
	static WebElement emailID;
	
	@FindBy(xpath = "//button[contains(.,'Add')]")
	static WebElement addButton;
	
	@FindBy(xpath = "//li[contains(.,'Mesut Özil')]")
	static WebElement userEntry;
	
	@FindBy(xpath = "//a[contains(.,'Edit')]")
	static WebElement editLink;
	
	@FindBy(xpath = "//button[contains(.,'Update')]")
	static WebElement upDateButton;
	
	@FindBy(xpath = "//a[contains(.,'Delete')]")
    static WebElement deleteLink;
	
	
	public HomePage() {

		PageFactory.initElements(driver, this);
	}

	/**
	 * Validates if the create  link is visible
	 * 
	 * @return
	 */

	public boolean isCreateLinkVisible() {
		
		 boolean flag=WebDriverUtils.isElementPresent(createLink);
		 return flag;
	}
	
	
	public void clickOnCreateLink() {
		
		 WebDriverUtils.click(createLink);
	}
	
	public void enterFirstName(String firstName) {
		
		 WebDriverUtils.setText(fName, firstName);
	}
	
	public void enterLastName(String lastName) {
		
		 WebDriverUtils.setText(lName, lastName);
	}
	
	public void enterStartDate(String startDate) {
		
		 WebDriverUtils.setText(startDt, startDate);
	}
	public void enterEmail(String email) {
		
		 WebDriverUtils.setText(emailID, email);
	}
	
	public void clickAdd() {
		
		 WebDriverUtils.click(addButton);
	}
		
	
	public boolean validateUser(String userName) throws Exception {
		WebDriverUtils.waitForPageToBeLoaded(10);
		String userProfileXpath = "//li[contains(.,'"+userName+"')]";
		boolean flag = WebDriverUtils.isElementVisible(By.xpath(userProfileXpath));
	    return flag;
	}
	
	public void clickOnUserName(String name) throws InterruptedException {
		String xpath = "//li[contains(.,'"+name+"')]";
		WebDriverUtils.click(xpath);
	}
	
	public void clickEditLink() {
		WebDriverUtils.click(editLink);
	}
	
	public void clickUpdateButton() {
		WebDriverUtils.click(upDateButton);
	}
	
	public boolean verifyUpdatedName(String name) {
		String xpath = "//li[contains(.,'"+name+"')]";
	    boolean flag=WebDriverUtils.isElementVisible(xpath);	
	    return flag;
	}
	
	public void clickDeleteLink() {
		WebDriverUtils.click(deleteLink);
	}
	public void clickAlertOK() {
		WebDriverUtils.handleAlert("accept");
	}
}
