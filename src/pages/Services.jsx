import "./Services.css";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="services">
      <div className="services-container">

        <h1 className="services-title">Servicios</h1>
        <p className="services-subtitle">
          Soluciones web profesionales enfocadas en diseño moderno, velocidad y resultados reales.
          Cada proyecto está optimizado para que tu negocio crezca.
        </p>

        <div className="services-list">

          {/* ✅ Servicio 1 */}
          <div className="service-card">
            <h2>Landing Page Profesional</h2>
            <p>
              Sitio de una sola página, ideal para emprendedores, negocios locales y profesionales
              que necesitan presencia online rápida y efectiva.
            </p>

            <ul>
              <li>Diseño moderno y atractivo</li>
              <li>100% responsive (celular, tablet, PC)</li>
              <li>WhatsApp integrado</li>
              <li>Entrega rápida (24–48 hs)</li>
            </ul>

            <p className="price"></p>

            <Link className="btn-service" to="/contact">
              Solicitar presupuesto
            </Link>

            <a
              href="https://gohan37.github.io/chef-privada/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-service demo-btn"
            >
              Ver demo
            </a>
          </div>

          {/* ✅ Servicio 2 */}
          <div className="service-card">
            <h2>Squeeze Page – Descuentos Rápidos</h2>
            <p>
              Ideal para promociones y captación de clientes. Un sitio de una sola página donde tus visitantes pueden obtener descuentos
              de manera inmediata al hacer clic en un botón, generando más interacción y conversiones.
            </p>

            <ul>
              <li>Diseño atractivo y enfocado en conversión</li>
              <li>Botón de descuento instantáneo</li>
              <li>100% responsive (celular, tablet, PC)</li>
              <li>Integración con WhatsApp o formulario</li>
            </ul>

            <p className="price"></p>

            {/* Botones apilados */}
            <a 
              className="btn-service" 
              href="https://gohan37.github.io/squeeze/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ver landing
            </a>

            <Link className="btn-service" to="/contact">
              Solicitar presupuesto
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
