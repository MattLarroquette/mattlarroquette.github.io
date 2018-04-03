let myMapObject = L.map('myMapID').setView([30.391830,-92.329102], 7)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(myMapObject)
var myMapPin = L.icon({
  iconUrl: 'pin.png',
  iconSize:     [38, 38], // size of the icon
  iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [10, -40] // point from which the popup should open relative to the iconAnchor
});
let myBRMarker = L.marker([30.441722,-91.178451],{icon: myMapPin}).addTo(myMapObject)
let polygonStyle = {
  color: 'yellow',
  fillColor: 'green',
  weight: 5,
  opacity: 0.5
}
let myNOLAPolygon = [
  [29.785986, -90.541244],
  [29.785986, -89.936996],
  [30.033586, -90.332504]
]
let myMapPolygon = L.polygon(myNOLAPolygon, polygonStyle).addTo(myMapObject)
myMapPolygon.bindPopup('New Orleans Area')
myBRMarker.bindPopup('Baton Rouge')
