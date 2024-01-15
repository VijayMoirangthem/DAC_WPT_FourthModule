const express = require('express');
const cors = require("cors");
const server = express();
server.listen(3000 , (error)=>{
    if(error) console.log(error);
    else console.log("Server is running");
});

const router = require('./router');
const bodyParser = require('body-parser');
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));
server.use(router);