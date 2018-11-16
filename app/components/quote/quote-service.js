import Quote from "../../models/quote-model.js";

let url = '//bcw-getter.herokuapp.com/?url=';
let url2 = 'https://favqs.com/api/qotd';
let apiUrl = url + encodeURIComponent(url2);
//Do Not Edit above we have to go through the bcw-getter to access this api


let quoteApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

let _quote = {}

export default class QuoteService {
	getQuote(callWhenDone) {
		console.log('looking for some good quotes')
		quoteApi().then((res) => {
			let results = res.data.quote
			results = new Quote(results)
			// console.log(results)
			callWhenDone(results)
		})
	}
}
