// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import {
//   PointsMaterial,
//   BufferGeometry,
//   Float32BufferAttribute,
//   Points,
//   DirectionalLight,
// } from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import UfoModel from "../../assets/images/animations/UFO.glb";

// const ufoSpeed = 0.01; // Vitesse de déplacement de l'UFO
// const ufoDirection = new THREE.Vector3(0, 0, 0); // Direction de l'UFO

// const UFOAnimation = ({ onUfoAnimationDone }) => {
//   const mountRef = useRef(null);
//   const [isIntersecting, setIsIntersecting] = useState(false);

//   // Observer pour détecter si l'élément est visible à l'écran
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsIntersecting(entry.isIntersecting),
//       { threshold: 0.1 }
//     );
//     observer.observe(mountRef.current);

//     return () => observer.disconnect();
//   }, []);

//   // Créer la scène et l'animation de l'UFO
//   useEffect(() => {
//     if (!isIntersecting) return;

//     const mount = mountRef.current;
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x000000); // Couleur de fond de la scène, 0x000000 = noir

//     const camera = new THREE.PerspectiveCamera(
//       75, // Angle de vue
//       window.innerWidth / window.innerHeight,
//       0.1, // Distance minimale de rendu
//       1000 // Distance maximale de rendu
//     );
//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight); // Réduire la taille de rendu
//     mount.appendChild(renderer.domElement);

//     // Créer un champ d'étoiles
//     const starGeometry = new BufferGeometry();
//     const starVertices = [];
//     const starColors = [];
//     for (let i = 0; i < 5000; i++) {
//       // Réduire le nombre d'étoiles à 5000
//       const x = THREE.MathUtils.randFloatSpread(2000);
//       const y = THREE.MathUtils.randFloatSpread(2000);
//       const z = THREE.MathUtils.randFloatSpread(2000);
//       starVertices.push(x, y, z);

//       // Alterner les couleurs des étoiles (blanc et or)
//       const color =
//         i % 2 === 0 ? new THREE.Color(0xffffff) : new THREE.Color(0xffd700);
//       starColors.push(color.r, color.g, color.b);
//     }
//     starGeometry.setAttribute(
//       "position",
//       new Float32BufferAttribute(starVertices, 3)
//     );
//     starGeometry.setAttribute(
//       "color",
//       new Float32BufferAttribute(starColors, 3)
//     );
//     const starMaterial = new PointsMaterial({
//       size: 0.4, // Réduire la taille des étoiles
//       vertexColors: true,
//     });
//     const starField = new Points(starGeometry, starMaterial);
//     scene.add(starField);

//     // Ajouter de la lumière à la scène
//     const directionalLight = new DirectionalLight(0xffffff, 2); // Lumière directionnelle
//     directionalLight.position.set(1, 1, 1);
//     scene.add(directionalLight);

//     // Créer l'UFO
//     const loader = new GLTFLoader();
//     loader.load(UfoModel, function (gltf) {
//       const ufo = gltf.scene;
//       ufo.position.set(0, 0, 0); // Positionner l'UFO au centre de l'écran
//       ufo.scale.set(0.05, 0.05, 0.05); // Ajuster la taille de l'UFO

//       // Modifier le matériau de l'UFO pour ajouter de la luminosité
//       ufo.traverse((child) => {
//         if (child.isMesh) {
//           child.material.emissive = new THREE.Color(0xffd700); // Couleur de luminosité (gris clair)
//           child.material.emissiveIntensity = 0.5; // Intensité de la luminosité
//           child.material.transparent = true; // Activer la transparence
//           child.material.opacity = 1; // Niveau de transparence (0.0 = complètement transparent, 1.0 = complètement opaque)
//         }
//       });

//       scene.add(ufo);

//       camera.position.z = 6;

//       // Animation de l'UFO
//       const clock = new THREE.Clock();
//       const animateUfo = () => {
//         const elapsedTime = clock.getElapsedTime();
//         if (elapsedTime < 2) {
//           ufo.position.y = 1 - elapsedTime;
//           ufo.position.x = (elapsedTime - 2) / 2;
//           ufo.scale.set(elapsedTime / 2, elapsedTime / 2, elapsedTime / 2);
//         } else if (onUfoAnimationDone) {
//           onUfoAnimationDone();
//         }

//         ufo.position.add(ufoDirection.clone().multiplyScalar(ufoSpeed));
//         if (ufo.position.x > 1) {
//           ufo.position.x = -1;
//         }
//         ufo.rotation.y += 0.01; // Rotation de l'UFO
//         renderer.render(scene, camera);
//         requestAnimationFrame(animateUfo);
//       };

//       animateUfo();
//     });

//     // Animation des étoiles filantes
//     const animateStars = () => {
//       const positions = starGeometry.attributes.position.array;
//       for (let i = 0; i < positions.length; i += 3) {
//         positions[i] += 0.3; // Déplacer l'étoile sur l'axe x
//         if (positions[i] > 1000) {
//           positions[i] = -1000;
//         }
//       }
//       starGeometry.attributes.position.needsUpdate = true;
//     };

//     // Ajouter l'animation des étoiles filantes à la boucle d'animation principale
//     const animate = () => {
//       animateStars();
//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       mount.removeChild(renderer.domElement); // Nettoyer la scène
//     };
//   }, [onUfoAnimationDone, isIntersecting]);

//   return <div ref={mountRef} className="ufo-animation-container" />;
// };

// export default UFOAnimation;

// ############################################################################
// import { useEffect, useRef, useState, useMemo } from "react";
// import * as THREE from "three";
// import { TextureLoader, PlaneGeometry, MeshBasicMaterial, Mesh } from "three";
// import { useTheme } from "../../hooks/ThemeContext";
// import DarkUfoImg from "../../assets/images/animations/ufo_dark.png";
// import LightUfoImg from "../../assets/images/animations/ufo_light.png";

// const ufoSpeed = 0.01; // Vitesse de déplacement de l'UFO
// const ufoDirection = new THREE.Vector3(0, 0, 0); // Direction de l'UFO

// const UFOAnimation = ({ onUfoAnimationDone }) => {
//   const mountRef = useRef(null);
//   const [isIntersecting, setIsIntersecting] = useState(false);
//   const { theme } = useTheme();
//   const ufoImage = useMemo(
//     () => (theme === "dark" ? DarkUfoImg : LightUfoImg),
//     [theme]
//   ); // Choisir l'image en fonction du thème

//   // Observer pour détecter si l'élément est visible à l'écran
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsIntersecting(entry.isIntersecting),
//       { threshold: 0.1 }
//     );
//     observer.observe(mountRef.current);

//     return () => observer.disconnect();
//   }, []);

//   // Créer la scène et l'animation de l'UFO
//   useEffect(() => {
//     if (!isIntersecting) return;

//     const mount = mountRef.current;
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x000000); // Couleur de fond de la scène, 0x000000 = noir

//     const camera = new THREE.PerspectiveCamera(
//       75, // Angle de vue
//       window.innerWidth / window.innerHeight,
//       0.1, // Distance minimale de rendu
//       1000 // Distance maximale de rendu
//     );
//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight * 0.8);
//     mount.appendChild(renderer.domElement);

//     // Créer un champ d'étoiles
//     const starGeometry = new THREE.SphereGeometry(80, 80, 80);
//     const vertices = [];
//     const colors = [];
//     const speeds = []; // Tableau pour stocker les vitesses des étoiles filantes
//     const color1 = new THREE.Color(0xffffff); // 0xffffff = blanc
//     const color2 = new THREE.Color(0xffd700); // 0xffd700 = or

//     for (let i = 0; i < 10000; i++) {
//       // Créer 10 000 étoiles
//       const x = THREE.MathUtils.randFloatSpread(2000);
//       const y = THREE.MathUtils.randFloatSpread(2000);
//       const z = THREE.MathUtils.randFloatSpread(2000);
//       vertices.push(x, y, z);

//       const color = i % 2 === 0 ? color1 : color2; // Alterner les couleurs des étoiles
//       colors.push(color.r, color.g, color.b);

//       // Ajouter une vitesse aléatoire pour les étoiles filantes
//       const speed = THREE.MathUtils.randFloat(0.3, 0.3); // Vitesse des étoiles
//       speeds.push(speed);
//     }

//     starGeometry.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(vertices, 3)
//     );
//     starGeometry.setAttribute(
//       "color",
//       new THREE.Float32BufferAttribute(colors, 3)
//     );
//     starGeometry.setAttribute(
//       "speed",
//       new THREE.Float32BufferAttribute(speeds, 1)
//     ); // Attribut pour les vitesses

//     const starMaterial = new THREE.PointsMaterial({
//       size: 0.5, // Taille des étoiles
//       vertexColors: true,
//     });
//     const starField = new THREE.Points(starGeometry, starMaterial);
//     scene.add(starField);

//     // Créer l'UFO
//     const loader = new TextureLoader();
//     loader.load(ufoImage, function (texture) {
//       const material = new MeshBasicMaterial({
//         map: texture,
//         transparent: true,
//       });
//       const ufo = new Mesh(new PlaneGeometry(1, 1), material);
//       scene.add(ufo);

//       camera.position.z = 2;

//       // Animation de l'UFO
//       const clock = new THREE.Clock();
//       const animateUfo = () => {
//         const elapsedTime = clock.getElapsedTime();
//         if (elapsedTime < 2) {
//           ufo.position.y = 1 - elapsedTime;
//           ufo.position.x = (elapsedTime - 2) / 2;
//           ufo.scale.set(elapsedTime / 2, elapsedTime / 2, 1);
//         } else if (onUfoAnimationDone) {
//           onUfoAnimationDone();
//         }

//         ufo.position.add(ufoDirection.clone().multiplyScalar(ufoSpeed));
//         if (ufo.position.x > 1) {
//           ufo.position.x = -1;
//         }

//         renderer.render(scene, camera);
//         requestAnimationFrame(animateUfo);
//       };

//       animateUfo();
//     });

//     // Animation des étoiles filantes
//     const animateStars = () => {
//       const positions = starGeometry.attributes.position.array;
//       const starSpeeds = starGeometry.attributes.speed.array;

//       for (let i = 0; i < positions.length; i += 3) {
//         positions[i] += starSpeeds[i / 3]; // Déplacer l'étoile sur l'axe x

//         // Réinitialiser la position de l'étoile si elle sort de l'écran
//         if (positions[i] > 1000) {
//           positions[i] = -1000;
//         }
//       }

//       starGeometry.attributes.position.needsUpdate = true; // Indiquer que la position des étoiles a changé
//     };

//     // Ajouter l'animation des étoiles filantes à la boucle d'animation principale
//     const animate = () => {
//       animateStars();
//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       mount.removeChild(renderer.domElement); // Nettoyer la scène
//     };
//   }, [
//     onUfoAnimationDone,
//     isIntersecting,
//     theme,
//     ufoImage, // Ajouter ufoImage aux dépendances
//   ]);

//   return <div ref={mountRef} className="ufo-animation-container" />;
// };

// export default UFOAnimation;

// import { useEffect } from "react";
// import { useTheme } from "../../hooks/ThemeContext";
// import anime from "animejs";
// import DarkUfoImg from "../../assets/images/animations/ufo_dark.png";
// import LightUfoImg from "../../assets/images/animations/ufo_light.png";
// import ScrollAnimation from "react-animate-on-scroll";
// import "animate.css/animate.min.css";

// const UFOAnimation = ({ onUfoLanded }) => {
//   const { theme } = useTheme();

//   useEffect(() => {
//     const spaceship = document.querySelector("#spaceship");

//     // Animation du vaisseau spatial
//     anime
//       .timeline({
//         targets: spaceship,
//         // loop: true,
//       })
//       .add({
//         scale: [0, 1], // Commence petit et grossit
//         opacity: [0, 1], // Commence invisible et devient visible
//         duration: 4000, // Durée de l'animation
//         easing: "easeInOutQuad", // Effet de transition
//       })
//       .add({
//         complete: onUfoLanded,
//       });
//   }, [onUfoLanded]);

//   return (
//     <ScrollAnimation animateIn="animate__fadeInTopRight" loop={true}>
//       <div id="spaceship">
//         <img
//           src={theme === "dark" ? DarkUfoImg : LightUfoImg}
//           alt="spaceship"
//         />
//       </div>
//     </ScrollAnimation>
//   );
// };

// export default UFOAnimation;
