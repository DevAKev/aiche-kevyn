// import { useTheme } from "@hooks/ThemeContext";
// import ArticleCard from "@components/Articles/ArticleCard";
// import ProductivityIcon from "@assets/images/icons/article-productivity.png";
// import MobileIcon from "@assets/images/icons/mobiles.png";
// import RocketIcon from "@assets/images/icons/services-rocket-icon.webp";
// import UfoIcon from "@assets/images/icons/services-ufo-icon.webp";

// const Articles = () => {
//   const { language } = useTheme();
//   const articlesTitle = language === "en" ? "My Articles" : "Mes Articles";
//   const articlesEmail = "devakev.contact@gmail.com";
//   const cardTitle1 = language === "en" ? "Productivity" : "Productivité";

//   return (
//     <div id="articles" className="page-content">
//       <h1 className="articles-title">{articlesTitle}</h1>
//       <div className="articles">
//         {/* Productivity card */}
//         <ArticleCard
//           title={cardTitle1}
//           description={
//             language === "en" ? (
//               <div>
//                 <p>.....</p>
//                 <p>.....</p>
//                 <p>....</p>
//                 <p>
//                   <a
//                     className="contact-link"
//                     href={`mailto:${articlesEmail}?subject=${encodeURIComponent(
//                       "E-books on Productivity"
//                     )}&body=${encodeURIComponent(
//                       "Hello Kévyn, I am interested in your e-book on productivity. How can I receive it?"
//                     )}`}
//                   >
//                     Contact me now
//                   </a>
//                 </p>
//                 <img
//                   className="articles-icons"
//                   src={RocketIcon}
//                   alt="Rocket Icon"
//                 />
//               </div>
//             ) : (
//               <div>
//                 <p>.....</p>
//                 <p>....</p>
//                 <p>....</p>
//                 <p>
//                   <a
//                     className="contact-link"
//                     href={`mailto:${articlesEmail}?subject=${encodeURIComponent(
//                       "E-books sur la Productivité"
//                     )}&body=${encodeURIComponent(
//                       "Bonjour Kévyn, je suis intéressé par votre e-books sur la productivité. Comment le recevoir ?"
//                     )}`}
//                   >
//                     Contactez moi maintenant
//                   </a>
//                 </p>
//                 <img
//                   className="services-icons"
//                   src={RocketIcon}
//                   alt="Rocket Icon"
//                 />
//               </div>
//             )
//           }
//           icon={
//             <img
//               className="articles-icons"
//               src={ProductivityIcon}
//               alt="Icône article sur la productivité"
//             />
//           }
//         />

//         {/* Other Articles cards */}
//         <ArticleCard
//           title={
//             language === "en"
//               ? "Mobile Development & Responsive Design"
//               : "Développement Mobile & Design Réactif"
//           }
//           description={
//             language === "en" ? (
//               <div>
//                 <p>....</p>
//                 <p>.....</p>
//                 <p>
//                   Together,{" "}
//                   <a
//                     className="contact-link"
//                     href={`mailto:${articlesEmail}?subject=${encodeURIComponent(
//                       "Mobile-first Web Development"
//                     )}&body=${encodeURIComponent(
//                       "Hello Kévyn, I would like to propose a mobile web development project. What are the steps to follow ?"
//                     )}`}
//                   >
//                     ....
//                   </a>
//                   .....
//                 </p>
//                 <img className="services-icons" src={UfoIcon} alt="Ufo Icon" />
//               </div>
//             ) : (
//               <div>
//                 <p>.....</p>
//                 <p>.....</p>
//                 <p>
//                   Ensemble,{" "}
//                   <a
//                     className="contact-link"
//                     href={`mailto:${articlesEmail}?subject=${encodeURIComponent(
//                       "Développement Web Mobile First"
//                     )}&body=${encodeURIComponent(
//                       "Bonjour Kévyn, j'aimerais vous proposer un projet de développement web mobile. Quelles sont les étapes à suivre ?"
//                     )}`}
//                   >
//                     ....
//                   </a>
//                   .....
//                 </p>
//                 <img className="services-icons" src={UfoIcon} alt="Ufo Icon" />
//               </div>
//             )
//           }
//           icon={
//             <img
//               className="mobile-icon"
//               src={MobileIcon}
//               alt="Icône de développement mobile"
//             />
//           }
//         />
//         <ArticleCard
//           title={
//             language === "en"
//               ? "Mobile Development & Responsive Design"
//               : "Développement Mobile & Design Réactif"
//           }
//           description={
//             language === "en" ? (
//               <div>
//                 <p>....</p>
//                 <p>.....</p>
//                 <p>
//                   Together,{" "}
//                   <a
//                     className="contact-link"
//                     href={`mailto:${articlesEmail}?subject=${encodeURIComponent(
//                       "Mobile-first Web Development"
//                     )}&body=${encodeURIComponent(
//                       "Hello Kévyn, I would like to propose a mobile web development project. What are the steps to follow ?"
//                     )}`}
//                   >
//                     ....
//                   </a>
//                   .....
//                 </p>
//                 <img className="services-icons" src={UfoIcon} alt="Ufo Icon" />
//               </div>
//             ) : (
//               <div>
//                 <p>.....</p>
//                 <p>.....</p>
//                 <p>
//                   Ensemble,{" "}
//                   <a
//                     className="contact-link"
//                     href={`mailto:${articlesEmail}?subject=${encodeURIComponent(
//                       "Développement Web Mobile First"
//                     )}&body=${encodeURIComponent(
//                       "Bonjour Kévyn, j'aimerais vous proposer un projet de développement web mobile. Quelles sont les étapes à suivre ?"
//                     )}`}
//                   >
//                     ....
//                   </a>
//                   .....
//                 </p>
//                 <img className="services-icons" src={UfoIcon} alt="Ufo Icon" />
//               </div>
//             )
//           }
//           icon={
//             <img
//               className="mobile-icon"
//               src={MobileIcon}
//               alt="Icône de développement mobile"
//             />
//           }
//         />
//         <ArticleCard
//           title={
//             language === "en"
//               ? "Mobile Development & Responsive Design"
//               : "Développement Mobile & Design Réactif"
//           }
//           description={
//             language === "en" ? (
//               <div>
//                 <p>....</p>
//                 <p>.....</p>
//                 <p>
//                   Together,{" "}
//                   <a
//                     className="contact-link"
//                     href={`mailto:${articlesEmail}?subject=${encodeURIComponent(
//                       "Mobile-first Web Development"
//                     )}&body=${encodeURIComponent(
//                       "Hello Kévyn, I would like to propose a mobile web development project. What are the steps to follow ?"
//                     )}`}
//                   >
//                     ....
//                   </a>
//                   .....
//                 </p>
//                 <img className="services-icons" src={UfoIcon} alt="Ufo Icon" />
//               </div>
//             ) : (
//               <div>
//                 <p>.....</p>
//                 <p>.....</p>
//                 <p>
//                   Ensemble,{" "}
//                   <a
//                     className="contact-link"
//                     href={`mailto:${articlesEmail}?subject=${encodeURIComponent(
//                       "Développement Web Mobile First"
//                     )}&body=${encodeURIComponent(
//                       "Bonjour Kévyn, j'aimerais vous proposer un projet de développement web mobile. Quelles sont les étapes à suivre ?"
//                     )}`}
//                   >
//                     ....
//                   </a>
//                   .....
//                 </p>
//                 <img className="services-icons" src={UfoIcon} alt="Ufo Icon" />
//               </div>
//             )
//           }
//           icon={
//             <img
//               className="mobile-icon"
//               src={MobileIcon}
//               alt="Icône de développement mobile"
//             />
//           }
//         />
//       </div>
//     </div>
//   );
// };

// export default Articles;
