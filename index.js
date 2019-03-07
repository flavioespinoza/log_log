// Using esm cli instead of bridge?
require('ansicolor').nice
import log from 'ololog'
import util from 'util'
import _ from 'lodash'

const _log = {
    deep: data => {
        const options = {
            showHidden: false,
            depth: null,
            colors: true
        }
        const inspect = util.inspect(data, options)
        console.log(inspect)
    },
    info: msg => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(` Info: ${msg} `.bgBlue.white)
    },
    error: msg => {
        log.lightYellow('ERROR: ', msg)
    },
    alert: msg => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(` Alert: ${msg} `.bgYellow.black)
    },
    warn: msg => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(` Warn: ${msg} `.bgMagenta.white)
    },
    blue: msg => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.bgBlue.black)
    },
    red: msg => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.bgRed.black)
    },
    green: msg => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.bgGreen.black)
    },
    pink: msg => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.bgLightRed.black)
    },
    yellow: msg => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.bgLightYellow.white)
    },
    violet: msg => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.bgLightMagenta.black)
    },
    cyan: msg => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.bgCyan.black)
    },
    assert: (item, item_name) => {
        if (item) {
            let msg = ` SUCCESS: ${item_name} = ${item} `
            console.log(`ASSERT`, msg.bgCyan.black)
        } else {
            let msg = ` FAIL: ${item_name} = ${item} `
            console.log(`ASSERT`, msg.bgRed.black)
        }
    },
    timer: (method, method_name) => {
        console.time(`Timer ${method_name}()`)
        method()
        console.timeEnd(`Timer ${method_name}()`)
    }
}

module.exports = _log
