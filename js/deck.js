//create a deck of cards
class Deck {
	constructor () {
		this.deck = [];
		this.dealtCards = [];
		this.currentSuit;
		this.currentValue;
		//this.generateDeck = generateDeck;
		
			//let dealt_card = this.deck.shift();
			//this.dealt_card.push(dealt_card);
			//console.log(dealt_card);
			//return dealt_card;
			
	}
	
	deal = () => {
        //variable to pop off array item from the deck
        //remove top item from deck and save it in card
        let card = this.deck.pop()
        //push those item to the dealtCards array
        this.dealtCards.push(card)
        //return dealtCards
        console.log(card);
        return card;
	}
	generateDeck() {
		
		let card = (suit, value) => {
			

			return {name:suit + 'of' + value, suit:suit, value:value};
		}

		let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
		let suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];

		for(let s = 0; s < suits.length; s++) {
			this.currentSuit = s;
			for(let v = 0; v < values.length; v++) {
				this.currentValue = v;
				console.log(suits[s], values[v]);
				this.deck.push(card(suits[s], values[v]));
			}
		}
	}


	printDeck() {
		if (this.deck.length == 0) {
			console.log('the deck has not been built');
		} else {
			for (let c = 0; c < this.deck.length; c++) {
				console.log(this.deck[c]);
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

	

	clear_deck() {
		this.deck = [];
	}
}