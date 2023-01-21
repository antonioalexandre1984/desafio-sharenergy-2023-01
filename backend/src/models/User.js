const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
    },
    cellphone: {
        type: String,
      
    },
    cpf: {
        type: String,
        unique: true,
    },
    address: {
        type: String,
       
        unique: true,
    },
    password: {
        type: String,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;