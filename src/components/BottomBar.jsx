// src/components/BottomBar.jsx
import React from "react";
import { Home, BarChart2, User } from "lucide-react"; // icon library ringan

export default function BottomBar({ active = "dashboard", onChange }) {
  const menus = [
    { id: "dashboard", label: "Dashboard", icon: <Home size={22} /> },
    { id: "ringkasan", label: "Ringkasan", icon: <BarChart2 size={22} /> },
    { id: "profile", label: "Profile", icon: <User size={22} /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0  border-t border-gray-200 z-50">
      <div className="flex justify-around py-2">
        {menus.map((m) => {
          const isActive = active === m.id;
          return (
            <button
              key={m.id}
              onClick={() => onChange && onChange(m.id)}
              className="flex flex-col items-center gap-1 focus:outline-none"
            >
              <span className={isActive ? "text-primary-500" : "text-gray-400"}>
                {m.icon}
              </span>
              <span
                className={`text-xs font-medium ${
                  isActive ? "text-primary-500" : "text-gray-500"
                }`}
              >
                {m.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
