"use stric"

let hozirgiVaqit = document.querySelector('#soat');
let bugungiSana = document.querySelector('#bugungi-kun');

const shcalaCensi = document.querySelector('#gradus-c');
const shcalaCensiMin = document.querySelector('#gradus-c-min');
const conditionIcon = document.querySelector('#condition-icon');
const conditionText = document.querySelector('#condition-text');
const humidity = document.querySelector('#humidity');
const pressure = document.querySelector('#pressure');
const windSpeed = document.querySelector('#wind-speed');
const uv = document.querySelector('#uv');


//------------------Dae 5----------------------
const iconDay1 = document.querySelector('#img1');
const cenciDay1 = document.querySelector('#cenci1');
const sanaDay1 = document.querySelector('#sana1');

const iconDay2 = document.querySelector('#img2');
const cenciDay2 = document.querySelector('#cenci2');
const sanaDay2 = document.querySelector('#sana2');

const iconDay3 = document.querySelector('#img3');
const cenciDay3 = document.querySelector('#cenci3');
const sanaDay3 = document.querySelector('#sana3');

const iconDay4 = document.querySelector('#img4');
const cenciDay4 = document.querySelector('#cenci4');
const sanaDay4 = document.querySelector('#sana4');

const iconDay5 = document.querySelector('#img5');
const cenciDay5 = document.querySelector('#cenci5');
const sanaDay5 = document.querySelector('#sana5');


//--------------------------Globol veraybl---------------
const URL = "https://api.weatherapi.com/v1";
let key = "b95528f2643349479a4100211240103";




//----------Taim --------------
function getTime (){
    const  now = new Date();
    const kun = now.getDate() < 10 ? "0" + now.getDate() : now.getDate()
    const oy = now.getMonth() < 10 ? "0" + (now.getMonth()+1) : now.getMonth();
    const yil = now.getFullYear();
    const soat =now.getHours()< 10 ? "0" + now.getHours() : now.getHours()
    const minut =now.getMinutes()< 10 ? "0" + now.getMinutes() : now.getMinutes()
    const soniya =now.getSeconds()< 10 ? "0" + now.getSeconds() : now.getSeconds()
    let oylar = [
        "January",
        "February",
       "March",
        "April",
        "possible",
        "June",
        "july",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    hozirgiVaqit.textContent= `${soat} : ${minut}`;
    bugungiSana.textContent= `${kun}  ${oylar[oy -1]} , ${yil} `;

}
setInterval(()=>{
   getTime()
},1000)
//-------------------------------------




//---GET POSAT 1 DAY--------------------------------------------------------
async function getPost(cityName = 'Tashkent') {
    try{
        let respons = await fetch(`${URL}/current.json?key=${key}&q=${cityName}`);
        let result = await respons.json()
        shcalaCensi.textContent = `${result.current.temp_c}°C`;
        shcalaCensiMin.textContent = `${result.current.feelslike_c}°C`;
        conditionIcon.innerHTML = `<img src="${result.current.condition.icon}" alt="icon" style="width: 27opx; height: 270px;">`;
        conditionText.textContent = `${result.current.condition.text}`;
        humidity.textContent = `${result.current.humidity} %`;
        pressure.textContent = `${result.current.pressure_mb} hPa `;
        windSpeed.textContent = `${result.current.vis_km} km/h `;
        uv.textContent = `${result.current.uv}`;
    }catch(err){
        console.log(err);
    }
}
getPost()
//--------------------------------------------------------------------------



//---GET POSAT 5 DAY--------------------------------------------------------
async function getPstDays(cityName = 'Tashkent', day = 5) {
    try{
        let respons = await fetch(`${URL}/forecast.json?key=${key}&days=${day}&q=${cityName}`);
        let result = await respons.json();
        console.log(result);
        iconDay1.src =`${result.forecast.forecastday[0].day.condition.icon}`;
        cenciDay1.textContent = `${result.forecast.forecastday[0].day.maxtemp_c} °C`;
        sanaDay1.textContent = `${result.forecast.forecastday[0].date}`;

        iconDay2.src =`${result.forecast.forecastday[1].day.condition.icon}`;
        cenciDay2.textContent = `${result.forecast.forecastday[1].day.maxtemp_c} °C`;
        sanaDay2.textContent = `${result.forecast.forecastday[1].date}`;

        iconDay3.src =`${result.forecast.forecastday[2].day.condition.icon}`;
        cenciDay3.textContent = `${result.forecast.forecastday[2].day.maxtemp_c} °C`;
        sanaDay3.textContent = `${result.forecast.forecastday[2].date}`;

        iconDay4.src =`${result.forecast.forecastday[3].day.condition.icon}`;
        cenciDay4.textContent = `${result.forecast.forecastday[3].day.maxtemp_c} °C`;
        sanaDay4.textContent = `${result.forecast.forecastday[3].date}`;

        iconDay5.src =`${result.forecast.forecastday[4].day.condition.icon}`;
        cenciDay5.textContent = `${result.forecast.forecastday[4].day.maxtemp_c} °C`;
        sanaDay5.textContent = `${result.forecast.forecastday[4].date}`;
    }catch(err){
        console.log(err);
    }
}
getPstDays()
//-----------------------------------------------------------







//baseURL: /https://api.weatherapi.com/v1 final: /current.json?key={key}&q={city} or /forecast.json?key={key}&days={day_number}&q={city}

//[GET]: Bugungi ohirgi ma'lumot uchun : https://api.weatherapi.com/v1/current.json?key={key}&q={city};
//[GET]: Bir necha kunlik "prognoz" uchun : https://api.weatherapi.com/v1/forecast.json?key={key}&days={day_number}&q={city};
