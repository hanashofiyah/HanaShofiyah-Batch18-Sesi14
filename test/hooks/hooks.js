import { $, browser } from '@wdio/globals'
import productAction from './product.page.js'

export class SortingAction {
    get sortingButton() { return '~test-Modal Selector Button' }

    async selectSorting(option) {
        const button = await $(this.sortingButton)
        await button.waitForDisplayed({ timeout: 10000 })
        await button.click()
        const optionElement = await $(`android=new UiSelector().text("${option}")`)
        await optionElement.waitForDisplayed({ timeout: 10000 })
        await optionElement.click()
        await browser.pause(500)
    }

    async getSelectedSorting() {
        const button = await $(this.sortingButton)
        await button.waitForDisplayed({ timeout: 10000 })
        return button.getText()
    }

    async getProductNames() { return productAction.getProductNames() }
    async getProductPrices() { return productAction.getProductPrices() }

    async isNamesSortedAscending() {
        const names = await this.getProductNames()
        return names.length > 1 && names.every((name, i) => i === 0 || names[i - 1].localeCompare(name) <= 0)
    }
    async isNamesSortedDescending() {
        const names = await this.getProductNames()
        return names.length > 1 && names.every((name, i) => i === 0 || names[i - 1].localeCompare(name) >= 0)
    }
    async isPricesSortedAscending() {
        const prices = await this.getProductPrices()
        return prices.length > 1 && prices.every((price, i) => i === 0 || prices[i - 1] <= price)
    }
    async isPricesSortedDescending() {
        const prices = await this.getProductPrices()
        return prices.length > 1 && prices.every((price, i) => i === 0 || prices[i - 1] >= price)
    }
}

export default new SortingAction()
