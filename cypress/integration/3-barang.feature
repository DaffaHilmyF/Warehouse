Feature: Barang

    As a user I want to input item, so I can up-to-date my items

    Background:
        Given I'm login as verified account:
            | email                        | password |
            | daffahilmanafrizal@gmail.com | 12345678 |
        And I'm on the warehouse dashboard page
        And I click the "Barang" menu on the sidebar
        When I click the "Tambah Barang Baru" button

    Scenario: User successfully input item
        Then I fill the input Barang form with valid data:
            | item            | category   | quantity | warehouse           | room               | vehicle_code  |
            | Yae Miko Figure | elektronik | 1        | Gudang alamat soleh | RUANGAN 1 GUDANG 1 | D 12131321 XS |
            | Raiden Ei       | furnitur   | 2        | Gudang barokah 001  | RUANGAN 1 GUDANG 2 | D 535354 XS   |



        And I click the "Selanjutnya" button
        And I click the "Buat pembayaran" button
        And I see the overall payment in the table


    Scenario: The user tries to input an item with an invalid data type
        Then I fill the input Barang form with invalid data
        And I click the "Selanjutnya" button
        And I see the invalid datatype error message

    Scenario: The user tries to input an item with blank data on the inputted fields
        Then I fill the input Barang form with blank data
        And I click the "Selanjutnya" button
        And I see the required fields error message