const map = L.map('mapid').setView([-27.5799590,-48.5384149], 13);

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

let marker;

map.on('click', (event) =>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    
    marker && map.removeLayer(marker);
    marker = L.marker([lat,lng], {icon}).addTo(map);
})


function SelectOption(event){
    const button = event.currentTarget;
    const buttons = document.querySelectorAll(".buttons-container button");
    
    buttons.forEach(element => {
        element.classList.remove('active');
    });

    button.classList.add('active');
}

function AddPhotoField(){
    const container = document.querySelector('.images-new');
    const fieldsContainer = document.querySelectorAll('.new-upload');
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    const input = newFieldContainer.children[0];

    if(input.value == ""){
        return
    }

    newFieldContainer.children[0].value = "";
    container.appendChild(newFieldContainer);
}

function DeleteField(event){
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length <= 1){
        span.parentNode.children[0].value = "";
        return;
    }

    span.parentNode.remove();
}

function ToggleSelect(event){  
    const button = event.currentTarget;
    const buttons = document.querySelectorAll('.buttons-container button')
    buttons.forEach(element => {
        element.classList.remove('active')
    });

    button.classList.add('active')

    const input = document.querySelector('[name="open-on-weekends"]')

    input.value = button.dataset.value;
}