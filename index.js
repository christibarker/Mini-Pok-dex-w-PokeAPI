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
		pokeDex.addFav();
	});

	$('#unfavorite').on('click', function() {
		pokeDex.removeFav();
	});

});

//creates a functionality similar to jukebox
class PokeDex {
	constructor() {
		this.fav = [];
		this.currentPokemon = null; 
	};

	showDetails(name) {
		cachedFetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
	 	.then(r => r.json())
	 	.then(results => { 
	 		console.log(results);
			$('#name').text(results.name);
			this.currentPokemon = results.name;
			$('#id').text(results.id);
			$('#weight').text(results.weight);
			$('#height').text(results.height);
			$('#sprites').html('<img src="' + results.sprites.front_default + '"></img>');
		 	$('#types').text(results.types.map(function(value, index) {
				return value.type.name;
			}));
		 });
	};

	addFav() {
		this.fav.push(this.currentPokemon);
		this.displayFavs();
	}

	removeFav() {
		for (var i = 0; i < this.fav.length; i++) {
			if (this.fav[i] === this.currentPokemon) {
				this.fav.splice(i, 1);
			}				
		}
		this.displayFavs();
	}	

	displayFavs(){
		var html = '';
		for (var i = 0; i < this.fav.length; i++) {
			html += `<div>${this.fav[i]}</div>`;
		}
		 $('.favorite_list').html(html);
	}

};

 














