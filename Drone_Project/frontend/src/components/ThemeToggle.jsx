import { CiLight, CiDark } from "react-icons/ci";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  return (
    <label
      htmlFor="theme-toggle"
      className="group relative block h-8 w-14 rounded-full bg-gray-200 transition-colors [-webkit-tap-highlight-color:transparent] has-checked:bg-gray-900"
    >
      <input
        type="checkbox"
        id="theme-toggle"
        checked={isDark}
        onChange={toggleTheme}
        className="peer sr-only"
      />
      <span className="absolute inset-y-0 start-0 m-1 grid size-6 place-content-center rounded-full bg-theme text-gray-700 transition-[inset-inline-start] peer-checked:start-6 duration-300">
        {isDark ? <CiDark className="text-xl" /> : <CiLight className="text-xl" />}
      </span>
    </label>
  );
}