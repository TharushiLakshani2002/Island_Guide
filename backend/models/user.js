
const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    nameOrEmail:{
        type:String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    cpasswordHash: {
        type: String,
        required: true,
    }
    
    
})

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

exports.User = mongoose.model('User', userSchema);
exports.userSchema = userSchema;


