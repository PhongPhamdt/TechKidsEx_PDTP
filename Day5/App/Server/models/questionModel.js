const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
	content: { type: String, require: true},
	yes: { type: Number, default: 0},
	no: { type: Number, default: 0}
}, {
	timestamps: true
});

module.exports = mongoose.model('question', QuestionSchema);

