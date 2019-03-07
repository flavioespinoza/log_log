import { _log, log } from './main'

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

_log.deep(data)

function do_stuff () {
	let res = []
	for (let i = 0; i < 100000; i++) {
		res.push(i)
	}
	return res
}

console.log('')
_log.timer(do_stuff, 'Do Stuff')
console.log('')

log.lightYellow(data)
