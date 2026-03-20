Feature: Functionality test of rentifAi dev

  Scenario Outline: Check the login page with crendentials
    Given User opens the website URL
    Then Verify that user is on homepage
    When User clicks the on the login button
    When User fills the email "<validEmail>" in the email field
    When User fills the password "<validPassword>" in the password field
    When User clicks the SignIn button on the login page
    Then User should be redirected on homepage

    Examples:
      | validEmail             | validPassword |
      | vikasvkybrix@gmail.com | Hello@123     |

  Scenario Outline: Verify that user is able to rent a car with future date and time
    When User clicks the Rent a Car button
    When User click the Rent Now button on the dashboard
    Then Location field should be visible on the page
    When User fills the "<location>" in the location field
    When User selects the Pickup date and time
    When User selects the drop-off date and time
    When User clicks the Search Button
    Then List of the cars should be visible
    When User clicks on the "Book Now" button
    Then Selected car should be visible with "Trip Summary" details
    When User clicks the "I agree" checkbox
    When User clicks the "Down arrow" button on the terms and condition page
    When User clicks the "Agree and Close" button
    When User click on the "Proceed to pay" button
    Then User should be redirected to "Order Summary" page
    When User click on the "Proceed to pay" button
    Then "Confirm Security Block" popup should be visible
    When User clicks the "I Agree, Continue" button
    Then User should be redirected on payment page
    When User fills the card number "<cardNumber>" expiry date "<expiryDate>" cvv "<cvc>" and "<cardHolderName>" in the card details
    When User click on the "Save" button
    Then "Booking Complete" popup should be visible
    Then Verify that created booking is visible in the "Rented Cars" list

    Examples:
      | location                                            | cardNumber       | expiryDate | cvc | cardHolderName     |
      | Nile Road, Forrest Hill, Auckland 0620, New Zealand | 4242424242424242 |      12/30 | 266 | Rentifai Test User |
