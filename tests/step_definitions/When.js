const { When } = require("@cucumber/cucumber");
const LoginPage = require("../page_object/login");

When("User clicks the on the login button", async function () {
    await this.loginPage.clickOntheLoginButton();
});

When(
    "User fills the email {string} in the email field",
    async function (validEmail) {
        await this.loginPage.fillEmailField(validEmail);
    },
);

When(
    "User fills the password {string} in the password field",
    async function (validPassword) {
        await this.loginPage.fillPasswordField(validPassword);
    },
);

When("User clicks the SignIn button on the login page", async function () {
    await this.loginPage.clickOnTheSignInButton();
});

When("User clicks the Rent a Car button", async function () {
    await this.loginPage.clickOnRentACarButton();
});

When("User click the Rent Now button on the dashboard", async function () {
    await this.loginPage.clickOnRentNowButton();
});

When(
    "User fills the {string} in the location field",
    async function (location) {
        await this.loginPage.fillLocationField(location);
    },
);

When("User selects the Pickup date and time", async function () {
    await this.loginPage.fillPickUpField();
});

When("User selects the drop-off date and time", async function () {
    await this.loginPage.fillDropOffField();
});

When("User clicks the Search Button", async function () {
    await this.loginPage.clickOnSearchButton();
});

When('User clicks on the "Book Now" button', async function () {
    await this.loginPage.clickOnBookNowButton();
});

When('User clicks the "I agree" checkbox', async function () {
    await this.loginPage.clickOnIAgreeCheckbox();
});

When(
    'User clicks the "Down arrow" button on the terms and condition page',
    async function () {
        await this.loginPage.clickOnDownArrowButton();
    },
);

When('User clicks the "Agree and Close" button', async function () {
    await this.loginPage.clickOnAgreeAndCloseButton();
});

When('User click on the "Proceed to pay" button', async function () {
    await this.loginPage.clickOnproceedToPayButton();
});

When('User clicks the "I Agree, Continue" button', async function () {
    await this.loginPage.clickOnIAgreeAndContinueButton();
});

When(
    "User fills the card number {string} expiry date {string} cvv {string} and {string} in the card details",
    async function (card, date, cvc, name) {
        await this.loginPage.fillCardNumberField(card, date, cvc, name);
    },
);

When('User click on the "Save" button', async function () {
    await this.loginPage.clickOnSaveButton();
});
