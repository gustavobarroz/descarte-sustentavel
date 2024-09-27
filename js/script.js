var map = L.map('map').setView([-23.6932, -46.3985], 13); // Coordenadas de Ribeirão Pires

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

var markers = [];

// Função para adicionar os marcadores no mapa
function addMarkers(data) {
    markers.forEach(marker => map.removeLayer(marker)); // Remove marcadores existentes
    markers = []; // Limpa a lista de marcadores

    data.forEach(point => {
        var marker = L.marker([point.lat, point.lng]).addTo(map)
            .bindPopup(point.name);
        markers.push(marker); // Adiciona o marcador à lista
    });
}

// Funções de filtro
function showAll() {
    addMarkers(points); // Supondo que `points` contém todos os pontos
}

function showRecyclables() {
    addMarkers(points.filter(p => p.type === 'recicláveis'));
}

function showElectronics() {
    addMarkers(points.filter(p => p.type === 'pilhas'));
}

function showLamps() {
    addMarkers(points.filter(p => p.type === 'lâmpadas'));
}

function showOil() {
    addMarkers(points.filter(p => p.type === 'óleo'));
}
