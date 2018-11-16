import QuoteService from "./quote-service.js";

let qs = new QuoteService

function draw(quote) {
	// console.log(quote)
	document.getElementById("quote").innerHTML = `<p>${quote.body} - ${quote.author}</p>`
}

export default class QuoteController {
	constructor() {
		qs.getQuote(draw)
	}
}
