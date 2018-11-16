export default class Weather {
  constructor(data) {
    this.humidity = data.main.humidity
    this.temp = data.main.temp
    this.high = data.main.temp_max
    this.low = data.main.temp_min
    this.name = data.name
    this.country = data.sys.country
    this.description = data.weather[0].description
    this.icon = data.weather[0].icon
    this.fahr = 0
  }
}