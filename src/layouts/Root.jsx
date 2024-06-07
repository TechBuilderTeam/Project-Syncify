import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import { useEffect, useState } from "react";
import AuthProviders from "../Providers/AuthProviders/AuthProviders";
// import AuthProviders from "../Providers/AuthProviders/AuthProviders";

const Root = () => {
  const location = useLocation();
  const [theme, setTheme] = useState("light");
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <AuthProviders>
      <div className="bg-white dark:bg-gray-950 text-[#0c01a1] dark:text-[#73e9fe] min-h-screen">
        {noHeaderFooter || <Navbar handleThemeChange={handleThemeChange} />}
        <Outlet />
        {noHeaderFooter || <Footer />}
      </div>
    </AuthProviders>
  );
};

export default Root;
