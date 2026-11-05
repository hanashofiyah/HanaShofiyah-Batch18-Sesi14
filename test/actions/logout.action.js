import { $ } from '@wdio/globals'
import menuPage from '../pageobjects/menu.page.js'
import loginPage from '../pageobjects/login.page.js'

export class LogoutAction {
    async openMenu() {
        const menu = await $(menuPage.menuButton)
        await menu.waitForDisplayed({ timeout: 10000 })
        await menu.click()
    }

    async tapLogout() {
        const logout = await $(menuPage.logoutButton)
        await logout.waitForDisplayed({ timeout: 10000 })
        await logout.click()
    }

    async logout() {
        await this.openMenu()
        await this.tapLogout()
        const loginButton = await $(loginPage.loginButton)
        await loginButton.waitForDisplayed({ timeout: 10000 })
        return loginButton.isDisplayed()
    }
}

export default new LogoutAction()
