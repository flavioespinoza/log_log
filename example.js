const log_log = require('./index')

const log = log_log.log

const _log = log_log._log

const string = 'Important Message from your Node App.'

const obj = {'prop': 'OBJECT', 'val': 1}

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


// console.log('')
// _log.deep(data)



console.log('')
console.log(data)
console.log('')