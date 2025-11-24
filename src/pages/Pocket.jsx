import { Link } from "react-router-dom";

function Bulan({ bulan, to = "#" }) {
  return (
    <Link to={to} className="block">
      <div className="p-4 mt-4 bg-white rounded-lg shadow-md">
        <span className="font-semibold">{bulan}</span>
      </div>
    </Link>
  );
}

export default function Pocket() {
  const bulanList = [
    { bulan: "November 2025", to: "/detail_pocket" },
    { bulan: "Oktober 2025", to: "/detail_pocket" },
    { bulan: "September 2025", to: "/detail_pocket" },
  ];
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Pocket</h2>
      <main>
        <section>
          {bulanList.map((b) => (
            <Bulan key={b.bulan} {...b} />
          ))}
        </section>
      </main>
    </div>
  );
}
