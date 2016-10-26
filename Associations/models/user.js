var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [{
		type: mongoose.Schema.types.ObjectId,
		ref: "Post"
	}]
});

module.exports = mongoose.model("User", userSchema);