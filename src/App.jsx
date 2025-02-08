import { useState, useEffect } from "react";
import Doctor from "./Pages/Doctor";
import { Moon, Sun } from "lucide-react";
import './styles/globals.css'

function App() {
  // خواندن تم از localStorage یا استفاده از light به عنوان پیش‌فرض
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

      <Doctor />
    </div>
  );
}

export default App;