let map;

function initMap() {
    // 1. Create a default map (centered anywhere initially)
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: { lat: -34.397, lng: 150.644 } 
    });

    // 2. Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userPos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                // 3. Center map on user and add a marker
                map.setCenter(userPos);
                new google.maps.Marker({
                    position: userPos,
                    map: map,
                    title: "You are here!"
                });
            },
            () => {
                alert("Error: The Geolocation service failed or was denied.");
            }
        );
    } else {
        alert("Error: Your browser doesn't support geolocation.");
    }
}
