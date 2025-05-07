/**
 * Sets up form validation for the registration form
 */
export function setupRegistrationValidation() {
  const form = document.getElementById('registration-form');
  const fields = {
    firstName: {
      input: document.getElementById('firstName'),
      error: document.getElementById('firstName-error'),
      validate: (value) => value.trim() !== '' ? '' : 'First name is required'
    },
    paternalLastName: {
      input: document.getElementById('paternalLastName'),
      error: document.getElementById('paternalLastName-error'),
      validate: (value) => value.trim() !== '' ? '' : 'Paternal last name is required'
    },
    maternalLastName: {
      input: document.getElementById('maternalLastName'),
      error: document.getElementById('maternalLastName-error'),
      validate: (value) => value.trim() !== '' ? '' : 'Maternal last name is required'
    },
    email: {
      input: document.getElementById('email'),
      error: document.getElementById('email-error'),
      validate: (value) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.trim() === '') return 'Email is required';
        if (!emailPattern.test(value)) return 'Please enter a valid email address';
        return '';
      }
    },
    password: {
      input: document.getElementById('password'),
      error: document.getElementById('password-error'),
      validate: (value) => {
        if (value.trim() === '') return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters';
        return '';
      }
    },
    confirmPassword: {
      input: document.getElementById('confirmPassword'),
      error: document.getElementById('confirmPassword-error'),
      validate: (value) => {
        const password = document.getElementById('password').value;
        if (value.trim() === '') return 'Please confirm your password';
        if (value !== password) return 'Passwords do not match';
        return '';
      }
    },
    knowledgeArea: {
      input: document.getElementById('knowledgeArea'),
      error: document.getElementById('knowledgeArea-error'),
      validate: (value) => value.trim() !== '' ? '' : 'Please select an area of knowledge'
    }
  };

  // Add input event listeners for real-time validation
  Object.keys(fields).forEach(fieldName => {
    const field = fields[fieldName];
    field.input.addEventListener('input', () => validateField(fieldName));
    field.input.addEventListener('blur', () => validateField(fieldName));
  });

  function validateField(fieldName) {
    const field = fields[fieldName];
    const error = field.validate(field.input.value);
    field.error.textContent = error;
    field.input.style.borderColor = error ? 'var(--error-red)' : 'var(--primary-light-blue)';
    return !error;
  }

  function validateAllFields() {
    return Object.keys(fields).every(fieldName => validateField(fieldName));
  }

  // Form submission handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateAllFields()) {
      simulateRegistration();
    }
  });

  // Simulate registration process
  function simulateRegistration() {
    const registerButton = document.querySelector('.register-button');
    const originalText = registerButton.textContent;
    
    registerButton.textContent = 'Registering...';
    registerButton.disabled = true;
    
    setTimeout(() => {
      registerButton.textContent = originalText;
      registerButton.disabled = false;
      alert('Registration successful! This is a simulation.');
      form.reset();
    }, 1500);
  }
}