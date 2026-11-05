import { expect } from '@wdio/globals'
import loginAction from '../actions/login.action.js'
import sortingAction from '../actions/sorting.action.js'
import credentials from '../test_data/credentials.js'
import appHelper from '../utils/app.helper.js'

describe('Swag Labs App - Sorting', () => {
    beforeEach(async () => {
        await appHelper.restartApp()
        await loginAction.login(credentials.validUser.username, credentials.validUser.password)
        await loginAction.waitForProducts()
    })

    it('should sort products by name A to Z', async () => {
        await sortingAction.selectSorting('Name (A to Z)')
        await expect(await sortingAction.isNamesSortedAscending()).toBe(true)
    })
    it('should sort products by name Z to A', async () => {
        await sortingAction.selectSorting('Name (Z to A)')
        await expect(await sortingAction.isNamesSortedDescending()).toBe(true)
    })
    it('should sort products by price low to high', async () => {
        await sortingAction.selectSorting('Price (low to high)')
        await expect(await sortingAction.isPricesSortedAscending()).toBe(true)
    })
    it('should sort products by price high to low', async () => {
        await sortingAction.selectSorting('Price (high to low)')
        await expect(await sortingAction.isPricesSortedDescending()).toBe(true)
    })
})
