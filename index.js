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
	console.log(` Info: ${msg} `.bgBlue.white)
},
error: (msg) => {
	if (typeof msg === 'object') {
		msg = JSON.stringify(msg)
	}
	console.log(` Error: ${msg} `.bgRed.white)
},
debug: (msg) => {
	console.log(` Debug: ${msg} `.bgRed.white)
},
alert: (msg) => {
	console.log(` Alert: ${msg} `.bgYellow.white)
},
warn: (msg) => {
	console.log(` Warn: ${msg} `.bgMagenta.white)
},
blue: (msg) => {
	console.log(`${msg} `.bgBlue.white)
},
red: (msg) => {
	console.log(`${msg} `.bgRed.white)
},
green: (msg) => {
	console.log(`${msg} `.bgRed.white)
},
pink: (msg) => {
	console.log(`${msg} `.bgLightRed.white)
},
lime: (msg) => {
	console.log(`${msg} `.bgLightGreen.white)
},
lemon: (msg) => {
	console.log(`${msg} `.bgLightYellow.white)
},
baby: (msg) => {
	console.log(`${msg} `.bgLightBlue.white)
},
violet: (msg) => {
	console.log(`${msg} `.bgLightMagenta.white)
},
aqua: (msg) => {
	console.log(`${msg} `.bgLightCyan.white)
},
gray: (msg) => {
	console.log(`${msg} `.bgLightGray.black)
},
cyan: (msg) => {
	console.log(`${msg} `.bgCyan.white)
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

module.exports = { _log, log }