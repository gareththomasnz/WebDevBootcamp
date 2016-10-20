var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
             {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
             {name: "Forest Pools", image: "https://farm8.staticflickr.com/7338/9627572189_12dbd88ebe.jpg"},
             {name: "Ocean Sounds", image: "https://farm9.staticflickr.com/8457/7930235502_df747573ca.jpg"},
             {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
             {name: "Forest Pools", image: "https://farm8.staticflickr.com/7338/9627572189_12dbd88ebe.jpg"},
             {name: "Ocean Sounds", image: "https://farm9.staticflickr.com/8457/7930235502_df747573ca.jpg"}               
        ];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs"); 
});


//app.get("*", function(req, res){
//        res.send("Sorry Page Not Found");
//        });


app.listen(3000, function(){
        console.log("Serving on port 3000");
        });