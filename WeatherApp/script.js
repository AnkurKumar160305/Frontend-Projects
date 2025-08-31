
const searchBtn=document.querySelector('.search-btn');
const searchBar=document.querySelector('.search-bar');
const weather=document.querySelector('.weather-icon');
const temp=document.querySelector('.temperature');
const loc=document.querySelector('.location');
const humidTemp=document.querySelector('.humid-temp');
const windSpeed=document.querySelector('.wind-speed');
const card=document.querySelector('.card');

// const saveTodos = () => {
//     localStorage.setItem("weather", card.innerHTML);
// };

// ✅ Load todos from localStorage
// const loadTodos = () => {
//     const data = localStorage.getItem("weather");
//     if (data && data.trim() !== "") {
//         card.innerHTML = data;
//     }
// };

const display=async(value)=>{
    const res=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value}?unitGroup=us&key=VDEEJ4G2BB4SHXQ2TYNYVFL4F&contentType=json`);
    const data=await res.json();
    console.log(data);

    const today = data.days[0];  // ✅ today's weather
    temp.textContent = today.temp + " °F"; 
    windSpeed.textContent = today.windspeed + " mph";
    humidTemp.textContent = today.humidity + "%";

    const temperature = today.temp;
    if (temperature < 32) {
        weather.src = "https://cdn-icons-png.flaticon.com/512/642/642102.png"; // snowy
        weather.alt = "Snow";
    } else if (temperature >= 32 && temperature < 60) {
        weather.src = "https://cdn-icons-png.flaticon.com/512/414/414927.png"; // cold
        weather.alt = "Cold";
    } else if (temperature >= 60 && temperature < 85) {
        weather.src = "https://cdn-icons-png.flaticon.com/512/1163/1163661.png"; // cloudy sun
        weather.alt = "Mild";
    } else {
        weather.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png"; // hot sun
        weather.alt = "Hot";
    }
    // saveTodos();
}

const clearData = () => {
    loc.textContent = "--";
    temp.textContent = "--";
    humidTemp.textContent = "--";
    windSpeed.textContent = "--";
    weather.src = "default.png"; // a neutral placeholder image
};


const getData=()=>{
    searchBtn.addEventListener('click',()=>{
        let value=searchBar.value.trim()
        // saveTodos();
        if (value !== "") {
            clearData();
            loc.textContent=value;
            display(value);
            // saveTodos();
        }
    })
}

window.onload=function(){
    getData();
    // loadTodos();
}