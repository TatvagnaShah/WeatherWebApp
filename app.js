window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            let apiString = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=47f310fffd3b4f67350c33bf2031eb16&units=metric";
            const api = apiString;

            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                
                const { description } = data.weather["0"];
                const { temp } = data.main;
                const { name } = data;

                temperatureDescription.textContent = description;
                temperatureDegree.textContent = temp;
                locationTimezone.textContent = name;
                console.log(data);
            });
        });

        
    }
});