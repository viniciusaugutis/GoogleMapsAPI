var marker, marker2, map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 0, lng: 0 },
    zoom: 2
  });
  var infoWindow = new google.maps.InfoWindow({ map: map });
  
  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: 41.8719, lng: 12.5674 }
  });

  marker2 = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: -23.18111111, lng: -50.64666667 }
  });

  marker3 = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: 0, lng: 0 }
  });

}


setInterval(function () {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/randomNumber",
    success: function (result) {
      marker.setMap(null);
      marker2.setMap(null);
      marker3.setMap(null);
      positions = JSON.parse(result);
      
      marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: { lat: parseFloat(positions[0].lat), lng: parseFloat(positions[0].lng) }
      });

      marker2 = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: { lat: parseFloat(positions[1].lat), lng: parseFloat(positions[1].lng) }
      });

      marker3 = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: { lat: parseFloat(positions[2].lat), lng: parseFloat(positions[2].lng) }
      });

    },
    error: function () {
      console.log("error");
    }
  });

}, 10000);



