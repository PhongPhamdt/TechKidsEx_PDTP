const express = require('express');
const AuthRouter = express.Router();
const bcrypt = require('bcrypt-nodejs');

const UserSchema = require('../Models/userModel.js');

AuthRouter.post('/login', (req,res) => {
	const { username, password } = req.body;

	UserSchema.findOne({ username }, (err, userFound) => {
		// console.log(userFound);
		if(err) res.status(500).json({ success: 0, error: err});
		else if(!userFound) res.status(404).json({ success: 0, error: "User not found"});
		else{
			if(bcrypt.compareSync(password, userFound.password)) {
				req.session.user = { userId: userFound._id };
				res.json({ success: 1, message: "Login successful"});
			} else res.status(401).json({ success: 0, error: "Wrong password"});
		}
	});
});

AuthRouter.delete('/logout', (req,res) => {
	req.session.destroy();
	res.send({ success: 1, message:"Logout successfully"});
});

module.exports = AuthRouter;