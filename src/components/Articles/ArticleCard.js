// import { useEffect, useRef } from "react";

// const ArticleCard = ({ title, description, icon }) => {
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const currentRef = cardRef.current;
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.target === currentRef) {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("is-visible");
//           } else {
//             entry.target.classList.remove("is-visible");
//           }
//         }
//       });
//     });

//     observer.observe(currentRef);

//     return () => {
//       observer.unobserve(currentRef);
//     };
//   }, []);

//   return (
//     <div className="article-card" ref={cardRef}>
//       <div className="article-icon">{icon}</div>
//       <h2 className="article-card-title">{title}</h2>
//       <div className="article-description">{description}</div>
//     </div>
//   );
// };

// export default ArticleCard;
