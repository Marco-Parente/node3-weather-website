const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=f7e7ab5410af001718a4aa93b1eab6d3&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degress out. It feels like " +
          body.current.feelslike +
          " degrees out. The air humidity is currently at " +
          body.current.humidity +
          "%."
      );
    }
  });
};

module.exports = forecast;
