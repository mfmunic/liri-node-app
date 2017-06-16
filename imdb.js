"use strict";

(function(){

	module.exports = {
		imdb: function(title){
			if (title != undefined){
				var title = title;
			} else {
				var title = "Mr. Nobody";
			}
				
			var request = require("request");
			request("http://www.omdbapi.com/?t="+title+"&y=&plot=short&apikey=40e9cece", function(err,resp,body){
				var response = JSON.parse(body)
				// console.log(resp)
				console.log("Title: "+response.Title)
				console.log("Year: "+response.Year)
				console.log("IMDb Rating: "+response.imdbRating)
				console.log("Country: "+response.Country)
				console.log("Language: "+response.Language)
				console.log("Plot: "+response.Plot)
				console.log("Actors: "+response.Actors)
				console.log("Rotten Tomatoes URL: "+response.Year)// * Rotten Tomatoes URL.
			})//end of request
		}//end of imbd function	
	}//end of module

})();//end main