//Criar mapa e colocar layers//
var map = L.map('mapAMDGPU').setView([39, 34], 2);
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
var markerCanada = L.marker([62.2, -105.3]).addTo(map);
var markerIndia = L.marker([22.2, 78.7]).addTo(map);
var markerChina = L.marker([34.7, 105]).addTo(map);

//Criar mapa e colocar layers//
var map1 = L.map('mapIntelGPU').setView([39, 34], 2);
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
var markerChina = L.marker([34.7, 105]).addTo(map1);
var markerMalaysia = L.marker([4.4, 102.3]).addTo(map1);
var markerIsrael = L.marker([31, 34.8]).addTo(map1);
var markerPoland = L.marker([51.9, 19.1]).addTo(map1);
var markerCostaRica = L.marker([9.6, -84.2]).addTo(map1);
var markerVietnam = L.marker([15.9, 105.8]).addTo(map1);
var markerIreland = L.marker([53.4, -8.3]).addTo(map1);

//Criar mapa e colocar layers//
var map2 = L.map('mapNVIDIAGPU').setView([39, 34], 2);
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

//Criar mapa e colocar layers//
var map3 = L.map('mapAMDCPU').setView([39, 34], 2);
map3.createPane('labels');
map3.getPane('labels').style.zIndex = 650;
map3.getPane('labels').style.pointerEvents = 'none';

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});osm.addTo(map3);

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
});positron.addTo(map3);

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
});positronLabels.addTo(map3);

//Colocar marcadores//
var markerEUA = L.marker([39.5, -100.5]).addTo(map3);
var markerCanada = L.marker([62.2, -105.3]).addTo(map3);
var markerIndia = L.marker([22.2, 78.7]).addTo(map3);
var markerChina = L.marker([34.7, 105]).addTo(map3);

//Criar mapa e colocar layers//
var map4 = L.map('mapIntelCPU').setView([39, 34], 2);
map4.createPane('labels');
map4.getPane('labels').style.zIndex = 650;
map4.getPane('labels').style.pointerEvents = 'none';

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});osm.addTo(map4);

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
});positron.addTo(map4);

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
});positronLabels.addTo(map4);

//Colocar marcadores//
var markerEUA = L.marker([39.5, -100.5]).addTo(map4);
var markerChina = L.marker([34.7, 105]).addTo(map4);
var markerMalaysia = L.marker([4.4, 102.3]).addTo(map4);
var markerIsrael = L.marker([31, 34.8]).addTo(map4);
var markerPoland = L.marker([51.9, 19.1]).addTo(map4);
var markerCostaRica = L.marker([9.6, -84.2]).addTo(map4);
var markerVietnam = L.marker([15.9, 105.8]).addTo(map4);
var markerIreland = L.marker([53.4, -8.3]).addTo(map4);