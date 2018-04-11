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
	var randomItem = deck[Math.floor(Math.random()*deck.length)]
	var  index = deck.indexOf(randomItem)
	if (index > -1){
		deck.splice(index, 1);
	}
	return	randomItem
}
let deck = createDeck();
console.log("Initial length of deck: ", deck.length);

let player1Cards = [getNextCard(), getNextCard()]
let player2Cards = [getNextCard(), getNextCard()]


console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ")
console.log("Welcome to BlackJack!")
console.log("Player 1 Cards: ")
console.log("\t " + player1Cards[0]);
console.log("\t " + player1Cards[1]);
console.log("Player 2 Cards: ")
console.log("\t " + player2Cards[0]);
console.log("\t " + player2Cards[1]);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ")
console.log("Final length of deck:" , deck.length)