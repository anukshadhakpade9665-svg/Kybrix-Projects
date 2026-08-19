import { browser, $, expect } from '@wdio/globals';

describe('WebdriverIO Complete Automation', () => {

    beforeEach(async () => {
        // Website open
        await browser.url('https://the-internet.herokuapp.com/');
    });

    it('should perform complete automation flow', async () => {

        // ------------------------------------
        // 1. Verify Home Page
        // ------------------------------------

        const pageTitle = await browser.getTitle();
        console.log('Page Title:', pageTitle);

        const currentUrl = await browser.getUrl();
        console.log('Current URL:', currentUrl);

        await expect(browser).toHaveUrl(
            'https://the-internet.herokuapp.com/'
        );


        // ------------------------------------
        // 2. Open Form Authentication
        // ------------------------------------

        const loginLink = await $(
            'a[href="/login"]'
        );

        await loginLink.click();

        console.log('Login page opened');


        // ------------------------------------
        // 3. Enter Username
        // ------------------------------------

        const username = await $('#username');

        await username.waitForDisplayed({
            timeout: 5000
        });

        await username.setValue('tomsmith');

        console.log(
            'Username entered:',
            await username.getValue()
        );


        // ------------------------------------
        // 4. Enter Password
        // ------------------------------------

        const password = await $('#password');

        await password.setValue('SuperSecretPassword!');

        console.log('Password entered');


        // ------------------------------------
        // 5. Click Login
        // ------------------------------------

        const loginButton = await $(
            'button[type="submit"]'
        );

        await loginButton.click();

        await browser.pause(1000);


        // ------------------------------------
        // 6. Verify Login Success
        // ------------------------------------

        const secureArea = await $(
            '#content'
        );

        await secureArea.waitForDisplayed({
            timeout: 5000
        });

        console.log('Login successful');

        await expect(browser).toHaveUrl(
            'https://the-internet.herokuapp.com/secure'
        );


        // ------------------------------------
        // 7. Take Screenshot
        // ------------------------------------

        await browser.saveScreenshot(
            './screenshots/login-success.png'
        );

        console.log('Screenshot saved');


        // ------------------------------------
        // 8. Check Logout Button
        // ------------------------------------

        const logoutButton = await $(
            'a[href="/logout"]'
        );

        await expect(logoutButton).toBeDisplayed();

        console.log('Logout button is displayed');


        // ------------------------------------
        // 9. Logout
        // ------------------------------------

        await logoutButton.click();

        await browser.pause(1000);


        // ------------------------------------
        // 10. Verify Logout
        // ------------------------------------

        await expect(browser).toHaveUrl(
            'https://the-internet.herokuapp.com/login'
        );

        console.log('Logout successful');


        // ------------------------------------
        // 11. Verify Error Message
        // ------------------------------------

        const flashMessage = await $(
            '#flash'
        );

        await flashMessage.waitForDisplayed({
            timeout: 5000
        });

        console.log(
            'Message:',
            await flashMessage.getText()
        );


        // ------------------------------------
        // 12. Final Screenshot
        // ------------------------------------

        await browser.saveScreenshot(
            './screenshots/logout-success.png'
        );

        console.log('Test completed successfully');
    });


    // ----------------------------------------
    // Second Test Case
    // ----------------------------------------

    it('should verify checkboxes', async () => {

        await browser.url(
            'https://the-internet.herokuapp.com/checkboxes'
        );

        const checkboxes = await $$(
            'input[type="checkbox"]'
        );

        console.log(
            'Total checkboxes:',
            checkboxes.length
        );


        // First checkbox
        const firstCheckbox = checkboxes[0];

        if (!(await firstCheckbox.isSelected())) {
            await firstCheckbox.click();
        }

        console.log(
            'First checkbox:',
            await firstCheckbox.isSelected()
        );


        // Second checkbox
        const secondCheckbox = checkboxes[1];

        if (await secondCheckbox.isSelected()) {
            await secondCheckbox.click();
        }

        console.log(
            'Second checkbox:',
            await secondCheckbox.isSelected()
        );


        // Screenshot
        await browser.saveScreenshot(
            './screenshots/checkbox-test.png'
        );

        console.log('Checkbox test completed');
    });


    // ----------------------------------------
    // Third Test Case - Dropdown
    // ----------------------------------------

    it('should select dropdown option', async () => {

        await browser.url(
            'https://the-internet.herokuapp.com/dropdown'
        );

        const dropdown = await $('#dropdown');

        await dropdown.waitForDisplayed({
            timeout: 5000
        });


        // Select Option 2
        await dropdown.selectByVisibleText(
            'Option 2'
        );


        // Get selected value
        const selectedValue =
            await dropdown.getValue();

        console.log(
            'Selected value:',
            selectedValue
        );


        // Verify selected value
        await expect(dropdown).toHaveValue(
            '2'
        );


        // Screenshot
        await browser.saveScreenshot(
            './screenshots/dropdown-test.png'
        );

        console.log(
            'Dropdown test completed'
        );
    });

});
