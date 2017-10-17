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
			$('#name').text(results.name);
			$('#id').text(results.id);
			$('#weight').text(results.weight);
			$('#types').text(results.types);
			$('#height').text(results.height);
			$('#sprites').text(results.sprites);
		 });
	};	
};

//create a way to favorite them. create an arry like album push favorites to array
// favorite() {

// class favorite {
// 	constructor(){
// 		this.fav = []; 
// 	}
	
// 	addFav(fav) {
// 		this.fav.push(fav);
// 	}

// 	removeFav(name) {
// 		for (var i = 0; i < this.book.length; i++) {
// 			if (this.fav[i].name === name) {
// 				this.name.splice(i, 1);
// 			}
// 	}
// };

// create a click event that adds pokemon to favorite list
// great and else if the click out


// $('#favorite').click(function(){
// 	var favorite = [];
// 	if () {
// 		alert('you have added a favorite')
// 	} else {
// 		alert('you removed from favorites')
// 	}
// 	$('#favorite').html(favorite);
// })











