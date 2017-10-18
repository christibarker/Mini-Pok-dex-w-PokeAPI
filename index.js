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

	$('#favorite').on('click', function() {
		if (pokeDex.addFav(name)){
			$('#favorite').html(favorite_box);
		}
	});

	$('#unfavorite').on('click', function() {
		if (pokeDex.removeFav(name)){
			$('#unfavorite').html(favorite_box);	
		}	
	});

});



//creates a functionality similar to jukebox
class PokeDex {
	constructor() {
		this.fav = []; 
	};

	showDetails(name) {
		cachedFetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
	 	.then(r => r.json())
	 	.then(results => { 
	 		console.log(results);
			$('#name').text(results.name);
			$('#id').text(results.id);
			$('#weight').text(results.weight);
			$('#height').text(results.height);
			$('#sprites').html('<img src="' + results.sprites.front_default + '"></img>');
		 	$('#types').text(results.types.map(function(value, index) {
				return value.type.name;
			}));
		 });
	};

	addFav(name) {
		this.fav.push(name);
		this.displayFavs();
	}

	removeFav(name) {
		for (var i = 0; i < this.fav.length; i++) {
			if (this.fav[i].name === name) {
				this.name.splice(i, 1);
			}				
		}
		this.displayFavs();
	}	

	// displayFavs(){

	// }

};

 
// create a click event that adds pokemon to favorite list
// var pokeDex = new PokeDex();













