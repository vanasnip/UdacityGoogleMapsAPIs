var map;
var markers  = [];
console.log("whats going on?");
function initMap() {
  //constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7413549, lng: -73.9980244},
    zoom: 13
  });

  // These are the real estate listings that will be shown to the user.
  // Normally we'd have these in a database instead.
  var locations = [
    {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
    {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
    {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
    {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
    {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
    {title: 'Chinatown Booty Space', location: {lat: 40.7180628, lng: -73.9961237}}
  ];

//var largeInfoWindow = new google.maps.InfoWindow();
var bounds = new google.maps.LatLngBounds();

var largeInfowindow = new google.maps.InfoWindow();//$Recycle.Bin\

//var bounds = new google.maps.LatLngBounds();

for (var i = 0; i < locations.length; i++) {
  // Get the position from the location array.
  var position = locations[i].location;
  var title = locations[i].title;
  // Create a marker per location, and put into markers array.
  var marker = new google.maps.Marker({
    map: map,
    position: position,
    title: title,
    animation: google.maps.Animation.DROP,
    id: i,
    icon: 'ark_corner.png'
  });
  // Push the marker to our array of markers.
  markers.push(marker);
  // Create an onclick event to open an infowindow at each marker.
  marker.addListener('click', function() {
    populateInfoWindow(this, largeInfowindow);
  });
  bounds.extend(markers[i].position);
}
// Extend the boundaries of the map for each marker
map.fitBounds(bounds);
}


function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent('<div>' + marker.title + '</div>');
    infowindow.open(map, marker);
    // Make sure the marker property is cleared if the infowindow is closed.
    infowindow.addListener('closeclick',function(){
      infowindow.setMarker(null);
    });

  }
  marker.addListener('click', function() {
    populateInfoWindow(marker, Infowindow);
  });
}
  // var arkh = {lat:52.091501, lng: -0.470355};
  // var marker = new google.maps.Marker({
  //   map: map,
  //   position: arkh,
  //   title: 'Ark-H Handling'
  // });
  // var infowindow = new google.maps.InfoWindow ({
  //   content: 'We are first class in order fulfilment, ecommerce fulfilment and response handling. For more information please call us on 01234 742777'
  // });
  // marker.addListener('click', function(){
  //   infowindow.open(map, marker);
  // });
