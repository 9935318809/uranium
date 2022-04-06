const b = require('lodash');

const month= ['January','Febuary','March','April','June','July','August','September','October','November','December'];

const monthSplitedArr =b.chunk(month,4)
module.exports.monthSplitedArr = monthSplitedArr
 
const odd = [1,3,5,7,9,11,13,15,17,19];
module.exports.tail = b.tail(odd)

const dup1 = [8,4,6,9,0];
const dup2 = [6,8,0];
const dup3 = [7,0,8,4];
const dup4 = [9,3,2,1]
const dup5 = [9,1,2,3]
module.exports.union = b.union(dup1,dup2,dup3,dup4,dup5)
module.exports.form = b.fromPairs([['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]);