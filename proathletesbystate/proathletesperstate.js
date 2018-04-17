//for this assignment I added a MALES_PER and FEMALES_PER into my statesGeoJSON.js file for each state. These columns take the total males and females by each state and divides it by the states total 2010 POPULATION
//So for example: MALES_PER (for Louisiana in this example) =  MALES / POP2010 (each variable is taken from Louisiana row)

let myMapObject = L.map('myMapID').setView([39, -98], 4)
let grayBaseurl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
let topoBaseurl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
let streetBaseurl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'

let topoBaseLayer = L.tileLayer(topoBaseurl).addTo(myMapObject)
let grayBaseLayer = L.tileLayer(grayBaseurl)
let streetBaseLayer = L.tileLayer(streetBaseurl)

let basemaps = {
  'Topographical Base Map': topoBaseLayer,
  'Gray Base Map': grayBaseLayer,
  'Street Base Map': streetBaseLayer
}

var footballPin = L.icon({
  iconUrl: 'footballPin.png',
  iconSize:     [18, 18], // size of the icon
  iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
  popupAnchor:  [5, -5] // point from which the popup should open relative to the iconAnchor
});
let footballMarker = L.marker([29.747289, -95.362373],{icon: footballPin}).addTo(myMapObject).bindPopup('<b>Houston</b> produces the most football players in <b>Texas</b>, which produces the most football players in the United States')

var basketballPin = L.icon({
  iconUrl: 'basketballPin.png',
  iconSize:     [18, 18], // size of the icon
  iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
  popupAnchor:  [5, -5] // point from which the popup should open relative to the iconAnchor
});
let basketballMarker = L.marker([34.036349, -118.236045],{icon: basketballPin}).addTo(myMapObject).bindPopup('<b>Los Angeles</b> produces the most basketball players in <b>California</b>, which produces the most basketball players in the United States')

var hockeyPin = L.icon({
  iconUrl: 'hockeyPin.png',
  iconSize:     [18, 18], // size of the icon
  iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
  popupAnchor:  [5, -5] // point from which the popup should open relative to the iconAnchor
});
let hockeyMarker = L.marker([44.97419, -93.251284],{icon: hockeyPin}).addTo(myMapObject).bindPopup('<b>Minneapolis</b> produces the most hockey players in <b>Minnesota</b>, which produces the most hockey players in the United States')

var baseballPin = L.icon({
  iconUrl: 'baseballPin.png',
  iconSize:     [18, 18], // size of the icon
  iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
  popupAnchor:  [5, -5] // point from which the popup should open relative to the iconAnchor
});
let baseballMarker = L.marker([37.731987, -122.42583],{icon: baseballPin}).addTo(myMapObject).bindPopup('<b>San Francisco</b> produces the most baseball players in <b>California</b>, which produces the most baseball players in the United States')

var totalAthletePin = L.icon({
  iconUrl: 'totalAthletePin.png',
  iconSize:     [30, 30], // size of the icon
  iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
  popupAnchor:  [5, -5] // point from which the popup should open relative to the iconAnchor
});
let totalAthleteMarker = L.marker([38.9072, -77.0369],{icon: totalAthletePin}).addTo(myMapObject).bindPopup('<b>Washington D.C.</b> produces the most total players per 100,000 residents in the United States.')

var pins = L.layerGroup([footballMarker,basketballMarker,hockeyMarker,baseballMarker,totalAthleteMarker])

var overlayMaps ={
  "Sport Icon Pins":pins
}

L.control.layers(basemaps,overlayMaps).addTo(myMapObject)

function stateStyles (feature) {
  let totalPlayers = feature.properties.TOTAL_PLAYERS // get the current state's Median Age attribute
  if (totalPlayers >= 3000 ) {
    stateColor = '#550000'
  }
  else if(totalPlayers >= 1000 && totalPlayers <= 2999){
    stateColor = '#9b0000'
  }
  else if(totalPlayers >= 500 && totalPlayers <= 999){
    stateColor = 'red'
  }
  else if(totalPlayers >= 100 && totalPlayers <= 499){
    stateColor = '#D46A6A'
  }else{
    stateColor = '#FFAAAA'
  }
  let myStyle = {
    color: stateColor, //use the color variable above for the value
    weight: 2,
    fillOpacity: 0.5,
    dashArray: 2
  }
  return myStyle
}

function statesPopup (feature, layer) {
  let stateName = feature.properties.STATE_NAME
  let totalPlayers2 = feature.properties.TOTAL_PLAYERS
  let stateNFLPlayers = feature.properties.NFL_PLAYERS
  let stateNBAPlayers = feature.properties.NBA_PLAYERS
  let stateNHLPlayers = feature.properties.NHL_PLAYERS
  let stateMLBPlayers = feature.properties.MLB_PLAYERS
  let totalAvgPlayers = 887.27
  let basicStdDev = Math.abs(totalPlayers2 - totalAvgPlayers).toFixed(2)

  if(totalPlayers2 >  totalAvgPlayers) {
    layer.bindPopup('There are '+ totalPlayers2 + ' professional players born in ' +stateName+ ' which is ' +basicStdDev+ ' above the national average of ' + totalAvgPlayers + '. ' +stateName+ ' consists of ' +stateNFLPlayers+ ' NFL players, ' + stateNBAPlayers+ ' NBA players, ' +stateNHLPlayers+ ' NHL players, and ' +stateMLBPlayers+ ' MLB players.')
  }
  else{
    layer.bindPopup('There are '+ totalPlayers2 + ' professional players born in ' +stateName+ ' which is ' +basicStdDev+ ' below the national average of ' + totalAvgPlayers + '. ' +stateName+ ' consists of ' +stateNFLPlayers+ ' NFL players, ' + stateNBAPlayers+ ' NBA players, ' +stateNHLPlayers+ ' NHL players, and ' +stateMLBPlayers+ ' MLB players.')
  }
}

let stateSettings = {
  style:stateStyles,
  onEachFeature:statesPopup
}

L.geoJSON(states,stateSettings).addTo(myMapObject)
