// Importación de archivos CSS necesarios
import './style.css'
import './dashboard.css'
import './admin.css'

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  setupSidebar();      // Configura la barra lateral
  setupUsersList();    // Configura la lista de usuarios
  setupModal();        // Configura el modal de edición
  setupFilters();      // Configura los filtros
});

// Función para configurar la barra lateral/navegación
function setupSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggleButton = document.getElementById('toggle-sidebar');
  const closeButton = document.getElementById('close-sidebar');

  // Evento para mostrar la barra lateral al hacer clic en el botón de toggle
  toggleButton.addEventListener('click', () => {
    sidebar.classList.add('active');
  });

  // Evento para ocultar la barra lateral al hacer clic en el botón de cerrar
  closeButton.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });

  // Cierra la barra lateral al hacer clic fuera de ella (solo en móviles)
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024) {
      const isClickInside = sidebar.contains(e.target) || toggleButton.contains(e.target);
      if (!isClickInside && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
      }
    }
  });
}

// Datos de ejemplo de usuarios (en una aplicación real vendrían de una API)
const users = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    area: 'science',
    roles: ['author', 'reviewer'],
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
  },
  {
    id: 2,
    name: 'Emily Johnson',
    email: 'emily.j@example.com',
    area: 'technology',
    roles: ['author', 'reviewer', 'organizer'],
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'm.chen@example.com',
    area: 'engineering',
    roles: ['author'],
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
  }
];

// Función para configurar la lista de usuarios
function setupUsersList() {
  const usersList = document.querySelector('.users-list');
  renderUsers(users);

  // Función para renderizar los usuarios en el DOM
  function renderUsers(usersToRender) {
    usersList.innerHTML = usersToRender.map(user => `
      <div class="user-card" data-id="${user.id}">
        <div class="user-header">
          <img src="${user.avatar}" alt="${user.name}" class="user-avatar">
          <div class="user-info">
            <h3>${user.name}</h3>
            <span class="user-email">${user.email}</span>
          </div>
        </div>
        <span class="user-area">${user.area.charAt(0).toUpperCase() + user.area.slice(1)}</span>
        <div class="user-roles">
          ${user.roles.map(role => `
            <span class="role-tag ${role}">${role.charAt(0).toUpperCase() + role.slice(1)}</span>
          `).join('')}
        </div>
        <div class="user-actions">
          <button class="button-primary edit-user-btn">Edit User</button>
        </div>
      </div>
    `).join('');

    // Agrega event listeners a los botones de edición
    document.querySelectorAll('.edit-user-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const userId = parseInt(e.target.closest('.user-card').dataset.id);
        const user = users.find(u => u.id === userId);
        openEditModal(user);  // Abre el modal de edición
      });
    });
  }
}

// Función para configurar el modal de edición
function setupModal() {
  const modal = document.getElementById('user-edit-modal');
  const closeBtn = modal.querySelector('.close-modal');
  const cancelBtn = document.getElementById('cancel-edit');
  const form = document.getElementById('edit-user-form');

  // Evento para cerrar el modal con el botón de cerrar
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Evento para cerrar el modal con el botón de cancelar
  cancelBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Evento para manejar el envío del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userId = parseInt(form.dataset.userId);
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
      // Obtiene los roles seleccionados
      const selectedRoles = Array.from(form.querySelectorAll('input[name="roles"]:checked'))
        .map(checkbox => checkbox.value);

      // Actualiza el usuario en el array
      users[userIndex] = {
        ...users[userIndex],
        name: form.elements.name.value,
        email: form.elements.email.value,
        area: form.elements.area.value,
        roles: selectedRoles
      };

      // Vuelve a renderizar la lista de usuarios
      setupUsersList();
      modal.classList.remove('active');  // Cierra el modal
    }
  });
}

// Función para abrir el modal de edición con los datos del usuario
function openEditModal(user) {
  const modal = document.getElementById('user-edit-modal');
  const form = document.getElementById('edit-user-form');

  // Establece los valores del formulario con los datos del usuario
  form.dataset.userId = user.id;
  form.elements.name.value = user.name;
  form.elements.email.value = user.email;
  form.elements.area.value = user.area;

  // Marca los checkboxes de roles según los roles del usuario
  form.querySelectorAll('input[name="roles"]').forEach(checkbox => {
    checkbox.checked = user.roles.includes(checkbox.value);
  });

  modal.classList.add('active');  // Muestra el modal
}

// Función para configurar los filtros de búsqueda
function setupFilters() {
  const areaFilter = document.getElementById('area-filter');
  const searchInput = document.querySelector('.search-bar input');

  // Función para filtrar usuarios según los criterios
  function filterUsers() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedArea = areaFilter.value;

    const filteredUsers = users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchTerm) ||
                          user.email.toLowerCase().includes(searchTerm);
      const matchesArea = selectedArea === 'all' || user.area === selectedArea;
      return matchesSearch && matchesArea;
    });

    renderUsers(filteredUsers);  // Renderiza los usuarios filtrados
  }

  // Event listeners para los filtros
  areaFilter.addEventListener('change', filterUsers);
  searchInput.addEventListener('input', filterUsers);
}