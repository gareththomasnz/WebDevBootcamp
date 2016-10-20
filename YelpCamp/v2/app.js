var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelpcamp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SETUP

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

//Campground.create(
//                  {
//                    name: "Forest Pools",
//                    image: "https://farm8.staticflickr.com/7338/9627572189_12dbd88ebe.jpg",
//                    description: "The largest campground near a swimming hole"
//                    }, function(err, campground){
//                        if(err){
//                            console.log(err);
//                        }else{
//                            console.log("New Campground: " + campground);
//                        }
//                    }
//                  );

//var campgrounds = [
//             {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
//             {name: "Forest Pools", image: "https://farm8.staticflickr.com/7338/9627572189_12dbd88ebe.jpg"},
//             {name: "Ocean Sounds", image: "https://farm9.staticflickr.com/8457/7930235502_df747573ca.jpg"},
//             {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
//             {name: "Forest Pools", image: "https://farm8.staticflickr.com/7338/9627572189_12dbd88ebe.jpg"},
//             {name: "Ocean Sounds", image: "https://farm9.staticflickr.com/8457/7930235502_df747573ca.jpg"}               
//        ];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("index", {campgrounds:allCampgrounds});
        }
        });
    //res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campgrounds");
        }
        });
});

app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs"); 
});


//app.get("*", function(req, res){
//        res.send("Sorry Page Not Found");
//        });

app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            res.render("show", {campground: foundCampground});
        }
        });
    });

app.listen(3000, function(){
        console.log("Serving on port 3000");
        });