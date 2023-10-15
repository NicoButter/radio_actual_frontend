const newsList = document.getElementById('news-list');

const rssFeedURL = 'http://www.bbc.co.uk/mundo/temas/america_latina/index.xml';

// Utiliza la función fetch para obtener el feed RSS directamente
fetch(rssFeedURL)
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
