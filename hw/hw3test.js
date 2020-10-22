const _ = require('./hw3')

var a = ['a', 'b', 'c']
var b = ['1', '2', '3']
var c = ['a', 'b', 'c', 'd']


var st = _.join(a, 'c')

var te = _.last(b)

var nt = _.nth(c, n = 1)
var nt2 = _.nth(c, n = -2)


console.log(st)

console.log(te)

console.log(nt)
console.log(nt2)