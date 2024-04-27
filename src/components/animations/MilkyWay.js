const MilkyWay = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src="/milky_way.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  );
};

export default MilkyWay;
