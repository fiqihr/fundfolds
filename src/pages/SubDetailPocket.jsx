import { Plus } from "lucide-react";

export default function SubDetailPocket() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Sub Detail Pocket</h2>
      <div className="flex justify-center w-full mt-6 gap-4">
        <div className="w-1/2 bg-slate-100 rounded-xl p-4 shadow-md items-center flex flex-col justify-center">
          <p className="text-sm mb-2">Savings</p>
          <p className="text-4xl font-bold">50%</p>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <div className="w-full bg-slate-100 rounded-xl p-4 shadow-md">
            <p className="text-sm mb-1">Total Dana</p>
            <p className="font-bold">Rp. 5.000.000</p>
          </div>
          <div className="w-full bg-slate-100 rounded-xl p-4 shadow-md">
            <p className="text-sm mb-1">Dana Tersisa</p>
            <p className="font-bold">Rp. 3.500.000</p>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <button className="bg-primary-500 w-full rounded-xl p-2 text-white text-sm mb-4 shadow-md font-bold flex justify-center items-center gap-1">
        <Plus />
        Tambah
      </button>
      <div className="bg-slate-200 p-2 rounded-lg mb-2">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left px-2 w-1/3 text-sm">Tanggal</th>
              <th className="text-left px-2 w-1/3 text-sm">Pemasukkan</th>
              <th className="text-left px-2 w-1/3 text-sm">Pengeluaran</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="bg-white p-2 rounded-xl shadow-md mb-2">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="text-left px-2 w-1/3 text-sm">
                <span className="bg-slate-400 text-white px-1 rounded-sm">
                  Rabu
                </span>
                <p className="text-xs">26/11/2025</p>
              </td>
              <td className="text-left px-2 w-1/3 text-sm text-emerald-500 font-bold">
                Rp. 0
              </td>
              <td className="text-left px-2 w-1/3 text-sm text-rose-500 font-bold">
                Rp. 35.000
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <hr className="my-1" />
              </td>
            </tr>
            <tr>
              <td className="pb-1 text-left px-2 w-1/3 text-sm">Makan Siang</td>
              <td className="pb-1 text-left px-2 w-1/3 text-sm text-emerald-500">
                Rp. 0
              </td>
              <td className="pb-1 text-left px-2 w-1/3 text-sm text-rose-500">
                Rp. 15.000
              </td>
            </tr>
            <tr>
              <td className="pb-1 text-left px-2 w-1/3 text-sm">Makan Malam</td>
              <td className="pb-1 text-left px-2 w-1/3 text-sm text-emerald-500">
                Rp. 0
              </td>
              <td className="pb-1 text-left px-2 w-1/3 text-sm text-rose-500">
                Rp. 20.000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-white p-2 rounded-xl shadow-md mb-2">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="text-left px-2 w-1/3 text-sm">
                <span className="bg-slate-400 text-white px-1 rounded-sm">
                  Selasa
                </span>
                <p className="text-xs">25/11/2025</p>
              </td>
              <td className="text-left px-2 w-1/3 text-sm text-emerald-500 font-bold">
                Rp. 250.000
              </td>
              <td className="text-left px-2 w-1/3 text-sm text-rose-500 font-bold">
                Rp. 40.000
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <hr className="my-1" />
              </td>
            </tr>
            <tr>
              <td className="pb-1 text-left px-2 w-1/3 text-sm">
                Maxwin Anjay
              </td>
              <td className="pb-1 text-left px-2 w-1/3 text-sm text-emerald-500">
                Rp. 250.000
              </td>
              <td className="pb-1 text-left px-2 w-1/3 text-sm text-rose-500">
                Rp. 0
              </td>
            </tr>
            <tr>
              <td className="pb-1 text-left px-2 w-1/3 text-sm">Makan Siang</td>
              <td className="pb-1 text-left px-2 w-1/3 text-sm text-emerald-500">
                Rp. 0
              </td>
              <td className="pb-1 text-left px-2 w-1/3 text-sm text-rose-500">
                Rp. 20.000
              </td>
            </tr>
            <tr>
              <td className="pb-1 text-left px-2 w-1/3 text-sm">Makan Malam</td>
              <td className="pb-1 text-left px-2 w-1/3 text-sm text-emerald-500">
                Rp. 0
              </td>
              <td className="pb-1 text-left px-2 w-1/3 text-sm text-rose-500">
                Rp. 20.000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
