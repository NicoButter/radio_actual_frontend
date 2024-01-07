const newsList = document.getElementById('news-list');
/*const rssFeedURL = 'https://corsproxy.io?https://www.santacruzalmomento.com.ar/feed/';*/
const rssFeedURL = 'https://crossorigin.me/https://www.santacruzalmomento.com.ar/feed/';

async function getImageUrl(newsLink) {
    const response = await fetch(newsLink);
    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const imageElement = doc.querySelector('meta[property="og:image"]');
    return imageElement ? imageElement.getAttribute('content') : 'No image available';
}

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
        // Dentro del bucle que recorre los elementos <item>
        // Dentro del bucle que recorre los elementos <item>
        items.forEach(async item => {
            const title = item.querySelector('title').textContent;
            const link = item.querySelector('link').textContent;
        
            // Llamada a la función para obtener la URL de la imagen
            const imageUrl = await getImageUrl(link);
        
            console.log('Title:', title);
            console.log('Link:', link);
            console.log('Image URL:', imageUrl);
        
            const listItem = document.createElement('li');
            listItem.innerHTML = `<img src="${imageUrl}" alt="${title}"><a href="${link}" target="_blank">${title}</a>`;
            newsList.appendChild(listItem);
        });


    })
    .catch(error => {
        console.error('Error al obtener el feed RSS:', error);
    });

// Función para extraer la URL de la imagen desde la descripción del feed
function extractImageSrcFromDescription(descriptionElement) {
    // Verificar si la descripción contiene una etiqueta img
    const imgElement = descriptionElement.querySelector('img');
    
    if (imgElement) {
        // Si hay una etiqueta img, obtener la URL de la imagen
        return imgElement.getAttribute('src');
    } else {
        // Si no hay una etiqueta img, proporcionar un valor predeterminado
        return 'No image available';
    }
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
