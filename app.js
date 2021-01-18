const searchForm = document.querySelector('.country-search');
const cityValue = document.querySelector('.country-search input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
//const timeImage = document.querySelector('.card-top')
const cardInfo = document.querySelector('.back-card');

const spitOutCelcius =(kelvin) => {
    celcius = Math.round(kelvin - 273.15);
    return celcius;
}
const isDayTime=(icon)=>{
    if(icon.includes('d')){
        return true;
    }else {
return false;
    }


}

updateWeatherApp = (city) => {
    console.log(city);
    const imageName = city.weather[0].icon;
    const iconSrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`
    cityName.textContent = city.name
cardBody.innerHTML = `
<div class="card-body">
    <div class="card-mid row">
        <div class="col-8 text-center temp">
<span>${spitOutCelcius(city.main.temp)}&deg;C</span>
        </div>
        <div class="col-4 cond-temp">
            <p class="condition">${city.weather[0].description}</p>
            <p class="high ">${spitOutCelcius(city.main.temp_max)}&deg;C</p>
            <p class="low">${spitOutCelcius(city.main.temp_min)}&deg;C</p>
        </div>
    </div>
 <div class="icon-container card shadow mx-auto">
     <img src="${iconSrc}" width="70"  alt="">
 </div>
 <div class="card-bottom px-5 py-4 row">
     <div class="col text-center">
         <p>${spitOutCelcius(city.main.feels_like)}&deg;C</p>
         <span>Feels like</span>
     </div>
     <div class="col text-center">
         <p>${city.main.humidity}</p> 
         <span>Humidity</span>
     </div>
 </div>
`
 
if(isDayTime(imageName)){
console.log('day')
//timeImage.setAttribute('src', 'day.jpg');
}
else{ 
    console.log('night');
  //  timeImage.setAttribute('src', 'night.jpg');
}

cardInfo.classList.remove('d-none');
}




//add an event listener to the form 

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const citySearched = cityValue.value.trim();
    console.log(citySearched);
searchForm.reset();

requestCity(citySearched)
.then((data) => {
    updateWeatherApp(data);
} )
.catch((error) => {console.log(error)})
})