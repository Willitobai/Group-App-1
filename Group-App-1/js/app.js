$(document).ready(function(){
    $('.carousel').carousel();
  });
      
// // // sammy paiz token
 mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtbXlwYWl6MDYwNiIsImEiOiJjanMzamYydGcxazhsM3ltZ3hoNG54aXE3In0.arHxbEhZ_Dzh27QJi_mh5w';
// // var map = new mapboxgl.Map({
// //     container: 'map', // container id
// //     style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
// //     center: [-122.23, 37.758], // starting position [lng, lat]
// //     zoom: 10 // starting zoom
// // });

var mymap = L.map('mapid').setView([37.7749, -122.4194], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 17,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic2FtbXlwYWl6MDYwNiIsImEiOiJjanMzamYydGcxazhsM3ltZ3hoNG54aXE3In0.arHxbEhZ_Dzh27QJi_mh5w'
}).addTo(mymap);

var marker1 = L.marker([37.774, -122.4194]).bindPopup('mural 1').addTo(mymap);
var marker2 = L.marker([37.764, -122.4284]).bindPopup('mural 2').addTo(mymap);
var marker3 = L.marker([37.770, -122.4374]).bindPopup('mural 3').addTo(mymap);
var marker4 = L.marker([37.772, -122.4198]).bindPopup('mural 4').addTo(mymap);
var marker5 = L.marker([37.780, -122.4184]).bindPopup('mural 5').addTo(mymap);
var marker6 = L.marker([37.800, -122.4184]).bindPopup('mural 6').addTo(mymap);
var marker7 = L.marker([37.790, -122.4184]).bindPopup('mural 7').addTo(mymap);
var marker8 = L.marker([37.750, -122.4184]).bindPopup('mural 8').addTo(mymap);






$('img').on('click', function() {
	$(this).attr('width', '500');

	var ourRequest = new XMLHttpRequest();
		ourRequest.open('GET', 'https://api.myjson.com/bins/1frk36');
		ourRequest.onload = function() {

	var ourData = JSON.parse(ourRequest.responseText);
		console.log(ourData);
		renderHTML(ourData);
	};
ourRequest.send();
})




var ourNames = document.getElementById('info');



function renderHTML(data) {
	var htmlString = '';

	for(i=0; i<data.length; i++) {
		htmlString += '<p>' + data[i].name + ' is a ' + data[i].city + '.</p>';
	}
	info.insertAdjacentHTML('beforeend', htmlString);
}




  // Or with jQuery

  var instance = M.Carousel.init({
    fullWidth: true
  });
   

  var myImage = document.getElementById('mainImage');
var imageArray = ['images/baby1.jpg', 'images/baby2.jpg', 'images/baby3.jpg', 'images/baby4.jpg', 'images/baby5.jpg', 'images/baby6.jpg', 'images/baby7.jpg', 'images/baby8.jpg'];
var imageIndex = 0;

function changeImage() {
    myImage.setAttribute('src', imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
};
setInterval(changeImage, 2000);










