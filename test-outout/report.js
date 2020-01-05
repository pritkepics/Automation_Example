$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "HomePage feature",
  "description": "",
  "id": "homepage-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Create a user with correct inputs",
  "description": "",
  "id": "homepage-feature;create-a-user-with-correct-inputs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user logs in to the application using user \"\u003cuser\u003e\" and password \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on create link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters fname \"\u003cfName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user will provide lname \"\u003clName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user will give stDate \"\u003cstDate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user should enter email \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks Add button",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "homepage-feature;create-a-user-with-correct-inputs;",
  "rows": [
    {
      "cells": [
        "user",
        "pass",
        "fName",
        "lName",
        "stDate",
        "email"
      ],
      "line": 14,
      "id": "homepage-feature;create-a-user-with-correct-inputs;;1"
    },
    {
      "cells": [
        "Luke",
        "Skywalker",
        "Mesut",
        "Özil",
        "2020-01-01",
        "mesut.ozil@gmail.com"
      ],
      "line": 15,
      "id": "homepage-feature;create-a-user-with-correct-inputs;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Create a user with correct inputs",
  "description": "",
  "id": "homepage-feature;create-a-user-with-correct-inputs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user logs in to the application using user \"Luke\" and password \"Skywalker\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on create link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters fname \"Mesut\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user will provide lname \"Özil\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user will give stDate \"2020-01-01\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user should enter email \"mesut.ozil@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks Add button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luke",
      "offset": 44
    },
    {
      "val": "Skywalker",
      "offset": 64
    }
  ],
  "location": "HomePageStepDefinition.user_logs_in_to_the_application_using_user_and_password(String,String)"
});
formatter.result({
  "duration": 10425370600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 2810302000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_create_link()"
});
formatter.result({
  "duration": 362207200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mesut",
      "offset": 19
    }
  ],
  "location": "HomePageStepDefinition.user_enters_fname(String)"
});
formatter.result({
  "duration": 441730500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Özil",
      "offset": 25
    }
  ],
  "location": "HomePageStepDefinition.user_will_provide_lname(String)"
});
formatter.result({
  "duration": 89760700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-01-01",
      "offset": 23
    }
  ],
  "location": "HomePageStepDefinition.user_will_give_stDate(String)"
});
formatter.result({
  "duration": 73789400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mesut.ozil@gmail.com",
      "offset": 25
    }
  ],
  "location": "HomePageStepDefinition.user_should_enter_email(String)"
});
formatter.result({
  "duration": 99792300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_Add_button()"
});
formatter.result({
  "duration": 260718800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Update a user details",
  "description": "",
  "id": "homepage-feature;update-a-user-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "user logs in to the application using user \"\u003cuser\u003e\" and password \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user Clicks on user \"\u003cname\u003e\" entry",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user clicks on edit link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enters fname \"\u003cfName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user clicks on update button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "updated name \"\u003cnewName\u003e\" should reflect",
  "keyword": "And "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "homepage-feature;update-a-user-details;",
  "rows": [
    {
      "cells": [
        "name",
        "user",
        "pass",
        "fName",
        "newName"
      ],
      "line": 27,
      "id": "homepage-feature;update-a-user-details;;1"
    },
    {
      "cells": [
        "Mesut Özil",
        "Luke",
        "Skywalker",
        "Zlatan",
        "MesutZlatan Özil"
      ],
      "line": 28,
      "id": "homepage-feature;update-a-user-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Update a user details",
  "description": "",
  "id": "homepage-feature;update-a-user-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "user logs in to the application using user \"Luke\" and password \"Skywalker\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user Clicks on user \"Mesut Özil\" entry",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user clicks on edit link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enters fname \"Zlatan\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user clicks on update button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "updated name \"MesutZlatan Özil\" should reflect",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Luke",
      "offset": 44
    },
    {
      "val": "Skywalker",
      "offset": 64
    }
  ],
  "location": "HomePageStepDefinition.user_logs_in_to_the_application_using_user_and_password(String,String)"
});
formatter.result({
  "duration": 7871676300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 2856077100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mesut Özil",
      "offset": 21
    }
  ],
  "location": "HomePageStepDefinition.user_Clicks_on_user_entry(String)"
});
formatter.result({
  "duration": 319707600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_edit_link()"
});
formatter.result({
  "duration": 317326200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zlatan",
      "offset": 19
    }
  ],
  "location": "HomePageStepDefinition.user_enters_fname(String)"
});
formatter.result({
  "duration": 203430700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_update_button()"
});
formatter.result({
  "duration": 263055400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MesutZlatan Özil",
      "offset": 14
    }
  ],
  "location": "HomePageStepDefinition.updated_name_should_reflect(String)"
});
formatter.result({
  "duration": 3009315700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "delete a user",
  "description": "",
  "id": "homepage-feature;delete-a-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "user logs in to the application using user \"\u003cuser\u003e\" and password \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user Clicks on user \"\u003cuserName\u003e\" entry",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user clicks on delete link",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user clicks on OK button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "the username \"\u003cuserName\u003e\" should not be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "homepage-feature;delete-a-user;",
  "rows": [
    {
      "cells": [
        "userName",
        "user",
        "pass"
      ],
      "line": 40,
      "id": "homepage-feature;delete-a-user;;1"
    },
    {
      "cells": [
        "MesutZlatan Özil",
        "Luke",
        "Skywalker"
      ],
      "line": 41,
      "id": "homepage-feature;delete-a-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "delete a user",
  "description": "",
  "id": "homepage-feature;delete-a-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "user logs in to the application using user \"Luke\" and password \"Skywalker\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user Clicks on user \"MesutZlatan Özil\" entry",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user clicks on delete link",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user clicks on OK button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "the username \"MesutZlatan Özil\" should not be visible",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luke",
      "offset": 44
    },
    {
      "val": "Skywalker",
      "offset": 64
    }
  ],
  "location": "HomePageStepDefinition.user_logs_in_to_the_application_using_user_and_password(String,String)"
});
formatter.result({
  "duration": 8336887100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 2794958000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MesutZlatan Özil",
      "offset": 21
    }
  ],
  "location": "HomePageStepDefinition.user_Clicks_on_user_entry(String)"
});
formatter.result({
  "duration": 277355700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_delete_link()"
});
formatter.result({
  "duration": 108991800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_OK_button()"
});
formatter.result({
  "duration": 60140400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MesutZlatan Özil",
      "offset": 14
    }
  ],
  "location": "HomePageStepDefinition.the_username_should_not_be_visible(String)"
});
formatter.result({
  "duration": 3000069400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.close_browser()"
});
formatter.result({
  "duration": 3284781000,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "check Titile",
  "description": "",
  "id": "login-feature;check-titile",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is in the login page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Title should be \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "login-feature;check-titile;",
  "rows": [
    {
      "cells": [
        "title"
      ],
      "line": 9,
      "id": "login-feature;check-titile;;1"
    },
    {
      "cells": [
        "CafeTownsend-AngularJS-Rails"
      ],
      "line": 10,
      "id": "login-feature;check-titile;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "check Titile",
  "description": "",
  "id": "login-feature;check-titile;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is in the login page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Title should be \"CafeTownsend-AngularJS-Rails\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_the_login_page()"
});
formatter.result({
  "duration": 7565601600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CafeTownsend-AngularJS-Rails",
      "offset": 17
    }
  ],
  "location": "LoginStepDefinition.title_should_be(String)"
});
formatter.result({
  "duration": 35854200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2236072600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Login functionality test",
  "description": "",
  "id": "login-feature;login-functionality-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is in the login page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters username \"\u003cuser\u003e\" and password \"\u003cpwd\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "validate usename \"\u003cuser\u003e\" is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-feature;login-functionality-test;",
  "rows": [
    {
      "cells": [
        "user",
        "pwd"
      ],
      "line": 20,
      "id": "login-feature;login-functionality-test;;1"
    },
    {
      "cells": [
        "Luke",
        "Skywalker"
      ],
      "line": 21,
      "id": "login-feature;login-functionality-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Login functionality test",
  "description": "",
  "id": "login-feature;login-functionality-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is in the login page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters username \"Luke\" and password \"Skywalker\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "validate usename \"Luke\" is visible",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_the_login_page()"
});
formatter.result({
  "duration": 7686263500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luke",
      "offset": 22
    },
    {
      "val": "Skywalker",
      "offset": 42
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 168259800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clicks_on_Login_button()"
});
formatter.result({
  "duration": 262770100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luke",
      "offset": 18
    }
  ],
  "location": "LoginStepDefinition.validate_usename_is_visible(String)"
});
formatter.result({
  "duration": 580800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2265972700,
  "status": "passed"
});
});