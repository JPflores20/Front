/**
 * Sets up animations for the login page
 */
export function setupLoginAnimation() {
  // Animate form elements on load
  const formElements = [
    document.querySelector('.company-name'),
    document.querySelector('.welcome-text'),
    document.querySelector('.login-subtitle'),
    ...document.querySelectorAll('.form-group'),
    document.querySelector('.form-options'),
    document.querySelector('.login-button'),
    document.querySelector('.divider'),
    document.querySelector('.social-login'),
    document.querySelector('.signup-link')
  ];
  
  // Apply staggered fade-in animation
  formElements.forEach((element, index) => {
    if (!element) return;
    
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100 + index * 100);
  });
  
  // Add hover effects for interactive elements
  const interactiveElements = [
    ...document.querySelectorAll('input'),
    ...document.querySelectorAll('button'),
    ...document.querySelectorAll('a')
  ];
  
  interactiveElements.forEach(element => {
    if (!element) return;
    
    element.addEventListener('mouseenter', () => {
      element.style.transition = 'transform 0.2s ease';
      if (element.tagName.toLowerCase() === 'input') {
        element.style.transform = 'scale(1.01)';
      }
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1)';
    });
  });
  
  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.width = '1px';
      ripple.style.height = '1px';
      ripple.style.borderRadius = '50%';
      ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
      ripple.style.transform = 'scale(0)';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.animation = 'ripple 0.6s ease-out';
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  // Add ripple animation to stylesheet
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(100);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}