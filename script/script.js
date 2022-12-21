//coordonnées de la map avec le zoom de base
var map = L.map('map').setView([49.258329, 4.031696], 13);

//ajout de la carte sur la page web
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//ajout d'un marqueur sur la carte dans Reims
var marker = L.marker([49.258329, 4.031696]).addTo(map);

//ajout d'un cercle sur la carte dans Reims
var circle = L.circle([49.27, 4.031696], {
    color: 'red',
    fillOpacity: 0.5,
    radius: 100
}).addTo(map);

//ajout d'un polygone sur la carte dans Reims
var polygon = L.polygon([
    [49.27354, 4],
    [49.28, 4],
    [49.28, 4.12]
]).addTo(map);

//ajout d'un popup sur le marqueur pour l'afficher directement il faut rajouter .openPopup()
marker.bindPopup("<b>coucou tout le monde</b><br>bonjourrrrr.");

//ajout d'un popup sur le cercle pour l'afficher directement il faut rajouter .openPopup()
circle.bindPopup("Je suis un cercle");

//ajout d'un popup sur le polygone pour l'afficher directement il faut rajouter .openPopup()
polygon.bindPopup("Je suis un polygone");

//ajout d'une fonction qui permet d'afficher les coordonnées de la ou on clique
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
let peoples = document.querySelectorAll(".people");
for (let i=0; i<peoples.length; i++)
{
    let people = peoples[i];
    let button = people.querySelector(".coord_people");
    let longitude = people.querySelector(".people__longitude").innerHTML;
    let latitude = people.querySelector(".people__latitude").innerHTML;
    let lastname = people.querySelector(".people__lastname").innerHTML;
    let firstname = people.querySelector(".people__firstname").innerHTML;
    let compteur = 0;
    let markerpeople;
    button.addEventListener("click", function (){
        if (compteur==0)
        {
            markerpeople = L.marker([longitude, latitude]);
            markerpeople.addTo(map);
            markerpeople.bindPopup("Adresse de "+lastname+" "+firstname).openPopup();
            compteur++;
        } else {
            markerpeople.remove();
            compteur--;
        }
    });
}