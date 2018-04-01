var cheerio = require("cheerio");
var request = require("request");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cheerio = require("cheerio");


var port = 3000;

// var app = express();

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI,{
	// useMongoClient: true 
});


request("http://advancedtrafficteam.com/request-a-quote/", function(error, response, html) {
	var $ = cheerio.load(html);
	var results = [];
		$("a").each(function(i, element) {
	var link = $(element).children().attr("href");
    var title = $(element).children().text();

results.push({
      title: title,
      link: link
    });
  });
	console.log(results);
});


// app.listen(3000, function() {
//   console.log("App running on port 3000!");
// });