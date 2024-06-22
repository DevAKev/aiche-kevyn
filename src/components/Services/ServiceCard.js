import { useEffect, useRef } from "react";

const ServiceCard = ({ title, description, icon }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const currentRef = cardRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === currentRef) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        }
      });
    });

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className="service-card" ref={cardRef}>
      <div className="service-icon">{icon}</div>
      <h2 className="service-card-title">{title}</h2>
      <div className="service-description">{description}</div>
    </div>
  );
};

export default ServiceCard;
