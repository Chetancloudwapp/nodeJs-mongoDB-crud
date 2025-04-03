import express from "express"
const router = express.Router() // import the router from express
import { 
    getContacts, 
    getContact, 
    addContactPage, 
    addContact, 
    updateContactPage, 
    updateContact,
     deleteContact 
} from "../controller/contacts.controller.js" // import the controller functions

// ----------- Define Routes ------------ //
router.get('/', getContacts);

router.get('/show-contact/:id', getContact);

router.get('/add-contact', addContactPage);

// add contact form
router.post('/add-contact', addContact);

router.get('/update-contact/:id', updateContactPage);

router.post('/update-contact/:id', updateContact);

router.get('/delete-contact/:id', deleteContact);

export default router; // export the router