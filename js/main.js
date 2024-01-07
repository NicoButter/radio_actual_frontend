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
        // Itera a través de los elementos <item> y muestra las noticias como elementos de lista
        items.forEach(item => {
            const title = item.querySelector('title').textContent;
            const link = item.querySelector('link').textContent;

            // Crea un elemento <li> para cada noticia y añádelo a la lista
            const listItem = document.createElement('li');
            listItem.classList.add('news-item'); // Agrega la clase para aplicar estilos
            listItem.innerHTML = `
                <i class="fas fa-newspaper"></i> <!-- Ícono de noticia de Font Awesome -->
                <a href="${link}" target="_blank">${title}</a>
            `;
            newsList.appendChild(listItem);
        });

    })
    .catch(error => {
        console.error('Error al obtener el feed RSS:', error);
    });






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
