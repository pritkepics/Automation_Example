package com.qa.util;

import java.io.File;
import org.apache.commons.io.FileUtils;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.qa.base.BaseClass;

public class TestUtils extends BaseClass{

	public static long PAGE_LOAD_TIMEOUT=20;
	public static long IMPLICIT_WAIT = 20;
	public static String testDataSheetPath = System.getProperty("user.dir")+prop.getProperty("testDataSheet") ;
	
//	static Workbook book;
//	static Sheet sheet ;
	
	
	/**
	 *  Reads xls file, to get test data
	 * @param tabName
	 * @return 2D array of data 
	 */
	
//  public static Object[][] getData(String tabName) {
//		
//		
//		FileInputStream file=null;
//		try {
//			file= new FileInputStream(testDataSheetPath);
//		} catch (FileNotFoundException e) {
//			
//			APP_LOGS.error("Couldn't find the specified file :: "+e);
//		}
//		
//		try {
//			book = WorkbookFactory.create(file);
//		} catch (EncryptedDocumentException e) {
//			
//			APP_LOGS.error("Encrypted Document Exception ::"+ e);
//		} catch (IOException e) {
//			
//			APP_LOGS.error("IOException found ::"+e);
//		}
//		sheet = book.getSheet(tabName);
//		
//		Object [][]data = new Object[sheet.getLastRowNum()][sheet.getRow(0).getLastCellNum()];
//		   for(int i=0;i<sheet.getLastRowNum();i++) {
//			   for(int j=0;j<sheet.getRow(0).getLastCellNum();j++) {
//				   
//				   data[i][j]=sheet.getRow(i+1).getCell(j).toString();
//				   }
//		   }
//		return data;
//	}
  
  /**
   * Takes screen shot where failure occured, and names it with current time in milliseconds
   */
  
   public static void takeScreenShot() {
	   try {
	     File srcFile= ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
	     String currentDir=System.getProperty("user.dir");
	     
			FileUtils.copyFile(srcFile, new File(currentDir+ "/screenShots/"+System.currentTimeMillis()+".png"));
		} catch (Exception e) {
			
			APP_LOGS.error("Couldn't take screen shot:: "+e);
		}
   }
  
}
