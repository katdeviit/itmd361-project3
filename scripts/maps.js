function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41, lng: -90},
        zoom: 8
    });

      const contentString =
    '<div id="content">' +
    '<h1 id="firstHeading" class="firstHeading">Chicago</h1>' +
    '<div id="bodyContent">' +
    "<p>This is the city of Chicago! Wow!!!</p>" + 
    "</div>" +
    "</div>";
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "Chicago",
    });
     let marker = new google.maps.Marker({
        position: { lat: 41.8781, lng: -87.6298 },
        map,
        title: "Chicago!!!"
    })
    marker.addListener("click", () => {
        infowindow.open({
        anchor: marker,
        map,
        });
    });
    new google.maps.Circle({
      strokeColor: "#00FFFF",
      strokeOpacity: 0.8,
      strokeWeight: 10,
      fillColor: "#00FFFF",
      fillOpacity: 0.5,
      map,
      center: { lat: 41, lng: -90 },
      radius: 10000,
    });
}