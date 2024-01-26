import React, { useEffect } from "react";

const StarRain = () => {
  useEffect(() => {
    // Use hook useEffect to generate stars on the home page
    // Fetch stars container
    const starsContainer = document.getElementById("stars-container");
    // Generate stars
    const generateRandomStars = () => {
      // Number of stars to generate
      const totalStars = 20;
      // Create a star for each number
      for (let i = 0; i < totalStars; i++) {
        const star = document.createElement("div");
        // Add class to the star
        star.className = "star";
        // Use Math.random() for generating random numbers
        star.style.left = `${Math.random() * 100}vw`; // Position horizontale aléatoire
        star.style.animationDuration = `${Math.random() * 1.5 + 0.5}s`; // Animation duration
        // Add star to the container
        starsContainer.appendChild(star);
      }
    };

    generateRandomStars();
  }, []);

  return <div id="stars-container">{/* Stars generated here */}</div>;
};

export default StarRain;
