"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ContactSection } from "@/components/ContactSection";
import {
  Palette,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="min-h-screen bg-[#0b1020] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-80px] h-[320px] w-[320px] rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute right-[-100px] top-[20%] h-[260px] w-[260px] rounded-full bg-yellow-400/10 blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            {/* Left Content */}
            <div className="relative z-10 animate-in fade-in slide-in-from-left-8 duration-700">

              <h1 className="font-oswald text-5xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                {t("hero.title.part1")}
                <span className="relative ml-3 inline-block text-yellow-400">
                  {t("hero.title.highlight")}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 180 12"
                    fill="none"
                  >
                    <path
                      d="M2 9C42 2 138 2 178 9"
                      stroke="#facc15"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <br />
                {t("hero.title.part2")}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                {t("hero.description")}
              </p>

            </div>

            {/* Right Visual */}
            <div className="relative flex justify-center animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 rounded-[32px] bg-yellow-400/10 blur-2xl" />

                {/* Decorative frame */}
                <div className="absolute -left-5 -top-5 h-20 w-20 rounded-2xl border border-yellow-400/30" />
                <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-full border border-yellow-400/20" />

                {/* Image card */}
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                  <img
                    src="/hero.png"
                    alt={t("hero.imageAlt")}
                    className="w-full max-w-[520px] rounded-[24px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Services Bar */}
          <div className="relative z-20 mt-16">
            <div className="grid grid-cols-1 gap-4 rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl md:grid-cols-3">
              <div className="group flex items-center gap-4 rounded-2xl border border-transparent bg-[#10182b] px-5 py-4 transition-all duration-300 hover:border-yellow-400/20 hover:bg-[#131d34]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.15)]">
                  <Palette className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    {t("services.branding.category")}
                  </p>
                  <p className="font-medium text-white">
                    {t("services.branding.title")}
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-4 rounded-2xl border border-transparent bg-[#10182b] px-5 py-4 transition-all duration-300 hover:border-yellow-400/20 hover:bg-[#131d34]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                  <ImageIcon className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    {t("services.content.category")}
                  </p>
                  <p className="font-medium text-white">
                    {t("services.content.title")}
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-4 rounded-2xl border border-transparent bg-[#10182b] px-5 py-4 transition-all duration-300 hover:border-yellow-400/20 hover:bg-[#131d34]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.15)]">
                  <Sparkles className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    {t("services.motion.category")}
                  </p>
                  <p className="font-medium text-white">
                    {t("services.motion.title")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Position Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            {/* Left Image */}
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-md">
                <div className="absolute inset-0 rounded-[32px] bg-yellow-400/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                  <img
                    src="/whyus.png"
                    alt={t("strategy.imageAlt")}
                    className="rounded-[24px]"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-300">
                {t("strategy.tag")}
              </p>

              <h2 className="font-oswald text-4xl leading-tight md:text-5xl">
                {t("strategy.title.part1")}
                <span className="text-yellow-400"> {t("strategy.title.highlight")}</span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                {t("strategy.description")}
              </p>

              <div className="mt-8">
                <Link
                  href="#contacto"
                  className="inline-flex items-center rounded-full border border-yellow-400/20 bg-yellow-400 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.35)]"
                >
                  {t("strategy.button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}