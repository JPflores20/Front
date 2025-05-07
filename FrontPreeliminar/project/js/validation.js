/**
 * Configura la validación del formulario de login
 */
export function setupFormValidation() {
  // Obtener elementos del DOM
  const loginForm = document.getElementById('login-form'); // Formulario completo
  const emailInput = document.getElementById('email'); // Campo de email
  const passwordInput = document.getElementById('password'); // Campo de contraseña
  const emailError = document.getElementById('email-error'); // Elemento para errores de email
  const passwordError = document.getElementById('password-error'); // Elemento para errores de contraseña

  // Patrón para validación de email (expresión regular)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Función para validar el email
  const validateEmail = () => {
    const email = emailInput.value.trim(); // Obtener valor sin espacios
    
    if (email === '') {
      emailError.textContent = 'Email is required'; // Error si está vacío
      emailInput.style.borderColor = 'var(--error-red)'; // Borde rojo
      return false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = 'Please enter a valid email address'; // Error si no cumple formato
      emailInput.style.borderColor = 'var(--error-red)';
      return false;
    } else {
      emailError.textContent = ''; // Limpiar error si es válido
      emailInput.style.borderColor = 'var(--primary-light-blue)'; // Borde azul
      return true;
    }
  };

  // Función para validar la contraseña
  const validatePassword = () => {
    const password = passwordInput.value.trim(); // Obtener valor sin espacios
    
    if (password === '') {
      passwordError.textContent = 'Password is required'; // Error si está vacía
      passwordInput.style.borderColor = 'var(--error-red)';
      return false;
    } else if (password.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters'; // Error si es muy corta
      passwordInput.style.borderColor = 'var(--error-red)';
      return false;
    } else {
      passwordError.textContent = ''; // Limpiar error si es válida
      passwordInput.style.borderColor = 'var(--primary-light-blue)';
      return true;
    }
  };

  // Event listeners para validación en tiempo real mientras se escribe
  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);

  // Event listeners para validación al salir del campo (blur)
  emailInput.addEventListener('blur', validateEmail);
  passwordInput.addEventListener('blur', validatePassword);

  // Manejador para el envío del formulario
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir envío normal del formulario
    
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    
    if (isEmailValid && isPasswordValid) {
      // En una implementación real aquí se procesaría el login
      simulateLogin(); // Simulación del proceso
    }
  });

  // Función para simular el proceso de login
  const simulateLogin = () => {
    const loginButton = document.querySelector('.login-button');
    const originalText = loginButton.textContent;
    
    // Mostrar estado de "cargando"
    loginButton.textContent = 'Signing in...';
    loginButton.disabled = true; // Deshabilitar botón durante el "login"
    
    // Simular llamada a API (espera de 1.5 segundos)
    setTimeout(() => {
      // Restaurar estado original del botón
      loginButton.textContent = originalText;
      loginButton.disabled = false;
      
      // Mostrar mensaje de éxito (en una app real redirigiría al dashboard)
      alert('Login successful! This is a simulation.');
    }, 1500);
  };
}