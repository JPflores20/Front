/**
 * Configura el botón para mostrar/ocultar la contraseña
 */
export function setupPasswordToggle() {
  // Obtener elementos del DOM
  const toggleButton = document.getElementById('toggle-password'); // Botón de alternar visibilidad
  const passwordInput = document.getElementById('password'); // Campo de contraseña
  
  // Salir si no se encuentran los elementos necesarios
  if (!toggleButton || !passwordInput) return;
  
  // Añadir evento click al botón
  toggleButton.addEventListener('click', () => {
    // Alternar entre tipo 'password' y 'text' para mostrar/ocultar contraseña
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Alternar clase CSS para cambiar el icono visual
    toggleButton.classList.toggle('visible');
    
    // Añadir animación de feedback visual
    passwordInput.style.transition = 'all 0.2s ease';
    passwordInput.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
    setTimeout(() => {
      passwordInput.style.backgroundColor = ''; // Restablecer color de fondo
    }, 300); // Duración de la animación en milisegundos
  });
}