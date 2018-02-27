$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CreateAccount.feature");
formatter.feature({
  "line": 1,
  "name": "As an applicant I should be able to create new account.",
  "description": "",
  "id": "as-an-applicant-i-should-be-able-to-create-new-account.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6185389864,
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
  "duration": 1371030311,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount_StepDef.iClickOnCreateAccountLink()"
});
formatter.result({
  "duration": 809016744,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount_StepDef.iEnterAllRequiredField()"
});
formatter.result({
  "duration": 846663605,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount_StepDef.iClickOnCreateAccountButton()"
});
formatter.result({
  "duration": 2224939115,
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
  "duration": 1190954134,
  "status": "passed"
});
formatter.after({
  "duration": 1103401546,
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
  "duration": 3698260962,
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
  "duration": 1249360678,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.iEnterMyUsername()"
});
formatter.result({
  "duration": 178081681,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.iEnterMyPassword()"
});
formatter.result({
  "duration": 75799627,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.iClickOnSubmit()"
});
formatter.result({
  "duration": 2053200539,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.iShouldGetWelcomeMessage()"
});
formatter.result({
  "duration": 47762237,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.iShouldBeAbleToLogout()"
});
formatter.result({
  "duration": 3439741183,
  "status": "passed"
});
formatter.after({
  "duration": 840017771,
  "status": "passed"
});
});