function onLoad() {
    if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(handleGetCurrentPosition);
}

function handleGetCurrentPosition(location){
    lat = location.coords.latitude;
    lon = location.coords.longitude;
    fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2156199cf190d55b3d006f816d198303`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector(".weather__head").innerHTML = `<h1>${data.name}</h1>`;
            document.querySelector(".weather__temp").innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png"></img>
            <p>${Math.round(data.main.temp - 273)}&deg;C</p>`;
            document.querySelector(".weather__cloud").innerHTML = data.weather[0]['description'];
            var date = new Date();
            month = date.getMonth();
            arrMonth = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
            arrMonth.forEach(function(item, i, arrMonth) {
                if (i === month)
                   month = arrMonth[i];
            });
            document.querySelector(".weather__time").innerHTML = `${date.getHours()}:${date.getMinutes()} ${month} ${date.getDate()}`;
            beaufort_scale = data.wind.speed;
            if (beaufort_scale < 0.5){beaufort_scale = 'Calm'}
            else if (beaufort_scale < 1.5){beaufort_scale = 'Light air'}
            else if (beaufort_scale < 3.3){beaufort_scale = 'Light breeze'}
            else if (beaufort_scale < 5.5){beaufort_scale = 'Gentle breeze'}
            else if (beaufort_scale < 7.9){beaufort_scale = 'Moderate breeze'}
            else if (beaufort_scale < 10.7){beaufort_scale = 'Fresh breeze'}
            else if (beaufort_scale < 13.8){beaufort_scale = 'Strong breeze'}
            else if (beaufort_scale < 17.1){beaufort_scale = 'High wind'}
            else if (beaufort_scale < 20.7){beaufort_scale = 'Gale'}
            else if (beaufort_scale < 24.4){beaufort_scale = 'Strong gale'}
            else if (beaufort_scale < 28.4){beaufort_scale = 'Storm'}
            else if (beaufort_scale < 32.6){beaufort_scale = 'Violent storm'}
            else if (beaufort_scale > 32.7){beaufort_scale = 'Hurricane force'};
            wind_direction = data.wind.deg;
            var arrWind = ['North-northeast', 'North-east', 'East-northeast', 
            'East', 'East-southeast', 'South-east', 'South-southeast',
            'South', 'South-southwest', 'South-west', 'West-southwest',
            'West', 'West-northwest', 'North-west', 'North-northwest', 'North'];
            coefficient = 3;
            arrWind.forEach(function(item, i, arrWind) {
                if (wind_direction > (11.25 * (coefficient - 2)) && wind_direction < (11.25 * coefficient))
                    wind_direction = arrWind[i];
                else if (wind_direction < 11.25)
                    wind_direction = arrWind[15];
                coefficient += 2;
            });

            sunset = new Date(data.sys.sunset * 1000);
            sunrise = new Date(data.sys.sunrise * 1000);

            document.querySelector(".weather__main").innerHTML = `<table>
            <tr><td>Wind</td><td>${beaufort_scale}, ${data.wind.speed} m/s ${wind_direction} (${data.wind.deg})</td></tr>
            <tr><td>Cloudiness</td><td>${data.weather[0]['main']}</td></tr>
            <tr><td>Pressure</td><td>${data.main.pressure} hpa</td></tr>
            <tr><td>Humidity</td><td>${data.main.humidity}%</td></tr>
            <tr><td>Sunrise</td><td>${sunrise.getHours()}:${sunrise.getMinutes()}</td></tr>
            <tr><td>Sunset</td><td>${sunset.getHours()}:${sunrise.getMinutes()}</td></tr>
            <tr><td>Geo coords</td><td>[${data.coord.lon}, ${data.coord.lat}]</td></tr></table>`;
        })
        .catch(function () {
            //error
        })
        fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=2156199cf190d55b3d006f816d198303`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            string = `<h1>Hourly weather and forecasts in${data.city.name}</h1><table>`;
            for (i = 0; i < 40; i++)
            {
            var date = new Date(data.list[i]['dt'] * 1000);
            day = date.getDay();
            arr_day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            arr_day.forEach(function(item, i, arr_day) {
                if (i === day)
                   day = arr_day[i];
            });
            month = date.getMonth();
            arrMonth = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
            arrMonth.forEach(function(item, i, arrMonth) {
                if (i === month)
                   month = arrMonth[i];
            });
            if (date.getHours() === 2)
            {
                string += `<tr class="weather-fivedays__date"><td colspan="2"><h2>${day} ${month} ${date.getDate()} ${date.getFullYear()}</h2></td></tr>`;
            }
            else if (i === 0)
            {
                string += `<tr class="weather-fivedays__date"><td colspan="2"><h2>${day} ${month} ${date.getDate()} ${date.getFullYear()} Today</h2></td></tr>`;
            }
            string += `<tr><td class="weather-fivedays__right">
            ${date.getHours()}:${date.getMinutes()}
            <img src="http://openweathermap.org/img/wn/${data.list[i]['weather'][0]['icon']}@2x.png" align="center">
            </td>
            <td>
            <span class="weather-fivedays__temp">${Math.round(data.list[i]['main'].temp - 273)}&deg;C</span> <i>${data.list[i]['weather'][0]['description']}</i><br>
            <p>${data.list[i]['wind'].speed} m/s ${data.list[i]['weather'][0]['main']}: ${data.list[i]['main'].humidity}% ${data.list[i]['main'].pressure} hpa </p>
            </td>
            </tr>
            `;
            }
            string += "</table>";
            document.querySelector(".weather-fivedays").innerHTML = string;
        })
        .catch(function () {
            //error
        })
}