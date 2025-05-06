import './style.css'
import { setupFormValidation } from './js/validation.js'
import { setupPasswordToggle } from './js/passwordToggle.js'
import { setupLoginAnimation } from './js/animations.js'
import { setupSocialLogin } from './js/socialLogin.js'

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
  setupFormValidation();
  setupPasswordToggle();
  setupLoginAnimation();
  setupSocialLogin();
});