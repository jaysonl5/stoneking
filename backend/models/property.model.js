const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const propertySchema = new Schema({
    email: {type: String, required: true},
    propertyType: {type: String, required: true},
    address: { type: String, required: true},
    city: { type: String, required: true},
    state: { type: String, required: true},
    zip: { type: Number, required: true },
}, {
    timestamps: true,
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;