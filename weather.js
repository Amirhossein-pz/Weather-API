class Weather {
  constructor(city, country) {
    this.apiKey = '44a5631648e0458986481b62ebd4d72d';
    this.city = city;
    this.country = country;
  }

  async getWeather() {
    const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city}&country=${this.country}&key=${this.apiKey}&include=minutely`);
    const responseData = await response.json();

    return responseData.data[0];
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}