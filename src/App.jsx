import { useState, useEffect } from "react";
import Doctor from "./Pages/Doctor";
import { Moon, Sun } from "lucide-react";
import './styles/globals.css'
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Doctor1 from "./Pages/Doctor1";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <Link className="flex items-center justify-center text-text-primary bg-background" to={'/doctor1'}>Doctor Page 2</Link>
      <Link className="flex items-center justify-center text-text-primary bg-background" to={'/'}>Doctor Page 1</Link>
      <div className={`min-h-screen ${theme} bg-secondary`}>
        <button
          onClick={toggleTheme}
          className="fixed top-4 left-4 p-2 rounded-full bg-primary text-text-primary hover:bg-secondary transition-colors duration-200 shadow-lg"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon className="w-6 h-6" />
          ) : (
            <Sun className="w-6 h-6" />
          )}
        </button>
        
        <Routes>
          <Route path="/doctor1" element={<Doctor1 />} />
          <Route path="/" element={<Doctor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
