Feature: Ticketing

    As a user I want to ticket, So that Admin can accept my Ticketing


    Scenario Outline: User successfully add new ticket
        Given I'm login as verified account
            | email           | password |
            | ridho@gmail.com | 12345678 |
        And I'm on the warehouse dashboard page
        And I click the "ticketing" menu
        When I click the "tambahkan ticket baru" button
        Then I input the valid "<message>"
        And I click the "Tambahkan" button
        And I logout
        Examples:
            | message          |
            | verify dong say! |

    Scenario Outline: the user tries to input invalid ticket
        Given I'm login as verified account
            | email           | password |
            | ridho@gmail.com | 12345678 |
        And I'm on the warehouse dashboard page
        And I click the "ticketing" menu
        When I click the "tambahkan ticket baru" button
        Then I input the invalid "<data>"
        And I click the "Tambahkan" button
        And I see the require error "<message>"
        And I logout
        Examples:
            | data | message                     |
            |      | Please fill out this field. |


    Scenario: Admin accept the ticketing
        Given I'm login as verified account
            | email           | password |
            | admin@email.com | password |
        And I'm on the warehouse dashboard page
        And I click the "ticketing" on admin menu
        When I click the "status action" button
        Then I changes the status
