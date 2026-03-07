import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import PageHeader from "../components/shared/PageHeader";
import { MapPin, Clock, Car, ChevronRight } from "lucide-react";

export default function Access() {
  return (
    <div>
      <PageHeader
        subtitle="Access"
        title="アクセス"
        description="Golf Green 高針インター店へのアクセス方法"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.1!2d137.01!3d35.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5oSb55-l55yM5ZCN5Y-k5bGL5biC5ZCN5p2x5Yy66auY6Yed5Y6f77yS5LiB55uu77yR77yX77yQ77yY!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Golf Green 高針インター店"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#111111] mb-6">店舗情報</h2>
                <h3 className="text-lg font-semibold text-[#1B5E3B]">Golf Green 高針インター店</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-[#F9FAFB]">
                  <div className="w-10 h-10 rounded-lg bg-[#1B5E3B]/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1B5E3B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] text-sm mb-1">所在地</h4>
                    <p className="text-gray-500 text-sm">
                      〒465-0061<br />
                      愛知県名古屋市名東区高針原２丁目１７０８
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-[#F9FAFB]">
                  <div className="w-10 h-10 rounded-lg bg-[#1B5E3B]/5 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#1B5E3B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] text-sm mb-1">営業時間</h4>
                    <p className="text-gray-500 text-sm">24時間営業 / 年中無休</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-[#F9FAFB]">
                  <div className="w-10 h-10 rounded-lg bg-[#1B5E3B]/5 flex items-center justify-center flex-shrink-0">
                    <Car className="w-5 h-5 text-[#1B5E3B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] text-sm mb-1">お車でのアクセス</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      高針インターすぐ。<br />
                      駐車場を完備しておりますので、お車でのご来店が便利です。
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to={createPageUrl("Trial")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] hover:bg-[#b8995e] text-white font-semibold rounded-full transition-all text-sm"
              >
                体験予約はこちら
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
