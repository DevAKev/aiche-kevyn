import { useState, useEffect } from "react";
import BgVideo from "@assets/videos/start-background-video-milky-way.webm";

const MilkyWay = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Error management
  const handleError = (event) => {
    console.error("Erreur lors du chargement de la vidéo", event);
  };

  useEffect(() => {
    const video = document.querySelector(".background-video");
    video.oncanplaythrough = () => {
      setIsLoaded(true);
    };
  }, []);

  return (
    <div className="video-container">
      {!isLoaded && <div className="loading-spinner"></div>}
      <video
        autoPlay
        loop
        muted
        className="background-video"
        onError={handleError}
      >
        <source src={BgVideo} type="video/webm" />
        Votre navigateur ne supporte pas cette vidéo.
      </video>
    </div>
  );
};

export default MilkyWay;
