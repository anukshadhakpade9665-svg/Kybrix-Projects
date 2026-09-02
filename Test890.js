describe('WebdriverIO Page Handling', () => {

    it('should handle a web page', async () => {

        // Open website
        await browser.url('https://example.com');

        // Get page title
        const title = await browser.getTitle();
        console.log('Page Title:', title);

        // Find an element
        const heading = await $('h1');

        // Get text
        const headingText = await heading.getText();
        console.log('Heading:', headingText);

        // Find input
        const searchBox = await $('#search');

        // Enter text
        await searchBox.setValue('WebdriverIO');

        // Find button
        const searchButton = await $('button');

        // Click button
        await searchButton.click();

        // Wait for element
        await $('.results').waitForDisplayed({
            timeout: 5000
        });

        // Verify text
        const resultText = await $('.results').getText();

        expect(resultText).toContain('WebdriverIO');

        // Take screenshot
        await browser.saveScreenshot('./screenshot.png');
    });
});
