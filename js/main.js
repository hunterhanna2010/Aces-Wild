


/*--- constants ---*/
const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';


/*--- app's state ---*/
let gameOver = false;
let deck;
let interval;

/*--- cached element references ---*/
let playerMessage = document.getElementById('player-message');
let message = document.getElementById('game-status');
//let pauseMessage = document.getElementById('pause-message');
//let continueMessage = document.getElementById('continue-message');


/*--- event listeners ---*/
document.addEventListener('DOMContentLoaded', function() {
	console.log('sanity');
})

//event listener for button on click
document.getElementById('deal-cards').addEventListener('click', function(e) {
	console.log('we are in game mode now');
	startGame();
})

document.getElementById('restart-game').addEventListener('click', function(e) {
	console.log('restarting');
	continueGame();
})

//add event listener to keydown "z" and keydown "m"
let playerZKey = window.addEventListener('keydown', checkKeyZ, false);


//add event listener to keydown "m"
let playerMKey = window.addEventListener('keydown', checkKeyM, false);



/*--- functions ---*/

//startGame

function checkKeyZ(key) {
	if (key.keyCode == "90") {
		playerMessage.textContent = 'Player Z has slapped the deck';
		pauseGame();
	}
}

function checkKeyM(key) {
	if (key.keyCode == "77") {
		playerMessage.textContent = 'Player M has slapped the deck';
		pauseGame();
		
	}
}
initializeGame();
//set up game to begin
function initializeGame() {
	deck = new Deck();
	deck.generateDeck();
	deck.shuffle();
	console.log(deck);
}

//game is ready to start
function startGame() {
	deck.printDeck();
	console.log(deck.deal);
	//setting an interval for every second for a new card to deal
	interval = setInterval(dealCard, 500);
	//message.textContent = 'Game has started';
}

function dealCard() {
	var card = deck.deal();
	//if there are no more cards in the array, game is over
	if (card === undefined) {
		endGame();
	}
}

//pauseGame
function pauseGame() {
	//cancelling the interval until start game is reclicked
	clearInterval(interval);
	//message.textContent = 'Game is Paused Now';
	console.log('game is paused');
}

//continueGame
//set up a boolean to true or false if start game is equal to true, otherwise continue game
function continueGame() {
	interval = setInterval(dealCard, 300);
	dealCard;
	//message.textContent = 'Game has entered 2nd Round';
}

//endGame
function endGame() {
	clearInterval(interval);
	console.log('reached the end of the game');
	gameOver = true;
}	

//resetGame
















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


