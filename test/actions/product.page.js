import { $$ } from '@wdio/globals'

export class ProductAction {
    get productNameSelector() { return '~test-Item title' }
    get productPriceSelector() { return '~test-Price' }

    async getProductNames() {
        const elements = await $$(this.productNameSelector)
        return Promise.all(elements.map(element => element.getText()))
    }

    async getProductPrices() {
        const elements = await $$(this.productPriceSelector)
        const prices = await Promise.all(elements.map(element => element.getText()))
        return prices.map(price => Number(price.replace(/[^0-9.]/g, '')))
    }
}

export default new ProductAction()
