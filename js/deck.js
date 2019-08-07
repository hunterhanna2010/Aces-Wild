//create a deck of cards


let diamondsAce = document.getElementById('diamonds-ace');
let diamondsTwo = document.getElementById('diamonds-two');
let diamondsThree = document.getElementById('diamonds-three');
let diamondsFour = document.getElementById('diamonds-four');
let diamondsFive = document.getElementById('diamonds-five');
let diamondsSix = document.getElementById('diamonds-six');
let diamondsSeven = document.getElementById('diamonds-seven');
let diamondsEight = document.getElementById('diamonds-eight');
let diamondsNine = document.getElementById('diamonds-nine');
let diamondsTen = document.getElementById('diamonds-ten');
let diamondsJack = document.getElementById('diamonds-j');
let diamondsQueen = document.getElementById('diamonds-q');
let diamondsKing = document.getElementById('diamonds-k');

let heartsAce = document.getElementById('hearts-ace');
let heartsTwo = document.getElementById('hearts-two');
let heartsThree = document.getElementById('hearts-three');
let heartsFour = document.getElementById('hearts-four');
let heartsFive = document.getElementById('hearts-five');
let heartsSix = document.getElementById('hearts-six');
let heartsSeven = document.getElementById('hearts-seven');
let heartsEight = document.getElementById('hearts-eight');
let heartsNine = document.getElementById('hearts-nine');
let heartsTen = document.getElementById('hearts-ten');
let heartsJack = document.getElementById('hearts-j');
let heartsQueen = document.getElementById('hearts-q');
let heartsKing = document.getElementById('hearts-k');

let clubsAce = document.getElementById('clubs-ace');
let clubsTwo = document.getElementById('clubs-two');
let clubsThree = document.getElementById('clubs-three');
let clubsFour = document.getElementById('clubs-four');
let clubsFive = document.getElementById('clubs-five');
let clubsSix = document.getElementById('clubs-six');
let clubsSeven = document.getElementById('clubs-seven');
let clubsEight = document.getElementById('clubs-eight');
let clubsNine = document.getElementById('clubs-nine');
let clubsTen = document.getElementById('clubs-ten');
let clubsJack = document.getElementById('clubs-j');
let clubsQueen = document.getElementById('clubs-q');
let clubsKing = document.getElementById('clubs-k');

let spadesAce = document.getElementById('spades-ace');
let spadesTwo = document.getElementById('spades-two');
let spadesThree = document.getElementById('spades-three');
let spadesFour = document.getElementById('spades-four');
let spadesFive = document.getElementById('spades-five');
let spadesSix = document.getElementById('spades-six');
let spadesSeven = document.getElementById('spades-seven');
let spadesEight = document.getElementById('spades-eight');
let spadesNine = document.getElementById('spades-nine');
let spadesTen = document.getElementById('spades-ten');
let spadesJack = document.getElementById('spades-j');
let spadesQueen = document.getElementById('spades-q');
let spadesKing = document.getElementById('spades-k');
class Deck {
	constructor () {
		this.deck = [];
		this.dealtCards = [];
		this.currentSuit;
        this.currentValue;
        this.currentImage;
		//this.generateDeck = generateDeck;
		
			//let dealt_card = this.deck.shift();
			//this.dealt_card.push(dealt_card);
			//console.log(dealt_card);
			//return dealt_card;
			
	}
	
	deal = () => {
        //variable to pop off array item from the deck
        //remove top item from deck and save it in card array
        let card = this.deck.pop()
        //push those item to the dealtCards array
        this.dealtCards.push(card)
        //return dealtCards
        console.log(card);
        return card;
	}
	generateDeck() {
		
		let card = (images) => {
			

			//return {name:suit + 'of' + value, suit:suit, value:value, images:images};
		}

		//let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
		//let suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
        let images = [diamondsAce, diamondsTwo, diamondsThree, diamondsFour, diamondsFive, diamondsSix,
            diamondsSeven, diamondsEight, diamondsNine, diamondsTen, diamondsJack, diamondsQueen, diamondsKing,
            heartsAce, heartsTwo, heartsThree, heartsFour, heartsFive, heartsSix, heartsSeven, heartsEight, heartsNine,
            heartsTen, heartsJack, heartsQueen, heartsKing, clubsAce, clubsTwo, clubsThree, clubsFour, clubsFive, clubsSix,
            clubsSeven, clubsEight, clubsNine, clubsTen, clubsJack, clubsQueen, clubsKing, spadesAce, spadesTwo, spadesThree,
            spadesFour, spadesFive, spadesSix, spadesSeven, spadesEight, spadesNine, spadesTen, spadesJack, spadesQueen, spadesKing];



		//for(let s = 0; s < suits.length; s++) {
			//this.currentSuit = s;
			//for(let v = 0; v < values.length; v++) {
                //this.currentValue = v;
                for(let i = 0; i < images.length; i++) {
                    this.currentImage = i;
                
				console.log(images[i]);
				this.deck.push(card(images[i]));
		}
    }


	printDeck() {
		if (this.deck.length == 0) {
			console.log('the deck has not been built');
		} else {
			for (let c = 0; c < this.deck.length; c++) {
				//console.log(this.deck[c]);
			}
		}
	}

	shuffle() {
		let current_index = this.deck.length, temp_value, random_index;

		while (0 != current_index) {
			random_index = Math.floor((Math.random() * current_index));
			current_index -= 1
			temp_value = this.deck[current_index];
			this.deck[current_index] = this.deck[random_index];
			this.deck[random_index] = temp_value;
		}
    }
    
	

	//clearDeck() {
		//this.deck = [];
	//}
}