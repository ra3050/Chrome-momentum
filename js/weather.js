const API_KEY = "7a675b5ca3a04048a3ef495565e5c1a5";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json())
        .then(data => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `  ${data.weather[0].main} / ${data.main.temp}`;
        });   //response를 json으로 받는다
}

function onGeoError() {
    alert("Can't find you. No Weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);