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

  Scenario Outline: Verify that "Owner" is able to list a car on "RentifAi"
    When User clicks the "List a Car" button
    When User clicks the "Car Listing" button on the dashboard
    When Search and delete already listed car "<plateNumber>"
    When User click the "List Now" button on the dashboard
    Then User should be redirected on car plate number verification page
    When User clicks the "Verify" button on car listing page
    Then Validation message "Please Enter a Valid Plate No." should appear
    When User clicks the "Next" button on car listing page
    Then Validation message "Plate number is Required *" should appear
    Then Validation message "Front left tire pressure is required" should appear
    Then Validation message "Front right tire pressure is required" should appear
    Then Validation message "Rear left tire pressure is required" should appear
    Then Validation message "Rear right tire pressure is required" should appear
    When User fills the car plate number "<plateNumber>" in the plate number field
    When User clicks the "Next" button on car listing page
    Then Validation message "Please verify your plate number first" should appear
    When User clicks the "Verify" button on car listing page
    When User fills the tyre pressue in the front left tyre "<frontTyrePressure>" front right tyre "<frontTyrePressure>" rear left tyre "<rearTyrePressure>" rear right tyre "<rearTyrePressure>"
    When User selects the fuel type "<fuelType>" from the dropdown
    When User clicks the "Next" button on car listing page
    Then Validation message "Section 1 Saved Successfully." should appear
    When User clicks the "Next" button on car listing page
    Then Validation message "Please add at least one point of contact before continuing." should appear
    Then Validation message "required*" should appear
    When User fills the name "<name>" in "Name" field
    When User fills the mobile "<mobile>" in "Mobile" field
    When User fills the email "<email>" in "Email" field
    When User clicks the button with text "Confirm"
    When User fills the km "<kmDriven>" in "Km Driven" field
    When User clicks the "Next" button on car listing page
    Then Validation message "Section 2 Saved Successfully." should appear
    When User clicks the "Next" button on car listing page
    Then Validation message "required*" should appear
    When User fills the car price "<carPrice>" in the field
    Then Validation message "Please select a valid location from dropdown*" should appear
    When User fills the pickup location "<pickupLocation>" in the field
    Then Validation message "required*" should appear
    When User fills the car value "<carValue>" in the field
    When User clicks the "Next" button on car listing page
    Then Validation message "Section 3 Saved Successfully." should appear
    When User selects the pickup delivery option "<deliveryOption>"
    When User clicks the button with text "Save"
    Then Validation message "required" should appear
    When User fills the delivery charges "<deliverycharges>" in the field
    When User clicks the button with text "Save"
    When User selects the Airport delivery option "<deliveryOption>"
    When User clicks the button with text "Save"
    Then Validation message "requried" should appear
    When User fills the delivery charges "<deliverycharges>" in the field
    When User clicks the button with text "Save"
    Then Validation message "Please select a airport" should appear
    When User fills the airport location "<airportLocation>" in the field
    When User clicks the button with text "Save"
    When User clicks the "Next" button on car listing page
    Then Validation message "Section 3A Saved Successfully." should appear
    When User clicks the "Next" button on car listing page
    Then Validation message "Section 4 Saved Successfully." should appear
    When User selects the accessories "<accessories>" from the dropdown
    When User clicks the button with text "Add Accessory"
    When User selects the accessories "<secondAccessories>" from the dropdown
    When User clicks the button with text "Add Accessory"
    When User selects the accessories "<ThirdAccessories>" from the dropdown
    When User clicks the button with text "Add Accessory"
    When User clicks the button with text "Next"
    When User fill the price in "<weeklyPrice>" packages
    When User clicks the button with text "Add"
    Then Validation message "Successfully Added Weekly Bundle." should appear
    When User clicks the "Fortnightly" option on the listing page
    When User fill the price in "<fortnightlyPrice>" packages
    When User clicks the button with text "Add"
    Then Validation message "Successfully Added Fortnight Bundle." should appear
    When User clicks the "Monthly" option on the listing page
    When User fill the price in "<monthlyPrice>" packages
    When User clicks the button with text "Add"
    Then Validation message "Successfully Added Monthly Bundle." should appear
    When User clicks the "Quarterly" option on the listing page
    When User fill the price in "<quarterlyPrice>" packages
    When User clicks the button with text "Add"
    Then Validation message "Successfully Added Quaterly Bundle." should appear
    When User clicks the "Yearly" option on the listing page
    When User fill the price in "<yearlyPrice>" packages
    When User clicks the button with text "Add"
    Then Validation message "Successfully Added Yearly Bundle." should appear
    When User clicks the button with text "Submit"
    When User clicks the button with text "Confirm & Next"
    Then Validation message "Section 5 Saved Successfully." should appear
    When User clicks the button with text "Clear All Thumbnails"
    When User uploads the images of car
    When User clicks the button with text "Submit"
    When User clicks the button with text "Yes"
    Then Validation message "Car Listed Successfully!" should appear

    Examples:
      | plateNumber | fuelType | name  | mobile    | email                  | carPrice | pickupLocation                                      | carValue | kmDriven | deliveryOption | deliverycharges | airportLocation  | accessories | secondAccessories | ThirdAccessories | weeklyPrice | fortnightlyPrice | monthlyPrice | quarterlyPrice | yearlyPrice | frontTyrePressure | rearTyrePressure |
      | RQM887      |       98 | vikas | 354768901 | vikasvkybrix@gmail.com |       65 | Nile Road, Forrest Hill, Auckland 0620, New Zealand |    48000 |     1008 | Yes            |              20 | Auckland Airport | Baby Seat   | Wi-fi             | Tow Bar          |           2 |                4 |            6 |              8 |          10 |                40 |               40 |

  Scenario Outline: Verify that User is able to Add the "COF" in the newly listed car
    When User clicks the "List a Car" button
    When User click on the "Filters" button on Dashboard
    When User fills the plate number "<plateNumber>" inside filter
    When User clicks the button with text "Apply Filters"
    Then Verify that car details are visible with "Plate Number" "<plateNumber>" "Make" "<make>" "Model" "<model>" "Details" "<details>"
    When User clicks the "Eye" icon on the filtered car
    Then User should be redirected on car details page
    When User click on the "COF" button
    Then User should be redirected to "COF Details" page
    When User clicks the Cof edit button on the car update page
    Then User should be redirected on "COF Verification" popup
    When User fills the COF details in the popup with "Issue Date" "<issueDate>" and "Expiry Date" "<expiryDate>"
    When User clicks the button with text "Submit COF"
    When User click on the "Filters" button on Dashboard
    When User fills the plate number "<plateNumber>" inside filter
    When User clicks the button with text "Apply Filters"
    Then Verify that car details are visible with "Plate Number" "<plateNumber>" "Make" "<make>" "Model" "<model>" "Details" "<approveDetails>"
   
    Examples:
      | plateNumber | make    | model | details | issueDate   | expiryDate  | approveDetails |
      | RQM887      | Hyundai | I20   | PENDING | 07-May-2024 | 05-Dec-2030 | APPROVED       |

  # Scenario Outline: Verify that user is able to rent a car with future date and time 
  #   When User clicks the Rent a Car button
  #   When User click the Rent Now button on the dashboard
  #   Then Location field should be visible on the page
  #   When User fills the "<location>" in the location field
  #   When User selects the Pickup date and time
  #   When User selects the drop-off date and time
  #   When User clicks the Search Button
  #   Then List of the cars should be visible
  #   When User clicks on the "Book Now" button
  #   Then Selected car should be visible with "Trip Summary" details
  #   When User clicks the "I agree" checkbox
  #   When User clicks the "Down arrow" button on the terms and condition page
  #   When User clicks the "Agree and Close" button
  #   When User click on the "Proceed to pay" button
  #   Then User should be redirected to "Order Summary" page
  #   When User click on the "Proceed to pay" button
  #   Then "Confirm Security Block" popup should be visible
  #   When User clicks the "I Agree, Continue" button
  #   Then User should be redirected on payment page
  #   When User fills the card number "<cardNumber>" expiry date "<expiryDate>" cvv "<cvc>" and "<cardHolderName>" in the card details
  #   When User click on the "Save" button
  #   Then "Booking Complete" popup should be visible
  #   Then Verify that created booking is visible in the "Rented Cars" list
  #   Examples:
  #     | location                                            | cardNumber       | expiryDate | cvc | cardHolderName     |
  #     | Nile Road, Forrest Hill, Auckland 0620, New Zealand | 4242424242424242 |      12/30 | 266 | Rentifai Test User |


 Scenario Outline: Verify that user is able to rent a car with future date and time 
 When created for test taskfleet for test