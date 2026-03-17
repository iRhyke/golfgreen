import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/shared/PageHeader";
import CTASection from "../components/home/CTASection";
import { Monitor, Users, Clock, Shield, Check, Target, BarChart3, Globe, Video } from "lucide-react";

const facilities = [
  {
    icon: Monitor,
    title: "GOLFZON VISION Plus × 2台",
    description: "GOLFZON社の最高級モデルを2台完備。業界最高レベルの精度で、リアルなゴルフ体験を提供します。",
  },
  {
    icon: Users,
    title: "左右打席対応",
    description: "右打ち・左打ちどちらにも対応した打席をご用意。すべてのゴルファーに快適な練習環境を。",
  },
  {
    icon: Clock,
    title: "24時間営業・年中無休",
    description: "仕事前の早朝練習も、仕事後の深夜練習も。お客様のライフスタイルに合わせてご利用いただけます。",
  },
  {
    icon: Shield,
    title: "完全プライベート空間",
    description: "周囲を気にせず、自分のペースでじっくり練習に集中できる環境です。",
  },
];

const specs = [
  {
    icon: Target,
    title: "高精度弾道解析",
    description: "ボールスピード、打ち出し角度、スピン量など、あらゆるデータを正確に計測。プロレベルの分析が可能です。",
  },
  {
    icon: Globe,
    title: "世界の名門コース",
    description: "世界中の200以上の有名コースを収録。セントアンドリュースやペブルビーチなど、憧れのコースでラウンドが楽しめます。",
  },
  {
    icon: Video,
    title: "スイング撮影・分析",
    description: "スイングを自動撮影し、スロー再生で確認。フォームの改善ポイントが一目でわかります。",
  },
  {
    icon: BarChart3,
    title: "データ蓄積・比較",
    description: "練習データを蓄積し、過去の自分と比較。上達の過程を可視化して、モチベーションを維持できます。",
  },
];

const features = [
  "リアルタイムの弾道シミュレーション",
  "正確なフェース角・クラブパス計測",
  "自動ティーアップ機能",
  "高解像度大画面スクリーン",
  "左右打席対応",
  "練習モード・ラウンドモード搭載",
  "アプローチ・パッティング練習対応",
  "コンペモード搭載",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80",
    alt: "ゴルフ練習",
  },
  {
    src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=600&q=80",
    alt: "シミュレーター",
  },
  {
    src: "https://images.unsplash.com/photo-1592919505780-303950717480?w=600&q=80",
    alt: "ゴルフクラブ",
  },
];

export default function Equipment() {
  return (
    <div>
      <PageHeader
        subtitle="Facility & Simulator"
        title="施設・設備紹介"
        description="最高級の設備と快適な空間で、ゴルフの上達をサポートします"
      />

      {/* 施設概要 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#111111] mb-6">
                最高の環境で、
                <br />
                <span className="text-[#1B5E3B]">最高の練習を。</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                ゴルフサロングリーン 高針インター店は、GOLFZON社の最高級シミュレーター
                「VISION Plus」を2台完備したインドアゴルフ施設です。
                24時間営業で、天候や時間を気にせず、いつでも本格的な
                ゴルフ練習が可能です。
              </p>
              <p className="text-gray-500 leading-relaxed">
                初心者の方からスコアアップを目指す上級者まで、
                すべてのゴルファーに最適な練習環境を提供します。
                1枠80分でじっくりと練習に取り組めます。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=800&q=80"
                alt="施設内観"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* 施設特徴4つのカード */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-[#F9FAFB] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1B5E3B]/5 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#1B5E3B]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION Plus紹介 */}
      <section className="py-20 lg:py-28 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B5E3B]/5 mb-6">
                <span className="text-[#1B5E3B] text-sm font-semibold">GOLFZON社 最高級モデル</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] leading-tight">
                VISION
                <br />
                <span className="text-[#C8A96E]">Plus</span>
              </h2>
              <p className="mt-6 text-gray-500 leading-relaxed">
                GOLFZON VISION Plusは、シミュレーターゴルフの世界的リーダーである
                GOLFZON社が開発した最高級モデルです。圧倒的な映像クオリティと
                高精度なセンサー技術により、まるで本物のコースにいるかのような
                リアルな体験を提供します。
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                ゴルフサロングリーン 高針インター店では、このVISION Plusを2台完備。
                最高の環境で、練習からラウンドまで幅広くお楽しみいただけます。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=800&q=80"
                  alt="VISION Plus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[200px]">
                <p className="text-4xl font-bold text-[#1B5E3B]">2<span className="text-lg ml-1">台</span></p>
                <p className="text-gray-500 text-sm mt-1">完備</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 主な機能4つのカード */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">Specifications</span>
            <h2 className="mt-3 text-3xl font-bold text-[#111111]">主な機能</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-[#F9FAFB] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1B5E3B]/5 flex items-center justify-center mb-5">
                  <spec.icon className="w-5 h-5 text-[#1B5E3B]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">{spec.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 搭載機能一覧 */}
      <section className="py-20 lg:py-28 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">Features</span>
            <h2 className="mt-3 text-3xl font-bold text-[#111111]">搭載機能一覧</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white"
              >
                <div className="w-6 h-6 rounded-full bg-[#1B5E3B]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#1B5E3B]" />
                </div>
                <span className="text-gray-700 text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* フォトギャラリー */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#C8A96E] text-sm font-semibold tracking-widest uppercase">Gallery</span>
            <h2 className="mt-3 text-3xl font-bold text-[#111111]">フォトギャラリー</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection page="facility" />
    </div>
  );
}