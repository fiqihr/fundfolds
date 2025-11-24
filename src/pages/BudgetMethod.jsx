import { Plus } from "lucide-react";
import BudgetExpand from "../components/BudgetExpand";
import { methods } from "../data/BudgetMethodData";

export default function BudgetMethodPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold ">Metode Budgeting</h2>
      <p className="mb-4">Metode Budgeting yang bisa kamu pakai</p>
      <div className="space-y-4">
        {methods.map((m) => (
          <BudgetExpand
            key={m.label}
            label={m.label}
            breakdown={m.breakdown}
            helpImage="/mnt/data/1e23cad6-bb64-4fe6-97a6-4bd903243335.png"
          />
        ))}
        <div>
          <button className="bg-primary-500 w-full text-white p-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:brightness-95">
            <Plus />
            Tambah Baru
          </button>
        </div>
      </div>
    </div>
  );
}
