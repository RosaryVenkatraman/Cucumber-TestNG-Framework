$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/eclipse/eclipse/Javaprojects/CucumberPOM/src/main/java/com/qa/features/01AdminLoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Freshbenies Admin Loginpage Test.",
  "description": "",
  "id": "freshbenies-admin-loginpage-test.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validate login functionality with incorrect credentials",
  "description": "",
  "id": "freshbenies-admin-loginpage-test.;validate-login-functionality-with-incorrect-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User opens the browser and in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the incorrect username and incorrect password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate whether an alert message is thrown",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_opens_the_browser_and_in_login_page()"
});
formatter.result({
  "duration": 52916285700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_enters_the_incorrect_username_and_incorrect_password()"
});
formatter.result({
  "duration": 5233571800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 72779800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.validate_whether_an_alert_message_is_thrown()"
});
formatter.result({
  "duration": 5087968600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.close_the_browser()"
});
formatter.result({
  "duration": 55295000,
  "status": "passed"
});
formatter.after({
  "duration": 276100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify whether appropriate error message is displayed on entering invalid emailid.",
  "description": "",
  "id": "freshbenies-admin-loginpage-test.;verify-whether-appropriate-error-message-is-displayed-on-entering-invalid-emailid.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User opens the browser and in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User enters the invalid emailid",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User clicks the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Validate whether an appropriate error message is thrown",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_opens_the_browser_and_in_login_page()"
});
formatter.result({
  "duration": 53340267800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_enters_the_invalid_emailid()"
});
formatter.result({
  "duration": 5129349200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 59746600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.validate_whether_an_appropriate_error_message_is_thrown()"
});
formatter.result({
  "duration": 35535909200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//small[@class\u003d\u0027text-danger\u0027 and text()\u003d\u0027Please enter your valid email add\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QUFA5SU\u0027, ip: \u002710.100.102.66\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\ROSARY~1.VEN\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:55416}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f69efcd7b4638c3244880ba2ddab94ad\n*** Element info: {Using\u003dxpath, value\u003d//small[@class\u003d\u0027text-danger\u0027 and text()\u003d\u0027Please enter your valid email add\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor17.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy33.isDisplayed(Unknown Source)\r\n\tat com.qa.pages.AdminLoginPage.verifyInvalidEmailidMsg(AdminLoginPage.java:66)\r\n\tat com.qa.stepDefinitions.LoginPageSteps.validate_whether_an_appropriate_error_message_is_thrown(LoginPageSteps.java:86)\r\n\tat ✽.Then Validate whether an appropriate error message is thrown(D:/eclipse/eclipse/Javaprojects/CucumberPOM/src/main/java/com/qa/features/01AdminLoginPage.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 164700,
  "error_message": "java.lang.NullPointerException\r\n\tat com.qa.stepDefinitions.HomePageSteps.tearDown(HomePageSteps.java:113)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat com.qa.runner.TestRunner.feature(TestRunner.java:44)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
});