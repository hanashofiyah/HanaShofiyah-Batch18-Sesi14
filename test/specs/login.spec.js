import { expect } from '@wdio/globals'
import loginAction from '../actions/login.action.js'
import credentials from '../test_data/credentials.js'
import appHelper from '../utils/app.helper.js'

describe('Swag Labs App - Login', () => {
    beforeEach(async () => { await appHelper.restartApp() })

    it('should login successfully with standard user', async () => {
        await expect(await loginAction.isOnLoginPage()).toBe(true)
        await loginAction.login(credentials.validUser.username, credentials.validUser.password)
        await expect(await loginAction.waitForProducts()).toBe(true)
    })

    it('should show an error when login credentials are invalid', async () => {
        await expect(await loginAction.isOnLoginPage()).toBe(true)
        await loginAction.login(credentials.invalidUser.username, credentials.invalidUser.password)
        const errorMessage = await loginAction.getErrorMessage()
        await expect(errorMessage).toContain('Username and password')
    })
})
