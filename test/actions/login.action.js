import { $, $$, browser } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'

export class LoginAction {
    async enterUsername(username) {
        const fields = await $$(loginPage.usernameInput)
        if (fields.length < 1) throw new Error('Username input was not found')
        await fields[0].setValue(username)
    }

    async enterPassword(password) {
        const fields = await $$(loginPage.usernameInput)
        if (fields.length < 2) throw new Error('Password input was not found')
        await fields[1].setValue(password)
    }

    async tapLogin() {
        const btn = await $(loginPage.loginButton)
        await btn.waitForDisplayed({ timeout: 10000 })
        await btn.click()
    }

    async login(username, password) {
        await this.enterUsername(username)
        await this.enterPassword(password)
        try { await browser.hideKeyboard() } catch (error) { /* keyboard may be hidden */ }
        await this.tapLogin()
    }

    async waitForProducts() {
        const products = await $(loginPage.productsTitle)
        await products.waitForDisplayed({ timeout: 15000 })
        return products.isDisplayed()
    }

    async isOnLoginPage() {
        const btn = await $(loginPage.loginButton)
        await btn.waitForDisplayed({ timeout: 10000 })
        return btn.isDisplayed()
    }

    async getErrorMessage() {
        const error = await $(loginPage.errorMessage)
        await error.waitForDisplayed({ timeout: 10000 })
        return error.getText()
    }
}

export default new LoginAction()
