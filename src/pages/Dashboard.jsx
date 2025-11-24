// src/pages/Dashboard.jsx
import React from "react";

function Pocket({ title, amount }) {
  return (
    <div className="shadow-md rounded-2xl p-4 w-60">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        <span className="text-xs text-gray-400">Pocket</span>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-bold">{amount}</p>
        <p className="text-xs text-gray-500 mt-1">Available</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const pockets = [
    { title: "Needs", amount: "Rp 2.000.000" },
    { title: "Wants", amount: "Rp 1.000.000" },
    { title: "Savings", amount: "Rp 500.000" },
  ];

  return (
    <div className="min-h-screen p-6 bg-slate-50">
      <header className="mb-4">
        <h1 className="text-3xl font-extrabold text-gray-800">FundFolds</h1>
        <p className="text-sm text-gray-600  mt-1">Kelola uang anda</p>
      </header>

      <main>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pockets.map((p) => (
            <Pocket key={p.title} {...p} />
          ))}
        </section>
      </main>
    </div>
  );
}
