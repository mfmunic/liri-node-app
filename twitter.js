"use strict";

(function(){

	module.exports = {
		twitter: function(){
				
			var Twitter = require('twitter');

			var keys = require("./keys.js");
			var consKey = keys.twitterKeys.consumer_key;
			var consSec = keys.twitterKeys.consumer_secret;
			var accTok = keys.twitterKeys.access_token_key;
			var accSec = keys.twitterKeys.access_token_secret;
 
			var client = new Twitter({
			  consumer_key: consKey,
			  consumer_secret: consSec,
			  access_token_key: accTok,
			  access_token_secret: accSec
			});
			 
			var params = {screen_name: "knot_marc"};
			client.get('statuses/user_timeline', params, function(error, tweets, response) {
			  if (!error) {
			  	for (var i = tweets.length-1; i>=0; i--){
			  		var dateArray = tweets[i].created_at.split(" ");
			    	console.log(dateArray[2] + dateArray[1] + dateArray[5] + " " + dateArray[3] + " " + tweets[i].text);
			    }
			  }
			});
		}//end of imbd function	
	}//end of module

})();//end main