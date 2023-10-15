const newsList = document.getElementById('news-list');

const rssFeedURL = 'https://www.infobae.com/feeds/rss/';

// URL de tu propio servidor proxy
const proxyURL = 'https://www.radioactual.com.ar/';  // Reemplaza esto con la URL de tu propio servidor proxy

// Utiliza la función fetch para obtener el feed RSS a través del proxy
fetch(`${proxyURL}?url=${encodeURIComponent(rssFeedURL)}`)
    .then(response => response.text())
    .then(data => {
        // El resto del código para procesar el feed RSS es el mismo
        // Parsea el XML del feed RSS en un objeto Document
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');

        // Encuentra todos los elementos <item> que representan noticias en el feed
        const items = xmlDoc.querySelectorAll('item');

        // Itera a través de los elementos <item> y muestra las noticias
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
    });




















// URL del feed RSS proporcionado por el gobierno de la provincia
//const rssFeedURL = 'https://noticias.santacruz.gob.ar/?format=feed';

// Utiliza la función fetch para obtener el feed RSS
fetch(rssFeedURL)
  .then(response => response.text())
  .then(data => {
    // Parsea el XML del feed RSS en un objeto Document
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'text/xml');

    // Encuentra todos los elementos <item> que representan noticias en el feed
    const items = xmlDoc.querySelectorAll('item');

    // Itera a través de los elementos <item> y muestra las noticias
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
  });
