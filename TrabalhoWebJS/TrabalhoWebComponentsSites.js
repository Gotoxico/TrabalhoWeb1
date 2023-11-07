//Criar mapa e colocar layers//
var map = L.map('mapFabAMD').setView([39, 34], 2);
map.createPane('labels');
map.getPane('labels').style.zIndex = 650;
map.getPane('labels').style.pointerEvents = 'none';

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});osm.addTo(map);

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
});positron.addTo(map);

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
});positronLabels.addTo(map);

//Colocar marcadores//
var markerEUA = L.marker([39.5, -100.5]).addTo(map);
var markerMalaysia = L.marker([4.4, 102.3]).addTo(map);
var markerTaiwan = L.marker([23.5, 121]).addTo(map);
var markerSingapore = L.marker([1.3, 103.8]).addTo(map);

//Criar mapa e colocar layers//
var map1 = L.map('mapFabIntel').setView([39, 34], 2);
map1.createPane('labels');
map1.getPane('labels').style.zIndex = 650;
map1.getPane('labels').style.pointerEvents = 'none';

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});osm.addTo(map1);

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
});positron.addTo(map1);

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
});positronLabels.addTo(map1);

//Colocar marcadores//
var markerEUA = L.marker([39.5, -100.5]).addTo(map1);
var markerMalaysia = L.marker([4.4, 102.3]).addTo(map1);
var markerChina = L.marker([34.7, 105]).addTo(map1);
var markerIsrael = L.marker([31, 34.8]).addTo(map1);
var markerIreland = L.marker([53.4, -8.3]).addTo(map1);

//Criar mapa e colocar layers//
var map2 = L.map('mapFabNVIDIA').setView([39, 34], 2);
map2.createPane('labels');
map2.getPane('labels').style.zIndex = 650;
map2.getPane('labels').style.pointerEvents = 'none';

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});osm.addTo(map2);

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
});positron.addTo(map2);

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
});positronLabels.addTo(map2);

//Colocar marcadores//
var markerEUA = L.marker([39.5, -100.5]).addTo(map2);
var markerTaiwan = L.marker([23.5, 121]).addTo(map2);
var markerSouthKorea = L.marker([35.8, 127]).addTo(map2);