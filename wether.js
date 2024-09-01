//alert("hii");
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey="7bd851f41aa8d4d1220642c55cf519d2";
const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const WetherIcon=document.querySelector('.Wether_icon');
async function checkWether(city)
{
	const res=await fetch(apiUrl+city+"&appid="+apikey);
	const d=await res.json();
	console.log(d);
    document.querySelector('.temp').innerHTML=Math.round(d.main.temp)+"°C";
    document.querySelector('.city').innerHTML=d.name;
    document.querySelector('.humidity').innerHTML=d.main.humidity+"%";
    document.querySelector('.wind').innerHTML=d.wind.speed+"km/h";
	var icon=d.Wether[0].main;
	if(icon=='Haze')
	{
		Wether_Icon.src="clear.png";
	}
	alert(icon);
	
}
function fun()
{
	var city=document.querySelector('.search input').value;
	checkWether(city);
}

