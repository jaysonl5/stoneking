const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const contactsRouter = require('./routes/contacts');
const propertiesRouter = require('./routes/properties');

app.use('/contacts', contactsRouter);
app.use('/properties', propertiesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});