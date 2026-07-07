"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Palette, Image as ImageIcon, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NosotrosPage() {
  const t = useTranslations("about");
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateSkills(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: t("skills.design"), percentage: 100 },
    { name: t("skills.illustrations"), percentage: 100 },
    { name: t("skills.icons"), percentage: 100 },
    { name: t("skills.motion"), percentage: 100 },
  ];

  const specializations = [
    {
      icon: Palette,
      title: t("specializations.branding.title"),
      description: t("specializations.branding.description"),
    },
    {
      icon: ImageIcon,
      title: t("specializations.illustration.title"),
      description: t("specializations.illustration.description"),
    },
    {
      icon: Sparkles,
      title: t("specializations.interaction.title"),
      description: t("specializations.interaction.description"),
    },
  ];

  const highlights = [
    t("highlights.experience"),
    t("highlights.awards"),
    t("highlights.education"),
  ];

  return (
    <div className="bg-[#0d1322] text-slate-100 min-h-screen relative overflow-hidden pb-32 selection:bg-yellow-500/30 selection:text-yellow-200">
      <Header />

      {/* Capas de Brillo de Fondo Ambientales (Blurs) */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-[600px] w-[600px] rounded-full bg-yellow-500/5 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-10 h-[400px] w-[400px] rounded-full bg-yellow-500/5 blur-[100px]" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 lg:pt-28 lg:pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
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
            <p className="text-slate-400 leading-relaxed text-lg mb-6">
              {t("hero.description")}
            </p>
            <p className="text-slate-200 font-medium text-sm tracking-wide uppercase border-l-2 border-yellow-300 pl-3">
              {t("hero.specializationLabel")}
            </p>
          </div>
        </div>
      </section>

      {/* Specializations Grid */}
      <section className="relative pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specializations.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  whileHover={{ y: -4 }}
                  className="relative group overflow-hidden rounded-[1.8rem] border border-yellow-400/10 bg-[#12192a]/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/20 hover:bg-[#18233d]/70 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                >
                  {/* Efecto de contorno brillante interno suave */}
                  <div className="absolute inset-0 rounded-[1.8rem] border border-transparent group-hover:border-yellow-300/10 transition-colors pointer-events-none" />

                  <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-[#10182b] border border-yellow-400/15 group-hover:border-yellow-300/30 transition-colors">
                    <Icon className="w-7 h-7 text-yellow-300 transition-transform duration-300 group-hover:scale-110 group-hover:text-yellow-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]" />
                  </div>
                  <h3 className="font-oswald text-xl mb-3 text-white transition-colors group-hover:text-yellow-300">
                    {spec.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {spec.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History & Competences Section */}
      <section className="relative py-16 border-t border-yellow-400/10 bg-[#12192a]/30 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <span className="text-yellow-400 font-semibold uppercase tracking-widest text-xs block mb-3 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
              {t("history.tag")}
            </span>
            <h2 className="font-oswald text-3xl md:text-4xl text-white">
              {t("history.title.part1")}{" "}
              <span className="text-yellow-300 drop-shadow-[0_0_12px_rgba(250,204,21,0.35)]">
                {t("history.title.highlight")}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Description */}
            <div>
              <p className="text-slate-300 leading-relaxed text-lg">
                {t("history.description")}
              </p>
            </div>

            {/* Right - Progress Bars */}
            <div className="bg-[#10182b]/80 border border-yellow-400/10 p-6 rounded-[1.8rem] space-y-5 backdrop-blur-xl">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-medium">
                      {skill.name}
                    </p>
                    <span className="text-xs font-bold text-yellow-300">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-[#18233d] rounded-full overflow-hidden border border-yellow-400/5">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                      style={{
                        width: animateSkills ? `${skill.percentage}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Highlights */}
          <div className="mt-16 pt-8 border-t border-yellow-400/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="border border-yellow-400/5 bg-[#12192a]/40 p-5 rounded-2xl flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_8px_rgba(250,204,21,0.9)] shrink-0" />
                  <h3 className="font-oswald text-sm text-slate-200 uppercase tracking-wider font-medium">
                    {highlight}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}