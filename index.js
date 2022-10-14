//module inports
const express = require('express');
const app = express();
const cors = require("cors");
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

//importing routes
const test_route = require('./routes/test-route')

//Api Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));



//global constants
const port =  12345;

const firebaseConfig = {
    apiKey: "AIzaSyCUrVE_Jzf9u42PiYZIgBs2mShFx0VG2xc",
    authDomain: "vgu-hackathon-5193b.firebaseapp.com",
    databaseURL: "https://vgu-hackathon-5193b-default-rtdb.firebaseio.com",
    projectId: "vgu-hackathon-5193b",
    storageBucket: "vgu-hackathon-5193b.appspot.com",
    messagingSenderId: "1080807296982",
    appId: "1:1080807296982:web:01aff7dc67d2ae56051e77",
    measurementId: "G-N63D32244M"
};
const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);

async function getUsers(db) {
    const citiesCol = await collection(db, 'Users');
    return citiesCol
}


app.use(express.static('./public'));

//using routes
app.use("/test",test_route);
app.use('/path1', express.static(__dirname + '/test/'));


app.listen(port,() => {console.log('listening on http://127.0.0.1:' + port)});
