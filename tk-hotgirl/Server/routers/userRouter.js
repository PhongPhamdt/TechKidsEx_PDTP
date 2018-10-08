const express = require('express');
const UserRouter = express.Router();
const bcrypt = require('bcrypt-nodejs');

const UserModel = require('../Models/userModel.js');
//CRUD
//C
UserRouter.post('/', (req,res) => {
	const {username, password, name, avatar, gender} = req.body || {};
	// const salt = bcrypt.genSaltSync(10);
	// const hashPassword = bcrypt.hashSync(password, salt);

	UserModel.create({username, password, name, avatar, gender}, (err,userCreated) => {
		if(err) res.status(500).json({ success: 0, error: err });
		else res.status(201).json({ success: 1, user: userCreated});
	});
// 		.then(userCreated => res.status(201).json({ success: 1, user: userCreated}))
// 		.catch(err => res.status(500).json({ success: 0, error: err }));
});
//R
UserRouter.get('/', (req,res) => {
	UserModel.find({}, {password: 0}, (err, users) => {
		if(err) res.status(500).json({ success: 0, error: err });
		else res.json({ success: 1, user: users });
	});
});
//BTVN finish UD and getById
UserRouter.get('/:id', (req, res) => {
    // use findOne to fine one object
    // res.params return an obj then use. req.params.id return to string
    UserModel.findOne({ _id: req.params.id }, (err, userFound) => {
    	if(err) res.status(500).json({ success: 0, error: err })
    		else res.status(200).json({ success: 1, user: userFound })
    	})
})

UserRouter.put('/:id', (req, res) => {
    // console.log(req.body)
    // UserModel.findByIdAndUpdate({ _id: req.params.id }, req.body)
    //          .then( function(){
    //             UserModel.findOne({ _id: req.params.id })
    //                      .then( userUpdated =>{
    //                         res.status(200).json({ success: 1, user: userUpdated })
    //                      }).catch(function(){
    //                          res.status(500).json({ success: 0 })
    //                      })
    //          })
    const {password, name, avatar, gender} = req.body || {};
    const userId = req.params.id;
    // UserModel.findByIdAndUpdate(userId,
    // 	{password, name, avatar, gender},
    // 	{new : true},
    // 	(err, userUpdated) => {
    // 		if (err) res.status(500).json({ success: 0 });
    // 		else res.json({ success: 1, user: userUpdated })
    // 	});
    UserModel.findById(
    	userId,
    	(err, userFound) => {
    		if (err) res.status(500).json({ success: 0, error: err });
    		else if(!userFound) res.status(404).json({ success: 0, error: "No such user"});
    		else {
    			// userFound = { ...userFound, name, password, avatar, gender };
    			// userFound.name = name || userFound.name;
    			// userFound.password = password || userFound.password;
    			// userFound.avatar = avatar || userFound.avatar;
    			// userFound.gender = gender || userFound.gender; 
    			const userChange = {password, name, avatar, gender};

    			for(key in userChange) {
    				if(userChange[key] !== null && userChange[key] !== undefined) 
    					userFound[key] = userChange[key];
    			}

    			userFound.save((err, userUpdated) =>{
    				if (err) res.status(500).json({ success: 0, error: err });
    				else res.send({ success: 1, user: userUpdated });
    			});
    		}
    	});
});

UserRouter.delete('/:id', (req,res) => {
	UserModel.findByIdAndRemove({ _id: req.params.id }).then(
		userDeleted=>{
			res.status(200).json({ success: 1, user: userDeleted })
		}
		)
})




module.exports = UserRouter;