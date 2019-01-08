# Log_Log

```console
npm install @flavioespinoza/log_log --save
```

Require it in your Node app.

```javascript
const _log = require('@flavioespinoza/log_log')._log
const log = require('@flavioespinoza/log_log').log
```

## Deep (Nested Objects)
```javascript
_log.deep(data)
```

```javascript
const data = [
	{
		'name': 'Ren',
		'id': 1,
		'preferences': {
			'food': 'steak',
			'drink': 'bourbon',
			'ice_cream': 'soap bar',
			'favorite_episode': 'Space Madness',
			'hobbies': {
				'sports': ['soccer', 'bad mitten'],
				'dancing': ['salsa', 'bachata'],
				'music': {
					'alternative': ['Pearl Jam', 'Nirvana'],
					'glam_rock': ['Mötley Crüe', 'Poison'],
					'country': ['Johnny Cash', 'George Strait']
				}
			}
		}
	}
]

_log.deep(data) //=> See console output below...
```


_log.deep will show the complete data structure no matter how deep the nested object is.

![deep](./img/deep.png)


Normal console.log(data) does not show nested data past 2 levels deep.

![deep](./img/console_log.png)


## Alerts

Use _log.alert_name() to show different levels of priority.

```javascript
    _log.info(data)
```

```javascript
    _log.error(data)
```

```javascript
    _log.alert(data)
```

```javascript
    _log.warn(data)
```

![alerts](./img/alerts.png)


## Background Colors

Use _log.background_color_name() to show data with background color.

```javascript
    _log.blue(data)
```

```javascript
    _log.red(data)
```

```javascript
    _log.green(data)
```

```javascript
    _log.pink(data)
```

```javascript
    _log.yellow(data)
```

```javascript
    _log.violet(data)
```

```javascript
    _log.cyan(data)
```

![colors](./img/colors.png)


## Text Colors

Use log.color_name() without the underscore to color text with no background.

```javascript
    log.blue(data)
```

```javascript
    log.red(data)
```

```javascript
    log.green(data)
```

```javascript
    log.yellow(data)
```

```javascript
    log.cyan(data)
```

```javascript
    log.magenta(data)
```

```javascript
    log.black(data)
```

![text](./img/text.png)


## Timer

Use _log.timer(method, method_name) to log how long a function takes to return.

```javascript
    function do_stuff () {
    	let res = []
    	for (let i = 0; i < 100000; i++) {
    		res.push(i)
    	}
    	return res
    }


    _log.timer(do_stuff, 'Do Stuff')

```

![log_timer](./img/log_timer.png)
