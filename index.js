// what runs on the page when its opened
//be able to click on the name and get the pokemon info diplayed on the right side on screen

$(function() {
	var pokeDex = new PokeDex();

	$('.pokemon').click(function() {

		pokeDex.showDetails(name);
	});

});

//creates a functionality similar to jukebox
class PokeDex {
	constructor() {
		$(this).pokemon-array = [];
	};

	showDetails() {
		cachedFetch(`http://pokeapi.co/api/v1/api/v1/pokemon/1/`)
	 	.then(r => r.json())
	 	.then(res => { 
		 	console.log(res);
		 	//need to get info then sort info 
		 // 	for (var i = 0; i < images.length; i++) {
			// 	$('#images').append(`
			// 		<img data-count="${i}" src="${images[i]}" />
			// 	`);			
			// }	
		 });
	};

	favorite() {

	};
};

get their specs

class Pokemon {
	constructor(sprite,name,weight,types,id,height) {
	this.sprite = sprite;
	this.name = name;
	this.weight = weight;
	this.types = types;
	this.id = id;
	this.height = height;
	}
};


//get the names of pokemon and diplay them in html

// var pokemon = document.setAttribute(src)['pokemon-array[0]'];
// for(i = 0; i < pokemon.length; i++)
// {
//  innerHTML(pokemon[i].value);

// }

	// cachedFetch(`http://pokeapi.co/api/v1/pokedex/1/${'name'}`)

//function for api

// $(function () {
// 	cachedFetch(`http://pokeapi.co/api/v1/pokemon/1/`)
// 	 .then(r => r.json()) 
// 	 .then(res => { 
// 	 	console.log(res);
// 	 	//your code here where res is the json response with your pokemon data 
// 	//  	var pokeDex = results.
// 	});
	 
// });
