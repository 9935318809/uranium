const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

const mongoose = require('mongoose')

mongoose.connect(
    "mongodb+srv://urajrishu:aUHDB96UyJaq9SB@cluster0.1wief.mongodb.net/JITENDRA1995-db",{
    useNewurlParser:true
}).then(()=>{
    console.log("MoongoDB is connected")
}).catch(err=>console.log(err));

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
