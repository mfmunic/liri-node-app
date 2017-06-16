"use strict";

(function (){
	//command var
	var op = process.argv[2];
	var userArg = process.argv[3];

	//Twitter keys
	var keys = require("./keys.js");
	var consKey = keys.twitterKeys.consumer_key;
	var consSec = keys.twitterKeys.consumer_secret;
	var accTok = keys.twitterKeys.access_token_key;
	var accSec = keys.twitterKeys.access_token_secret;

	switch (op) {
		case "my-tweets":
			// https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2
		case "spotify-this-song":

		case "movie-this":

			var omdb = require("./imdb.js");

			omdb.imdb(userArg);
			break;

		case "do-what-it-says":

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