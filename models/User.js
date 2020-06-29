const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please tell use your email'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Please provide your password']
    }
})
model('users', userSchema);