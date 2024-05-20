import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Sidebar from "./components/Pages/Dashboard/Sidebar";
import Dashboard from "./components/Pages/Dashboard/Dashboard";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="flex ">
      <Sidebar sidebarToggle={sidebarToggle} />
      <Dashboard
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
    </div>
  );
}

export default App;
