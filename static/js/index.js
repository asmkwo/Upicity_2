function initMap() {

// initial point where map is displayed (Paris)
var initial_point = { lat: 48.855, lng: 2.347 },

//creating the map
map = new google.maps.Map(document.getElementById("map"), {
center: initial_point,
zoom: 8,
          });

//adding a marker on the initial point
  const marker = new google.maps.Marker({
  position: initial_point,
   map: map,
   });

  // Configure the click on the map listener
  map.addListener("click", (mapsMouseEvent) => {

    // place marker where the click was
    var marker_2 = new google.maps.Marker({
     position:mapsMouseEvent.latLng,
     map: map,
   });

   // setting listener on marker to display its coordinates
   google.maps.event.addListener(marker_2, 'click', () => {
    const infowindow = new google.maps.InfoWindow();
   infowindow.setContent(JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2));
   infowindow.open(map,marker_2);
  })//end marker listener

  });// end map listener



// handing search requests
  // handing search requests
       //adding listner on the button and using geocode API to get the coordinates, and then center the map
    var form = document.getElementById('search_form')

   form.addEventListener('submit', function(event){
   event.preventDefault()

   var address = document.getElementById('address').value
        console.log(address);

        axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
            params:{
                address:address,
                key:' AIzaSyD7Fh2ZuEBi7rp2gILfVQlfRDpRrqL1Tdg'
            }
        })
        .then(function(response){
            console.log(response.data.results[0].geometry.location);
            map.setCenter(response.data.results[0].geometry.location) ;
            map.setZoom(18);
        })//end function giving response
        })

          }//end initMap()
