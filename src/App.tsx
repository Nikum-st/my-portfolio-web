import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { useTheme } from "./hooks/useTheme";
import { AnimatePresence } from "framer-motion";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div
        className={`min-h-screen  bg-background text-text transition-colors duration-300`}
        data-theme={theme}
      >
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  name="Nikita Umanskii"
                  title="Frontend Developer"
                  backgroundImageUrl="/img/12.png"
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
