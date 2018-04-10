var cheerio = require("cheerio");
var request = require("request");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var morgan = require("morgan");
var express = require("express");


var port = 3000;

var app = express();

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_s3bmsghf:solo1234!@ds237389.mlab.com:37389/heroku_s3bmsghf";

mongoose.Promise = Promise;

if (process.env.MONGODB_URI){
	mongoose.connect(MONGODB_URI);

	}
	else { mongoose.connect("mongodb://localhost/emwebscrapper")
		console.log("mongoose connected");

	};
	


request("https://www.reddit.com", function(error, response, html) {
	// siteTable_organic
	// organic-listing
	 // thing id-t3_8aa0ru linkflair linkflair-img odd  link 
	var databaseUrl = "scraper";
	var collections = ["scrapedData"]; 
	var $ = cheerio.load(html);
	var results = [];
		$(".thing").each(function(i, element) {
			console.log( "---------------------------------------------------------", element.attribs['data-permalink']);
	var link = "www.reddit.com" + element.attribs['data-permalink']
    var title = $(element).children().text();
    // var img = $(element).children().img(),
results.push({
      title: title,
      link: link,
      // img: img,

    });
  });
	console.log(results);
});

// /r/natureismetal/comments/8aac49/caiman_in_mid_bite/
app.listen(port, function(){
	console.log("App running on port 3000!");
});