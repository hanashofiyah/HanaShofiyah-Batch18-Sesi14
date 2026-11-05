import { $, browser } from '@wdio/globals'
import fs from 'node:fs'
import path from 'node:path'

/** Shared helpers used by the mobile test scenarios. */
export class AppHelper {
    async waitForElement(selector, timeout = 10000) {
        const element = await $(selector)
        await element.waitForDisplayed({ timeout })
        return element
    }

    async clickElement(selector) {
        const element = await this.waitForElement(selector)
        await element.click()
    }

    async getElementText(selector) {
        const element = await this.waitForElement(selector)
        return element.getText()
    }

    async hideKeyboard() {
        try {
            await browser.hideKeyboard()
        } catch (error) {
            // Keyboard may already be hidden on the current screen.
        }
    }

    async takeScreenshot(fileName = `screenshot-${Date.now()}.png`) {
        const directory = path.resolve('./screenshots')
        fs.mkdirSync(directory, { recursive: true })
        const filePath = path.join(directory, fileName)
        await browser.saveScreenshot(filePath)
        return filePath
    }

    async restartApp() {
        // Default application id for Sauce Labs My Demo App (Android).
        const appPackage = process.env.APP_PACKAGE || 'com.saucelabs.mydemoapp.android'
        try {
            await browser.terminateApp(appPackage)
        } catch (error) {
            // The application may not be running yet.
        }
        await browser.activateApp(appPackage)
    }
}

export default new AppHelper()
