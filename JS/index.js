const apiKey = '' //My API_KEY (don't use, please)

/* Variables */
const nameCity = document.getElementById("nameOfCity"); 
const search = document.querySelector('#button');

const cityElement = document.querySelector('#city')
const tempElement = document.querySelector('#temperature span')
const descElement = document.querySelector('#description')
const weatherIconElement = document.querySelector('#weather-icon')
const countryElement = document.querySelector('#country')
const humidityElement = document.querySelector('#humidity span')
const windElement = document.querySelector('#wind span')

const weatherContainer = document.querySelector('#weather-data')

const menu = document.getElementById('menu-contact');
const buttonMenu = document.getElementById('buttonMenu')

//Functions 
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
}

const showWeatherData = async (city) => {
    nameCity.value = ''
    const data = await getWeatherData(city);

    cityElement.innerHTML = data.name;
    tempElement.innerHTML = parseInt(data.main.temp);
    descElement.innerHTML = data.weather[0].description;
    weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    humidityElement.innerHTML = `${data.main.humidity}%`;
    windElement.innerHTML =`${data.wind.speed}km/h`

    weatherContainer.classList.remove("hide")
}

//Events
search.addEventListener('click', (e) => { //This event send a requisition to API
    e.preventDefault()

    const city = nameCity.value;
    
    if (!city) { // If city variable is empty then alert a message and focus the input, else send a requisition to API.
        alert('Campo "nome da cidade" está vazio!')
        nameCity.focus()
    } else {
        showWeatherData(city)
    }
})

buttonMenu.addEventListener('click', (e) => { //This event open the contact informations
    menu.classList.toggle('hide-display')
})