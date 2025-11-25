import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function DetailPocket() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Detail Pocket</h2>
      <div className="bg-slate-100 p-4 rounded-xl ">
        <p className="text-sm">Bulan:</p>
        <p className="text-xl font-bold mb-4">November 2025</p>
        <p className="text-sm mb-1">Metode yang digunakan:</p>
        <p className="text-2xl font-bold">50/30/20</p>
      </div>
      <hr className="my-4" />
      <div className="flex gap-2">
        <div className="w-1/2 rounded-xl p-4 text-white shadow-sm bg-gradient-to-r from-emerald-400 to-emerald-200 ">
          <p className="font-semibold text-sm mb-1">Total Pemasukkan</p>
          <span className="font-bold ">Rp. 10.000.000</span>
        </div>
        <div className="w-1/2 rounded-xl p-4 text-white shadow-sm bg-gradient-to-r from-rose-400 to-rose-200">
          <p className="font-semibold text-sm mb-1">Total Pengeluaran</p>
          <span className="font-bold ">Rp. 2.000.000</span>
        </div>
      </div>
      <hr className="my-4" />
      <h2 className="text-xl font-bold mb-4">Kantongmu</h2>
      <div className="grid grid-cols-2 gap-4 justify-center w-full">
        <Link
          to="/sub_detail_1"
          className="bg-primary-100 p-4 rounded-xl w-full flex justify-between items-center"
        >
          <div className="">
            <p className="text-3xl font-bold">50%</p>
            <p className="text-sm">Needs</p>
          </div>
          <div className="">
            <ChevronRight size={30} className="ml-4 mt-2 " />
          </div>
        </Link>
        <Link
          to="/sub_detail_1"
          className="bg-primary-100 p-4 rounded-xl w-full flex justify-between items-center"
        >
          <div className="">
            <p className="text-3xl font-bold">30%</p>
            <p className="text-sm">Wants</p>
          </div>
          <div className="">
            <ChevronRight size={30} className="ml-4 mt-2 " />
          </div>
        </Link>
        <Link
          to="/sub_detail_1"
          className="bg-primary-100 p-4 rounded-xl w-full flex justify-between items-center"
        >
          <div className="">
            <p className="text-3xl font-bold">20%</p>
            <p className="text-sm">Savings</p>
          </div>
          <div className="">
            <ChevronRight size={30} className="ml-4 mt-2 " />
          </div>
        </Link>
      </div>
    </div>
  );
}
