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
      {/* disini diganti tabel saja besok */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <div className="flex">
          <div className="w-1/3 text-sm flex flex-col items-start">
            <span className="bg-slate-600 text-white p-1 rounded text-xs">
              Selasa
            </span>
            <span className="text-xs mt-1">25/11/2025</span>
          </div>
          <div className="w-1/3 text-sm  font-semibold flex items-end">
            <p>Pemasukkan</p>
          </div>
          <div className="w-1/3 text-sm  font-semibold flex items-end">
            <p>Pengeluaran</p>
          </div>
        </div>
      </div>
    </div>
  );
}
