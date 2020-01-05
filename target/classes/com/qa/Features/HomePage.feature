Feature: HomePage feature

Scenario Outline: Create a user with correct inputs

When user logs in to the application using user "<user>" and password "<pass>"
When user is in the home page
When user clicks on create link
Then user enters fname "<fName>"
Then user will provide lname "<lName>"
Then user will give stDate "<stDate>"
Then user should enter email "<email>"
Then user clicks Add button
Examples:
   |user|pass|fName|lName|stDate|email|
   |Luke|Skywalker|Mesut|Özil|2020-01-01|mesut.ozil@gmail.com|

Scenario Outline: Update a user details

When user logs in to the application using user "<user>" and password "<pass>"
When user is in the home page
When user Clicks on user "<name>" entry
When user clicks on edit link
Then user enters fname "<fName>"
Then user clicks on update button
And updated name "<newName>" should reflect
Examples:
   |name|user|pass|fName|newName|
   |Mesut Özil|Luke|Skywalker|Zlatan|MesutZlatan Özil|

Scenario Outline: delete a user

When user logs in to the application using user "<user>" and password "<pass>"
When user is in the home page
When user Clicks on user "<userName>" entry
When user clicks on delete link
Then user clicks on OK button
Then the username "<userName>" should not be visible
Then close browser
Examples:
   |userName|user|pass|
   |MesutZlatan Özil|Luke|Skywalker|
   