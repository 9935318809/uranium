const express = require('express');
const m = require('../vaheguru/moudle1')
const formate = require('../validator/formatter')
const help = require('../util/helper')
const uranium = require("../logger/logger")
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log(uranium.xyz())
    console.log(help.getDate())
    console.log(help.printMonths())
    console.log(help.getBatchInfo())
    console.log(formate.trim())
    console.log(formate.changetoLowerCase())
    console.log(formate.changeToUpperCase())

    res.send('My first ever api!')
});
router.get('/hello', function (req, res) {
    res.send("hello")
    console.log(m.monthSplitedArr)
    console.log(m.tail)
    console.log(m.union)
    console.log(m.form)
});
module.exports = router;
// adding this comment for no reason