const express = require('express');
const ApiRouter = express.Router();

const ImageRouter = require('./imageRouter');
const UserRouter = require('./userRouter');
const AuthRouter = require('./authRouter');

ApiRouter.use('/images', ImageRouter);
ApiRouter.use('/users', UserRouter);
ApiRouter.use('/auth', AuthRouter);


module.exports = ApiRouter;