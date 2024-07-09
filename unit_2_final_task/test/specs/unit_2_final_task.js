const { expect, browser, $ } = require('@wdio/globals')

describe('My Unit 2 - Final task', () => {
    it('checks input, pdf download and others', async () => {
        await browser.url('https://www.wikipedia.org/')
        

        // test case 1: Preconding - Opening the wikipedia.org home page
        let pageTitle = await browser.getTitle();
        console.log("The page title is: ", pageTitle);

        await browser.pause(2000);

        // test case 2: "Albert Einstein" text in the search input field
        let searchInput = await browser.$('//input[@id="searchInput"]');
        await searchInput.setValue("Albert Einstein");

        await browser.pause(2000);

        let searchBtn = await browser.$('//button[contains(@class, "primary-progressive")]');
        await searchBtn.click();

        await browser.pause(2000);

        // test case 3: click tools menu and download as pdf button sequentially

        let toolsMenuBtn = await browser.$('//input[@id="vector-page-tools-dropdown-checkbox"]');
        await toolsMenuBtn.click();

        await browser.pause(2000);

        let downloadPdfBtn = await browser.$('//a[@title="Download this page as a PDF file"]');
        await downloadPdfBtn.click();

        await browser.pause(2000);

        // test case 3: downloading the pdf

        let downloadBtn = await browser.$('//button[contains(@class, "oo-ui-buttonElement-button")]');
        await downloadBtn.click();

        await browser.pause(2000);

    })
})