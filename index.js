'use strict'

const isArray = require('is-array')

module.exports = function (list, opts) {
  if (!isArray(list)) {
    throw new TypeError('Expected an array')
  }
  if (!list.every(item => typeof item === 'string')) {
    throw new TypeError('Expectd all items in array to be string')
  }

  opts = opts || {}

  // temporary array holds objects with position and sort-value
  var mapped = list.map((el, i) => {
    return { index: i, value: el.substring((opts.start) ? opts.start : 0, el.length).toLowerCase() }
  })

  // sorting the mapped array containing the reduced values
  mapped.sort((a, b) => {
    return +(a.value > b.value) || +(a.value === b.value) - 1
  })

  // container for the resulting order
  return mapped.map(el => list[el.index])
}
