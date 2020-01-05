Feature: Login feature

Scenario Outline: check Titile

When user is in the login page
Then Title should be "<title>"
Then Close the browser
Examples:
   |title| 
   |CafeTownsend-AngularJS-Rails|

Scenario Outline: Login functionality test

When user is in the login page
When User enters username "<user>" and password "<pwd>"  
And clicks on Login button
Then validate usename "<user>" is visible
Then Close the browser
Examples:
   |user|pwd| 
   |Luke|Skywalker|