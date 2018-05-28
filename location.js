let map;
let markers;
//console.log(markers);
function initMap() {
    var centrum = {
        lat: 55.6963957,
        lng: 12.5449535
    };
    map = new google.maps.Map(document.querySelector('#googleMaps'), {
        zoom: 17,
        center: centrum
    });

    let markers = new google.maps.Marker({
        position: centrum,
        //hvilket kort skal marker vises på
        map: map
    });
    getJson();
}

//HENT JSON-WP OG HUSK AT CONTENT I INFOBOKSEN SKAL HEDDE CONTENT
async function getJson() {
    let jsonData = await fetch("04_json/location.json");
    markers = await jsonData.json();
    markers.forEach(pos => {
        let marker = new google.maps.Marker({
            position: pos.position,
            title: pos.title,
            content: pos.content,
            icon: pos.icon,
            map: map
        });

        //        console.log(pos.content);
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
    var infowindow = new google.maps.InfoWindow({
        content: pos.content

    });
}
