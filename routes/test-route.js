"use strict";

const express = require("express");
const router  = express.Router();
const path = require("path");


//global variables

//middlewares goes here
express().use(express.json())


//handeling signin post request form client
router
.route('/')

.get(async (req,res)=>{
    res.status(200);
    res.sendFile(path.join(__dirname , 'test.html'));
    console.log(path.join(__dirname,"test.html"))
    res.end();
})
.post(async (req,res) => {
    res.json({
        text : 'post request received',
    })
    res.end()
})
.put(async (req,res) => {
    res.json({
        text : 'put request received',
    })
    res.end()
})
.delete(async (req,res) => {
    res.json({
        text : 'delete request received',
    })
    res.end()
});

module.exports =router;