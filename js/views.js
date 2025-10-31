export function loadView(page) {
  fetch(`../html/${page}.html`)
    .then(response => {
      if (!response.ok) throw new Error('Página não encontrada');
      return response.text();
    })
    .then(html => {
      document.querySelector('main').innerHTML = html;

      // Recarrega scripts específicos de cada página
      if (page === 'cadastro') {
        import('./validators.js').then(module => module.initFormValidation());
      }
    })
    .catch(error => {
      document.querySelector('main').innerHTML = `<h2>Erro: ${error.message}</h2>`;
    });
}
