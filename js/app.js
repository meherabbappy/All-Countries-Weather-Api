document.getElementById('btnID').addEventListener('click',function(){
    const searchResult = document.getElementById('inputID').value;
    document.getElementById('inputID').value = '';
    // const API = '94fa168c82cbdc2600a2fa1d276c83ca';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchResult}&appid=94fa168c82cbdc2600a2fa1d276c83ca`)
    .then(res => res.json())
    .then(data => loadDetails(data));
})

const loadDetails  = (digit) =>{
    console.log(digit);
let value = digit.main.temp;
value = value -273;
// console.log(temp);
document.getElementById('city').innerText = digit.name;
document.getElementById('country').innerText = digit.sys.country;
document.getElementById('temp').innerText =value.toFixed(2);
document.getElementById('weather').innerText = digit.weather[0].main;
document.getElementById('sea').innerText = digit.main.sea_level;

}