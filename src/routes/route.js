const express = require('express');

const router = express.Router();





// to send data in  post request-> prefer sending in BODY -> click body-raw-json
router.post('/test-post2', function (req, res) {
    let data= req.body
    console.log(data)
    res.send( {  msg: "hi guys..my 2nd post req"  }   )
});


const randomController= require("../controllers/randomController.js")
//write a post request to accept an element in post request body and add it to the given array and return the new array
// router.post('/test-post3', randomController.addToArray ); //HANDLER/CONTROLLER
// Write the api in first project directory (Routes/index.js or routes/route.js)
// Problem Statement 1 :
// NOTE: you must create the players array outside( on the top ) of the api( so that data is maintained across api hits )
// Your player collection should be an ARRAY of player objects. Each player object should have the following attributes:
// {
// "name": "manish",
// "dob": "1/1/1995",
// "gender": "male",
// "city": "jalandhar",
// "sports": [
// "swimming"
// ]
// }


let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
    
   router.post('/players', function (req, res) {
    //LOGIC WILL COME HERE
  if(req.body.name!==undefined&&req.body.dob!==undefined&&req.body.gender!==undefined&& req.body.city!==undefined)
   { 
       let hasAlready =false;
       for(let i=0; i<data.length;i++)
       { 
           if(req.body.name==data[i].name)
           {
               hasAlready = true;
               res.send("already user exists" )
               break;
           }
   }
   if(hasAlready ==false)
   {
       let obj = { 
           nmae:req.body.name,
           dob:req.body.dob,
           gender:req.body.gender,
           city: req.body.city,
           sports:[req.body.sports]
       }
       data.push(obj);
    res.send(  { data: players , status: true }  )
   }
}
else 
res.send("insert all valid details")
});

module.exports = router;
