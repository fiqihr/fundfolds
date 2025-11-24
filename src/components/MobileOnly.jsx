// src/components/MobileOnly.jsx
import React, { useEffect, useState } from "react";

/**
 * MobileOnly
 * - Inisialisasi state dilakukan pada useState supaya tidak memanggil setState sinkron di dalam effect.
 * - useEffect hanya memasang listener untuk perubahan matchMedia.
 */
export default function MobileOnly({ children, breakpoint = 640 }) {
  // Inisialisasi state dari matchMedia — aman untuk client-only
  const getInitialIsMobile = () => {
    if (typeof window === "undefined") return false;

    try {
      return window.matchMedia(`(max-width: ${breakpoint}px)`).matches;
    } catch {
      return window.innerWidth <= breakpoint;
    }
  };

  const [isMobile, setIsMobile] = useState(getInitialIsMobile);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const handler = (e) => {
      // e is MediaQueryListEvent on change. Use e.matches safely.
      setIsMobile(!!e.matches);
    };

    // attach listener (support old & new APIs)
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);

    // cleanup
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, [breakpoint]);

  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-6 text-center">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-2">
          Hanya bisa dibuka di tampilan smartphone
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          Aplikasi ini dioptimalkan untuk tampilan smartphone. Silakan buka di
          perangkat seluler atau aktifkan device toolbar (Inspect → Toggle
          device toolbar) lalu pilih ukuran ponsel.
        </p>

        <div className="mb-4">
          <img
            src="/mnt/data/1e23cad6-bb64-4fe6-97a6-4bd903243335.png"
            alt="contoh tampilan mobile"
            className="mx-auto rounded-md shadow-sm max-h-40 object-contain"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            className="px-4 py-2 rounded-md border border-gray-200 text-sm text-gray-700 bg-white hover:bg-gray-50"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Cara cepat: Tekan{" "}
            <kbd className="px-2 py-1 bg-gray-100 rounded">F12</kbd> →{" "}
            <span className="font-medium">Toggle device toolbar</span>
          </a>
          <button
            className="px-4 py-2 rounded-md bg-primary-500 text-white text-sm hover:opacity-95"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Saya pakai perangkat mobile
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          (Jika Anda menggunakan device emulator di devtools, pastikan width
          viewport ≤ {breakpoint}px)
        </p>
      </div>
    </div>
  );
}
