/**
 * Sets up form validation for the login form
 */
export function setupFormValidation() {
  const loginForm = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');

  // Email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation function for email
  const validateEmail = () => {
    const email = emailInput.value.trim();
    
    if (email === '') {
      emailError.textContent = 'Email is required';
      emailInput.style.borderColor = 'var(--error-red)';
      return false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = 'Please enter a valid email address';
      emailInput.style.borderColor = 'var(--error-red)';
      return false;
    } else {
      emailError.textContent = '';
      emailInput.style.borderColor = 'var(--primary-light-blue)';
      return true;
    }
  };

  // Validation function for password
  const validatePassword = () => {
    const password = passwordInput.value.trim();
    
    if (password === '') {
      passwordError.textContent = 'Password is required';
      passwordInput.style.borderColor = 'var(--error-red)';
      return false;
    } else if (password.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters';
      passwordInput.style.borderColor = 'var(--error-red)';
      return false;
    } else {
      passwordError.textContent = '';
      passwordInput.style.borderColor = 'var(--primary-light-blue)';
      return true;
    }
  };

  // Add input event listeners for real-time validation
  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);

  // Add blur event listeners for validation when focus leaves the input
  emailInput.addEventListener('blur', validateEmail);
  passwordInput.addEventListener('blur', validatePassword);

  // Form submission handler
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    
    if (isEmailValid && isPasswordValid) {
      // Here you would typically handle the login process
      // For this example, we'll just show a success message
      simulateLogin();
    }
  });

  // Simulate login process
  const simulateLogin = () => {
    const loginButton = document.querySelector('.login-button');
    const originalText = loginButton.textContent;
    
    // Show loading state
    loginButton.textContent = 'Signing in...';
    loginButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
      // Reset button state
      loginButton.textContent = originalText;
      loginButton.disabled = false;
      
      // Show success message (in a real app, redirect to dashboard)
      alert('Login successful! This is a simulation.');
    }, 1500);
  };
}