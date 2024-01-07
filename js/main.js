const newsList = document.getElementById('news-list');
const rssFeedURL = 'https://corsproxy.io?https://www.santacruzalmomento.com.ar/feed/';

fetch(rssFeedURL)
    .then(response => response.text())
    .then(data => {
        // Parsea el XML del feed RSS en un objeto Document
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');

        // Encuentra todos los elementos <item> que representan noticias en el feed
        const items = xmlDoc.querySelectorAll('item');

        // Selecciona la lista de noticias
        const newsList = document.getElementById('news-list');

        // Itera a través de los elementos <item> y muestra las noticias como elementos de lista
        items.forEach(item => {
            const title = item.querySelector('title').textContent;
            const link = item.querySelector('link').textContent;
            const description = item.querySelector('description').textContent;
            const imageSrc = extractImageSrcFromDescription(description);

            // Crea un elemento <li> para cada noticia y añádelo a la lista
            const listItem = document.createElement('li');
            listItem.classList.add('news-item'); // Agrega la clase para aplicar estilos
            listItem.innerHTML = `
                <img src="${imageSrc}" alt="${title}">
                <a href="${link}" target="_blank">${title}</a>
            `;
            newsList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error al obtener el feed RSS:', error);
    });

// Función para extraer la URL de la imagen desde la descripción del feed
function extractImageSrcFromDescription(description) {
    const doc = new DOMParser().parseFromString(description, 'text/html');
    const imgElement = doc.querySelector('img');
    return imgElement ? imgElement.src : 'URL_POR_DEFECTO_SI_NO_HAY_IMAGEN';
}







/*const newsList = document.getElementById('news-list');
const rssFeedURL = 'https://corsproxy.io?https://www.santacruzalmomento.com.ar/feed/';


fetch(rssFeedURL)
    .then(response => response.text())
    .then(data => {
        // Parsea el XML del feed RSS en un objeto Document
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');

        // Encuentra todos los elementos <item> que representan noticias en el feed
        const items = xmlDoc.querySelectorAll('item');

        // Selecciona la lista de noticias
        const newsList = document.getElementById('news-list');

        // Itera a través de los elementos <item> y muestra las noticias como elementos de lista
        items.forEach(item => {
            const title = item.querySelector('title').textContent;
            const link = item.querySelector('link').textContent;

            // Crea un elemento <li> para cada noticia y añádelo a la lista
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${link}" target="_blank">${title}</a>`;
            newsList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error al obtener el feed RSS:', error);
    });*/
