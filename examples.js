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
console.log('_log.deep(data)')
_log.deep(data)

console.log('')
console.log('_log.info(data)')
_log.info(data)

console.log('')
console.log('_log.error(data)')
_log.error(data)

console.log('')
console.log('_log.alert(data)')
_log.alert(data)

console.log('')
console.log('_log.warn(data)')
_log.warn(data)


console.log('')
console.log('_log.blue(data)')
_log.blue(data)

console.log('')
console.log('_log.red(data)')
_log.red(data)

console.log('')
console.log('_log.green(data)')
_log.green(data)

console.log('')
console.log('_log.pink(data)')
_log.pink(data)

console.log('')
console.log('_log.yellow(data)')
_log.yellow(data)

console.log('')
console.log('_log.violet(data)')
_log.violet(data)

console.log('')
console.log('_log.cyan(data)')
_log.cyan(data)



console.log('')