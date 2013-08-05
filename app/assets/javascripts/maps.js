// Put your structure for the 'map' and all its functions up here somewhere
var EMAPS = {
  latlng: {}
};

$('#map').click(function(event) {
    cord = EMAPS.latlng.val();
    var url = 'https://api.foursquare.com/v2/venues/trending?ll=' + cord;
    $.ajax({
      type: 'get',
      url: url,
      dataType: 'json'
    }).done(function(data){
      console.log(data);
     //  console.log('All good', response);
    //  for (var i = 0; i < data.Search.length; i++) {
    //     $('ul').append('<li>' + data.Search[i].Title + ", " + data.Search[i].Year + '</li>');
    //   }
     });
  });

// put JS code in here
$(function () {
  // Call stuff down here somewhere
  // initialize the map on the "map" div
  L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';
  var map = new L.Map("map", {
    center: new L.LatLng(40.85, -73.866),
    zoom: 18
  });

  // create a tile layer (or use other provider of your choice)
  var layer = L.tileLayer('http://{s}.tile.cloudmade.com/d45604d5730341f19ea4d665294a9c76/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>; contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/"&gt;CC-BY-SA</a>;, Imagery © <a href="http://cloudmade.com">;CloudMade</a>;',
    maxZoom: 18
  }).addTo(map);

  // add tile layer, set the location and zoom
  var bx = new L.LatLng(40.715281, -73.990209); // geographical point (longitude and latitude)
  map.setView(bx, 12).addLayer(layer);

  // create a marker in the given location and add it to the map
  var markerLocation = bx;
  var marker = new L.Marker(markerLocation);
  map.addLayer(marker);


  var popup = L.popup();

  function onMapClick(e) {
    console.log(e.latlng);
      EMAPS.latlng = e.latlng;
      console.log(EMAPS.latlng);
      var lat = EMAPS.latlng.lat;
      var lng = EMAPS.latlng.lng;
      var cord = lat + ',' + lng;
      var url = 'https://api.foursquare.com/v2/venues/trending?ll=' + cord + '&client_id=FLORXQIYM4IR2BQJQS52RRKJIDTIYE3PVGUXPAEOCRLPLTMF&client_secret=0E30B1EZG3RQK0UMKPIU05LNMSZOOAKVBR4QFOJFO1KAGEEG&v=2013 0316';
        $.ajax({
        type: 'get',
        url: url,
        dataType: 'json'
      }).done(function(data){
        console.log(data);
      popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(map);
    });
  }
  map.on('click', onMapClick);

});

