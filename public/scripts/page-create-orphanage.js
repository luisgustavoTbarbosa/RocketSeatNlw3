//CRATE MAP
const map = L.map('mapid').setView([-27.2233428,-49.6448493], 15)

//CREATE AND ADD TILELAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//CREATE ICON
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//create and add marker
map.on('click', (event) =>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    marker && map.removeLayer(marker)

    //add marker layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)

})


//adcionar o campo de fotos
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o catainer para duplicar  .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verifica se o container esta vazio, se sim, nao adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    } 
    //Limpar campo antes de adicionar ao container de imagens
    input.value = ""
    //adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2){
        //limpa campo
        span.parentNode.children[0].value = ""

        return
    }

    //deletar campo 
    span.parentNode.remove();
}

//select yes or no
function toggleSelect () {
    //remover a classe active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))

    //colcar a classe active no botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}
