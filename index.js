// what runs on the page when its opened
//be able to click on the name and get the pokemon info diplayed on the right side on screen

$(function() {

	var pokeDex = new PokeDex();

 // to access the array and list the name
 	// build the list of pokemon

	var newHTML = [];
	$.each(pokemonArray, function(index, value) {
	    newHTML.push('<div data-name="' + value + '" class="child-pokemon">' + value + '</div>');
	});
	// $('.element').html(newHTML.join(''));
	// $('.pokemon')
	$('.pokemon').html(newHTML);

	//click on name get info

	$('.pokemon').click(function() {
		newHTML = '.pokemon';
		pokeDex.showDetails(newHTML);
	});

});

//creates a functionality similar to jukebox
class PokeDex {
	constructor() {
		//$(this).pokemon-array = pokemonArray;
	};

	showDetails() {
		cachedFetch(`http://pokeapi.co/api/v1/pokemon/${'#'}`)
	 	.then(r => r.json())
	 	.then(res => { 
		 	console.log(res);

		// $('.pokemon').html(newHTML);
		 });
	};
//create a way to favorite them
	favorite() {

	};
};

// get their specs

class Pokemon {
	constructor(sprite,name,weight,types,id,height) {
	$(this).sprite = abilities.sprites;
	$(this).name = abilities.name;
	$(this).weight = abilities.weight;
	$(this).types = abilities.types;
	$(this).id = abilities.national_id;
	$(this).height = abilities.height;
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
	// cachedFetch(`http://pokeapi.co/api/v1/pokemon/1/`)
	//  .then(r => r.json()) 
	//  .then(res => { 
	//  	console.log(res);
	//  	var info = res.abilities;
	//  	for (var i = 0; i < info.length; i++) {
	// 			$('#info').append(`
	// 				<img data-count="${i}" src="${info[i]}" />
	// 			`);			
	// 		}
// 	 	//your code here where res is the json response with your pokemon data 
// 	//  	var pokeDex = results.
	// });
	 
// });
