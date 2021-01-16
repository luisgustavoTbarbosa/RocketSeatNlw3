//CRATE MAP
const map = L.map('mapid').setView([-27.2233428,-49.6448493], 15)

//CREATE AND ADD TILELAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//CREATE ICON
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//CREATE POPUP OVERLAY
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

//CREATE AND AD MARKER


L
.marker([-27.2233428,-49.6448493], { icon })
.addTo(map)
.bindPopup(popup)