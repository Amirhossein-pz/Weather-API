class UI {
  constructor() {
    this.timezone = document.getElementById('w-timezone');
    this.description = document.getElementById('w-description');
    this.icon = document.getElementById('w-icon');
    this.temp = document.getElementById('w-temp');
    this.humidity = document.getElementById('w-humidity');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.feelsLike = document.getElementById('w-feelslike');
    this.date = document.getElementById('w-date');
  }

  paint(weather) {

    this.timezone.textContent = weather.city_name; 
    this.description.textContent = weather.weather.description;
    this.temp.textContent = `${weather.temp}℃`;
    this.icon.setAttribute('src', `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`);
    this.humidity.textContent = `Humidity: ${weather.rh}%`;
    this.dewpoint.textContent = `Dewpoint: ${weather.dewpt}℃`;
    this.feelsLike.textContent = `Feels Like: ${weather.app_temp}℃`;
    this.date.textContent = `Date: ${weather.datetime} `;
  

  }
}