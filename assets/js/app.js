
const $ = document.querySelector.bind(document);

const DEFAULT_VALUE = "--";
const searchInput = $("#search__input");
const cityName = $(".city__name");
const weatherImage = $(".weather__image")
const weatherState = $(".weather__state");
const temp = $(".temperature__text");
const windSpeed = $(".win__speed__text");
const humindity = $(".humidity__text");
const pressure = $(".pressure_text");

const apiID = "be929e41ac4a3b141af07c40ddf422f0";

searchInput.onchange = function(e){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${apiID}&units=metric&lang=vi`)
    .then(async res => {
        const data = await res.json();
        // console.log('[searchInput]' , data);
            cityName.innerHTML = data.name || DEFAULT_VALUE;
            weatherState.innerHTML = data.weather[0].main;
            temp.innerHTML = Math.round(data.main.temp) + "°C" || DEFAULT_VALUE;
            windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) + "km/h" ||DEFAULT_VALUE;
            humindity.innerHTML = data.main.humidity + "%" || DEFAULT_VALUE;
            pressure.innerHTML = data.main.pressure + "mBar" || DEFAULT_VALUE;
    })  
    .catch(async err => {
        throw(err);
    });
};