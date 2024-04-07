// Principal files of the app
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./hooks/ThemeContext";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import About from "./pages/About";
import StarRain from "./components/animations/StarRain";

// Principal component
const App = () => {
  return (
    // Wrap the app with the ThemeProvider
    <ThemeProvider>
      <StarRain />
      {/* Manage router */}
      <BrowserRouter>
        {/*Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>ERROR 404</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
