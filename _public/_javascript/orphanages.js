const map = L.map('mapid').setView([-27.615085,-48.5352582], 11);

/*create and add tileLayer*/
L
.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);
/*create icon*/
const icon = L.icon({
    iconUrl: "./_public/_images/map-marker.svg",
    iconSize: [58,58],
    iconAnchor: [29,69],
    popupAnchor: [170,2]
})
//creat popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWitdh: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"><img src="_public/_images/arrow-white.svg"></a>')
//create and add maeker*/
L
.marker([-27.5938861,-48.5718369], { icon: icon })
.addTo(map)
.bindPopup(popup)