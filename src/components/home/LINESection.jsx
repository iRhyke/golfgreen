import React from "react";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";

export default function LINESection() {
  const handleLineClick = () => {
    // Vercel Analytics event tracking
    track("line_add_click", { from: "home" });
    // Open LINE official account URL in new tab (currently placeholder #)
    window.open("#", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#F9FAFB] rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm"
        >
          <div className="w-16 h-16 bg-[#06C755] rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-lg shadow-[#06C755]/20">
            <span className="text-white font-bold text-xl tracking-wider">LINE</span>
          </div>
          <h2 className="text-[#111111] text-2xl sm:text-3xl font-bold mb-4">
            入会後の予約・お知らせはLINEで
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-8">
            予約・スケジュール変更・お知らせはすべてLINEで完結します。
          </p>
          <button
            onClick={handleLineClick}
            className="inline-flex items-center justify-center bg-[#06C755] hover:bg-[#05b34c] text-white font-bold py-4 px-10 rounded-full transition-all hover:shadow-xl hover:shadow-[#06C755]/30 text-base w-full sm:w-auto"
          >
            LINEで友達追加する
          </button>
        </motion.div>
      </div>
    </section>
  );
}
