import BgVideo from "../../assets/videos/milky_way.mp4";
const MilkyWay = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={BgVideo} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  );
};

export default MilkyWay;
