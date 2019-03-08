# log_log

Color logs for node console

## Info

> This ES Module uses the new [esm](https://github.com/standard-things/esm) module loader by [John-David Dalton](https://github.com/jdalton)

> See the release [post](https://medium.com/web-on-the-edge/tomorrows-es-modules-today-c53d29ac448c)
> and [video](https://www.youtube.com/watch?v=JcZ-FzfDq8A#t=5) for all the details.

## Install

yarn (recommended)

```shell
yarn add @flavioespinoza/log_log
```

npm

```shell
npm i @flavioespinoza/log_log
```

## import

> Use `import` in typescript or using the new [esm](https://github.com/standard-things/esm) loader

```javascript
// esm or typescript
import _log, { log } from '@flavioespinoza/log_log'
```


> Use `require` for common.js modules
```javascript
// require
const _log = require('@flavioespinoza/log_log')
const {
    log
} = require('@flavioespinoza/log_log')
```

## Deep (Nested Objects)

> Show the entire depth of a nested `Object` or `Array` with nested `Objects`

```javascript
const data = [
    {
        name: 'Ren',
        id: 1,
        preferences: {
            food: 'steak',
            drink: 'bourbon',
            ice_cream: 'soap bar',
            favorite_episode: 'Space Madness',
            hobbies: {
                sports: ['soccer', 'bad mitten'],
                dancing: ['salsa', 'bachata'],
                music: {
                    alternative: ['Pearl Jam', 'Nirvana'],
                    glam_rock: ['Mötley Crüe', 'Poison'],
                    country: ['Johnny Cash', 'George Strait']
                }
            }
        }
    }
]

_log.deep(data) //=> See console output below...
```
#### `_log.deep(data)`
> Use **`_log` with the underscore** `_log.deep(data)` to show the complete data structure no matter how deep the nested object is

<img src='img/deep.png' />

#### `console.log(data)`
 > Normal `console.log(data)` does not show nested data past 2 levels deep

<img src='img/console_log.png' />

## Alerts
> Use **`_log` with the underscore** `_log.alertName(data)` to show different levels of priority

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

<img src='img/alerts.png' />

## Background Colors
> Use **`_log` with the underscore** `_log.colorName(data)` to show data with background color

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

<img src='img/colors.png' />

## Text Colors
> Use **`log` without the underscore** `log.colorName(data)` to color text with no background.

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

<img src='img/text.png' />

### Timer
> Use **`_log` with the underscore** `_log.timer(method, methodName)` to show how long a function takes to return.

```javascript
function do_stuff() {
    let res = []
    for (let i = 0; i < 100000; i++) {
        res.push(i)
    }
    return res
}

_log.timer(do_stuff, 'Do Stuff')
```

console output
<img src='img/log_timer.png' />

Licence: MIT
