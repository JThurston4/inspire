import Weather from "../../models/weather-model.js";

let url = '//bcw-getter.herokuapp.com/?url=';
let url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
let apiUrl = url + encodeURIComponent(url2);

let weatherApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

let kTOf = '(K − 273.15) × 9 / 5 + 32 = °F'


export default class WeatherService {
	getWeather(callWhenDone) {
		console.log('Calling the Weatherman')
		weatherApi().then(res => {
			let weatherStuff = res.data
			weatherStuff = new Weather(weatherStuff)
			weatherStuff.fahr = Math.round((weatherStuff.temp - 273.15) * 9 / 5 + 32)
			callWhenDone(weatherStuff)
		})
	}
	toFahrenheit(input) {

	}
}

