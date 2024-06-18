import { useTheme } from "../../hooks/ThemeContext";
import videoBg from "../../assets/videos/background-video-contact.webm";

const Contact = () => {
  const language = useTheme();
  const contactTitle = language === "en" ? "Contact me" : "Me contacter";
  const contactText =
    language === "en"
      ? " Do you have any questions ? Send me an email"
      : "Vous avez des questions ? Envoyez-moi un email";
  return (
    <>
      <div id="contact" className="page-content">
        <video autoPlay muted loop className="bg-video-contact" id="myVideo">
          <source src={videoBg} type="video/webm" />
        </video>
        <div className="contact-container">
          <h1 className="contact-title">{contactTitle}</h1>
          <p className="contact-text">{contactText}</p>
          <form className="contact-form">
            <input type="text" name="name" placeholder="Votre nom" required />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
            />
            <textarea
              name="message"
              placeholder="Votre message"
              required
            ></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
