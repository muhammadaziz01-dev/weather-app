Open weather API
"Ob havo dasturi" deganda, siz ob-havo ma'lumotlarini olish, namlik, harorat, shamol tezligi, va boshqa ma'lumotlarga haqida bilishingiz mumkin! OpenWeather API-dan foydalanganizda, siz umummiy ob-havo ma'lumotlarini olishingiz mumkin.

OpenWeather API, dunyodagi ob-havo ma'lumotlarini taqdim etuvchi umummiy (qo'llanma) interfeysini (API) ta'minlovchi tizimdir. Bu API orqali siz dasturingizga har bir geografik nuqtasi uchun ob-havo ma'lumotlarini olishingiz mumkin.

https://www.weatherapi.com/signup.aspx saytidan ro'yhatdan o'tamiz
alt text

Kerakli bo'limdan API key yaratib olaimz va davom etamiz !
key = 'SIZNING_API_KLUC'
city = 'Toshkent'
 url = 'https://api.weatherapi.com/v1/current.json?key={key}&q={city}' 
Loyihaning dizayni:
https://www.figma.com/file/oMogX6IpeCCwByWU7Bi7EI/Weateher-app?type=design&node-id=0%3A1&mode=design&t=4ZjlpkqjbidUOaYD-1
Example request
baseURL: /https://api.weatherapi.com/v1 final: /current.json?key={key}&q={city} or /forecast.json?key={key}&days={day_number}&q={city}

[GET] /current.json endpoint Bugungi ma'lumot uchun

Parameter	value
q	"Toshkent"
key	api_key
days	day_number
[GET]: Bugungi ohirgi ma'lumot uchun : https://api.weatherapi.com/v1/current.json?key={key}&q={city};
[GET]: Bir necha kunlik "prognoz" uchun : https://api.weatherapi.com/v1/forecast.json?key={key}&days={day_number}&q={city};
About
weather-app-docs

Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 1 watching
Forks
 0 forks
Report repository
Releases
No releases published
Packages
No packages published
Footer
