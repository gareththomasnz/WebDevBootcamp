var express = require("express");
var app = express();

app.get("/", function(req, res){
        res.send("Hi There");
        });
app.get("/bye", function(req, res){
        res.send("Goodbye");
        });
app.get("/dog", function(req, res){
        res.send("Woof Woof");
        });
app.get("/r/:subredditName", function(req, res){
        var subreddit = req.params.subredditName;
        res.send("Welcome to the " + subreddit + " Subreddit");
        });

app.get("*", function(req, res){
        res.send("Super Star");
        });

app.listen(3000, function(){
        console.log("Serving on port 3000");
        });
//app.post();