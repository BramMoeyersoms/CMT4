const express = require('express');
const app = express();
const port = 5000;

const data = require('./data/gallery.json');

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static('public'));

app.get("/", function(request, response){
  response.render("home",{
    gallery: data.art
  });
});

app.get("/gallery", function(request, response){
  response.render("gallery",{
    gallery: data.art
  });
});

app.get("/detail", function(request, response){
  response.render("detail",{
    gallery: data.art
  });
});

app.get("/search", function(request, response){
  response.render("search");
});

app.get("/contact", function(request, response){
  response.render("contact");
});



app.use(function(request, response){
  response.statusCode = 404;
  response.render("404");
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function(){console.log("luistert op poort " + port)});
