import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()


function draw(weather) {
	console.log(weather)
	let template = `${weather.name} - ${weather.fahr} <img src="http://openweathermap.org/img/w/${weather.icon}.png">`
	console.log(weather.icon)
	document.getElementById("weather").innerHTML = template
}


export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		weatherService.getWeather(draw)
	}

	// weatherService.toFahrenheit(input)

}
