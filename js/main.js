


/*--- constants ---*/
const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';


/*--- app's state ---*/
let gameOver = false;
let deck;
let card;
let interval;
let playerM = 0;
let playerZ = 0;

/*--- cached element references ---*/
let playerMessage = document.getElementById('player-message');
let message = document.getElementById('game-status');
//let pauseMessage = document.getElementById('pause-message');
//let continueMessage = document.getElementById('continue-message');


/*--- event listeners ---*/
document.addEventListener('DOMContentLoaded', function() {
	console.log('sanity');
	initializeGame();
})
//event listener for button on click

//let mediaElem = document.getElementById("my-media-element");
//mediaElem.load();
document.getElementById('deal-cards').addEventListener('click', function(e) {
	console.log('we are in game mode now');
	startGame();
})

//document.getElementById('restart-game').addEventListener('click', function(e) {
	//console.log('restarting');
	//continueGame();
//})

//add event listener to keydown "z" or "m"
document.addEventListener('keydown', checkKeyZ);
// document.addEventListener('keydown', checkForRoundWinner);

//add event listener to keydown "m"
document.addEventListener('keydown', checkKeyM);
// let playerMKey = window.addEventListener('keydown', checkKeyM, false);
// document.addEventListener('keydown', winsRound);
// document.addEventListener('keydown', checkForRoundWinner);


/*--- functions ---*/

//startGame

function checkKeyZ(key) {
	if (key.keyCode == "90") {
		playerMessage.textContent = 'Player Z has slapped the deck';
		playerZ++;
		//pauseGame();
		points('z');
		console.log(points);
	}
}

function checkKeyM(key) {
	if (key.keyCode == "77") {
		playerMessage.textContent = 'Player M has slapped the deck';
		playerM++;
		//pauseGame('m');
		points('m');
		console.log(points);
	}
}

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
	interval = setInterval(dealCard, 1000);
	//message.textContent = 'Game has started';
}
//flip cards from back image to front face images
function flipCard() {

}
//deal cards
function dealCard() {
	card = deck.deal();
	//if there are no more cards in the array, game is over
	if (card === undefined) {
		endGame();
		winGame();
	}
}
//Who wins round
function points(playerCode) {
	// If ace, player gets point
	if (card.value === 'A' && playerCode === 'z') {
		playerZ++;
		
	}

	if (card.value === 'A' && playerCode === 'm') {
		playerM++;
	}
	//if it was any other card, player loses point
		if (card.value !== 'A' && playerCode === 'z') {
		playerM++;
		playerZ--;
		}

		if (card.value !== 'A' && playerCode === 'm') {
		playerZ++;
		playerM--;
		}
		console.log(playerM);
		console.log(playerZ);
}
//Now we can continueGame with a faster interval
function continueGame() {
	interval = setInterval(dealCard, 500);
	dealCard();
	//message.textContent = 'Game has entered 2nd Round';
}

//endGame
function endGame() {
	clearInterval(interval);
	console.log('reached the end of the game');
	if (gameOver === true || card == undefined) {
		return;
	} 
}	

//win game function
function winGame() {
	if (playerM > playerZ) {
		document.body.style.backgroundColor = "black";
		//document.h2.textContent = points + "WE HAVE A WINNER";
	}	else if (playerZ > playerM) {
			document.body.style.backgroundColor = "blue";
			//document.h2.textContent = points + "wE HAVE A WINNER";
		} else if (playerM === playerZ) {
				document.body.style.backgroundColor = "yellow";
				interval = setInterval(dealCard, 250);
		}
	console.log(winGame);
	endGame();
}




	
	




//stretch goal: war mode function (simultaneous keystroke)
//stretch goal would be to display player stats throughout rounds and odds for winning game
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

