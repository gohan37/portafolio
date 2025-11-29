import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-container">
        <h1 className="projects-title">Proyectos</h1>

        <div className="projects-grid">

          {/* Proyecto 1 */}
          <div className="project-card">
            <h2 className="project-name">DEVA — Portafolio Web</h2>
            <p className="project-description">
              Portafolio moderno, profesional y responsivo desarrollado con React.
              Presenta mi trabajo, servicios y proyectos.
            </p>
            <p className="project-tech">React • CSS • Vite</p>
            <a className="project-button">Ver proyecto</a>
          </div>

          {/* Proyecto 2 */}
          <div className="project-card">
            <h2 className="project-name">Landing Page Profesional</h2>
            <p className="project-description">
              Landing diseñada para convertir visitas en clientes. Minimalista,
              rápida y optimizada para campañas.
            </p>
            <p className="project-tech">HTML • CSS • JavaScript</p>
            <a className="project-button">Ver proyecto</a>
          </div>

          {/* Proyecto 3 */}
          <div className="project-card">
            <h2 className="project-name">E-commerce Simple</h2>
            <p className="project-description">
              Tienda online ligera y escalable con carrito básico y diseño
              profesional adaptado al cliente.
            </p>
            <p className="project-tech">React • API • CSS</p>
            <a className="project-button">Ver proyecto</a>
          </div>

        </div>
      </div>
    </section>
  );
}

