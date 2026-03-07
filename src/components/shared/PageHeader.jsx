import React from "react";
import { motion } from "framer-motion";

export default function PageHeader({ subtitle, title, description }) {
  return (
    <section className="relative bg-[#0F3D25] py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">{subtitle}</span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{title}</h1>
          {description && (
            <p className="mt-4 text-white/60 text-base max-w-2xl mx-auto">{description}</p>
          )}
          <div className="w-12 h-0.5 bg-[#C8A96E] mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
