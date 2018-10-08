const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	content: { type: String, require: true },
	owner: { type: Schema.Types.ObjectId, ref: 'User'}
}, {
	timestamps: true
})

const ImageSchema = new Schema({
	imageUrl: { type: String, require: true },
	view: { type: Number, default: 0 },
	like: { type: Number, default: 0 },
	owner: { type: Schema.Types.ObjectId, ref: 'User'},
	description: { type: String, default: ''},
	title: { type: String, default: ''},
	comments: [CommentSchema]
}, {
	timestamps: true
});

module.exports = mongoose.model('Image', ImageSchema);