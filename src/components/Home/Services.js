import { useTheme } from "@hooks/ThemeContext";
import ServiceCard from "@components/Services/ServiceCard";
import { getServicesData } from "@data/servicesData";

const Services = () => {
  const { language } = useTheme();
  const servicesTitle = language === "en" ? "My Services" : "Mes Services";
  const services = getServicesData(language);

  return (
    <div id="services" className="page-content">
      <h1 className="services-title">{servicesTitle}</h1>
      <div className="services">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            loading="lazy"
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
