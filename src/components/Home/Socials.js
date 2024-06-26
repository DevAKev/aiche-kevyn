// import { useTheme } from "@hooks/ThemeContext";
// Socials Icons
import { ReactComponent as FbIcon } from "@assets/images/socials/facebook-icon.svg";
import { ReactComponent as TwitIcon } from "@assets/images/socials/twitter-icon.svg";
import { ReactComponent as InstaIcon } from "@assets/images/socials/instagram-icon.svg";
import { ReactComponent as LinkIcon } from "@assets/images/socials/linkedin-icon.svg";
import { ReactComponent as GitIcon } from "@assets/images/socials/github-icon.svg";
import { ReactComponent as GmailIcon } from "@assets/images/socials/gmail-icon.svg";
import { ReactComponent as WhatsIcon } from "@assets/images/socials/whatsapp-icon.svg";

const Socials = () => {
  // const { language } = useTheme();
  const socialsLinks = [
    { name: "Gmail", url: "mailto:kevynpro7700@gmail.com", icon: GmailIcon },
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
    { name: "Instagram", url: "https://www.instagram.com/", icon: InstaIcon },
  ];

  return (
    //   Socials Media Icons
    <nav className="desktop_socials-container">
      {/* <p className="desktop_socials-title">
        {language === "en" ? "Follow me" : "Suivez moi"}
      </p> */}
      <div className="navbar__desktop-socials-links desktop-socials-links">
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
              className="desktop-socials-icon"
              alt={`${link.name} Icon`}
            />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Socials;
