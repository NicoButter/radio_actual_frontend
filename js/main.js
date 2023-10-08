// URL del feed RSS que deseas mostrar
const rssUrl = 'https://www.infobae.com/feeds/rss/';

// Seleccionar el contenedor de noticias en tu HTML
const noticiasElement = document.querySelector('.noticias-lista');

// Realizar una solicitud a la fuente RSS
fetch(rssUrl)
  .then(response => response.text())
  .then(data => {
    // Crear un objeto DOMParser para analizar el XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'text/xml');

    // Obtener elementos <item> que representan noticias
    const items = xmlDoc.querySelectorAll('item');

    // Recorrer las noticias y mostrarlas en el contenedor
    items.forEach(item => {
      const titulo = item.querySelector('title').textContent;
      const enlace = item.querySelector('link').textContent;
      const descripcion = item.querySelector('description').textContent;

      // Crear elementos HTML para mostrar la noticia
      const noticiaElement = document.createElement('div');
      noticiaElement.classList.add('noticia');
      noticiaElement.innerHTML = `
        <h3><a href="${enlace}" target="_blank">${titulo}</a></h3>
        <p>${descripcion}</p>
      `;

      // Agregar la noticia al contenedor
      noticiasElement.appendChild(noticiaElement);
    });
  })
  .catch(error => {
    console.error('Error al obtener noticias RSS:', error);
  });


  function mostrarNoticiasEnEncabezado(noticias) {
    const noticiasElement = document.querySelector('.noticias');
  
    // Crear elementos HTML para las noticias
    const noticiasHTML = noticias.map(noticia => `
      <div class="noticia">
        <h3><a href="${noticia.enlace}" target="_blank">${noticia.titulo}</a></h3>
        <p>${noticia.descripcion}</p>
      </div>
    `).join('');
  
    // Insertar las noticias en el encabezado
    noticiasElement.innerHTML = noticiasHTML;
  }