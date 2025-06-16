const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nameOrEmail: {
        type: String,
        required: [true, 'Username or Email is required'],
        unique: true,
        trim: true,
    },
    passwordHash: {
        type: String,
        required: [true, 'Password is required']
    },
}, { 
    timestamps: true // adds createdAt and updatedAt fields automatically
});

// Export the model
exports.User = mongoose.model('User', userSchema);
