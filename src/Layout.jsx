import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "ホーム", page: "Home" },
  { name: "施設紹介", page: "Facility" },
  { name: "シミュレーター", page: "Simulator" },
  { name: "料金プラン", page: "Pricing" },
  { name: "体験・入会", page: "Trial" },
  { name: "アクセス", page: "Access" },
  { name: "よくある質問", page: "Faq" },
  { name: "お問い合わせ", page: "ContactPage" },
];

export default function Layout({ children, currentPageName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [currentPageName]);

  const isHome = currentPageName === "Home";

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              to={createPageUrl("Home")}
              className="flex items-center gap-2"
            >
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    scrolled || !isHome ? "bg-[#1B5E3B]" : "bg-white/20 backdrop-blur-sm"
                  }`}
                >
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span
                  className={`ml-2 text-lg font-semibold tracking-tight ${
                    scrolled || !isHome ? "text-[#111111]" : "text-white"
                  }`}
                >
                  Golf Green
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`px-3 py-2 text-[13px] font-medium rounded-md transition-colors ${
                    currentPageName === item.page
                      ? scrolled || !isHome
                        ? "text-[#1B5E3B] bg-[#1B5E3B]/5"
                        : "text-white bg-white/15"
                      : scrolled || !isHome
                      ? "text-gray-600 hover:text-[#1B5E3B] hover:bg-gray-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to={createPageUrl("Trial")}
                className="ml-3 px-5 py-2.5 bg-[#C8A96E] hover:bg-[#b8995e] text-white text-[13px] font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-[#C8A96E]/25"
              >
                体験予約
              </Link>
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-md ${
                scrolled || !isHome ? "text-gray-700" : "text-white"
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      currentPageName === item.page
                        ? "text-[#1B5E3B] bg-[#1B5E3B]/5"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to={createPageUrl("Trial")}
                  className="block mt-3 px-4 py-3 bg-[#C8A96E] text-white text-center text-sm font-semibold rounded-full"
                >
                  体験予約はこちら
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className={isHome ? "" : "pt-16 lg:pt-20"}>{children}</main>

      <footer className="bg-[#0F3D25] text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="text-lg font-semibold">Golf Green</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                高針インター店
                <br />
                24時間営業のインドアゴルフ施設
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-[#C8A96E]">ページ</h4>
              <ul className="space-y-2.5">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.page}>
                    <Link
                      to={createPageUrl(item.page)}
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-[#C8A96E]">サポート</h4>
              <ul className="space-y-2.5">
                {navItems.slice(4).map((item) => (
                  <li key={item.page}>
                    <Link
                      to={createPageUrl(item.page)}
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-[#C8A96E]">店舗情報</h4>
              <div className="text-white/60 text-sm space-y-2.5">
                <p>〒465-0061</p>
                <p>愛知県名古屋市名東区<br />高針原２丁目１７０８</p>
                <p>24時間営業 / 年中無休</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-white/40 text-xs">
              © 2025 Golf Green 高針インター店. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <Link
          to={createPageUrl("Trial")}
          className="flex items-center gap-2 px-5 py-3 bg-[#C8A96E] text-white text-sm font-semibold rounded-full shadow-xl shadow-[#C8A96E]/30 hover:bg-[#b8995e] transition-all"
        >
          <Phone className="w-4 h-4" />
          体験予約
        </Link>
      </div>
    </div>
  );
}
