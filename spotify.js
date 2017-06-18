"use strict";

(function(){

	module.exports = {

		spotify: function(track){
			
			// spotify keys
			var keys = require("./keys.js");
			var clId = keys.twitterKeys.clientId;
			var clSc = keys.twitterKeys.clientSec;

			var Spotify = require('node-spotify-api');
 
			var spotify = new Spotify({
			  id: clId,
			  secret: clSc
			});
			 
			spotify.search({ type: 'track', query: track }, function(err, data) {
			  if (err) {
			    return console.log('Error occurred: ' + err);
			  }
			// console.log(JSON.stringify(data.tracks.items[0], null, 5))
			console.log("Song = " + data.tracks.items[0].name);
			console.log("Artist = " + data.tracks.items[0].artists[0].name);
			console.log("Album = " + data.tracks.items[0].album.name);

			console.log("Preview Here = " + data.tracks.items[0].preview_url); 
			});
		}//end of imbd function	
	}//end of module

})();//end main