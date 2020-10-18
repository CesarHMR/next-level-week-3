const spanLat = document.querySelector('span[data-lat]')
const spanLng = document.querySelector('span[data-lng]')

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([spanLat.dataset.lat,spanLng.dataset.lng], 15);

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
//creat popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWitdh: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage?id=1" class="choose-orphanage"><img src="/_images/arrow-white.svg"></a>')


//create and add maeker*/
L
.marker([spanLat.dataset.lat,spanLng.dataset.lng], { icon: icon })
.addTo(map)

function SelectImage(event){

    const button = event.currentTarget;
    const buttons = document.querySelectorAll(".images button")
    
    buttons.forEach(RemoveActiveClass);
    
    const buttonImage = button.children[0]
    const mainImage = document.querySelector("#main-image")

    mainImage.src = buttonImage.src;
    button.classList.add('active')
}

function RemoveActiveClass(button){
    button.classList.remove("active")
}