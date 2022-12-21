//coordonnées de la map avec le zoom de base
var map = L.map('map').setView([49.258329, 4.031696], 13);

//ajout de la carte sur la page web
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//ajout du marqueur
var marker = L.marker([49.258329, 4.031696]).addTo(map);