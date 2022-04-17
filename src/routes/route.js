const express = require('express');
const router = express.Router();
const authordetails = require("../models/newAuthor")
const bookdetails = require("../models/newBook")
const publisherdetails=require("../models/newPublisher")


//●	Write create APIs for newAuthors

router.post("/newAuthor",async function(req,res){
    const data=await authordetails.create(req.body)
    res.send({msg:data})
})

//●	create APIs for newPublisher

router.post("/newPublisher",async function(req,res){
    const data=await publisherdetails.create(req.body)
    res.send({msg:data})
})

//	create APIs for newBook

router.post("/newBook",async function(req,res){
    const data=await bookdetails.create(req.body)
    res.send({msg:data})
})

//==================================================================================

//a)	The authorId is present in the request body. If absent send an error message that this detail is required

router.post("/createbook",async function(req,res)
{
    const allDetails=req.body
    if(allDetails.author==undefined)
    {
        res.send("Error!!! Author Id Destails is required.... ")
    }

//=================================================================================

//b)	If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.


    if(allDetails.author!=undefined)
    {
        const getdetails=await authordetails.find()
        if(getdetails[0]._id!=allDetails.author)
        {
            res.send("Author Id is not present ")
        }
    }
//===================================================================================

//c)	The publisherId is present in the request body. If absent send an error message that this detail is required

    if(allDetails.publisher==undefined)
    {
        res.send("Error!!! Publisher id Details is required.... ")
    }

//==========================================================================================

//d)	If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.

    if(allDetails.publisher!=undefined)
    {
        const getdetails=await publisherdetails.find()
        if(getdetails[0]._id!=allDetails.publisher)
        {
            res.send("Publisher id Is not present ......")
        }
    }
})
//========================================================================================

//Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this)

    router.get("/allBooksDetails",async function(req,res){
        const data=await bookdetails.find().populate("author").populate("publisher")
        res.send({msg:data})
    })
    module.exports = router;



