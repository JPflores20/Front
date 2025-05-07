/**
 * Configura las animaciones para la página de login
 */
export function setupLoginAnimation() {
  // Animar elementos del formulario al cargar
  const formElements = [
    document.querySelector('.company-name'), // Elemento del nombre de la compañía
    document.querySelector('.welcome-text'), // Texto de bienvenida
    document.querySelector('.login-subtitle'), // Subtítulo del login
    ...document.querySelectorAll('.form-group'), // Todos los grupos de formulario
    document.querySelector('.form-options'), // Opciones del formulario
    document.querySelector('.login-button'), // Botón de login
    document.querySelector('.divider'), // Divisor visual
    document.querySelector('.social-login'), // Login con redes sociales
    document.querySelector('.signup-link') // Enlace de registro
  ];
  
  // Aplicar animación escalonada de aparición
  formElements.forEach((element, index) => {
    if (!element) return; // Saltar si el elemento no existe
    
    // Configurar estado inicial oculto
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
    
    // Aplicar animación con retardo escalonado
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100 + index * 100); // Retardo incremental de 100ms por elemento
  });
  
  // Añadir efectos hover a elementos interactivos
  const interactiveElements = [
    ...document.querySelectorAll('input'), // Todos los campos de entrada
    ...document.querySelectorAll('button'), // Todos los botones
    ...document.querySelectorAll('a') // Todos los enlaces
  ];
  
  interactiveElements.forEach(element => {
    if (!element) return;
    
    // Efecto al pasar el ratón
    element.addEventListener('mouseenter', () => {
      element.style.transition = 'transform 0.2s ease';
      if (element.tagName.toLowerCase() === 'input') {
        element.style.transform = 'scale(1.01)'; // Ligero zoom en inputs
      }
    });
    
    // Restablecer al quitar el ratón
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1)';
    });
  });
  
  // Efecto ripple (ondas) para botones
  const buttons = document.querySelectorAll('button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Calcular posición del click relativa al botón
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Crear elemento para el efecto ripple
      const ripple = document.createElement('span');
      // Estilos iniciales del ripple
      ripple.style.position = 'absolute';
      ripple.style.width = '1px';
      ripple.style.height = '1px';
      ripple.style.borderRadius = '50%';
      ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
      ripple.style.transform = 'scale(0)';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.animation = 'ripple 0.6s ease-out';
      
      // Preparar el botón para contener el efecto
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      // Eliminar el ripple después de la animación
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  // Añadir animación ripple al CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(100); // Escala progresiva
        opacity: 0; // Desvanecimiento progresivo
      }
    }
  `;
  document.head.appendChild(style);
}