"use client";

import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";

import {
  Home,
  Building2,
  Layers3,
  Workflow,
  ShoppingCart,
  Languages,
} from "lucide-react";

import { useCart } from "@/context/CartContext";
import { useLocaleContext } from "@/context/LangContext";

export function Header() {
  const t = useTranslations("header");

  const pathname = usePathname();
  const { itemCount } = useCart();
  const { locale, switchLanguage } = useLocaleContext();

  const [langOpen, setLangOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/", label: t("nav.home"), icon: Home },
    { href: "/nosotros", label: t("nav.about"), icon: Building2 },
    { href: "/soluciones", label: t("nav.solutions"), icon: Layers3 },
    { href: "/nuestros-procesos", label: t("nav.processes"), icon: Workflow },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        langRef.current &&
        !langRef.current.contains(event.target as Node)
      ) {
        setLangOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed bottom-4 left-1/2 z-50 w-[95%] -translate-x-1/2 xl:w-[90%]">
      <div className="relative overflow-hidden rounded-[1.9rem] border border-yellow-400/15 bg-[#12192a]/92 backdrop-blur-2xl shadow-[0_16px_70px_rgba(0,0,0,0.55)]">
        {/* Ambient layers */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(250,204,21,0.03),transparent_30%,rgba(34,211,238,0.03))]" />

        <div className="relative flex items-center gap-2 bg-[#0d1322]/90 p-2.5">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="flex h-14 items-center gap-3 rounded-2xl px-3 sm:px-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl">
                <img
                  src="/logo.png"
                  alt={t("logoAlt")}
                  className="h-6 w-6 object-contain"
                />
              </div>

              <div className="hidden sm:block">
                <img
                  src="/title.png"
                  alt={t("titleAlt")}
                  className="h-6 w-auto opacity-95"
                />
              </div>
            </motion.div>
          </Link>

          {/* Navigation */}
          <nav className="flex min-w-0 flex-1 items-center justify-center gap-1 sm:gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="min-w-0 flex-1"
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="relative flex h-14 flex-col items-center justify-center overflow-hidden rounded-2xl px-2 text-center transition-colors"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="dock-active-pill"
                        className="absolute inset-0 rounded-2xl border border-yellow-400/20 bg-[#18233d]"
                        transition={{
                          type: "spring",
                          stiffness: 320,
                          damping: 28,
                        }}
                      />
                    )}

                    <Icon
                      className={`relative z-10 h-5 w-5 transition-all duration-300 ${
                        isActive
                          ? "text-yellow-300 drop-shadow-[0_0_12px_rgba(250,204,21,0.85)]"
                          : "text-slate-400"
                      }`}
                    />

                    <span
                      className={`relative z-10 mt-1 truncate text-[10px] font-medium sm:text-[11px] ${
                        isActive ? "text-yellow-200" : "text-slate-500"
                      }`}
                    >
                      {link.label}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="dock-active-dot"
                        className="relative z-10 mt-1 h-1 w-1 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(250,204,21,0.9)]"
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* Language Selector */}
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => switchLanguage(locale === "es" ? "en" : "es")}
            className="group relative shrink-0"
            aria-label={t("changeLanguage")}
            title={t("changeLanguage")}
          >
            <div className="relative flex h-14 items-center gap-2 overflow-hidden rounded-2xl border border-yellow-400/15 bg-[#182137] px-3 transition-all duration-300 hover:border-yellow-400/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#10182b]">
                <Languages className="h-4 w-4 text-yellow-300" />
              </div>

              <motion.div
                key={locale}
                initial={{
                  opacity: 0,
                  y: 4,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.18,
                }}
                className="relative flex min-w-[38px] items-center justify-center"
              >
                <span className="text-xs font-semibold tracking-wide text-yellow-300 drop-shadow-[0_0_10px_rgba(250,204,21,0.55)]">
                  {locale.toUpperCase()}
                </span>
              </motion.div>
            </div>
          </motion.button>

          {/* Cart */}
          <Link
            href="/carrito"
            className="shrink-0"
            aria-label={t("cart")}
            title={t("cart")}
          >
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="relative flex h-14 items-center gap-3 rounded-2xl px-3 sm:px-4"
            >
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-300 text-black shadow-[0_0_30px_rgba(250,204,21,0.35)]">
                <ShoppingCart className="h-5 w-5" />

                {itemCount > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-yellow-400 px-1 text-[10px] font-bold text-black shadow-[0_0_14px_rgba(34,211,238,0.85)]"
                  >
                    {itemCount}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </header>
  );
}