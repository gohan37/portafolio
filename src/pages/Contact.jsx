import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h1 className="contact-title">Contacto</h1>

        <p className="contact-description">
          Si tenés un proyecto en mente, necesitás un sitio web profesional o simplemente querés hablar por dudas , escribime a mi WhatsApp.
        </p>

        
        <div className="contact-whatsapp">
  <a
    href="https://wa.me/+543513441563"  // <-- aquí va tu número
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-button"
  >
     Contactar por WhatsApp
  </a>
</div>
      </div>
    </section>
  );
}
