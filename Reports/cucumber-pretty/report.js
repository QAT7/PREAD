$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CreateAccount.feature");
formatter.feature({
  "line": 1,
  "name": "As an applicant I should be able to create new account.",
  "description": "",
  "id": "as-an-applicant-i-should-be-able-to-create-new-account.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5801847129,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Create new account with already used email address",
  "description": "",
  "id": "as-an-applicant-i-should-be-able-to-create-new-account.;create-new-account-with-already-used-email-address",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@suite"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I go outreach website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on Create Account link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter all required field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Create Account button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should get message \"You already have an account. Please log in, or click on \u0027Forgotten Password\u0027 to set a new password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogout_StepDef.iGoOutreachWebsite()"
});
formatter.result({
  "duration": 1284842763,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount_StepDef.iClickOnCreateAccountLink()"
});
formatter.result({
  "duration": 891568386,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount_StepDef.iEnterAllRequiredField()"
});
formatter.result({
  "duration": 732254385,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount_StepDef.iClickOnCreateAccountButton()"
});
formatter.result({
  "duration": 2266278016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You already have an account. Please log in, or click on \u0027Forgotten Password\u0027 to set a new password.",
      "offset": 22
    }
  ],
  "location": "CreateAccount_StepDef.iShouldGetMessage(String)"
});
formatter.result({
  "duration": 1182646580,
  "status": "passed"
});
formatter.after({
  "duration": 1238332017,
  "status": "passed"
});
formatter.uri("features/LoginLogout.feature");
formatter.feature({
  "line": 2,
  "name": "As an applicant when I login with valid credentials. I should be able log out from site",
  "description": "",
  "id": "as-an-applicant-when-i-login-with-valid-credentials.-i-should-be-able-log-out-from-site",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3851209093,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login with valid credentials",
  "description": "",
  "id": "as-an-applicant-when-i-login-with-valid-credentials.-i-should-be-able-log-out-from-site;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@suite"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I go outreach website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter my username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter my password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Submit",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should get Welcome message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should be able to logout",
  "keyword": "And "
});
formatter.match({
  "location": "LoginLogout_StepDef.iGoOutreachWebsite()"
});
formatter.result({
  "duration": 1618249014,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.iEnterMyUsername()"
});
formatter.result({
  "duration": 245277205,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.iEnterMyPassword()"
});
formatter.result({
  "duration": 174841964,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.iClickOnSubmit()"
});
formatter.result({
  "duration": 2135729485,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.iShouldGetWelcomeMessage()"
});
formatter.result({
  "duration": 77297127,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.iShouldBeAbleToLogout()"
});
formatter.result({
  "duration": 21095876096,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//span[@class\u003d\u0027OSInline\u0027]\"}\nCommand duration or timeout: 20.08 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027cc-syadav-lap\u0027, ip: \u0027129.31.188.128\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d44.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 963c9192-2580-4b64-b8dd-aeffd089055e\n*** Element info: {Using\u003dxpath, value\u003d.//span[@class\u003d\u0027OSInline\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat pageObjects.LandingPage.logout(LandingPage.java:57)\r\n\tat step_definitions.LoginLogout_StepDef.iShouldBeAbleToLogout(LoginLogout_StepDef.java:48)\r\n\tat ✽.And I should be able to logout(features/LoginLogout.feature:11)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//span[@class\u003d\u0027OSInline\u0027]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027cc-syadav-lap\u0027, ip: \u0027129.31.188.128\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/syadav12/AppData/Local/Temp/anonymous2867623367913603955webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/syadav12/AppData/Local/Temp/anonymous2867623367913603955webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:625)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1011094015,
  "status": "passed"
});
});