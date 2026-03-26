import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/shared/PageHeader";
import CTASection from "@/components/home/CTASection";
import { ChevronDown, ChevronRight } from "lucide-react";


const faqData = [
  {
    category: "ご利用について",
    questions: [
      {
        q: "ゴルフ初心者ですが大丈夫ですか？",
        a: "はい、もちろんです。個室なので周りを気にせず練習できます。最初にスタッフが使い方をレクチャーしますのでご安心ください。",
      },
      {
        q: "1回の利用時間は？",
        a: "1枠80分です。準備から片付けまで、ゆっくりラウンドや練習を楽しめる時間に設定しています。",
      },
      {
        q: "予約なしでも利用できますか？",
        a: "完全予約制です。会員様は専用アプリから24時間いつでも直前予約が可能です。体験の方はサイト内のフォームよりご予約ください。",
      },
      {
        q: "深夜や早朝も使えますか？",
        a: "はい、24時間365日オープンしています。お仕事前後や深夜など、ライフスタイルに合わせていつでも練習可能です。",
      },
    ],
  },
  {
    category: "設備・持ち物",
    questions: [
      {
        q: "手ぶらで行っても大丈夫ですか？",
        a: "はい。無料のレンタルクラブをご用意していますので、仕事帰りなどに手ぶらでお越しいただけます。もちろんマイクラブの持ち込みも大歓迎です。",
      },
      {
        q: "シミュレーターの機種は？",
        a: "プロも愛用するGOLFZON社の最高級モデル「VISION Plus」を全室に完備しています。",
      },
      {
        q: "左打ちでも利用できますか？",
        a: "はい、左右両打ち対応の打席がございます。レフティの方も気兼ねなくプレーいただけます。",
      },
    ],
  },
  {
    category: "料金・入会",
    questions: [
      {
        q: "入会金はいくらですか？",
        a: "通常11,000円ですが、体験当日のご入会で無料になるキャンペーンを随時実施しています。詳細はスタッフにお尋ねください。",
      },
      {
        q: "プランの変更はできますか？",
        a: "はい、月単位で変更可能です。マイページから簡単にお手続きいただけます。",
      },
      {
        q: "体験は本当に無料ですか？",
        a: "はい、初回のみ無料で80分間じっくりお試しいただけます。無理な勧誘もございませんので、まずはお気軽にご予約ください。",
      },
    ],
  },
  {
    category: "アクセス",
    questions: [
      {
        q: "駐車場はありますか？",
        a: "ビル共用の大型駐車場が50台分ございます。特に裏面の40台分は広くて停めやすいためおすすめです。",
      },
      {
        q: "場所はどこですか？",
        a: "高針インターからすぐ、「1Place cafe」さんの2階です。お車でのアクセスが非常に便利な立地です。",
      },
    ],
  },
];

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[#111111] font-medium text-sm pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-500 text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  return (
    <div>
      <PageHeader
        subtitle="FAQ"
        title="よくある質問"
        description="お客様からよくいただくご質問をまとめました"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <h2 className="text-lg font-bold text-[#1B5E3B] mb-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-[#C8A96E] rounded-full" />
                {section.category}
              </h2>
              <div className="bg-[#F9FAFB] rounded-2xl px-6">
                {section.questions.map((item, i) => (
                  <FaqItem key={i} question={item.q} answer={item.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection page="faq" />
    </div>
  );
}
