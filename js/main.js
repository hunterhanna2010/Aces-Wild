


/*--- constants ---*/

/*--- app's state ---*/
let gameOver = false;
let deck;
let card;
let interval;
let playerM = 0;
let playerZ = 0;
let score = 0;
let scoreUpdateZ = document.getElementById('points-z');
let scoreUpdateM = document.getElementById('points-m');


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


function checkKeyZ(key) {
	if (key.keyCode == "90") {
		playerMessage.textContent = 'Player Z has slapped the deck';
		//pauseGame();
		points('z');
		score;
		scoreUpdateZ.innerText = 'Player Z:' + playerZ;
		console.log(points);
	}
}

function checkKeyM(key) {
	if (key.keyCode == "77") {
		playerMessage.textContent = 'Player M has slapped the deck';
		//pauseGame('m');
		points('m');
		score;
		scoreUpdateM.textContent = 'Player M:' + playerM;
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
	console.log('game has started');
	//message.textContent = 'Game has started';
}


//deal cards
function dealCard() {
	const cardDivs = document.querySelectorAll('.cards');
	// let index = 0;
	// //if one of the indexes and the cardDivs still have child nodes
	// //continue to remove, otherwise break out of while loop
	// 	while(index < 4 && cardDivs[index].hasChildNodes()) {
	// 		cardDivs[index].removeChild(cardDivs[index].firstChild);
	// 		//if the current divs index does not have child nodes, please add it to the index
	// 		if (!cardDivs[index].hasChildNodes()) {
	// 			index++;
	// 		}
			
	// 	}
	const img = document.createElement('img');
	const cardPile = document.getElementById('card-pile');
	card = deck.deal();
	img.src = card.images.src;
	img.style.height = '200px';
	card.images.remove();
	cardPile.appendChild(img);
	// if (card.suit === 'club') {
	// 	cardDivs[0].appendChild(img);
	// } else if (card.suit === 'diamond') {
	// 	cardDivs[1].appendChild(img);
	// } else if (card.suit === 'heart') {
	// 	cardDivs[2].appendChild(img);
	// } else {
	// 	cardDivs[3].appendChild(img);
	// }
	//card.images.classList.remove('hidden');
	//if there are no more cards in the array, game is over
	if (card === undefined) {
		winGame();
		endGame();
	}
}
//Who wins round
function points(playerCode) {
	// If ace, player gets point
	if (card.value === 'A' && playerCode === 'z') {
		playerZ++;
		score++;
		
	}

	if (card.value === 'A' && playerCode === 'm') {
		playerM++;
		score++;
	}
	//if it was any other card, player loses point
		if (card.value !== 'A' && playerCode === 'z') {
		playerM++;
		playerZ--;
		score++;
		}

		if (card.value !== 'A' && playerCode === 'm') {
		playerZ++;
		playerM--;
		score++;
		}
		console.log(playerM);
		console.log(playerZ);
}
//Now we can continueGame with a faster interval
//function continueGame() {
	//interval = setInterval(dealCard, 700);
	//dealCard();
	//message.textContent = 'Game has entered 2nd Round';
//}

//endGame
function endGame() {
	clearInterval(interval);
	console.log('reached the end of the game');
	if (gameOver === true || card == undefined) {
		//no more cards to deal
	} 
}	

//win game function
function winGame() {
	if (playerM > playerZ) {
		document.body.style.backgroundColor = "navy";
		playerMessage.textContent = "PLAYER M IS THE WINNER. PLAY AGAIN?";
	}	else if (playerZ > playerM) {
			document.body.style.backgroundColor = "chocolate";
			playerMessage.textContent = "PLAYER Z IS THE WINNER? PLAY AGAIN?";
		} else if (playerM === playerZ) {
				document.body.style.backgroundColor = "yellow";
				playerMessage.textContent = "WE HAVE A TIE. RESET FOR ONE MORE GAME - LIGHTNING ROUNDS"

		}
	//console.log(winGame);
	endGame();
	gameOver = true;
	score = 0;
	
}
//function resetGame() {
	//if (gameOver === false && playerM === playerZ) {
		//initializeGame();
		//generateDeck();
		//startGame();
		//interval = setInterval(dealCard, 250);

	//}
//}
	




	
	




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

