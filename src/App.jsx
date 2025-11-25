// src/App.jsx
import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import MobileOnly from "./components/MobileOnly";
import Dashboard from "./pages/Dashboard";
import BottomBar from "./components/BottomBar";
import Pocket from "./pages/Pocket";
import BudgetMethod from "./pages/BudgetMethod";
import DetailPocket from "./pages/DetailPocket";
import SubDetailPocket from "./pages/SubDetailPocket";

const routesMapping = {
  dashboard: { path: "/", element: <Dashboard /> },
  ringkasan: {
    path: "/ringkasan",
    element: <div className="p-4">Halaman Ringkasan</div>,
  },
  profile: {
    path: "/profile",
    element: <div className="p-4">Halaman Profile</div>,
  },
  pocket: {
    path: "/pocket",
    element: <Pocket />,
  },
  detail_pocket: {
    path: "/detail_pocket",
    element: <DetailPocket />,
  },
  budget_method: {
    path: "/budget_method",
    element: <BudgetMethod />,
  },
  sub_detail_1: {
    path: "/sub_detail_1",
    element: <SubDetailPocket />,
  },
};

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname.replace("/", "") || "dashboard";

  return (
    <MobileOnly>
      <div className="pb-20 font-inter">
        <Routes>
          {Object.entries(routesMapping).map(([key, value]) => (
            <Route key={key} path={value.path} element={value.element} />
          ))}
          ;
        </Routes>

        <BottomBar
          active={currentPath}
          onChange={(p) => navigate(routesMapping[p].path)}
        />
      </div>
    </MobileOnly>
  );
}
