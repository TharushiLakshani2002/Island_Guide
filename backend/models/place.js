
const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    name: String,
    image: String,
    description: String,
    images:{
        image1:String,
        image2:String,
        image3:String,
        image4:String,
    }
})


exports.Place = mongoose.model('Place', placeSchema);
