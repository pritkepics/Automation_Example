package com.qa.util;

import java.rmi.server.Operation;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.*;

import com.qa.base.BaseClass;


public class WebDriverUtils extends BaseClass {
	
	
	public static void openURL(String URL) {
		
		try {
	       driver.get(URL);	
		}
		catch(Exception e) {
			APP_LOGS.error("Could not open URL::" + e.getMessage());
		}
	       
	}

	/**
	 * checks if the provided element is present, if not returns false
	 * 
	 * @param webelement
	 * @return boolean true/false
	 */

	public static boolean isElementPresent(WebElement el) {
		try {
			el.isDisplayed();
			Thread.sleep(2000);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	/**
	 * checks if the provided element is visible, if not returns false
	 * 
	 * @param By
	 * @return boolean true/false
	 */

	public static boolean isElementVisible(By by) {

		try {
			ExpectedConditions.visibilityOfElementLocated(by);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	public static boolean isElementVisible(String xpath) {

		try {
			Thread.sleep(3000);
			ExpectedConditions.visibilityOfElementLocated(By.xpath(xpath));
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	
	
	/**
	 * checks if the provided element is not present, if not returns false
	 * 
	 * @param By
	 * @return boolean true/false
	 */

	public boolean isElementInvisible(By by) {
		try {
			ExpectedConditions.invisibilityOfElementLocated(by);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	/**
	 * Clicks on an item, waits for the specified amount of time waits for the item
	 * to be validated
	 * 
	 * @param clickItem
	 * @param itemToValidate
	 * @param timeout
	 */

	public static void clickAndWait(WebElement clickItem, String itemToValidate, int timeout) {
		try {
			WebDriverWait wait = new WebDriverWait(driver, timeout);

			clickItem.click();
			wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(itemToValidate)));
		} catch (Exception e) {
			APP_LOGS.error("Could not click on the element::" + e.getMessage());
		}

	}

	/**
	 * Clicks on the provided web element
	 * 
	 * @param webElement
	 */

	public static void click(WebElement el) {
		try {
			
			el.click();
		} catch (Exception e) {
			APP_LOGS.error("Couldn't click the element specified ::" + e.getMessage());
		}
	}
	
	public static void click(String xpath) {
		try {
			
			driver.findElement(By.xpath(xpath)).click();
		} catch (Exception e) {
			APP_LOGS.error("Couldn't click the element specified ::" + e.getMessage());
		}
	}

	/**
	 * Waits for the element to be visible ,waits till the condition condition is
	 * fulfilled.
	 * 
	 * @param by
	 * @param timeout
	 */

	public static void waitForElementToBeVisible(By by, int timeout) {
		try {
			WebDriverWait wait = new WebDriverWait(driver, 10);
			wait.until(ExpectedConditions.visibilityOfElementLocated(by));
		} catch (Exception e) {
			APP_LOGS.error("Element is not visible :: " + e.getMessage());
		}
	}

	/**
	 * Waits for the element to be present ,waits till the condition condition is
	 * fulfilled.
	 * 
	 * @param by
	 * @param timeout
	 */

	public static void waitForElementToBePresent(By by, int timeout) {
		try {
			WebDriverWait wait = new WebDriverWait(driver, 10);
			wait.until(ExpectedConditions.presenceOfElementLocated(by));
		} catch (Exception e) {
			APP_LOGS.error("Element is not present :: " + e.getMessage());
		}
	}

	/**
	 * Selects a value from a select list, pointed by the locator provided by the
	 * user.
	 * 
	 * @param locator
	 * @param value
	 */

	public static void selectValueFromList(By by, String value) {
		try {
			Select select = new Select(driver.findElement(by));
			select.selectByValue(value);
		} catch (Exception e) {

			APP_LOGS.error("Could not select element ::" + e.getMessage());
		}
	}

	/**
	 * Move the cursor to the provided locator and click, Action class is used.
	 * 
	 * @param xpath
	 * @throws InterruptedException
	 */

	public static void clickAt(String xpath) throws InterruptedException {
		WebElement ele = driver.findElement(By.xpath(xpath));
		Actions act = new Actions(driver);
		act.moveToElement(ele).click().build().perform();

	}

	/**
	 * Waits for the specified amount of time for the page to be loaded.
	 * 
	 * @param timeout
	 * @throws Exception
	 */

	public static void waitForPageToBeLoaded(int timeout) throws Exception {
		try {
			WebDriverWait w = new WebDriverWait(driver, timeout);
			w.wait();

		} catch (Exception e) {
			APP_LOGS.error("Page load time expired ::" + e.getMessage());
		}

	}

	/**
	 * Switches from current frame to specified frame
	 * 
	 * @param frameName
	 */

	public void switchToFrmae(String frameName) {

		try {

			driver.switchTo().frame(frameName);

		} catch (Exception e) {
			APP_LOGS.error("Couldn't switch to frame ::" + e.getMessage());
		}
	}

	/**
	 * Sets the specified text in a textfield.
	 * 
	 * @param webElement
	 * @param value
	 */

	public static void setText(WebElement el, String value) {

		try {
			//driver.findElement(By.xpath(el)).sendKeys(value);
            el.sendKeys(value);
		} catch (Exception e) {
			APP_LOGS.error("Unable to set text ::" + e.getMessage());
		}

	}

	public static void keyDown(WebElement srcElement) {

		try {
			Actions action = new Actions(driver);

			action.keyDown(Keys.ARROW_DOWN).build().perform();
			action.keyUp(Keys.ARROW_DOWN).build().perform();

		} catch (Exception e) {
			APP_LOGS.error("Unable to perform keydown ::" + e.getMessage());
		}
	}

	public static void keyEnter() {

		try {
		
			Actions action = new Actions(driver);
			action.keyDown(Keys.ENTER).build().perform();
			action.keyUp(Keys.ENTER).build().perform();

		} catch (Exception e) {
			APP_LOGS.error("Unable to perform key Enter ::" + e.getMessage());
		}
	}

	public static void handleAlert(String operation) {
		
		Alert alert = driver.switchTo().alert(); 
		  if(operation.equalsIgnoreCase("accept")) {
			  alert.accept();
		  }
		  if(operation.equalsIgnoreCase("dismiss")) {
			  alert.dismiss();
		  }
	}
}

