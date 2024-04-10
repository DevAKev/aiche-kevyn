// Projects page
import Header from "../components/Header/Header";
import Layout from "../components/Layout";
import { useTheme } from "../hooks/ThemeContext";

// Component to display the projects page
const Projets = () => {
  const { language } = useTheme();

  const titleKey = language === "en" ? "Projects" : "Projets";
  return (
    // Use the Layout component to wrap the page content
    <Layout>
      <Header />
      <div className="page-content">
        <h1>{titleKey}</h1>
      </div>
    </Layout>
  );
};

export default Projets;
