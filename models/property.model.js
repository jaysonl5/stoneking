const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const propertySchema = new Schema({
    email: {type: String, required: true},
    buySell: {type: String, required: true},
    propertyType: {type: String, required: true},
    address: { type: String, required: false},
    city: { type: String, required: false},
    state: { type: String, required: false},
    zip: { type: Number, required: false },
    buyDescription: { type: String, required: false },
}, {
    timestamps: true,
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;