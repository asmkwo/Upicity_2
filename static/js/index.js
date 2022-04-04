function initMap() {
map = new google.maps.Map(document.getElementById("map"), {
center: { lat: -34.397, lng: 150.644 },
zoom: 8,
          });


  const marker = new google.maps.Marker({
  position: { lat: -34.397, lng: 150.644 },
   map: map,
   });
// info window on origin marker
   const infowindow_init = new google.maps.InfoWindow({
       content: "<p>Marker Location:" + marker.getPosition() + "</p>",
   });
 google.maps.event.addListener(marker, "click", () => {
        infowindow_init.open(map, marker);
    });

//listeners with map interaction

 //     let infoWindow = new google.maps.InfoWindow({
   // content: "Click the map to get Lat/Lng!",
  //  position: { lat: -34.397, lng: 150.644 },
  //});

  //infoWindow.open(map);
  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {

    // place marker
    var marker_2 = new google.maps.Marker({
     position:mapsMouseEvent.latLng,
     map: map,
   });

   google.maps.event.addListener(marker_2, 'click', () => {
    const infowindow = new google.maps.InfoWindow();
   infowindow.setContent(JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2));
   infowindow.open(map,marker_2);
  })

  });


  //tentative de noveau listener
   google.maps.event.addListener(marker_2, 'click', (function (marker_2) {
            return function () {
                infowindow.open(map, marker);

            }
        })(marker_2));


  }
