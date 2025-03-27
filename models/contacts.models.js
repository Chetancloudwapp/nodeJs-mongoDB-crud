// const mongoose = require('mongoose');
import mongoose from "mongoose";

// Note:- MongoDB database k andar hum kis collection ka use krna chahte hai use hum schema method ki help se define krte hai
// Schema is a blueprint of our collection, it is a class which is used to define the properties & structure of our collection.

const contactSchema = mongoose.Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    address:{
        type:String
    }

})

// Note:- Schema ko kis collection ke andar dalna hai use hum model method ki help se define krte hai here model is a class which is used to communicate with our collection.

// const contact = mongoose.model("Contact", our_schema_name); // here contacts is our collection name 
const contact = mongoose.model("Contact", contactSchema);

// module.exports = contact; // export the model in old way

export default contact // export the model in new way

