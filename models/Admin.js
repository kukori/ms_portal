const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const AdminSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true 
    },
    lastName: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true 
    }
});

AdminSchema.plugin(timestamp);

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;