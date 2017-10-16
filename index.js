//what runs on the page when its opened

// $(function() {

// }):

//function for api

// $(function () {
// 	cachedFetch(url)
// 	 .then(r => r.json()) 
// 	 .then(res => { 
// 	 	console.log(results);
// 	 	//your code here where res is the json response with your pokemon data 
// 	//  	var pokeDex = results.
// 	});
	 
// }); 

class PokeDex {
	constructor() {
		this.pokemon = []
	}

	showDetails() {

	};

	favorite() {

	}
};

class Pokemon {
	constructor(sprite,name,weight,types,id,height) {
	this.sprites = sprites;
	this.name = name;
	this.weight = weight;
	this.types = types;
	this.id = id;
	this.height = height;
	}
}

var pokeDex = new PokeDex();


	cachedFetch(url)
	 .then(r => r.json()) 
	 .then(res => { 
	 	console.log(results);


