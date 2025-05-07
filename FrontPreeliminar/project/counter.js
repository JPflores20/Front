/**
 * Configura un contador interactivo en un elemento HTML
 * @param {HTMLElement} element - Elemento DOM donde se mostrará el contador
 */
export function setupCounter(element) {
  // Variable para almacenar el valor actual del contador
  let counter = 0
  
  /**
   * Función para actualizar el valor del contador y el contenido del elemento
   * @param {number} count - Nuevo valor del contador
   */
  const setCounter = (count) => {
    counter = count // Actualiza el valor del contador
    element.innerHTML = `count is ${counter}` // Muestra el valor en el elemento
  }
  
  // Agrega un event listener para incrementar el contador al hacer clic
  element.addEventListener('click', () => setCounter(counter + 1))
  
  // Inicializa el contador en 0
  setCounter(0)
}