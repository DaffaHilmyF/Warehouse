Feature: Pembayaran - User

    As a user I want to input payment's evidence, so admin can proceed my items

    Scenario: User successfully inputs payment image
        Given I'm login as verified account
        And I'm on the warehouse dashboard page
        And I click the "Pembayaran" menu
        When I click the "Upload bukti pembayaran" button
        Then I input the correct "<payment>" format
# And I click the "Buat pembayaran" button
# And I see the inputted item on the table on "Pembayaran" Page

# Scenario: The user tries to input incorrect format
#     Given I'm login as verified account
#     And I'm on the warehouse dashboard page
#     And I click the "Pembayaran" menu
#     When I click the "Upload bukti pembayaran" button
#     Then I input the incorrect "<payment>" format
#     And see the format incorrect error message


# Scenario: User successfully change the payment image
#     Given I'm login as verified account
#     And I'm on the warehouse dashboard page
#     And I click the "Pembayaran" menu
#     When I click the "Upload bukti pembayaran" button
#     When I click the "Edit action" button
#     Then I input the correct "<payment>" format
#     And I click the "Buat pembayaran" button

# Scenario: Admin accept the payment
#     Given I'm login as admin account
#     And I'm on the warehouse dashboard page
#     And I click the "Pembayaran" menu
#     When I click the "Edit action" button
#     Then I verify the payment
#     And I click the "Buat pembayaran" button
#     And I see the verified item on the table on "Pembayaran" Page

