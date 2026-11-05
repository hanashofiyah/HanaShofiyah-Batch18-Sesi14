import path from 'node:path'
import { fileURLToPath } from 'node:url'
import hooks from './test/hooks/hooks.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const apkPath = path.resolve(__dirname, 'app', 'sauce-labs.2.7.1.apk')

export const config = {
    runner: 'local',
    port: 4723,
    specs: ['./test/specs/**/*.js'],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': process.env.ANDROID_DEVICE_NAME || 'emulator-5554',
        // platformVersion intentionally omitted so Appium detects the active emulator version.
        'appium:automationName': 'UiAutomator2',
        'appium:app': apkPath,
        'appium:appWaitActivity': '*',
        'appium:appWaitDuration': 30000,
        'appium:autoGrantPermissions': true,
        'appium:noReset': false,
        'appium:fullReset': false,
        'appium:newCommandTimeout': 300
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: './reports/allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: false
        }]
    ],
    mochaOpts: { ui: 'bdd', timeout: 60000 },
    before: hooks.before,
    beforeTest: hooks.beforeTest,
    afterTest: hooks.afterTest,
    after: hooks.after
}
