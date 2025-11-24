// src/App.jsx
import React, { useState } from "react";
import MobileOnly from "./components/MobileOnly";
import Dashboard from "./pages/Dashboard";
import BottomBar from "./components/BottomBar";

export default function App() {
  const [tab, setTab] = useState("dashboard");
  return (
    <MobileOnly>
      <div className="pb-20 font-inter">
        {tab === "dashboard" && <Dashboard />}
        {tab === "ringkasan" && <div className="p-4">Halaman Ringkasan</div>}
        {tab === "profile" && <div className="p-4">Halaman Profile</div>}
        <BottomBar active={tab} onChange={setTab} />
      </div>
    </MobileOnly>
  );
}
