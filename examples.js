const log_log = require('./index')

const log = log_log.log

const _log = log_log._log

const string = 'Important Message from your Node App.'

const obj = {'prop': 'OBJECT', 'val': 1}

const data = [
	{
		'name': 'Ren',
		'id': 1
	},
	{
		'name': 'Stimpy',
		'id': 2
	},
	{
		'name': 'Fire Chief',
		'id': 3
	}
]


console.log('')
console.log('log.blue(data)')
log.blue(data)

console.log('')
console.log('log.red(data)')
log.red(data)

console.log('')
console.log('log.green(data)')
log.green(data)

console.log('')
console.log('log.yellow(data)')
log.yellow(data)

console.log('')
console.log('log.cyan(data)')
log.cyan(data)

console.log('')
console.log('log.magenta(data)')
log.magenta(data)

console.log('')
console.log('log.black(data)')
log.black(data)



console.log('')