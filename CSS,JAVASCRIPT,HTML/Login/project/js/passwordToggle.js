/**
 * Sets up password visibility toggle
 */
export function setupPasswordToggle() {
  const toggleButton = document.getElementById('toggle-password');
  const passwordInput = document.getElementById('password');
  
  if (!toggleButton || !passwordInput) return;
  
  toggleButton.addEventListener('click', () => {
    // Toggle input type between password and text
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle class for icon change
    toggleButton.classList.toggle('visible');
    
    // Add a subtle animation
    passwordInput.style.transition = 'all 0.2s ease';
    passwordInput.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
    setTimeout(() => {
      passwordInput.style.backgroundColor = '';
    }, 300);
  });
}