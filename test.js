import test from 'ava'
import fn from './'

test('standard array', t => {
  t.same(fn(['ONE','one','TWO']), ['ONE','one','TWO'])
})

test('with numerals', t => {
  t.same(fn(['ONE','one','TWO', '2']), ['2', 'ONE','one','TWO'])
})

test('with int', t => {
  t.throws(() => { fn(['ONE','one','TWO', '2', 2]) }, Error, "Item in array is not a string")
})

test('with object', t => {
  t.throws(() => { fn(['ONE','one','TWO', '2', {moo: 'cow'}]) }, Error, "Item in array is not a string")
})

test('with wrong input', t => {
  t.throws(() => { fn('Hello world')}, Error, "Expectd all items in array to be string")
})

test('with start', t => {
  t.same(fn(['cONE', 'bone', 'aTwo'], {start: 1}), ['cONE', 'bone', 'aTwo'])
})