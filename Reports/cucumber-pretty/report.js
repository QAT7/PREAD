$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CreateAccount.feature");
formatter.feature({
  "line": 1,
  "name": "As an applicant I should be able to create new account.",
  "description": "",
  "id": "as-an-applicant-i-should-be-able-to-create-new-account.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8165930046,
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
  "duration": 2063402688,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount_StepDef.iClickOnCreateAccountLink()"
});
formatter.result({
  "duration": 609343191,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount_StepDef.iEnterAllRequiredField()"
});
formatter.result({
  "duration": 1678503172,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount_StepDef.iClickOnCreateAccountButton()"
});
formatter.result({
  "duration": 2128795811,
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
  "duration": 170040269,
  "status": "passed"
});
formatter.after({
  "duration": 148995,
  "status": "passed"
});
formatter.uri("features/CreateNewApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Complete and Submit application forms for different programes",
  "description": "",
  "id": "complete-and-submit-application-forms-for-different-programes",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3868291342,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "As an application I apply for an Pathway to Medicine outreach programme",
  "description": "Country as United Kingdom - England\nYear Group as Y1\n1 Parent/Guardian Higher Education as No",
  "id": "complete-and-submit-application-forms-for-different-programes;as-an-application-i-apply-for-an-pathway-to-medicine-outreach-programme",
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
  "line": 11,
  "name": "I go outreach website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I Login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on New Application Link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select YES for Are you currently studying at school or college in the UK?",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select United Kingdom - England as UK School Country",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select School from the drop down list",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select \"Y1\" answer for Which UK Year Group are you in?",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter all Teacher Details",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I save \u0026 go to \"Parents/Guardian\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I complete Parent/Guardian Form and save it",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \"Pathways to Medicine\" as my course",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select start date as \"12/03/2018\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select strand as \"Design Engineering\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select FSM as \"No\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select House hold income as \"0 - 25000\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select care as \"No\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Carer as \"No\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select parent guardian education as \"Yes\" and save the form",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter my personal statement as \"This is my personal stateme\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select my Data Policy \u0026 Marketing as \"Email\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I accept terms \u0026 conditions and save the form",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click On \"Review",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on \"Submit Application\" buton",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I should get successful message \"Thank you for submitting your application\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogout_StepDef.iGoOutreachWebsite()"
});
formatter.result({
  "duration": 1541094787,
  "status": "passed"
});
formatter.match({
  "location": "NewApplication_StepDef.iLogin()"
});
