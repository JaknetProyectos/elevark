"use client";

import { getOptimizedUrl } from "@/lib/images";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const colors = [
  { name: "Royal Blue", hex: "#3c72ed" },
  { name: "Medium Blue", hex: "#4eb7f4" },
  { name: "Yellow", hex: "#fde047" },
  { name: "Dark Gray", hex: "#151f32" },
];

export default function NuestrosProcesosPage() {
  const t = useTranslations("processes");

  return (
    <div className="bg-[#0d1322] text-slate-100 min-h-screen relative overflow-hidden pb-32 selection:bg-yellow-500/30 selection:text-yellow-200">
      
      {/* Luces Ambientales (Blurs) */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[140px]" />
      <div className="pointer-events-none absolute top-[35%] right-10 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[20%] left-0 h-[500px] w-[500px] -translate-x-1/3 rounded-full bg-yellow-500/5 blur-[130px]" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 border-b border-yellow-400/10 bg-[#12192a]/20 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="text-yellow-400 font-semibold uppercase tracking-widest text-xs block mb-3 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                {t("hero.tag")}
              </span>
              <h1 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight text-white">
                {t("hero.title.part1")} <br className="hidden sm:inline" />
                {t("hero.title.part2")}{" "}
                <span className="text-yellow-300 drop-shadow-[0_0_15px_rgba(250,204,21,0.4)]">
                  {t("hero.title.highlight")}
                </span>
              </h1>
              <p className="text-slate-400 leading-relaxed text-lg max-w-lg">
                {t("hero.description")}
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end relative group">
              <div className="absolute inset-0 bg-yellow-400/5 rounded-[1.9rem] blur-2xl pointer-events-none" />
              <img
                src="/hero.png"
                alt={t("hero.imageAlt")}
                className="w-full max-w-lg rounded-xl relative z-10 opacity-90 transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Step 1 */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="flex justify-center">
              <img
                src="/about.png"
                alt={t("phase1.imageAlt")}
                className="w-full rounded-xl max-w-md opacity-85"
              />
            </div>

            {/* Right - Content */}
            <div className="relative overflow-hidden rounded-[1.9rem] border border-yellow-400/10 bg-[#12192a]/60 p-8 lg:p-12 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              <span className="text-yellow-300 font-bold tracking-wide text-sm block mb-2 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">
                {t("phase1.tag")}
              </span>
              <h2 className="font-oswald text-3xl md:text-4xl mb-5 text-white">
                {t("phase1.title")}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {t("phase1.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Step 2 */}
      <section className="relative py-20 border-y border-yellow-400/10 bg-[#12192a]/30 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1 relative overflow-hidden rounded-[1.9rem] border border-yellow-300/10 bg-[#162035]/80 p-8 lg:p-12 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              <span className="text-yellow-400 font-bold tracking-wide text-sm block mb-2 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                {t("phase2.tag")}
              </span>
              <h2 className="font-oswald text-3xl md:text-4xl mb-5 text-white">
                {t("phase2.title")}
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                {t("phase2.description")}
              </p>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="text-yellow-400 h-4 w-4 mt-0.5 shrink-0 drop-shadow-[0_0_4px_rgba(34,211,238,0.5)]" />
                  <span>{t("phase2.features.feat1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-yellow-400 h-4 w-4 mt-0.5 shrink-0 drop-shadow-[0_0_4px_rgba(34,211,238,0.5)]" />
                  <span>{t("phase2.features.feat2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-yellow-400 h-4 w-4 mt-0.5 shrink-0 drop-shadow-[0_0_4px_rgba(34,211,238,0.5)]" />
                  <span>{t("phase2.features.feat3")}</span>
                </li>
              </ul>
            </div>

            {/* Right - Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src="/whyus.png"
                alt={t("phase2.imageAlt")}
                className="w-full rounded-xl max-w-md opacity-85"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Step 3 - Colors */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Colors Grid */}
            <div className="grid grid-cols-2 gap-4">
              {colors.map((color) => (
                <div 
                  key={color.hex} 
                  className="flex flex-col items-center p-5 bg-[#12192a]/60 border border-yellow-400/5 rounded-2xl backdrop-blur-sm"
                >
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-yellow-400/10 shadow-inner flex items-center justify-center relative"
                    style={{ backgroundColor: color.hex }}
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20" />
                  </div>
                  <p className="mt-4 font-semibold text-xs uppercase tracking-wider text-slate-200">
                    {t(`phase3.colors.${color.name.toLowerCase().replace(" ", "")}`, { defaultValue: color.name })}
                  </p>
                  <p className="text-slate-500 text-xs font-mono mt-0.5">{color.hex}</p>
                </div>
              ))}
            </div>

            {/* Right - Content */}
            <div className="relative overflow-hidden rounded-[1.9rem] border border-yellow-400/10 bg-[#12192a]/60 p-8 lg:p-12 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              <span className="text-yellow-300 font-bold tracking-wide text-sm block mb-2 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">
                {t("phase3.tag")}
              </span>
              <h2 className="font-oswald text-3xl md:text-4xl mb-5 text-white">
                {t("phase3.title")}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {t("phase3.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Result Section */}
      <section className="relative py-16 border-t border-yellow-400/10 bg-[#12192a]/30 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <div className="inline-flex flex-col rounded-2xl border border-yellow-400/10 bg-[#10182b] px-6 py-4">
              <span className="text-yellow-400 font-semibold text-xs mb-1 uppercase tracking-wider">
                {t("result.tag")}
              </span>
              <h2 className="font-oswald text-2xl md:text-3xl text-white">
                {t("result.title")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-2xl border border-yellow-400/5 bg-[#12192a]/50 p-2">
              <img
                src={getOptimizedUrl("https://images.unsplash.com/photo-1603714228681-b399854b8f80?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
                alt={t("result.images.processAlt")}
                className="w-full object-fill h-auto rounded-xl opacity-90"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-yellow-400/5 bg-[#12192a]/50 p-2">
              <img
                src={getOptimizedUrl("https://images.unsplash.com/photo-1608286022625-bc07f7a21154?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
                alt={t("result.images.appAlt")}
                className="w-full h-auto rounded-xl opacity-90"
              />
            </div>
          </div>

          {/* Large final image */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-yellow-400/5 bg-[#12192a]/50 p-2 max-w-4xl mx-auto">
            <img
              src={getOptimizedUrl("https://plus.unsplash.com/premium_photo-1684225764999-3597a8da10ab?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
              alt={t("result.images.fullAlt")}
              className="w-full h-auto rounded-xl opacity-95 mx-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}