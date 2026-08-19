const { expect } = require('@wdio/globals');

describe('Search Page Automation', () => {

    it('should search for a product', async () => {

        // Open website
        await browser.url('https://example.com');

        // Search box
        const searchBox = await $('#search');

        await searchBox.waitForDisplayed();
        await searchBox.setValue('Laptop');

        // Click search button
        const searchButton = await $('#searchButton');

        await searchButton.click();

        // Wait for search results
        const results = await $$('.search-result');

        await browser.waitUntil(
            async () => {
                return (await $$('.search-result')).length > 0;
            },
            {
                timeout: 10000,
                timeoutMsg: 'Search results not displayed'
            }
        );

        // Verify results
        expect(results.length).toBeGreaterThan(0);

        console.log(
            `Search returned ${results.length} results`
        );

        // Print result names
        for (let i = 0; i < results.length; i++) {

            const name = await results[i]
                .$('.result-title')
                .getText();

            console.log(`Result ${i + 1}: ${name}`);
        }

        // Verify URL
        await expect(browser).toHaveUrl(
            expect.stringContaining('search')
        );

        // Take screenshot
        await browser.saveScreenshot(
            './screenshots/search-page.png'
        );

        console.log('Search test completed successfully');
    });
});
