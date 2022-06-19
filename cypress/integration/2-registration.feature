Feature: Registration

    As a user I want to register to the page, so I can use the app

    Background:
        Given I'm on the warehouse landing page
        When I click the register button on the top of the navbar
        And I redirected to the register page

    Scenario: User successfully register with valid data
        Then I fill out the registration form with following valid data test:
            | name                          | email           | password | address       | birthdate             | gender |
            | Ridho Anugerah Aufa Nusantara | ridho@gmail.com | 12345678 | Jln. Kenangan | 18 Agustus 2001 02:00 | man    |

        And I click the register button
        And I redirected to the dashboard page

    Scenario Outline: The user tries to register without filling the some fields
        Then I fill out the registration form without filling following "<name>", "<email>", "<password>", "<address>", "birtdate", or "<gender>" field
        And I click the register button
        And I see the required input "<field>" error "<message>"

        Examples:
            | name                          | email           | password | address       | birthdate             | gender | field    | message                     |
            |                               | ridho@gmail.com | 12345678 | Jln. Kenangan | 18 Agustus 2001 02:00 | man    | nama     | Please fill out this field. |
            | Ridho Anugerah Aufa Nusantara |                 | 12345678 | Jln. Kenangan | 18 Agustus 2001 02:00 | man    | email    | Please fill out this field. |
            | Ridho Anugerah Aufa Nusantara | ridho@gmail.com |          | Jln. Kenangan | 18 Agustus 2001 02:00 | man    | password | Please fill out this field. |
            | Ridho Anugerah Aufa Nusantara | ridho@gmail.com | 12345678 |               | 18 Agustus 2001 02:00 | man    | alamat   | Please fill out this field. |
            |                               |                 |          |               |                       |        | nama     | Please fill out this field. |


    Scenario Outline: The user tries to register without filling gender fields
        Then I fill out the registration form without filling following "<name>", "<email>", "<password>", "<address>", "birtdate" without gender field
        And I click the register button
        And I see the required "<fields>" error "<message>"
        Examples:
            | name                          | email           | password | address       | birthdate             | field | message                             |
            | Ridho Anugerah Aufa Nusantara | ridho@gmail.com | 12345678 | Jln. Kenangan | 18 Agustus 2001 02:00 | nama  | Please select one of these options. |

    Scenario Outline: The user tries to register without filling gender fields
        Then I fill out the registration form without filling following "<name>", "<email>", "<password>", "<address>", "gender" without birthdate field
        And I click the register button
        And I see the required "<fields>" error "<message>"
        Examples:
            | name                          | email           | password | address       | gender | field | message                             |
            | Ridho Anugerah Aufa Nusantara | ridho@gmail.com | 12345678 | Jln. Kenangan | man    | nama  | Please select one of these options. |