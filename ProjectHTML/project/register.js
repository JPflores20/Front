import './style.css'
import './register.css'
import { setupPasswordToggle } from './js/passwordToggle.js'
import { setupRegistrationValidation } from './js/registrationValidation.js'
import { setupLoginAnimation } from './js/animations.js'

document.addEventListener('DOMContentLoaded', () => {
  setupPasswordToggle();
  setupRegistrationValidation();
  setupLoginAnimation();
});