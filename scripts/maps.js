function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });

    new google.maps.Marker({
        position: { lat: 41.8781, lng: -87.6298 },
        map,
        title: "Chicago!!!"
    })
}