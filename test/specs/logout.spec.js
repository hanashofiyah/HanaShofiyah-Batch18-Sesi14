import { expect } from '@wdio/globals'
import loginAction from '../actions/login.action.js'
import logoutAction from '../actions/logout.action.js'
import credentials from '../test_data/credentials.js'
import appHelper from '../utils/app.helper.js'

describe('Swag Labs App - Logout', () => {
    it('should logout after successful login', async () => {
        await appHelper.restartApp()
        await loginAction.login(credentials.validUser.username, credentials.validUser.password)
        await expect(await loginAction.waitForProducts()).toBe(true)
        await expect(await logoutAction.logout()).toBe(true)
    })
})
