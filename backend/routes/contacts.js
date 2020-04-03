const router = require('express').Router();
let Contact = require('../models/contact.model');

router.route('/').get((req, res) => {
    Contact.find()
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const newContact = new Contact({
        firstName,
        lastName, 
        email,
    });



    newContact.save()
        .then(() => res.json('Contact Added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;