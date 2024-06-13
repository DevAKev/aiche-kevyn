import BgVideo from "../../assets/videos/milky_way.mp4";
const MilkyWay = () => {
  // Error management
  const handleError = (event) => {
    console.error("Erreur lors du chargement de la vidéo", event);
  };
  return (
    <div className="video-container">
      <video
        autoPlay
        loop
        muted
        className="background-video"
        onError={handleError}
        loading="lazy"
      >
        <source src={BgVideo} type="video/mp4" loading="lazy" />
        Votre navigateur ne supporte pas cette vidéo.
      </video>
    </div>
  );
};

export default MilkyWay;
