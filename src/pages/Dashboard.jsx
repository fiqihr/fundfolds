// src/pages/Dashboard.jsx
import React from "react";
import { Home, BarChart2, User, Pocket, Wallet } from "lucide-react"; // icon library ringan
import { Link } from "react-router-dom";

function Menu({ title, icon, to = "#" }) {
  return (
    <Link to={to} className="block">
      <div className="shadow-md rounded-2xl p-4 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        </div>
        <div className="mt-4">
          <p className="text-2xl font-bold">{icon}</p>
        </div>
      </div>
    </Link>
  );
}

export default function Dashboard() {
  const pockets = [
    { title: "Pocket", icon: <Pocket size={30} />, to: "/pocket" },
    {
      title: "Metode",
      icon: <Wallet size={30} />,
      to: "/budget_method",
    },
    { title: "Menu 2", icon: <Home size={30} />, to: "/#" },
    { title: "Menu 3", icon: <Home size={30} />, to: "/#" },
  ];

  return (
    <div className="min-h-screen p-6 bg-slate-50">
      <header className="mb-4">
        <h1 className="text-3xl font-extrabold text-gray-800">FundFolds</h1>
        <p className="text-sm text-gray-600  mt-1">
          Lorem ipsum dolor sit amet!
        </p>
      </header>

      <div className="w-full my-6 bg-gradient-to-r from-emerald-500 to-emerald-300 text-white p-4 rounded-lg shadow-md">
        <p className="text-sm">Pemasukan bulan ini</p>
        <p className="font-bold text-2xl">Rp. 10.000.000</p>
      </div>
      <main>
        <section className="grid grid-cols-2 gap-4">
          {pockets.map((p) => (
            <Menu key={p.title} {...p} />
          ))}
        </section>
      </main>
    </div>
  );
}
