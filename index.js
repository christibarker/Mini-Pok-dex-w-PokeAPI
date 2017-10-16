// what runs on the page when its opened

$(function() {
	var pokeDex = new PokeDex();

	$('.pokemon').click(function() {

		pokeDex.showDetails(name);
	});

});


class PokeDex {
	constructor() {
		this.pokemon = [];
	};

	showDetails() {
		cachedFetch(`http://pokeapi.co/api/v1/pokedex/1/${'name'}`)
	 	.then(r => r.json())
	 	.then(res => { 
		 	console.log(res);
		 });
	};

	favorite() {

	};
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
};




//function for api

// $(function () {
	// cachedFetch(`http://pokeapi.co/api/v2/ability/110/`)
	//  .then(r => r.json()) 
	//  .then(res => { 
	//  	console.log(res);
	//  	//your code here where res is the json response with your pokemon data 
	// //  	var pokeDex = results.
	// });
	 
// }); 
