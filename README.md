# log_log

```console
npm install @flavioespinoza/log_log --save
```

Require it in your Node app.

```javascript
const _log = require('@flavioespinoza/log_log')._log
const log = require('@flavioespinoza/log_log').log
```
Define your data.
```javascript
const string = 'Important Message from your Node App.'

const obj = {
    prop_name: 'My Name',
    value: 101
}

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
```
Options
```javascript
_log.deep(data)
```

![]("./img/log_colors.png")
