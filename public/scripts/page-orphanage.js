const options = {
    dragging: false,
    touchZoom: false,
    dubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//CRATE MAP
const map = L.map('mapid', options).setView([-27.2233428,-49.6448493], 15)

//CREATE AND ADD TILELAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//CREATE ICON
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//CREATE AND AD MARKER

L
.marker([-27.2233428,-49.6448493], { icon })
.addTo(map)

/* image gallery */
function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes active
    const buttons = document.querySelectorAll(".images button") //cria uma variavel e armazena nela todos os botoes que estao sendo encontrados na div images
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    //selecionar imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar container de imagem
    imageContainer.src = image.src
    //adicionar classe active
    button.classList.add("active")
}