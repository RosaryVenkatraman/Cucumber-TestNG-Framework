package com.qa.stepDefinitions;


import java.util.Properties;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.qa.pages.AdminLoginPage;
import com.qa.pages.BasePage;
//import com.qa.pages.BasePage;
import com.qa.util.Constants;
import com.qa.util.TimeUtil;

import cucumber.api.Scenario;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.cucumber.java.AfterStep;
import net.masterthought.cucumber.json.Result;
import net.masterthought.cucumber.json.support.Status;



public class LoginPageSteps extends BasePage{
	
	private static final Logger log=LogManager.getLogger(LoginPageSteps.class.getName());
	
	
	static WebDriver driver;
	Properties prop;
	BasePage basepage;
	AdminLoginPage adminlogin;
	io.cucumber.java.Scenario scenario;
	
		
	@Given("^User opens the browser and in login page$")
	public void user_opens_the_browser_and_in_login_page() throws Throwable {
	basepage=new BasePage();
	prop=basepage.init_prop();
	driver=basepage.init_driver(prop);
	driver.get(prop.getProperty("admin_url_qa"));
	TimeUtil.mediumWait();
	adminlogin=new AdminLoginPage(driver);
	
	}

	@Then("^User enters the incorrect username and incorrect password$")
	public void user_enters_the_incorrect_username_and_incorrect_password() throws Throwable {
		//adminlogin=new AdminLoginPage(driver);
	 adminlogin.pass_IncorrectCredentials(Constants.invalid_username, Constants.invalid_pwd); 
	 
	}

	@Then("^User clicks the login button$")
	public void user_clicks_the_login_button() throws Throwable {
	    adminlogin.click_loginbtn();
	       	    
	    	}

	@Then("^Validate whether an alert message is thrown$")
	public void validate_whether_an_alert_message_is_thrown() throws Throwable {
	   Assert.assertTrue(adminlogin.verifyAlertDisplay());
	    	   
	   	}

	@Then("^Close the browser$")
	public void close_the_browser() throws Throwable {
	   driver.close();
	   	}

	@Then("^User enters the invalid emailid$")
	public void user_enters_the_invalid_emailid() throws Throwable {
		log.info("Enter invalid emailid");
	   adminlogin.pass_Invalidemailid(Constants.invalid_emailid);
		log.info("Invalid emailid enteered");
	   	   
	   	}

	@Then("^Validate whether an appropriate error message is thrown$")
	public void validate_whether_an_appropriate_error_message_is_thrown() throws Throwable {
		log.info("Validate method started");
				Assert.assertTrue(adminlogin.verifyInvalidEmailidMsg());      
			
			
	}
	   
	        	   	    
	 

	
	@AfterStep
	public void failure(Result result,Scenario scenario) {
		if(!result.getStatus().isPassed()){
			final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
		      scenario.embed(screenshot, "image/png"); // ... and embed it in the report.
		}
		    }
	
	
	/*@AfterStep
	public void failureMethod(Scenario scenario) {
		log.info("Entered into AfterStep method");
		try{
			if (scenario.isFailed()) {
				//scenario.getName();
			      // Take a screenshot...
			      final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			      scenario.embed(screenshot, "image/png"); // ... and embed it in the report.
			}
		}
			catch(Exception e){
				log.error(e.getMessage());
			}
		log.info("After Step Method is completed");
		}*/
		
				
	}

	
	/*@After
	public void tearDown(Scenario scenario) {
		if (scenario.isFailed()) {
			//scenario.getName();
		      // Take a screenshot...
		      final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
		      scenario.embed(screenshot, "image/png"); // ... and embed it in the report.
		    }
		//driver.close();
			        
	    //driver.quit();
	}*/
	
	
