const str =  "             Text to be formatted            "
const d = ()=> str.trim()
const t = ()=> str.toLowerCase()
const g = ()=> str.toUpperCase()
module.exports.trim = d
module.exports.changetoLowerCase = t
module.exports.changeToUpperCase = g
