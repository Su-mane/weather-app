const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bac25e48c6mshb80344a99c2b56dp157d3fjsnf25dba15ced3",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  
  const cityName = document.getElementById("cityName");
  const cloud_pct = document.getElementById("cloud_pct");
  const temp = document.getElementById("temp");
  const feels_like = document.getElementById("feels_like");
  const humidity = document.getElementById("humidity");
  const min_temp = document.getElementById("min_temp");
  const max_temp = document.getElementById("max_temp");
  const wind_speed = document.getElementById("wind_speed");
  const wind_degrees = document.getElementById("wind_degrees");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    return formattedTime;
  };
  
  const getWeather = (city) => {
    cityName.innerHTML = city;
  
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
  
        cloud_pct.innerHTML = response.cloud_pct;
        temp.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
  
        const sunriseTimestamp = response.sunrise;
        const sunsetTimestamp = response.sunset;
  
        sunrise.innerHTML = formatTime(sunriseTimestamp);
        sunset.innerHTML = formatTime(sunsetTimestamp);
      })
      .catch((err) => console.error(err));
  };
  
  const submit = document.getElementById("submit");
  
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const cityInput = document.getElementById("city");
    getWeather(cityInput.value);
  });
  
  // Initial weather display for Bengaluru
  getWeather("Bengaluru");
  