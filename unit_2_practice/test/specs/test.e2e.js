const { expect, browser, $ } = require('@wdio/globals')

describe('My Login application', () => {
    it('should not login without credentials', async () => {
        await browser.url('https://the-internet.herokuapp.com/login')
        
        let loginBtn = await $('//i[contains(@class, "fa-sign-in")]')
        await expect(loginBtn).toExist()

        await loginBtn.click()

        //let errorMessage = await $('//div[contains(@class, "flash error")]')
        let errorMessage = await $('//div[@id = "flash"]')
        await expect(errorMessage).toExist()
    })
})