var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
        res.render("home");
        });

app.get("/owner/:thing", function(req, res){
        var thing = req.params.thing;
        res.render("owner.ejs", {thingVar: thing});
        });

app.get("/posts", function(req, res){
        var posts = [
                     {title: "Post 1", author: "Simon"},
                     {title: "Post 2", author: "Peter"},
                     {title: "Post 3", author: "Nigel"},
                     {title: "Post 4", author: "Nancy"}
                ];
        res.render("posts.ejs", {posts: posts});
        });

app.listen(3000, function(){
        console.log("Serving on port 3000");
        });