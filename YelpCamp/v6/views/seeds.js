var mongoose = require("mongoose");
var Campground = require("../models/campground");
var Comment = require("../models/comment");

var data = [{
	name: "clouds rest",
	image: "https://upload.wikimedia.org/wikipedia/commons/2/27/CSP_tent_camping.jpg",
	description: "blabber"
}, {
	name: "mountains limit",
	image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/1969-08-BUL_024_Zeltplatz_Maljowiza_1.jpg/800px-1969-08-BUL_024_Zeltplatz_Maljowiza_1.jpg",
	description: "blabber"
}, {
	name: "forest camp",
	image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Autokempig_Raczkowa_a1.jpg/800px-Autokempig_Raczkowa_a1.jpg",
	description: "blabber"
}];


function seedDB() {
	Campground.remove({}, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log("Removed the campgrounds from database");
		}
	});

	data.forEach(function(seed) {
		Campground.create(seed, function(err, campground) {
			if (err) {
				console.log(err);
			} else {
				console.log("added campground");
				Comment.create({
					text: "Its great camping here",
					author: "Wilma"
				}, function(err, comment) {
					if (err) {
						console.log(err);
					} else {
						campground.comments.push(comment);
						campground.save();
                                                console.log("added comment");
					}
				});
			}
		});
	});
}

module.exports = seedDB;