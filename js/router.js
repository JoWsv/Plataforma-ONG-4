import { loadView } from './views.js';

export function initRouter() {
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const page = link.getAttribute('href').replace('.html', '');
      navigateTo(page);
    });
  });

  // Suporte ao botão "Voltar" do navegador
  window.addEventListener('popstate', () => {
    const path = window.location.pathname.replace('/', '').replace('.html', '');
    loadView(path || 'index');
  });

  // Página inicial padrão
  const initialPage = window.location.pathname.replace('/', '').replace('.html', '') || 'index';
  loadView(initialPage);
}

export function navigateTo(page) {
  history.pushState({}, '', `${page}.html`);
  loadView(page);
}
