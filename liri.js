"use strict";

(function (){
	//command var
	var op = process.argv[2];
	
	switch (op) {
		case "my-tweets":
			var tweets = require("./twitter.js");
			tweets.twitter();
			break;
		case "spotify-this-song":
			var userArg = process.argv[3] || "the sign ace of base";
			var spotify = require("./spotify.js");
			spotify.spotify(userArg);
			break;
		case "movie-this":
			var userArg = process.argv[3] || "Mr. Nobody";
			var omdb = require("./imdb.js");
			omdb.imdb(userArg);
			break;
		case "do-what-it-says":
			var fs = require("fs");
			fs.readFile("random.txt", "utf8", function(err, data){
				var com = data.split(",")
				op = com[0];
				userArg = com[1];
				
				switch (op) {
					case "my-tweets":
						var tweets = require("./twitter.js");
						tweets.twitter();
						break;
					case "spotify-this-song":
						var spotify = require("./spotify.js");
						spotify.spotify(userArg);
						break;
					case "movie-this":
						var omdb = require("./imdb.js");
						omdb.imdb(userArg);
						break;
				}//end of switch
			})//end of read

			break;
		case undefined:
			var instArray = ["The following are a list of commands that are allowed:",
								"liri.js my-tweets", "liri.js spotify-this-song", 
								"liri.js movie-this 'name of movie in quotes'", "liri.js do-what-it-says"]

			for (var i = 0; i<instArray.length; i++){
				console.log(instArray[i])
			}
			break;
	}//end of switch
	// console.log(keys.twitterKeys);
})();//end of main

