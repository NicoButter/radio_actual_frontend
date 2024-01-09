// Definir la función que carga las noticias
function cargarNoticias() {
    const rssFeedURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A//www.santacruzalmomento.com.ar/feed/';

    fetch(rssFeedURL)
        .then(response => response.json())  // Parsear la respuesta como JSON
        .then(data => {
            const items = data.items;
            const newsList = document.getElementById('news-list');

            // Limpiar la lista antes de agregar nuevas noticias
            newsList.innerHTML = '';

            items.forEach(item => {
                const title = item.title;
                const link = item.link;

                const listItem = document.createElement('li');
                listItem.classList.add('news-item');
                listItem.innerHTML = `
                    <i class="fas fa-newspaper"></i>
                    <a href="${link}" target="_blank">${title}</a>
                `;
                newsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error al obtener el feed RSS:', error);
        });
}

// Ejecutar la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Cargar noticias inicialmente
    cargarNoticias();

    // Recargar noticias cada 5 minutos
    setInterval(cargarNoticias, 300000);
});









/*// Definir la función que carga las noticias
function cargarNoticias() {
    /*const rssFeedURL = 'https://www.santacruzalmomento.com.ar/feed/';
    const rssFeedURL = 'https://corsproxy.io/?https://www.santacruzalmomento.com.ar/feed/';

    fetch(rssFeedURL)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');
            const items = xmlDoc.querySelectorAll('item');
            const newsList = document.getElementById('news-list');

            // Limpiar la lista antes de agregar nuevas noticias
            newsList.innerHTML = '';

            items.forEach(item => {
                const title = item.querySelector('title').textContent;
                const link = item.querySelector('link').textContent;

                const listItem = document.createElement('li');
                listItem.classList.add('news-item');
                listItem.innerHTML = `
                    <i class="fas fa-newspaper"></i>
                    <a href="${link}" target="_blank">${title}</a>
                `;
                newsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error al obtener el feed RSS:', error);
        });
}

// Ejecutar la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Cargar noticias inicialmente
    cargarNoticias();

    // Recargar noticias cada 5 segundos
    setInterval(cargarNoticias, 5000);
});*/
