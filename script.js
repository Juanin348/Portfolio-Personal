// script.js
// Este archivo maneja la interactividad del portafolio: header retráctil y carga dinámica de proyectos.
// Si deseas agregar interactividad a la página de códigos, puedes hacerlo aquí.

// --- HEADER RETRÁCTIL ---
const header = document.getElementById('main-header');
const toggleBtn = document.getElementById('toggle-header');
let headerRetracted = false;

// Alterna la visibilidad del header al hacer clic en el botón
function toggleHeader() {
    headerRetracted = !headerRetracted;
    header.classList.toggle('retracted', headerRetracted);
    // Cambia el icono del botón según el estado
    toggleBtn.textContent = headerRetracted ? '▼' : '▲';
    toggleBtn.setAttribute('aria-label', headerRetracted ? 'Mostrar header' : 'Ocultar header');
}

toggleBtn.addEventListener('click', toggleHeader);

// Permite mostrar el header al hacer scroll hacia arriba (opcional, mejora UX)
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    if (window.scrollY < lastScrollY && headerRetracted) {
        // Si el usuario hace scroll hacia arriba, muestra el header
        toggleHeader();
    }
    lastScrollY = window.scrollY;
});

// --- CARGA DINÁMICA DE PROYECTOS ---
// Aquí puedes agregar tus proyectos. Puedes modificar o ampliar este array.
const projects = [
    {
        title: 'Analizador de Datos con Python',
        desc: 'Herramienta para analizar y visualizar datos usando pandas y matplotlib.',
        link: '#', // Cambia por el enlace real
    },
    {
        title: 'Web Scraper Automatizado',
        desc: 'Script en Python para extraer información de sitios web de manera eficiente.',
        link: '#',
    },
    {
        title: 'Portafolio Web',
        desc: 'Este mismo sitio, creado para mostrar mis proyectos y habilidades.',
        link: '#',
    },
];

// Función para crear y mostrar las tarjetas de proyectos
function renderProjects() {
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = '';
    projects.forEach(project => {
        // Crea el contenedor de la tarjeta
        const card = document.createElement('div');
        card.className = 'project-card';

        // Título del proyecto
        const title = document.createElement('div');
        title.className = 'project-title';
        title.textContent = project.title;
        card.appendChild(title);

        // Descripción
        const desc = document.createElement('div');
        desc.className = 'project-desc';
        desc.textContent = project.desc;
        card.appendChild(desc);

        // Enlace
        const link = document.createElement('a');
        link.className = 'project-link';
        link.href = project.link;
        link.textContent = 'Ver más';
        link.target = '_blank';
        card.appendChild(link);

        // Agrega la tarjeta al contenedor de proyectos
        projectsList.appendChild(card);
    });
}

// Llama a la función al cargar la página
window.addEventListener('DOMContentLoaded', renderProjects); 