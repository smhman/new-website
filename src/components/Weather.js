const url = 'https://api.openweathermap.org/data/2.5/'
const key = '739ef515e3ade2c79525a82f51f458a5'
const cityName = 'Põlva'

$.getJSON(`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`, function(data) {
    $("#weather").html(`<p className="weatherText"> <span className="text-capitalize">${data.weather[0].description}</span> and ${Math.round(data.main.temp)}°C in <span className="mb-4 text-base text-gray-300">${data.name}, ${data.sys.country}</span>`);
});