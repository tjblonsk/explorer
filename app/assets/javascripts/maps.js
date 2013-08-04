// put JS code in here

  // initialize the map on the "map" div
  var map = new L.Map("map", {
    center: new L.LatLng(40.85, -73.866),
    zoom: 18
  });
  // create a tile layer (or use other provider of your choice)
  L.tileLayer('http://{s}.tile.cloudmade.com/d45604d5730341f19ea4d665294a9c76/997/256/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>; contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/"&gt;CC-BY-SA</a>;, Imagery © <a href="http://cloudmade.com">;CloudMade</a>;',
  maxZoom: 18
  }).addTo(map);

  // add tile layer, set the location and zoom
  var bx = new L.LatLng(40.85, -73.866); // geographical point (longitude and latitude)
  map.setView(bx, 10).addLayer(layer);

  // create a marker in the given location and add it to the map
  var markerLocation = bx;
  var marker = new L.Marker(markerLocation);
  map.addLayer(marker);


  var popup = L.popup();

  function onMapClick(e) {
      popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(map);
  }
  map.on('click', onMapClick);
