const { Given } = require("@cucumber/cucumber");

Given("User opens the website URL", async function () {
  await this.loginPage.openURL();
});
