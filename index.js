const dotenv = require('dotenv')
dotenv.load()

require('ansicolor').nice
const util = require('util')
const log = require('ololog').configure({locate: false})

const _log = {
	deep: (data) => {
		console.log(util.inspect(data, false, null, true))
	},
	info: (msg) => {
		if (typeof msg === 'object') {
			msg = JSON.stringify(msg)
		}
		console.log(` Info: ${msg} `.bgBlue.black)
	},
	error: (msg) => {
		if (typeof msg === 'object') {
			msg = JSON.stringify(msg)
		}
		console.log(` Error: ${msg} `.bgRed.black)
	},
	alert: (msg) => {
		if (typeof msg === 'object') {
			msg = JSON.stringify(msg)
		}
		console.log(` Alert: ${msg} `.bgYellow.black)
	},
	warn: (msg) => {
		if (typeof msg === 'object') {
			msg = JSON.stringify(msg)
		}
		console.log(` Warn: ${msg} `.bgMagenta.black)
	},
	blue: (msg) => {
		if (typeof msg === 'object') {
			msg = JSON.stringify(msg)
		}
		console.log(`${msg} `.bgBlue.black)
	},
	red: (msg) => {
		if (typeof msg === 'object') {
			msg = JSON.stringify(msg)
		}
		console.log(`${msg} `.bgRed.black)
	},
	green: (msg) => {
		if (typeof msg === 'object') {
			msg = JSON.stringify(msg)
		}
		console.log(`${msg} `.bgGreen.black)
	},
	pink: (msg) => {
		if (typeof msg === 'object') {
			msg = JSON.stringify(msg)
		}
		console.log(`${msg} `.bgLightRed.black)
	},
	lime: (msg) => {
		if (typeof msg === 'object') {
			msg = JSON.stringify(msg)
		}
		console.log(`${msg} `.bgLightGreen.black)
	},
	lemon: (msg) => {
		if (typeof msg === 'object') {
			msg = JSON.stringify(msg)
		}
		console.log(`${msg} `.bgLightYellow.black)
	},
	baby: (msg) => {
		if (typeof msg === 'object') {
			msg = JSON.stringify(msg)
		}
		console.log(`${msg} `.bgLightBlue.black)
	},
	violet: (msg) => {
		if (typeof msg === 'object') {
			msg = JSON.stringify(msg)
		}
		console.log(`${msg} `.bgLightMagenta.black)
	},
	aqua: (msg) => {
		if (typeof msg === 'object') {
			msg = JSON.stringify(msg)
		}
		console.log(`${msg} `.bgLightCyan.black)
	},
	gray: (msg) => {
		if (typeof msg === 'object') {
			msg = JSON.stringify(msg)
		}
		console.log(`${msg} `.bgLightGray.black)
	},
	cyan: (msg) => {
		if (typeof msg === 'object') {
			msg = JSON.stringify(msg)
		}
		console.log(`${msg} `.bgCyan.black)
	},
	assert: (item, item_name) => {
		if (item) {
			let msg = ` SUCCESS: ${item_name} = ${item} `
			console.log(`ASSERT`, msg.bgCyan.black)
		}
		else {
			let msg = ` FAIL: ${item_name} = ${item} `
			console.log(`ASSERT`, msg.bgRed.black)
		}
	},
	timer: (method, method_name) => {
		console.time(`_timer ${method_name}()`)
		method()
		console.timeEnd(`_timer ${method_name}()`)
	}
}

module.exports = {_log, log}