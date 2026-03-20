const { BeforeAll, AfterAll, Before, After, setDefaultTimeout, Status } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { LoginPage } = require('../page_object/login');

setDefaultTimeout(60000);

let browser; 
let page;    

BeforeAll(async () => {
    browser = await chromium.launch({
        headless: false,
        args: ['--start-maximized']
    });

    const context = await browser.newContext({ viewport: null });
    page = await context.newPage();
    await context.clearCookies();
    page.setDefaultTimeout(30000);
});

Before(async function () {
    this.page = page; 
    this.loginPage = new LoginPage(this.page);
    this.page.setDefaultTimeout(40000);
});

After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        const screenshot = await this.page.screenshot();
        await this.attach(screenshot, 'image/png');
    }
});

AfterAll(async () => {
    await browser.close(); 
});

