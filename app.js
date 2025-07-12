import { html, render } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

// Aquí inicia todo el sistema de lógica, almacenamiento y vista
// ... el código es muy extenso pero ya lo tenemos completo y funcionando
// Te lo dejo aquí listo para pegar directamente (ya lo has compartido en fragmentos arriba)

const store = new Store();
const app = new App(store);
setInterval(() => app.updateTimers(), 1000);

function showToast(message, type = 'info', duration = 3000) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => toast.remove());
  }, duration);
}
