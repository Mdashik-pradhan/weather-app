const searchCity = async () => {
    const searchFiled = document.getElementById('search-filed');
    const searchText = searchFiled.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=4b90ce5ccd53348823a98d6e20fe1839`;
    const res = await fetch(url);
    const data = await res.json();
    displayWeather(data);
        searchFiled.value = '';
}

const displayWeather = weatherData => {
    const {main,name, weather} = weatherData;
    // convert kelvin to celsius
    let temp = main.temp;
    const kelvin = 273.15;
    const celsius = parseFloat(temp - kelvin).toFixed(2);

    const searchResult =  document.getElementById('search-result');
    searchResult.textContent = '';

    const div =  document.createElement('div');
    div.classList.add('search-result-div');

    // dynamic images
    const img = document.createElement('img');
    img.classList.add('weather-img')
    if (weather[0].main == 'Clouds') {
        img.src = './images/cloud-icon.png'
    } else if (weather[0].main == 'Rain') {
        img.src = './images/rain.png';
    } else if (weather[0].main == 'Haze') {
        img.src = './images/haze.png';
        console.log('haze')
    } else {
        img.src = './images/weather.png';
    }
    searchResult.appendChild(img);
    div.innerHTML = `
            <h1>${name}</h1>
            <h5>${celsius} °C</h5>
            <p>${weather[0].main}</p>
    `;
    searchResult.appendChild(div);
}