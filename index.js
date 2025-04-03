// --------- old way to import modules ------------ //
// const express = require("express");
// const app = express();
// const mongoose = require('mongoose');

// --------- New way to import the modules ------------ //
import express from "express" // it is a new feature to import the module which comes under the Javascript ES7 version and iske liye hume sabse phle packaeg.json file mai type: module likhna padega
const app = express();
// const Contact = require('./models/contacts.models');
import ContactRoutes from "./routes/contacts.routes.js"; // import the routes
import {connectDB} from "./config/database.js"; // import the database connection

// Note:- Index file k andar hume .env file ko include krne ki jarurat nahi padti hai and baki all other file mai hume include krna pdta hai
const PORT = process.env.PORT || 3000; // .env se port ko access krne k liye process method ka use krte haii, agar humare paas env mai PORT nahi hai toh hum 3000 port use krenge

// Database Connection
connectDB(); // function ko run krne k liye

// use middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));

// Routes
app.use("/",ContactRoutes); // iska mtlb hai ki humne jo routes/contacts.routes.js file mai export kiya tha usko yaha use kar rahe hai. Here first parameter mai hum prefix likhte hai i.e agar humne /contacts likha toh uske baad wale routes mai /contacts/show-contact likhna padega

app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`);
});