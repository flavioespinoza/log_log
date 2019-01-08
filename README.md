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

_log.deep(data) //=> See outputs below in console

```
![deep](./img/deep.png)


## Alerts

Use _log.alert_name() to show different levels of priority.

![alerts](./img/alerts.png)


## Background Colors

Use _log.background_color_name() to show data with background color.

![colors](./img/colors.png)


## Text Colors

Use log.color_name() without the underscore to color text with no background.

![text](./img/text.png)

