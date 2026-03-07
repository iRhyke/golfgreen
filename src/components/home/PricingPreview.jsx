import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";

const plans = [
  {
    name: "ライトプラン",
    price: "12,980",
    period: "月4回",
    time: "全日24時間",
    popular: false,
  },
  {
    name: "オールタイム",
    price: "19,800",
    period: "回数無制限",
    time: "全日24時間",
    popular: true,
  },
  {
    name: "平日デイタイム",
    price: "9,980",
    period: "回数無制限",
    time: "平日10:00〜17:00",
    popular: false,
  },
];

export default function PricingPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">Pricing</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#111111]">料金プラン</h2>
          <div className="w-12 h-0.5 bg-[#C8A96E] mx-auto mt-6" />
          <p className="mt-4 text-gray-500 text-sm">
            ライフスタイルに合わせて選べる5つのプラン
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border transition-all ${
                plan.popular
                  ? "bg-[#0F3D25] text-white border-transparent shadow-2xl shadow-[#0F3D25]/20 scale-[1.02]"
                  : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 bg-[#C8A96E] text-white text-xs font-semibold rounded-full">
                    <Star className="w-3 h-3" />
                    人気No.1
                  </span>
                </div>
              )}
              <h3 className={`text-sm font-semibold ${plan.popular ? "text-[#C8A96E]" : "text-gray-500"}`}>
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">¥{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-white/60" : "text-gray-400"}`}>/月</span>
              </div>
              <div className={`mt-4 text-sm ${plan.popular ? "text-white/70" : "text-gray-500"}`}>
                <p>{plan.time}</p>
                <p>{plan.period}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to={createPageUrl("Pricing")}
            className="inline-flex items-center gap-2 text-[#1B5E3B] font-semibold text-sm hover:gap-3 transition-all"
          >
            全てのプランを見る
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
