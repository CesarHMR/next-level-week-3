const map = L.map('mapid').setView([-27.615085,-48.5352582], 11);

/*create and add tileLayer*/
L
.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);
/*create icon*/
const icon = L.icon({
    iconUrl: "/_images/map-marker.svg",
    iconSize: [58,58],
    iconAnchor: [29,69],
    popupAnchor: [170,2]
})

function addMarker({id,name,lat,lng}){
    
    //creat popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWitdh: 240,
        minHeight: 240
    }).setContent(`${name} <a href="orphanage?id=${id}" class="choose-orphanage"><img src="/_images/arrow-white.svg"></a>`)
    //create and add maeker*/
    L
    .marker([lat,lng], { icon: icon })
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('#map-icons span')
orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})