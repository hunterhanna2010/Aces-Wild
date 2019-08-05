console.log('sanity');

let API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
let gameOver = false;
let playerMessage = document.getElementById('player-message');


document.addEventListener('DOMContentLoaded', function() {

//event listener for button on click
document.getElementById('deal-cards').addEventListener('click', function(e) {
	console.log('we are in game mode now');
})


//add event listener to keydown "z" and keydown "m"
let playerZKey = window.addEventListener('keydown', checkKeyZ, false);
	function checkKeyZ(key) {
	if (key.keyCode == "90") {
		playerMessage.textContent = 'Player Z has slapped the deck';
	}
}

//add event listener to keydown "m"
let playerMKey = window.addEventListener('keydown', checkKeyM, false);
	function checkKeyM(key) {
	if (key.keyCode == "77") {
		playerMessage.textContent = 'Player M has slapped the deck';
	}
}


//create a deck of cards
class Deck {
	constructor () {
		this.deck = [];
		this.dealt_cards = [];
	}

	generateDeck () {
		
		let card = (suit, value) => {
			this.name = value + ' of ' + suit;
			this.suit = suit;
			this.value = value;

			return {name:this.name, suit:this.suit, value:this.value};
		}

		let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
		let suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];

		for(let s = 0; s < suits.length; s++) {

			for(let v = 0; v < values.length; v++) {

				this.deck.push(card(suits[s], values[v]));
			}
		}
	}

	printDeck () {
		if (this.deck.length == 0) {
			console.log('the deck has not been built');
		} else {
			for (let c = 0; c < this.deck.length; c++) {
				console.log(this.deck[c]);
			}
		}
	}

	shuffle () {
		let current_index = this.deck.length, temp_value, random_index;

		while (0 != current_index) {
			random_index = Math.floor((Math.random() * current_index));
			current_index -= 1
			temp_value = this.deck[current_index];
			this.deck[current_index] = this.deck[random_index];
			this.deck[random_index] = temp_value;
		}
	}

	deal () {
		let dealt_card = this.deck.shift();
		this.dealt_card.push(dealt_card);
		return dealt_card;
	}

	clear_deck () {
		this.deck = [];
	}
}

deck = new Deck();
deck.generateDeck();
deck.shuffle();
deck.printDeck();
console.log(deck.deal);
});


//startGame


//pauseGame


//continueGame



//endGame




//Card game start to finish
	//2 players have access to game area at same time and throughout the game
	//Deal button runs by click or space downkey
	//starts game
	//cards dealt by computer continuously and in random order
	//cards are flipped from face down stack to face up stack
	//face down stack shows one back of card image,
	//face up stack shows all cards from start click to whenever game is paused
	//game is only paused when either player key's down on their selected key, "z" or "m" 
	//if it was an Ace, 1st player to slap face up stack wins round and all cards in stack
	//if it was not an ace, player immediately loses round
	//rounds continue until either player holds all the cards
	//that player is identified as the winner
	//execute end of game messages and reset game start
	//a winner banner



	

//global event listeners
	//deal game button when clicked or space key down
	//z key at key down, pause game immediately
	//m key at key down, pause game immediately
	//what if simultaneous play? (draw stretch goal)

//global arrays
	//1st array with all the cards
	//2nd array that begins at empty and adds throughout game
	//3rd array for player z and their winnings
	//4th array for player m and their winnings

//situations for variables or functions:
//deal

//startGameStatus = (computer generates dealt cards at a set timed variable)

//pauseGameStatus = no delay card draw stops.
//should game have been paused? Yes, store data and add to player z or player m caddie. 
//No, player loses round. cards remain in card stack

//store data: cards started with minus cards left to draw. How many cards were dealt? how many cards still need to be dealt?
//how many cards does player m have now? 
//how many cards does player z have now?
//are we at a win? yes or no
//if yes, winnerBanner. if not, continueGameStatus

//continueGameStatus = (computer is again generating dealt cards)
//enter continueGameStatus && newRound === No winner yet
//no cards left to deal && player caddie full === winner
//no cards left to deal && player caddie empty === loser
//gameOverStatus = reset cards to startGame Status with all the cards in one stack. No cards accounted for either player. 
//Math goes back to uncalculated totals. 
//Need the click or space key down to restart game. 

	//stretch goal would be to display player stats throughout rounds and odds for winning game
	//stretch goal would be to speed up the continuous deal throughout rounds
	//stretch goal woud be to create a dual round if both players key down at the same time and how many cards would go into a side war situation


