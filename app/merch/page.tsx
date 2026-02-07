"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function MerchPage() {
  const [selectedSize, setSelectedSize] = useState("M");

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <>
      <main className="relative z-10 text-white w-full">
        {/* NAVBAR */}
        <Navbar />

        {/* Merch Section */}
        <section className="relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">Merchandise</h2>
            <p className="text-gray-400 text-sm mb-8">Official Solve-A-Thon T-Shirt</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Front Side */}
              <div>
                <h3 className="text-cyan-400 font-bold tracking-widest mb-4 text-sm">FRONT</h3>
                <img
                  src="/merch/0versized-front.png"
                  alt="T-shirt Front"
                  className="w-full h-auto rounded object-cover"
                />
              </div>

              {/* Back Side */}
              <div>
                <h3 className="text-cyan-400 font-bold tracking-widest mb-4 text-sm">BACK</h3>
                <img
                  src="/merch/0versized-back.png"
                  alt="T-shirt Back"
                  className="w-full h-auto rounded object-cover"
                />
              </div>
            </div>

            {/* Available Sizes */}
            <div className="mt-8 md:mt-12">
              <h3 className="text-cyan-400 font-bold tracking-widest mb-4 text-sm">AVAILABLE SIZES</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 font-bold uppercase text-sm tracking-widest transition cursor-pointer ${
                      selectedSize === size
                        ? "bg-cyan-400 text-black border border-cyan-400"
                        : "bg-neutral-800 text-white border border-white/20 hover:border-cyan-400 hover:text-cyan-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}
