//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let myMapObject = L.map('myMapID').setView([30.391830,-92.329102], 7)
let baseMapURL = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(baseMapURL).addTo(myMapObject)
let myBRMarker = L.marker([30.441722,-91.178451]).addTo(myMapObject)
let myNOLAPolygon = L.polygon([
  [29.785986, -90.541244],
  [29.785986, -89.936996],
  [30.033586, -90.332504]
]).addTo(myMapObject);
myNOLAPolygon.bindPopup('New Orleans Area')
myBRMarker.bindPopup('Baton Rouge')
myMapObject.on('click', function (event) {
  console.log(event.latlng + " is where you clicked on the map!")
})
