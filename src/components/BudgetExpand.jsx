// src/components/BudgetExpand.jsx
import React, { useRef, useState, useEffect } from "react";
import { ChevronRight, Plus } from "lucide-react";

/**
 * BudgetExpand
 * Props:
 *  - label: string (contoh "50/30/20")
 *  - breakdown: array of { label, pct, desc } (detail shown di panel)
 *  - helpImage: optional image url to show in panel
 */
export default function BudgetExpand({
  label = "50/30/202",
  breakdown = [
    {
      label: "Needs",
      pct: 50,
      desc: "Kebutuhan pokok: sewa, listrik, makan, transport",
    },
    {
      label: "Wants",
      pct: 30,
      desc: "Keinginan: hiburan, makan di luar, belanja non-esensial",
    },
    { label: "Savings", pct: 20, desc: "Tabungan & investasi" },
  ],
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxH, setMaxH] = useState("0px");
  const [opacity, setOpacity] = useState(0);

  // adjust max-height for smooth open/close
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (open) {
      // set to scrollHeight to allow transition
      const height = el.scrollHeight;
      // small delay to allow transition from 0 to height
      requestAnimationFrame(() => {
        setMaxH(`${height}px`);
        setOpacity(1);
      });
    } else {
      setMaxH("0px");
      setOpacity(0);
    }
  }, [open]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between bg-white p-5 rounded-xl shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className=" font-semibold text-xl">{label}</span>
            <span className="text-xs text-gray-400"></span>
          </div>
        </div>

        <button
          aria-expanded={open}
          aria-controls="budget-expand-panel"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full font-bold  text-primary-500  hover:brightness-95 focus:outline-none "
          title={open ? "Tutup detail" : "Buka detail"}
        >
          <ChevronRight
            size={30}
            className={`transform transition-transform duration-300 ${
              open ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {/* Panel dengan animasi smooth (max-height + opacity) */}
      <div
        id="budget-expand-panel"
        ref={contentRef}
        style={{
          maxHeight: maxH,
          transition:
            "max-height 320ms cubic-bezier(.2,.9,.2,1), opacity 220ms ease",
          overflow: "hidden",
          opacity: opacity,
        }}
        className=" bg-white rounded-xl border border-gray-100 shadow-sm"
      >
        <div className="p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Detail Pembagian
          </h4>

          <ul className="space-y-3">
            {breakdown.map((b) => (
              <li key={b.label} className="flex items-start gap-3">
                <div className="flex-none w-10 h-10 rounded-md bg-slate-50 flex items-center justify-center text-sm font-semibold text-gray-700">
                  {b.pct}%
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700">
                    {b.label}
                  </div>
                  <div className="text-xs text-gray-500">{b.desc}</div>
                </div>
              </li>
            ))}
          </ul>

          {/* <div className="mt-4 flex gap-2">
            <button
              onClick={() => {
                // contoh aksi: apply/pakai method
                setOpen(false);
                // Anda bisa men-trigger callback di props kalau mau
              }}
              className="flex-1 py-2 rounded-md bg-primary-500 text-white text-sm font-medium hover:opacity-95"
            >
              Gunakan metode ini
            </button>
            <button
              onClick={() => setOpen(false)}
              className="py-2 px-3 rounded-md border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
            >
              Tutup
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
