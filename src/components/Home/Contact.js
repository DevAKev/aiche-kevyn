import { useTheme } from "../../hooks/ThemeContext";

const Contact = () => {
  const language = useTheme();
  const contactTitle = language === "en" ? "Contact me" : "Me contacter";

  return (
    <>
      <div id="contact" className="page-content">
        <div className="contact-container">
          <h1 className="contact-title">{contactTitle}</h1>
          <p>Vous pouvez me contacter via mon adresse mail :</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
