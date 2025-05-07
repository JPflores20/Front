/**
 * Configura la validación del formulario de registro
 */
export function setupRegistrationValidation() {
  // Obtener el formulario y definir los campos a validar
  const form = document.getElementById('registration-form');
  
  // Objeto que contiene la configuración de validación para cada campo
  const fields = {
    firstName: {
      input: document.getElementById('firstName'), // Campo de nombre
      error: document.getElementById('firstName-error'), // Elemento para mostrar error
      validate: (value) => value.trim() !== '' ? '' : 'First name is required' // Función de validación
    },
    paternalLastName: {
      input: document.getElementById('paternalLastName'), // Campo de apellido paterno
      error: document.getElementById('paternalLastName-error'),
      validate: (value) => value.trim() !== '' ? '' : 'Paternal last name is required'
    },
    maternalLastName: {
      input: document.getElementById('maternalLastName'), // Campo de apellido materno
      error: document.getElementById('maternalLastName-error'),
      validate: (value) => value.trim() !== '' ? '' : 'Maternal last name is required'
    },
    email: {
      input: document.getElementById('email'), // Campo de email
      error: document.getElementById('email-error'),
      validate: (value) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar email
        if (value.trim() === '') return 'Email is required';
        if (!emailPattern.test(value)) return 'Please enter a valid email address';
        return '';
      }
    },
    password: {
      input: document.getElementById('password'), // Campo de contraseña
      error: document.getElementById('password-error'),
      validate: (value) => {
        if (value.trim() === '') return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters'; // Validación de longitud mínima
        return '';
      }
    },
    confirmPassword: {
      input: document.getElementById('confirmPassword'), // Campo de confirmación de contraseña
      error: document.getElementById('confirmPassword-error'),
      validate: (value) => {
        const password = document.getElementById('password').value;
        if (value.trim() === '') return 'Please confirm your password';
        if (value !== password) return 'Passwords do not match'; // Validación de coincidencia
        return '';
      }
    },
    knowledgeArea: {
      input: document.getElementById('knowledgeArea'), // Campo de área de conocimiento
      error: document.getElementById('knowledgeArea-error'),
      validate: (value) => value.trim() !== '' ? '' : 'Please select an area of knowledge'
    }
  };

  // Añadir event listeners para validación en tiempo real
  Object.keys(fields).forEach(fieldName => {
    const field = fields[fieldName];
    // Validar al escribir (input) y al salir del campo (blur)
    field.input.addEventListener('input', () => validateField(fieldName));
    field.input.addEventListener('blur', () => validateField(fieldName));
  });

  // Función para validar un campo individual
  function validateField(fieldName) {
    const field = fields[fieldName];
    const error = field.validate(field.input.value); // Ejecutar función de validación
    field.error.textContent = error; // Mostrar mensaje de error
    // Cambiar color del borde según si hay error
    field.input.style.borderColor = error ? 'var(--error-red)' : 'var(--primary-light-blue)';
    return !error; // Retorna true si no hay error
  }

  // Función para validar todos los campos del formulario
  function validateAllFields() {
    return Object.keys(fields).every(fieldName => validateField(fieldName));
  }

  // Manejador de envío del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir envío por defecto
    
    if (validateAllFields()) {
      simulateRegistration(); // Simular registro si la validación es exitosa
    }
  });

  // Función para simular el proceso de registro
  function simulateRegistration() {
    const registerButton = document.querySelector('.register-button');
    const originalText = registerButton.textContent;
    
    // Mostrar estado de "cargando"
    registerButton.textContent = 'Registering...';
    registerButton.disabled = true;
    
    // Simular retraso de red y mostrar mensaje de éxito
    setTimeout(() => {
      registerButton.textContent = originalText;
      registerButton.disabled = false;
      alert('Registration successful! This is a simulation.');
      form.reset(); // Resetear el formulario
    }, 1500); // Retraso de 1.5 segundos
  }
}