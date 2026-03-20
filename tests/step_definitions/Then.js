const { Then } = require('@cucumber/cucumber');
const LoginPage = require('../page_object/login');
const { expect } = require('@playwright/test');


Then('Verify that user is on homepage', async function () {
    await this.loginPage.verifyHomepage();
});

Then('User should be redirected on homepage', async function () {
    await this.loginPage.verifyDashboard();
});

Then('Location field should be visible on the page', async function () {
    await this.loginPage.verifyLocationText();
});

Then('List of the cars should be visible', async function () {
    await this.loginPage.verifyCarSearchPage();
});

Then('Selected car should be visible with "Trip Summary" details', async function () {
    await this.loginPage.verifyTripSummaryText();
});

Then('User should be redirected to "Order Summary" page', async function () {
    await this.loginPage.verifyOrderSummaryPage();
});

Then('"Confirm Security Block" popup should be visible', async function () {
    await this.loginPage.verifySecurityBlockPopup();
});

Then('User should be redirected on payment page', async function () {
    await this.loginPage.verifySavePaymentPage();
});

Then('"Booking Complete" popup should be visible', async function () {
    await this.loginPage.verifyBookingCompletePopup();
});

Then('Verify that created booking is visible in the "Rented Cars" list', async function () {
    await this.loginPage.verifyBookingNumber();
});