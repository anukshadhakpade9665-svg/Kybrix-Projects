import { browser } from '@wdio/globals';

describe('Google Search Test', () => {

    it('should search on Google', async () => {

        // Google open
        await browser.url('https://www.google.com');

        // Search box mein text enter
        const searchBox = await $('textarea[name="q"]');
        await searchBox.setValue('WebdriverIO JavaScript');

        // Enter press
        await searchBox.keys('Enter');

        // Page load hone ka wait
        await browser.pause(2000);

        // Title print
        console.log('Page Title:', await browser.getTitle());

    });

});
