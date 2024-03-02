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
//---darcmod------
const serchInput = document.querySelector('#serch-input');
const darcmodBtn = document.querySelector('#darcmod-button');
const darcmodText =document.querySelector('#darcmod-text');
const darcBtnWrap = document.querySelector('.darcmod--btn');
const darcCards = document.querySelectorAll('.card');
const tegs = document.querySelectorAll('p, span, h1, h2, h3, strong');
const darcLi =document.querySelectorAll('#darc-li');
// console.log(darcCards);


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

//------------------------DAY TAIM---------

//--------04:00----
const dayTaim1 = document.querySelector('#day-taim1');
const dayPagodImg1 = document.querySelector('#day-pagod-img1');
const dayC1 = document.querySelector('#day-c1');
const dayImg1 = document.querySelector('#day-img1');
const dayWind1 = document.querySelector('#day-wind1');
//--------08:00----
const dayTaim2 = document.querySelector('#day-taim2');
const dayPagodImg2 = document.querySelector('#day-pagod-img2');
const dayC2 = document.querySelector('#day-c2');
const dayImg2 = document.querySelector('#day-img2');
const dayWind2 = document.querySelector('#day-wind2');
//--------12:00----
const dayTaim3 = document.querySelector('#day-taim3');
const dayPagodImg3 = document.querySelector('#day-pagod-img3');
const dayC3 = document.querySelector('#day-c3');
const dayImg3 = document.querySelector('#day-img3');
const dayWind3 = document.querySelector('#day-wind3');
//--------16:00----
const dayTaim4 = document.querySelector('#day-taim4');
const dayPagodImg4 = document.querySelector('#day-pagod-img4');
const dayC4 = document.querySelector('#day-c4');
const dayImg4 = document.querySelector('#day-img4');
const dayWind4 = document.querySelector('#day-wind4');
//--------20:00----
const dayTaim5 = document.querySelector('#day-taim5');
const dayPagodImg5 = document.querySelector('#day-pagod-img5');
const dayC5 = document.querySelector('#day-c5');
const dayImg5 = document.querySelector('#day-img5');
const dayWind5 = document.querySelector('#day-wind5');
//--------00:00----
const dayTaim6 = document.querySelector('#day-taim6');
const dayPagodImg6 = document.querySelector('#day-pagod-img6');
const dayC6 = document.querySelector('#day-c6');
const dayImg6 = document.querySelector('#day-img6');
const dayWind6 = document.querySelector('#day-wind6');



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




//--SERCH CITY-----------------------
serchInput.addEventListener('keyup' , (e)=>{
   if(e.keyCode==13 && e.target.value.trim().length > 1){
     let cityName = e.target.value.trim();
     getPost(cityName)
     getPstDays(cityName)
     getPossTime(cityName)
   }
})
//-----------------------------------





//---DARCMOD BTN----------------------
darcmodBtn.addEventListener('click', ()=>{
   darcmodBtn.classList.toggle('darcmod--btn--darc');
   darcmodBtn.classList.toggle('darcmod--btn--light');

   if(darcmodBtn.classList.contains('darcmod--btn--darc')){
      darcmodText.textContent = 'Light Mode';
      document.body.classList.toggle('darc-body');
      darcBtnWrap.style.backgroundColor = "rgba(217, 217, 217, 1)";
      tegs.forEach((el)=> el.style.color="#000");
      darcCards.forEach((el)=> el.style.backgroundColor="rgba(217, 217, 217, 1)");
      darcLi.forEach((el)=> el.classList.toggle('darc-li'));
      serchInput.style.color = "#000";
   }else if(darcmodBtn.classList.contains('darcmod--btn--light')){
      darcmodText.textContent = 'Dark Mode';
      document.body.classList.toggle('darc-body');
      darcBtnWrap.style.backgroundColor = "rgba(217, 217, 217, 1)";
      darcCards.forEach((el)=> el.style.backgroundColor="rgba(68, 68, 68, 1)");
      tegs.forEach((el)=> el.style.color="rgba(255, 255, 255, 1)");
      darcLi.forEach((el)=> el.classList.toggle('darc-li'));
      serchInput.style.color = "#FFF";
   }

})
//------------------------------------



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
        windSpeed.textContent = `${Number.parseInt(+(result.current.wind_kph))} km/h `;
        uv.textContent = `${result.current.uv}`;
    }catch(err){
        alert(err);
    }
}getPost()

//--------------------------------------------------------------------------



//---GET POSAT 5 DAY--------------------------------------------------------
async function getPstDays(cityName = 'Tashkent', day = 5) {
    try{
        let respons = await fetch(`${URL}/forecast.json?key=${key}&days=${day}&q=${cityName}`);
        let result = await respons.json();
        iconDay1.src =`${result.forecast.forecastday[0].day.condition.icon}`;
        cenciDay1.textContent = `${Number.parseInt(+(result.forecast.forecastday[0].day.maxtemp_c))} °C`;
        sanaDay1.textContent = `${result.forecast.forecastday[0].date}`;

        iconDay2.src =`${result.forecast.forecastday[1].day.condition.icon}`;
        cenciDay2.textContent = `${Number.parseInt(+(result.forecast.forecastday[1].day.maxtemp_c))}°C`;
        sanaDay2.textContent = `${result.forecast.forecastday[1].date}`;

        iconDay3.src =`${result.forecast.forecastday[2].day.condition.icon}`;
        cenciDay3.textContent = `${Number.parseInt(+(result.forecast.forecastday[2].day.maxtemp_c))} °C`;
        sanaDay3.textContent = `${result.forecast.forecastday[2].date}`;

        iconDay4.src =`${result.forecast.forecastday[3].day.condition.icon}`;
        cenciDay4.textContent = `${Number.parseInt(+(result.forecast.forecastday[3].day.maxtemp_c))} °C`;
        sanaDay4.textContent = `${result.forecast.forecastday[3].date}`;

        iconDay5.src =`${result.forecast.forecastday[4].day.condition.icon}`;
        cenciDay5.textContent = `${Number.parseInt(+(result.forecast.forecastday[4].day.maxtemp_c))} °C`;
        sanaDay5.textContent = `${result.forecast.forecastday[4].date}`;
    }catch(err){
        alert(err);
    }
}getPstDays()

//-----------------------------------------------------------


//--GET POST 1 DAY ----------------------------
async function getPossTime(cityName = 'Tashkent', day = 1){
    try{
        let respons = await fetch(`${URL}/forecast.json?key=${key}&days=${day}&q=${cityName}`);
        let result = await respons.json();
        //---------04:00---------vaqitdagi holat
        dayTaim1.textContent= `${result.forecast.forecastday[0].hour[4].time.slice(11,16)}`;
        dayPagodImg1.src = `${result.forecast.forecastday[0].hour[4].condition.icon}`;
        dayC1.textContent = `${Number.parseInt(+(result.forecast.forecastday[0].hour[4].temp_c))} °C`;
        dayImg1.style.cssText = `transform: rotate(${result.forecast.forecastday[0].hour[4].wind_degree}deg);`;
        dayWind1.textContent = `${Number.parseInt(+(result.forecast.forecastday[0].hour[4].wind_kph)) }km/h`;

        //---------08:00---------vaqitdagi holat
        dayTaim2.textContent= `${result.forecast.forecastday[0].hour[8].time.slice(11,16)}`;
        dayPagodImg2.src = `${result.forecast.forecastday[0].hour[8].condition.icon}`;
        dayC2.textContent = `${Number.parseInt(+(result.forecast.forecastday[0].hour[8].temp_c))} °C`;
        dayImg2.style.cssText = `transform: rotate(${result.forecast.forecastday[0].hour[8].wind_degree}deg);`;
        dayWind2.textContent = `${Number.parseInt(+(result.forecast.forecastday[0].hour[8].wind_kph)) }km/h`;

        //---------12:00---------vaqitdagi holat
        dayTaim3.textContent= `${result.forecast.forecastday[0].hour[12].time.slice(11,16)}`;
        dayPagodImg3.src = `${result.forecast.forecastday[0].hour[12].condition.icon}`;
        dayC3.textContent = `${Number.parseInt(+(result.forecast.forecastday[0].hour[12].temp_c))} °C`;
        dayImg3.style.cssText = `transform: rotate(${result.forecast.forecastday[0].hour[12].wind_degree}deg);`;
        dayWind3.textContent = `${Number.parseInt(+(result.forecast.forecastday[0].hour[12].wind_kph)) }km/h`;


        //---------16:00---------vaqitdagi holat
        dayTaim4.textContent= `${result.forecast.forecastday[0].hour[16].time.slice(11,16)}`;
        dayPagodImg4.src = `${result.forecast.forecastday[0].hour[16].condition.icon}`;
        dayC4.textContent = `${Number.parseInt(+(result.forecast.forecastday[0].hour[16].temp_c))} °C`;
        dayImg4.style.cssText = `transform: rotate(${result.forecast.forecastday[0].hour[16].wind_degree}deg);`;
        dayWind4.textContent = `${Number.parseInt(+(result.forecast.forecastday[0].hour[16].wind_kph)) }km/h`;


        //---------20:00---------vaqitdagi holat
        dayTaim5.textContent= `${result.forecast.forecastday[0].hour[20].time.slice(11,16)}`;
        dayPagodImg5.src = `${result.forecast.forecastday[0].hour[20].condition.icon}`;
        dayC5.textContent = `${Number.parseInt(+(result.forecast.forecastday[0].hour[20].temp_c))} °C`;
        dayImg5.style.cssText = `transform: rotate(${result.forecast.forecastday[0].hour[20].wind_degree}deg);`;
        dayWind5.textContent = `${Number.parseInt(+(result.forecast.forecastday[0].hour[20].wind_kph)) }km/h`;


        //---------00:00---------vaqitdagi holat
        dayTaim6.textContent= `${result.forecast.forecastday[0].hour[0].time.slice(11,16)}`;
        dayPagodImg6.src = `${result.forecast.forecastday[0].hour[0].condition.icon}`;
        dayC6.textContent = `${Number.parseInt(+(result.forecast.forecastday[0].hour[0].temp_c))} °C`;
        dayImg6.style.cssText = `transform: rotate(${result.forecast.forecastday[0].hour[0].wind_degree}deg);`;
        dayWind6.textContent = `${Number.parseInt(+(result.forecast.forecastday[0].hour[0].wind_kph)) }km/h`;

    }catch(err){
        alert(err);
    }
}getPossTime()

//-----------------------------------





//baseURL: /https://api.weatherapi.com/v1 final: /current.json?key={key}&q={city} or /forecast.json?key={key}&days={day_number}&q={city}

//[GET]: Bugungi ohirgi ma'lumot uchun : https://api.weatherapi.com/v1/current.json?key={key}&q={city};
//[GET]: Bir necha kunlik "prognoz" uchun : https://api.weatherapi.com/v1/forecast.json?key={key}&days={day_number}&q={city};
