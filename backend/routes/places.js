
const {Place} = require('../models/place');
const express = require('express');
const router = express.Router();

router.get(`/`,async (req, res)=>{
    const placeList = await Place.find();

    if(!placeList){
        res.status(500).json({success:false})
    }
    res.send(placeList);
})

router.post(`/`, (req, res)=>{
    const place = new Place({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
    })

    place.save().then((createdPlace=>{
        res.status(201).json(createdPlace)
    })).catch((err)=>{
        res.status(500).json({
            error:err,
            success: false
        })
        
    })
    
})

router.get('/:id', async (req, res) => {
    try {
        const place = await Place.findById(req.params.id);
        if (!place) {
            return res.status(404).json({ message: 'Place not found' });
        }
        res.status(200).json(place);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching place' });
    }
});



module.exports = router;