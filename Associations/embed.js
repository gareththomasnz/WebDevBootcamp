var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");

var postSchema = new mongoose.Schema({
	title: String,
	content: String
});
var post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});

var User = mongoose.model("User", userSchema);


var newUser = new user({
	email: "james@bond.com",
	name: "James Bond"
});

newuser.posts.push({
	title: "how to eat lunch",
	content: "take a bite"
});

newUser.save(function() {
	if (err) {
		console.log(err);
	} else {
		console.log(user);
	}
});

var newPost = new post({
	title: "Apple Poem",
	content: "Apple on my Bapple"
});

newPost.save(function() {
	if (err) {
		console.log(err);
	} else {
		console.log(post);
	}
});

User.findOne({
	name: "georgie girl",
	function(err, user) {
		if (err) {
			console.log(err);
		} else {
			user.posts.push({
                                title: "Blabber",
                                content: "stuff i said"
                                });
                        user.save(function(err, user){
                                if(err){
                                        console.log(err);
                                }else{
                                        console.log(user);
                                }
                                });
		}
	}
});