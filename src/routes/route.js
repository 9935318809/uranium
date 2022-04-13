const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)
router.post("/createBook", async function (req, res) {
    const data = await bookModel.create(req.body)
    res.send({ msg: data })
})
/////////////////////////////////////////////////
// Assignment :
// Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false) 

// create the following API’s (write logic in bookController and routes in routes):
// createBook : to create a new entry..use this api to create 11+ entries in your collection
// bookList : gives all the books- their bookName and authorName only 
// getBooksInYear: takes year as input in post request and gives list of all books published that year
// getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
// e.g if body had { name: “hi”} then you would fetch the books with this name
// if body had { year: 2020} then you would fetch the books in this year
// hence the condition will differ based on what you input in the request body
// getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
// getRandomBooks - returns books that are available in stock or have more than 500 pages 

// Find video explanation of the question here : 

//////////////////////////////////////////////////////

router.get("/bookList", async function (req, res) {
    const data = await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: data })
})

/////////////////////////////////////////////////////

router.post("/getBooksInYear", async function (req, res) {

    const data = await bookModel.find({ year: req.body.year })
    res.send({ msg: data })
})

////////////////////////////////////////////////////

router.post("/getParticularBooks", async function (req, res) {
    const value = req.body;
    const data = await bookModel.find({
        $or: [{ authorName: value.authorName }, { bookName: value.bookName }, { year: value.year },
             { price:{indian_rupees:value.price.indian_rupees} },{totalPage:value.totalPage},{stockAvailable:value.stockAvailable}]
    })
    res.send({ msg: data })
})
////////////////////////////////////////////////////

router.get("/getXINRBooks", async function (req, res) {

    const data = await bookModel.find( {$or:[ {"price.indian_rupees":"500"},{"price.indian_rupees":"100"} ] } )
    res.send({ msg: data })
})

/////////////////////////////////////////////////////
router.get("/getRandomBooks", async function (req, res) {

    let data = await bookModel.find({$and:[{stockAvailable:true},{totalPages: {$gt:500}}]})
    res.send({ msg: data })
})

module.exports = router;