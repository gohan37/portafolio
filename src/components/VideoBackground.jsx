import React from "react";
import "./VideoBackground.css";

export default function VideoBackground({ videoSrc, children }) {
  return (
    <div className="video-container">
      <video className="video-bg" autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Overlay semitransparente */}
      <div className="video-overlay-layer"></div>

      <div className="video-overlay">
        {children}
      </div>
    </div>
  );
}