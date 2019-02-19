mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsbGlhbWJhaXJlcyIsImEiOiJjanJzcTl3ZHEwcWNsNDNsd3c0b2hiajFyIn0.uuRv7diqGI-Kytr9dYR8Tw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [-74.50, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});