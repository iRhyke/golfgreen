import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 green-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            まずは体験から
            <br />
            <span className="text-[#C8A96E]">はじめてみませんか？</span>
          </h2>
          <p className="mt-6 text-white/70 text-base sm:text-lg max-w-xl mx-auto">
            初めての方でも安心。スタッフが丁寧にサポートします。
            <br />
            最高の環境で、ゴルフの新しい楽しみを見つけてください。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              to={createPageUrl("Trial")}
              className="group flex items-center gap-2 px-8 py-4 bg-[#C8A96E] hover:bg-[#b8995e] text-white font-semibold rounded-full transition-all hover:shadow-2xl hover:shadow-[#C8A96E]/30 text-base"
            >
              無料体験を予約する
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={createPageUrl("ContactPage")}
              className="flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all text-base"
            >
              お問い合わせ
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
