Feature: Login

    As a user I want to log in to the page, so I can use the app

    Background:
        Given I'm on the warehouse landing page
        When I click the login button on the top of navbar
        And I redirected to the login page

    Scenario Outline: User successfully login with valid account
        Then I fill out the login form with my valid "<email>" and "<password>"
        And I click the login button
        Examples:
            | email                        | password |
            | daffahilmanafrizal@gmail.com | 12345678 |
            | admin@email.com              | password |

    Scenario Outline: The user tries to login  without filling the input fields
        Then I fill out the login form without fill out the "<email>" or "<password>" fields
        And I click the login button
        And I see the required input error "<message>"

        Examples:
            | email           | password | message                         |
            |                 | password | The email field is required.    |
            | test1@gmail.com |          | The password field is required. |


    Scenario Outline: The user tries to login with a no existing account
        Then I fill out the login form with the no existing "<email>" and "<passaword>"
        And I click the login button
        And I see the credentials error "<message>"

        Examples:
            | email           | password  | message                                     |
            | test1@gmail.com | password1 | These credentials do not match our records. |
            | test2@gmail.com | password2 | These credentials do not match our records. |