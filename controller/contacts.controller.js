import Contact from "../models/contacts.models.js" // import the models
import mongoose from "mongoose" // import mongoose

// get all contacts
export const getContacts = async(req, res) => {
    try{
        const contacts = await Contact.find(); // here Contact is a variable which is defined in the models/contacts.models.js file at top of the file 
        // res.json(contacts);
        res.render('home', {contacts: contacts});
    }catch(error){
        res.render('500', {message:error});
    }
}

// single view contact
export const getContact = async (req, res) => {
    /* --------- Implement Validation ------------ */
    var paramId = mongoose.Types.ObjectId.isValid(req.params.id) // check if objectId ka type valid or not

    if(!paramId) {
        res.render('404', {message: "Invalid id"});
    }

    /* ------ Basic Error Handling with Try & catch Method ------ */
    try{
        const contact = await Contact.findOne({_id: req.params.id});

        if(!contact) {
            res.render('404', {message:"Contact not found"});
        }
        // or we can also write like that with mongoose method
        // const contact = await Contact.findById(req.params.id);
        // res.json(contact);
        res.render('show-contact', {contact: contact});
    }catch(error){
        res.render('500',{message: error});
    }
}

// add contact view page
export const addContactPage = (req, res) => {
    res.render('add-contact');
 }

 // add contact
export const addContact = async(req, res) => {

    try{
        // const contact = await Contact.insertOne({
        //     first_name : req.body.first_name,
        //     last_name : req.body.last_name,
        //     email : req.body.email,
        //     phone : req.body.phone,
        //     address : req.body.address,
        // });

        // with mongoose method
        await Contact.create(req.body) // agar humare collection ki fields ke name and form-fields k name same hai tabhi iss tarah se likh skte hai 
        res.redirect('/');
    }catch(error){
        res.render('500', {message:error});
    }
    
}

// update contact view page
export const updateContactPage = async (req, res) => {
    var paramId = mongoose.Types.ObjectId.isValid(req.params.id) // check if objectId ka type valid or not

    if(!paramId) {
        res.render('404', {message: "Invalid id"});
    }

    try{
        const contact = await Contact.findById(req.params.id)
        if(!contact) {
            res.render('404', {message:"Contact not found"});
        }
        res.render('update-contact', {contact});
    }catch(error){
        res.render('500', {message: error});
    }

}

// update contact
export const updateContact = async(req, res) => {
    // implement validation
    var paramId = mongoose.Types.ObjectId.isValid(req.params.id) // check if objectId ka type valid or not

    if(!paramId) {
        res.render('404', {message: "Invalid id"});
    }
    
    try{
        // agar database ki field ke name and form-field k name same nahi hai tab iss tarah se karenge
        const {first_name, last_name, email, phone, address} = req.body // Note form field ka sequence same rakhna hai jis order mai form hai usi tarah se
    
        const contact = await Contact.findByIdAndUpdate(req.params.id, {first_name, last_name, email, phone, address}) 
    
        // ------- mongoose method for update agar database and form fields same hai to -------- //
        //  await Contact.findByIdAndUpdate(req.params.id, req.body) 

        if(!contact) {
            res.render('404', {message:"Contact not found"});
        }
        res.redirect('/');
    }catch(error){
        res.render('500', {message:error});
    }
   }

// delete contact
export const deleteContact = async(req, res) => {
    // implement validation
    var paramId = mongoose.Types.ObjectId.isValid(req.params.id) // check if objectId ka type valid or not

    if(!paramId) {
        res.render('404', {message: "Invalid id"});
    }

    try{
        const contact = await Contact.findByIdAndDelete(req.params.id) // with mongoose method
        if(!contact) return res.render('404',{message:"Contact not found"});
        res.redirect('/');
    }catch(error){
        res.render('500', {message:error});
    }
}