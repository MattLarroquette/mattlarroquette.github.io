//for this assignment I added a MALES_PER and FEMALES_PER into my statesGeoJSON.js file for each state. These columns take the total males and females by each state and divides it by the states total 2010 POPULATION
//So for example: MALES_PER (for Louisiana in this example) =  MALES / POP2010 (each variable is taken from Louisiana row)

let myMapObject = L.map('myMapID').setView([39, -98], 3)
let grayBaseurl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
let topoBaseurl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
let streetBaseurl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'

let grayBaseLayer = L.tileLayer(grayBaseurl).addTo(myMapObject)
let topoBaseLayer = L.tileLayer(topoBaseurl)
let streetBaseLayer = L.tileLayer(streetBaseurl)

let basemaps = {
  'Gray Base Map': grayBaseLayer,
  'Topographical Base Map': topoBaseLayer,
  'Street Base Map': streetBaseLayer
}

L.control.layers(basemaps).addTo(myMapObject)

function stateStyles (feature) {
  let gender = feature.properties.FEMALES_PER // get the current state's Median Age attribute
  let stateColor = 'Blue' // let the initial color be a darker green
  if (gender > 0.5 ) { stateColor = 'Pink' } // if the state's median age is less than the average, color it a lighter green
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

  let femalesPer = feature.properties.FEMALES_PER * 100
  let femalesFixed = femalesPer.toFixed(2)

  let malesPer = feature.properties.MALES_PER * 100
  let malesFixed = malesPer.toFixed(2)

  if(femalesFixed >  50.00) {
    layer.bindPopup('The dominant gender in ' + stateName + ' is female at ' + femalesFixed + '% of the total population.')
  }
  else{
    layer.bindPopup('The dominant gender in ' + stateName + ' is male at ' + malesFixed + '% of the total population.')
  }
}

let stateSettings = {
  style:stateStyles,
  onEachFeature:statesPopup
}

L.geoJSON(states,stateSettings).addTo(myMapObject)
