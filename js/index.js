const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error4040 = document.querySelector('.not-found');


search.addEventListener('click', () =>{
    const APIKey = 'YOUR API KEY';
    const city = document.querySelector('.search-box input').value;
    if (city === '')
        return;

        
        
    fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=yes`).then((response) => response.json()).then(json => {
        console.log(json);
        if(json.hasOwnProperty('error')){
            // console.log(json.error.message);
            container.style.height = '450px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error4040.style.display = 'block';
            error4040.classList.add('fadeIn');
            return;
        }else{
            error4040.style.display = 'none';
            error4040.classList.remove('fadeIn');
    
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');
    
            image.src = json.current.condition.icon;
            temperature.innerHTML = json.current.temp_c +'<span>ºC</span>';
            description.innerHTML = json.current.condition.text;
            humidity.innerHTML = json.current.humidity;
            wind.innerHTML = json.current.wind_kph;
            
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '450px';     
        }

    });

});