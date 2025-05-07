// Importa los archivos de estilos CSS que afectan el diseño general y el dashboard.
import './style.css'
import './dashboard.css'

// Espera a que el DOM esté completamente cargado antes de ejecutar las funciones.
document.addEventListener('DOMContentLoaded', () => {
  setupSidebar();        // Configura la funcionalidad de la barra lateral.
  setupInteractions();   // Configura las interacciones del usuario (hover y ripple).
});

// Función para manejar la apertura y cierre de la barra lateral.
function setupSidebar() {
  const sidebar = document.getElementById('sidebar');               // Elemento de la barra lateral.
  const toggleButton = document.getElementById('toggle-sidebar');   // Botón para abrir la barra.
  const closeButton = document.getElementById('close-sidebar');     // Botón para cerrar la barra.

  // Abre la barra lateral al hacer clic en el botón de toggle.
  toggleButton.addEventListener('click', () => {
    sidebar.classList.add('active');
  });

  // Cierra la barra lateral al hacer clic en el botón de cerrar.
  closeButton.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });

  // Cierra la barra lateral si se hace clic fuera de ella en pantallas pequeñas.
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024) {
      const isClickInside = sidebar.contains(e.target) || toggleButton.contains(e.target);
      if (!isClickInside && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
      }
    }
  });
}

// Función que configura efectos visuales e interacciones.
function setupInteractions() {
  // Añade efectos hover a las tarjetas con clases .article-card o .review-card.
  const cards = document.querySelectorAll('.article-card, .review-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
      card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    });
  });

  // Aplica un efecto "ripple" cuando se hace clic en botones primarios o secundarios.
  const buttons = document.querySelectorAll('.button-primary, .button-secondary');
  buttons.forEach(button => {
    button.addEventListener('click', createRipple);
  });
}

// Función para crear el efecto "ripple" visual en los botones al hacer clic.
function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement('span');

  // Calcula el tamaño del ripple en función del tamaño del botón.
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  // Posiciona el ripple en el lugar donde se hizo clic.
  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
  ripple.className = 'ripple';

  // Elimina cualquier efecto ripple anterior antes de añadir uno nuevo.
  const existingRipple = button.getElementsByClassName('ripple')[0];
  if (existingRipple) {
    existingRipple.remove();
  }

  // Añade el nuevo efecto ripple al botón.
  button.appendChild(ripple);
}
