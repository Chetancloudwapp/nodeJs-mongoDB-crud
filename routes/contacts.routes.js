import express from "express"
const router = express.Router() // import the router from express
import Contact from "../models/contacts.models.js" // import the models

// ----------- Define Routes ------------ //
router.get('/', async(req, res) => {
    const contacts = await Contact.find(); // here Contact is a variable which is defined in the models/contacts.models.js file at top of the file 
    // res.json(contacts);
    res.render('home', {contacts: contacts});
});

router.get('/show-contact/:id', async (req, res) => {
    const contact = await Contact.findOne({_id: req.params.id});

    // or we can also write like that with mongoose method
    // const contact = await Contact.findById(req.params.id);
    // res.json(contact);
    res.render('show-contact', {contact: contact});
})

router.get('/add-contact', (req, res) => {
   res.render('add-contact');
});

// add contact form
router.post('/add-contact', async(req, res) => {
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
})

router.get('/update-contact/:id', async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    res.render('update-contact', {contact});
})

router.post('/update-contact/:id', async(req, res) => {
 // agar database ki field ke name and form-field k name same nahi hai tab iss tarah se karenge
   const {first_name, last_name, email, phone, address} = req.body // Note form field ka sequence same rakhna hai jis order mai form hai usi tarah se

   await Contact.findByIdAndUpdate(req.params.id, {first_name, last_name, email, phone, address}) 

   // ------- mongoose method for update agar database and form fields same hai to -------- //
   //  await Contact.findByIdAndUpdate(req.params.id, req.body) 
   res.redirect('/');
})

router.get('/delete-contact/:id', async(req, res) => {
    await Contact.findByIdAndDelete(req.params.id) // with mongoose method
    res.redirect('/');
});

export default router; // export the router