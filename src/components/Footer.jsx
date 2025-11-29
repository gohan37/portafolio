import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-logo">DEVA</h2>
          <p className="footer-tagline">Desarrollador web y creador digital</p>
        </div>

        <div className="footer-right">
          <div className="footer-section">
            <h3>Explorar</h3>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Sobre mí</Link></li>
                      <li><Link to="/services">Servicios</Link></li>

            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Trabajo</h3>
            <ul>
              
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DEVA — Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
