var bodyParser = require("body-parser"),
methodOverride = require("method-override"),
    mongoose   = require("mongoose"),
    express    = require("express"),
expressSanitizer = require("express-sanitizer"),
    app        = express();
    

mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

var blogSchema = new mongoose.Schema({
       title: String,
       image: String,
       body: String,
       created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

app.get("/", function(req, res){
        res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
        Blog.find({}, function(err, blogs){
                if(err){
                        console.log("Error is " + err);
                }else{
                        res.render("index", {blogs: []}); 
                }
        });
});

app.get("/blogs/new", function(req, res){
           res.render("new");     
});

app.post("/blogs", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
   var formData = req.body.blog;
   Blog.create(formData, function(err, newBlog){
       console.log(newBlog);
      if(err){
          res.render("new");
      } else {
          res.redirect("/blogs");
      }
   });
});

app.get("/blogs/:id", function(req, res){
           Blog.findById(req.params.id, function(err, blog){
                if(err){
                    res.redirect("/blogs");    
                }else{
                       res.render("show", {blog: blog}); 
                }
        });    
});


app.get("/blogs/:id/edit", function(req, res){
           Blog.findById(req.params.id, function(err, blog){
                if(err){
                    res.redirect("/blogs");    
                }else{
                       res.render("edit", {blog: blog}); 
                }
        });    
});

app.put("/blogs/:id", function(req, res){
   Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, blog){
       if(err){
           console.log(err);
       } else {
         var showUrl = "/blogs/" + blog._id;
         res.redirect(showUrl);
       }
   });
});

app.delete("/blogs/:id", function(req, res){
   Blog.findById(req.params.id, function(err, blog){
       if(err){
           console.log(err);
       } else {
           blog.remove();
           res.redirect("/blogs");
       }
   }); 
});

//Blog.create({
//       title: "Test Blog",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Cats_eye.jpg/218px-Cats_eye.jpg",
//       body: "This is a blog post"       
//});

//app.listen(process.env.PORT, process.env.IP, function(){
//        console.log("Serving on port 3000");
//        });

app.listen(3000, function(){
        console.log("Serving on port 3000");
        });