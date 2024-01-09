import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis la balise IMG sont accessibles depuis le dossier public */}
      <img id="img-logo" src="./galaxy.png" alt="galaxy logo" />
    </div>
  );
};

export default Logo;
