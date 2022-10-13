//module inports
const express = require('express');
const app = express();
const cors = require("cors");



//importing routes
const test_route = require('./routes/test-route')

//Api Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));




//global constants
const port =  12345;


app.use(express.static('./public'));

//using routes
app.use("/test",test_route);



app.listen(port,() => {console.log('listening on http://127.0.0.1:' + port)});
