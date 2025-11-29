import "./Home.css";
import VideoBackground from "../components/VideoBackground.jsx";
import videoFile from "../assets/VIDEO1.mp4";
import myPhoto from "../assets/nacho.jpeg"; // 👉 tu imagen

export default function Home() {
  return (
    <VideoBackground videoSrc={videoFile}>
      <div className="hero-layout">

       

        {/* ✅ TEXTO DERECHA */}
        <div className="hero-content">
          <h1>Desarrollo Web Profesional, Moderno y Enfocado en Resultados</h1><br />

          <h2>
            Creamos soluciones web a medida. <br />
            Desde landing pagues estaticas e dinamicas.
            personalizadas hasta tiendas online completas.
          </h2>< br />

          

          <div className="hero-buttons">
            <a href="/services" className="btn-primary">Ver servicios</a>
            
          </div>
        </div>

      </div>
    </VideoBackground>
  );
}


