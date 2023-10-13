const newsList = document.getElementById('news-list');

// URL del feed RSS proporcionado por el gobierno de la provincia
const rssFeedURL = 'https://www.infobae.com/feeds/rss/';

// Utiliza la función fetch para obtener el feed RSS
fetch(rssFeedURL, {mode:'no-cors'})
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

  $(document).ready(function () {
    $("#jp_container_1").jPlayer({
        ready: function (event) {
            $(this).jPlayer("setMedia", {
                title: "Mi canción",
                m4a: "ruta-a-tu-archivo-de-audio.m4a",
            });
        },
        swfPath: "ruta-al-archivo-jplayer.swf",
        supplied: "m4a",
    });
});