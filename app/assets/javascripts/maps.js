// Put your structure for the 'map' and all its functions up here somewhere
var EMAPS = {
  latlng: {}
};
var squareInfo = '';
var yelpData = "";
var markerArray = [];
var buttonClickValue = "";
var spotsArray = [];
var favoritesArray = "";
var favoritesMarkerArray = [];


// put JS code in here
$(function () {

  // Call stuff down here somewhere
  // initialize the map on the "map" div
  L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';
  var map = new L.Map("map", {
    center: new L.LatLng(40.748882568094665, -73.98931503295898),
    zoom: 18
  });

  // create a tile layer (or use other provider of your choice)
  var layer = L.tileLayer('http://{s}.tile.cloudmade.com/d45604d5730341f19ea4d665294a9c76/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> Contributors: <a href="http://creativecommons.org/licenses/by-sa/2.0/"&gt;CC-BY-SA</a>Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
  }).addTo(map);


  function getYelp(){
     $.ajax({
        type: 'get',
        url: '/yelp',
        dataType: 'json'
      }).done(function(data){
        console.log(data);
        yelpData = data;
      });
    }


  var coffeeButton = $('#coffee');
  var barsButton = $('#bars');
  var trendingButton = $('#trending');

   coffeeButton.click(function(event){
    event.preventDefault();
    buttonClickValue = coffeeButton.text();
    $('.navbar').append(buttonClickValue);
  });

   barsButton.click(function(event){
    event.preventDefault();
    buttonClickValue = barsButton.text();
  });

    trendingButton.click(function(event){
    event.preventDefault();
    buttonClickValue = trendingButton.text();
  });

    $('#showFavoritesButton').click(function(event){
      event.preventDefault();
      buttonClickValue = "showFavorites";
      console.log("click");
     $.ajax({
        type: 'get',
        url: '/favorite',
        dataType: 'json'
      }).done(function(data){
        console.log(data);
        favoritesArray = data;
      });
    });


       //Show favorites
    function setLocationFavorites(){
    for (var i = 0; i < favoritesArray.length; i ++){
      trend = new L.LatLng(favoritesArray[i].latitude, favoritesArray[i].longitude);
      marker = new L.Marker(trend);
      marker.bindPopup(favoritesArray[i].name).openPopup();
      map.addLayer(marker);
      favoritesMarkerArray.push(marker);
    }
  }

    //Remove favorites layer below


  //add marker to map
    //place name
    //place address
    //place URL
    //yelp info (rating, expensive)
    //link to search for hotels nearyb
    //link to search for real estate nearby
  function setLocationTrending(){
    //////trending
    for (var i = 0; i < squareInfo.response.venues.length; i ++){
      lat = squareInfo.response.venues[i].location.lat;
      lng = squareInfo.response.venues[i].location.lng;
      place = squareInfo.response.venues[i].name;
      address = squareInfo.response.venues[i].location.address + ', ' + squareInfo.response.venues[i].location.city + ', ' + squareInfo.response.venues[i].location.state;
      placeHash = {};
      placeHash['name']= place;
      placeHash['latitude']= lat;
      placeHash['longitude']= lng;
      placeHash['address']= address;
      spotsArray.push(placeHash);
      trend = new L.LatLng(lat, lng);
      marker = new L.Marker(trend);
      popup = L.popup()
      .setContent('<p class="placeName" id="'+ i +'">' + place + '</p><br/><p>' + address + '</p><br/><button id="faveButton">fave</button>w');
      marker.bindPopup(popup).openPopup();
      map.addLayer(marker);
      markerArray.push(marker);
    }
  }

    /////// For coffee shops
    function setLocationOther(){
    for (var i = 0; i < squareInfo.response.groups[0].items.length; i ++){
      lat = squareInfo.response.groups[0].items[i].venue.location.lat;
      lng = squareInfo.response.groups[0].items[i].venue.location.lng;
      place = squareInfo.response.groups[0].items[i].venue.name;
      trend = new L.LatLng(lat, lng);
      marker = new L.Marker(trend);
      marker.bindPopup(place).openPopup();
      map.addLayer(marker);
      markerArray.push(marker);
    }
  }


   function removeMarker(){
    for (var i = 0; i < markerArray.length; i ++){
      map.removeLayer(markerArray[i]);
    }
  }


  function favoriteClick(){
    $('#faveButton').click(function(event){
      event.preventDefault();
      spotToSave = spotsArray[$('.placeName').attr('Id')];
      console.log(spotToSave);

      var spotFave = {"name" : spotToSave.name,
                      "latitude" : spotToSave.latitude,
                      "longitude" : spotToSave.longitude,
                      "address" : spotToSave.address
                      };

      $.ajax({
        url: '/save',
        dataType: 'json',
        type: 'post',
        data: spotFave
      }).done(function(data){ // Handle the json response
        console.log(data);
      });
    });
  }

  $('#map').on('click', '#faveButton', favoriteClick);



  // var popup = L.popup();
  function onMapClick(e) {
      removeMarker();
      EMAPS.latlng = e.latlng;
      var lat = EMAPS.latlng.lat;
      var lng = EMAPS.latlng.lng;
      var cord = lat + ',' + lng;
      var url = "";
      if (buttonClickValue === "Trending"){
        url = 'https://api.foursquare.com/v2/venues/trending?ll=' + cord + '&client_id=FLORXQIYM4IR2BQJQS52RRKJIDTIYE3PVGUXPAEOCRLPLTMF&client_secret=0E30B1EZG3RQK0UMKPIU05LNMSZOOAKVBR4QFOJFO1KAGEEG&v=20130316';
      } else if (buttonClickValue === "Coffee"){
        url = 'https://api.foursquare.com/v2/venues/explore?section=coffee&ll=' + cord + '&client_id=FLORXQIYM4IR2BQJQS52RRKJIDTIYE3PVGUXPAEOCRLPLTMF&client_secret=0E30B1EZG3RQK0UMKPIU05LNMSZOOAKVBR4QFOJFO1KAGEEG&v=20130316';
      } else {
        url = 'https://api.foursquare.com/v2/venues/explore?section=bars&ll=' + cord + '&client_id=FLORXQIYM4IR2BQJQS52RRKJIDTIYE3PVGUXPAEOCRLPLTMF&client_secret=0E30B1EZG3RQK0UMKPIU05LNMSZOOAKVBR4QFOJFO1KAGEEG&v=20130316';
      }
        $.ajax({
        type: 'get',
        url: url,
        dataType: 'json'
      }).done(function(data){
        console.log(data);
        squareInfo = data;
        if (buttonClickValue === "Trending"){
        setLocationTrending();
        } else if (buttonClickValue === "showFavorites"){
        setLocationFavorites();
        } else {
        setLocationOther();
       }
    });
  }
  map.on('click', onMapClick);

});


