const router = require('express').Router();
let Property = require('../models/property.model');

router.route('/').get((req, res) => {
    Property.find()
        .then(properties => res.json(properties))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const email = req.body.email;
    const propertyType = req.body.propertyType;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = Number(req.body.zip);

    const newProperty = new Property({
        email,
        propertyType,
        address, 
        city, 
        state, 
        zip,
    });

    newProperty.save()
        .then(() => res.json('Property Added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
    Property.findById(req.params.id)
        .then(property => res.json(property))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Property.findByIdAndDelete(req.params.id)
        .then(() => res.json('Property deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Property.findById(req.params.id)
        .then(property => {
            property.email = req.body.email;
            property.propertyType = req.body.propertyType;
            property.address = req.body.address;
            property.city = req.body.city;
            property.state = req.body.state;
            property.zip = Number(req.body.zip);

            property.save()
                .then(() => res.json('Property updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;