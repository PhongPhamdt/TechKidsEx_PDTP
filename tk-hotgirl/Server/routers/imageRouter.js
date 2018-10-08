const express = require('express');
const ImageRouter = express.Router();

const ImageModel = require('../Models/imageModel');
//CRUD
//C
ImageRouter.post('/', (req,res) => {
	const {imageUrl,owner,description,title} = req.body || {};
	ImageModel.create({imageUrl,owner,description,title}, (err,imageCreated) => {
		if(err) res.status(500).json({ success: 0, error: err });
		else res.status(201).json({ success: 1, image: imageCreated});
	});
// 		.then(userCreated => res.status(201).json({ success: 1, user: userCreated}))
// 		.catch(err => res.status(500).json({ success: 0, error: err }));
});
//R
ImageRouter.get('/', (req,res) => {
	ImageModel.find({})
		.populate('owner', 'username name')
		.exec((err, images) => {
			if(err) res.status(500).json({ success: 0, error: err });
			else res.json({ success: 1, image: images });
		});
});
//BTVN finish UD and getById
ImageRouter.get('/:id', (req, res) => {
    // use findOne to fine one object
    // res.params return an obj then use. req.params.id return to string
    ImageModel.findOne({ _id: req.params.id }, (err, imageFound) => {
        if(err) res.status(500).json({ success: 0, error: err })
        else res.status(200).json({ success: 1, image: imageFound })
    })
})

ImageRouter.put('/:id', (req, res) => {
    // console.log(req.body)
    ImageModel.findByIdAndUpdate({ _id: req.params.id }, req.body)
             .then( function(){
                ImageModel.findOne({ _id: req.params.id })
                         .then( imageUpdated =>{
                            res.status(200).json({ success: 1, image: imageUpdated })
                         }).catch(function(){
                             res.status(500).json({ success: 0 })
                         })
             })
})

ImageRouter.delete('/:id', (req,res) => {
    UserModel.findByIdAndRemove({ _id: req.params.id }).then(
        userDeleted=>{
            res.status(200).json({ success: 1, user: userDeleted })
        }
    )
})

module.exports = ImageRouter


module.exports = ImageRouter;