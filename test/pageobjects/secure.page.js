import { $ } from '@wdio/globals'
import Page from './page.js'

/** Secure page object retained from the original project. */
class SecurePage extends Page {
    get flashAlert() {
        return $('#flash')
    }
}

export default new SecurePage()
