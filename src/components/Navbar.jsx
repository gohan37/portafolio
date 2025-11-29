import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
    
  <div className="nav-logo">
    DEVA
    <div className="nav-subtitle">Desarrollador Web</div>
  </div>
    

      <button className="nav-toggle" onClick={() => setOpen(!open)}>
        {open ? <X size={32} color="white" /> : <Menu size={32} color="white" />}
      </button>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Sobre mí</Link></li>
        
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/services">Servicios</Link></li>
      </ul>

      <ul className={`nav-mobile ${open ? "open" : ""}`}>
        <li><Link onClick={() => setOpen(false)} to="/">Inicio</Link></li>
        <li><Link onClick={() => setOpen(false)} to="/about">Sobre mí</Link></li>
       
        <li><Link onClick={() => setOpen(false)} to="/contact">Contacto</Link></li>
        <li><Link onClick={() => setOpen(false)} to="/services">Servicios</Link></li>

      </ul>

    </nav>
  );
}
