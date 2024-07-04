import { useTheme } from "@hooks/ThemeContext";
import videoBg from "@assets/videos/contact-background-video.webm";
import { ReactComponent as FbIcon } from "@assets/images/socials/facebook-icon.svg";
import { ReactComponent as TwitIcon } from "@assets/images/socials/twitter-icon.svg";
import { ReactComponent as InstaIcon } from "@assets/images/socials/instagram-icon.svg";
import { ReactComponent as LinkIcon } from "@assets/images/socials/linkedin-icon.svg";
import { ReactComponent as GitIcon } from "@assets/images/socials/github-icon.svg";
import { ReactComponent as GmailIcon } from "@assets/images/socials/gmail-icon.svg";
import { ReactComponent as WhatsIcon } from "@assets/images/socials/whatsapp-icon.svg";

const Contact = () => {
  const { language } = useTheme();
  const contactTitle = language === "en" ? "Contact me" : "Me contacter";
  const contactText =
    language === "en"
      ? " Do you have any questions ?"
      : "Vous avez des questions ?";

  const socialsLinks = [
    {
      name: "Gmail",
      url: "mailto:devakev.contact@gmail.com",
      icon: GmailIcon,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/33760050343",
      icon: WhatsIcon,
    },
    { name: "GitHub", url: "https://github.com/DevAKev", icon: GitIcon },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kévyn-aiche",
      icon: LinkIcon,
    },
    { name: "Facebook", url: "https://www.facebook.com/", icon: FbIcon },
    { name: "Twitter", url: "https://www.twitter.com/", icon: TwitIcon },
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: InstaIcon,
    },
  ];

  return (
    <>
      <div id="contact" className="page-content">
        <video autoPlay muted loop className="bg-video-contact" id="myVideo">
          <source src={videoBg} type="video/webm" />
        </video>
        <div className="contact-container">
          <h1 className="contact-title">{contactTitle}</h1>
          <p className="contact-text">{contactText}</p>
          {/* Socials Media Icons */}
          <nav className="socials-container">
            <div className="bottom-socials-links">
              {socialsLinks.map((link, index) => (
                <a
                  title={link.name}
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon
                    loading="lazy"
                    className="bottom-socials-icon"
                    alt={`${link.name} Icon`}
                  />
                </a>
              ))}
            </div>
          </nav>
          {/* Contact form */}
          {/* <form className="contact-form">
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
          </form> */}
        </div>
      </div>
    </>
  );
};

export default Contact;
