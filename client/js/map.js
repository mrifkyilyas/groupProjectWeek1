// In the following example, markers appear when the user clicks on the map.
  // The markers are stored in an array.
  // The user can then click an option to hide, show or delete the markers.
  var map;
  var markers = [];

  function initMap() {
    var hacktiv8 = {lat: -6.260718702649381, lng: 106.7816162109375}

    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: hacktiv8,
      mapTypeId: 'terrain'
    });

    // This event listener will call addMarker() when the map is clicked.
    map.addListener('click', function(event) {
      deleteMarkers()
      addMarker(event.latLng);
      $('input#location').val(`${event.latLng.lat()}, ${ event.latLng.lng()}`)
      // document.getElementById('lattest').value = event.latLng.lat();
      // document.getElementById('longtest').value = event.latLng.lng();
    });

    // Adds a marker at the center of the map.
    addMarker(hacktiv8);
  }

  // Adds a marker to the map and push to the array.
  function addMarker(location) {
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
    markers.push(marker);
  }

  // Sets the map on all markers in the array.
  function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

  // Removes the markers from the map, but keeps them in the array.
  function clearMarkers() {
    setMapOnAll(null);
  }

  // Shows any markers currently in the array.
  function showMarkers() {
    setMapOnAll(map);
  }

  // Deletes all markers in the array by removing references to them.
  function deleteMarkers() {
    clearMarkers();
    markers = [];
  }