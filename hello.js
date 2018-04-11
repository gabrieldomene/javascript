//	BlackJack
//	v1.0
let	suits = ["Hearts", "Clubs", "Diamonds", "Spades"]
let	values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight",
		"Seven", "Six", "Five", "Four", "Three", "Two"]

function createDeck(){
	let deck = []
	for( let suitIdx = 0; suitIdx < suits.length; suitIdx++){
		for( let valueIdx = 0; valueIdx < values.length; valueIdx++){
			deck.push(values[valueIdx] + ' ' + suits[suitIdx])
		}
	}
	return deck
}

function getNextCard() {
	return	deck.shift()
}

let deck = createDeck();

let playerCards = [getNextCard(), getNextCard()]

console.log("BlackJack!")
console.log("Player Cards: ")
console.log("\t " + playerCards[0]);
console.log("\t " + playerCards[1]);