$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LoginLogout.feature");
formatter.feature({
  "line": 2,
  "name": "As an applicant when I login with valid credentials. I should be able log out from site",
  "description": "",
  "id": "as-an-applicant-when-i-login-with-valid-credentials.-i-should-be-able-log-out-from-site",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4745936168,
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
  "duration": 1280274042,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.iEnterMyUsername()"
});
formatter.result({
  "duration": 180196971,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.iEnterMyPassword()"
});
formatter.result({
  "duration": 134630310,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.iClickOnSubmit()"
});
formatter.result({
  "duration": 1593767143,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.iShouldGetWelcomeMessage()"
});
formatter.result({
  "duration": 54160273,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.iShouldBeAbleToLogout()"
});
formatter.result({
  "duration": 2734064672,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element is not clickable at point (921, 81)\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.32.498550 (9dec58e66c31bcc53a9ce3c7226f0c1c5810906a),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 47 milliseconds\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027cc-syadav-lap\u0027, ip: \u0027129.31.185.223\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.32.498550 (9dec58e66c31bcc53a9ce3c7226f0c1c5810906a), userDataDir\u003dC:\\Users\\syadav12\\AppData\\Local\\Temp\\scoped_dir10476_15750}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: f10558d3ec63fc8c512b8bf5eae3a1f7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:268)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:79)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:50)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat pageObjects.LandingPage.logout(LandingPage.java:63)\r\n\tat step_definitions.LoginLogout_StepDef.iShouldBeAbleToLogout(LoginLogout_StepDef.java:48)\r\n\tat ✽.And I should be able to logout(features/LoginLogout.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 348222425,
  "status": "passed"
});
});