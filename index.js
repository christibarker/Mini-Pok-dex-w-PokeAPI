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
	$('.pokemon').html(newHTML);

	//click on name get info

	$('.child-pokemon').click(function() {
		var name = $(this).data('name');//get data name
		pokeDex.showDetails(name);
	});

});

//creates a functionality similar to jukebox
class PokeDex {
	constructor() {
		//$(this).pokemon-array = pokemonArray;
	};

	showDetails(name) {
		cachedFetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
	 	.then(r => r.json())
	 	.then(results => { 
	 		console.log(results);
			// $('.pokeData').text(results);
		 });
	};	
};

//create a way to favorite them
// favorite() {
// 		$('#favorite').click(function(){

// 		});
// 	};

	// $('.element').html(newHTML.join(''));
// get their specs

// class Pokemon {
// 	constructor(sprite,name,weight,types,id,height) {
// 	$(this).sprite = abilities.sprites;
// 	$(this).name = abilities.name;
// 	$(this).weight = abilities.weight;
// 	$(this).types = abilities.types;
// 	$(this).id = abilities.national_id;
// 	$(this).height = abilities.height;
// 	}
// };


