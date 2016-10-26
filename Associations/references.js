var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var post = require("./models/post");
var user = require("./models/user");





User.create({
     email: "bob@gmail.com",
     name: "The Dude"
});

Post.create({
	title: "How to make KFC",
	content: "Blaaaah Blaaaah Blaaaah"
}, function(err, post) {
	User.findOne({
		email: "Billy@bob.com"
	}, function(err, foundUser) {
		if (err) {
			console.log(err);
		} else {
			foundUser.posts.push(post);
			foundUser.save(function(err, data) {
				if (err) {
					console.log(err);
				} else {
					console.log(data);
				}
			});
		}
	});
});

User.findOne({
        email: "bob@gmail.com"
        }).populate("posts").exec(function(err, user){
                        if (err) {
                                console.log(err);
                        } else {
                              console.log(user);  
                        }
                });


