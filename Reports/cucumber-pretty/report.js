$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CreateAccount.feature");
formatter.feature({
  "line": 1,
  "name": "As an applicant I should be able to create new account.",
  "description": "",
  "id": "as-an-applicant-i-should-be-able-to-create-new-account.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6590061515,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Create new account",
  "description": "",
  "id": "as-an-applicant-i-should-be-able-to-create-new-account.;create-new-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I go outreach website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Create Account link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter all required field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Create Account button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should get successful message \"Almost finished... now check your email. We\u0027ve emailed you a link, which you need to click to activate your account.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should get verification email",
  "keyword": "And "
});
formatter.match({
  "location": "LoginLogout_StepDef.iGoOutreachWebsite()"
});
formatter.result({
  "duration": 1706185242,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount_StepDef.iClickOnCreateAccountLink()"
});
formatter.result({
  "duration": 693690009,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount_StepDef.iEnterAllRequiredField()"
});
formatter.result({
  "duration": 384210494,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.32.498550 (9dec58e66c31bcc53a9ce3c7226f0c1c5810906a),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 16 milliseconds\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027cc-syadav-lap\u0027, ip: \u0027129.31.189.162\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.32.498550 (9dec58e66c31bcc53a9ce3c7226f0c1c5810906a), userDataDir\u003dC:\\Users\\syadav12\\AppData\\Local\\Temp\\scoped_dir9348_17690}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 07a7d958551d3b2e4764eb414e25d539\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:37)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat pageObjects.CreateAccount.enterRequiredFields(CreateAccount.java:71)\r\n\tat step_definitions.CreateAccount_StepDef.iEnterAllRequiredField(CreateAccount_StepDef.java:31)\r\n\tat ✽.And I enter all required field(features/CreateAccount.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateAccount_StepDef.iClickOnCreateAccountButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Almost finished... now check your email. We\u0027ve emailed you a link, which you need to click to activate your account.",
      "offset": 33
    }
  ],
  "location": "CreateAccount_StepDef.iShouldGetSuccessfulMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccount_StepDef.iShouldGetVerificationEmail()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 22674278,
  "status": "passed"
});
});