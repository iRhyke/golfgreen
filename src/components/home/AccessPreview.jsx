import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Car } from "lucide-react";

export default function AccessPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">Access</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#111111]">アクセス</h2>
          <div className="w-12 h-0.5 bg-[#C8A96E] mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
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
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1B5E3B]/5 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#1B5E3B]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111111] mb-1">所在地</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  〒465-0061<br />
                  愛知県名古屋市名東区高針原２丁目１７０８
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1B5E3B]/5 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#1B5E3B]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111111] mb-1">営業時間</h3>
                <p className="text-gray-500 text-sm">24時間営業 / 年中無休</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1B5E3B]/5 flex items-center justify-center flex-shrink-0">
                <Car className="w-5 h-5 text-[#1B5E3B]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#111111] mb-1">お車でお越しの方</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  高針インターすぐ。駐車場完備。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
