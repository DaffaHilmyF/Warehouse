Feature: Registration

    As a user I want to register to the page, so I can use the app

    Background:
        Given I'm on the warehouse landing page
        When I click the register button on the top of the navbar
        And I redirected to the register page

    Scenario: [TC-05] User successfully register with valid data
        Then I fill out the registration form with my valid data test
        And I click the register button
        And I redirected to the dashboard page

    Scenario: [TC-06] The user tries to register without filling the name fields
        Then I fill out the registration form with my data test without fill the name fields
        And I click the register button
        And I see the required name fields error message

    Scenario: [TC-07] The user tries to register without filling the email fields
        Then I fill out the registration form with my data test without fill the email fields
        And I click the register button
        And I see the required email fields error message

    Scenario: [TC-08] The user tries to register without filling the password fields
        Then I fill out the registration form with my data test without fill the password fields
        And I click the register button
        And I see the required password fields error message

    Scenario: [TC-09] The user tries to register without filling the address fields
        Then I fill out the registration form with my data test without fill the address fields
        And I click the register button
        And I see the required address fields error message

    Scenario: [TC-10] The user tries to register without filling the birthdate fields
        Then I fill out the registration form with my data test without fill the birthdate fields
        And I click the register button
        And I see the required birthdate fields error message

    Scenario: [TC-11] The user tries to register without filling the gender fields
        Then I fill out the registration form with my data test without fill the gender fields
        And I click the register button
        And I see the required gender fields error message

    Scenario: [TC-12] The user tries to register without filling any fields
        Then I fill out the registration form without fill any fields
        And I click the register button
        And I see the required fields error message

    Scenario: [TC-13] The user tries to register with the existing account
        Then I fill out the registration form with registered account
        And I click the register button
        And I see the required existing account error message