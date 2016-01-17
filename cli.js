#!/usr/bin/env node
'use strict'

var meow = require('meow')
var sortAlphabetic = require('./')

var cli = meow([`
  Usage
    $ sort-alphabetic [input]

  Options
    --start  The character position to start alphabetizing from. [Default: false]

  Examples
    $ sort-alphabetic ONE one Two
    [ 'ONE', 'one', 'TWO' ]
    $ sort-alphabetic cONE bone aTwo --start=1
    [ 'cONE', 'bone', 'aTWO' ]
`, {
  alias: {
    s: 'start'
  }
}])

console.log(sortAlphabetic(cli.input, cli.flags))
