# sort-alphabetic [![Build Status](https://travis-ci.org/RichardLitt/sort-alphabetic.svg?branch=master)](https://travis-ci.org/RichardLitt/sort-alphabetic)

> Sort an array alphabetically, ignoring case


## Install

```
$ npm install --save sort-alphabetic
```


## Usage

```js
const sortAlphabetic = require('sort-alphabetic');

sortAlphabetic('unicorns');
//=> 'unicorns & rainbows'
```


## API

### sortAlphabetic(input, [options])

#### input

Type: `array`

The array to sort

#### options

##### start

Type: `int`  
Default: `false`

The character position to begin sorting at.


## CLI

```
$ npm install --global sort-alphabetic
```

```
$ sort-alphabetic --help

  Usage
    $ sort-alphabetic [input]

  Options
    --start  The character position to start alphabetizing from. [Default: false]

  Examples
    $ sort-alphabetic ONE one Two
    [ 'ONE', 'one', 'TWO' ]
    $ sort-alphabetic cONE bone aTwo --start=1
    [ 'cONE', 'bone', 'aTWO' ]
```


## License

MIT © [Richard Littauer](http://burntfen.com)
