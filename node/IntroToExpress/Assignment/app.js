var express = require("express");
var app = express();

app.get("/", function(req, res){
        res.send("Welcome to my assignment");
        });

app.get("/speak/:animal", function(req, res){
        //if(animal === "pig"){
        //        sound = "oink";
        //}else if(animal === "dog"){
        //        sound = "woof";
        //}
        var sounds = {
                pig: "oink",
                cow: "moo",
                dog: "woof",
                fish: "bloop"
        };
        var animal = req.params.animal.toLowerCase();
        var sound = sounds[animal];        
        res.send("the " + animal + " says " + sound);
        });
app.get("/repeat/:message/:times", function(req, res){
        var message = req.params.message;
        var times = Number(req.params.times);
        var result = "";
        for(var i = 0; i < times; i++){
                result += message + " ";
        }
        res.send(result);
});

app.get("*", function(req, res){
        res.send("Sorry Page Not Found");
        });

app.listen(3000, function(){
        console.log("Serving on port 3000");
        });