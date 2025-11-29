import "./About.jsx";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1 className="about-title">Sobre mí</h1>

        <p className="about-text">
          Soy un desarrollador web enfocado en construir soluciones modernas,
          eficientes y visualmente profesionales. Trabajo combinando diseño,
          código y estrategia para crear productos que realmente aporten valor.
        </p>

        <p className="about-text">
          Me especializo en desarrollo frontend con React, implementación de
          interfaces limpias, intuitivas y optimizadas para ofrecer la mejor
          experiencia posible. También tengo experiencia creando sitios
          responsivos, integraciones comerciales y sistemas orientados a
          resultados reales.
        </p>

        <p className="about-text">
          Busco siempre entregar un trabajo sólido, mantener una comunicación clara
          y llevar cada proyecto al nivel más alto posible. Mi objetivo es seguir
          creciendo como profesional y trabajar con personas y empresas que valoren
          la calidad y la innovación.
        </p>
      </div>
    </section>
  );
}
