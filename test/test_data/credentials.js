// Sauce Labs My Demo App sample credentials.
const credentials = {
    validUser: {
        username: process.env.SAUCE_USERNAME || 'standard_user',
        password: process.env.SAUCE_PASSWORD || 'secret_sauce'
    },
    invalidUser: {
        username: 'invalid_user',
        password: 'wrong_password'
    }
}

export default credentials
