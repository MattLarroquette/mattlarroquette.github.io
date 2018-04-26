var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.4515, lng: -91.1871},
    zoom: 8,
    mapTypeId: 'satellite'
  });
}
