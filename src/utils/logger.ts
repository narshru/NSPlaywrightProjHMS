
import log4js from 'log4js'
import path from 'path'

log4js.configure({
    appenders: {
        console: {
            type: 'console',
            layout: {
                type: 'pattern',
                pattern: '%d{ISO8601} [%p] %c - %m'
            },
        },
        file: {
            type: 'file',
            filename: path.join(process.cwd(), 'test-results', 'logs', 'playwright.log'),
            maxLogSize: 5 * 1024 * 1024,
            backups: 5,
            layout: {
                type: 'pattern',
                pattern: '%d{ISO8601} [%p] %c - %m'
            },
        },
    },
    categories: {
        default: {
            appenders: ['console', 'file'],
            level: 'info'
        },
    },
})

export const logger = log4js.getLogger();
