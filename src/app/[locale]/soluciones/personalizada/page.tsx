"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import {
  ArrowRight,
  AlertCircle,
  Loader2,
  DollarSign,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function CustomProductPage() {
  const t = useTranslations("customPlan");
  const router = useRouter();
  const { addItem } = useCart();

  const [quoteNumber, setQuoteNumber] = useState("");
  const [totalPrice, setTotalPrice] = useState<number | "">("");
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const finalPrice = Number(totalPrice) || 0;

    if (!quoteNumber.trim()) {
      setError(t("errors.quoteRequired"));
      return;
    }

    if (finalPrice <= 0) {
      setError(t("errors.invalidAmount"));
      return;
    }

    setIsAdding(true);

    const folioUpper = quoteNumber.trim().toUpperCase();

    addItem(
      {
        image: "/logo.png",
        currency: "MXN + IVA",
        features: [],
        id: `custom-quote-${quoteNumber.trim().toLowerCase()}`,
        name: `Custom - ${folioUpper}`,
        price: finalPrice,
      },
      1
    );

    setTimeout(() => {
      setIsAdding(false);
      router.push("/carrito");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0d1322] text-slate-100 relative overflow-hidden pb-32 selection:bg-yellow-500/30 selection:text-yellow-200">
      
      {/* Capas de Brillo de Fondo Ambientales (Blurs) */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 h-[400px] w-[400px] rounded-full bg-yellow-500/5 blur-[100px]" />

      <main className="relative z-10 mx-auto max-w-3xl px-4 pt-32 lg:pt-40">
        <div className="relative overflow-hidden rounded-[1.9rem] border border-yellow-400/15 bg-[#12192a]/92 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 shadow-[0_16px_70px_rgba(0,0,0,0.55)]">
          
          {/* Capas sutiles internas del contenedor */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_50%)]" />

          <div className="relative z-10 w-full">
            <div className="mb-8">
              <span className="text-yellow-400 font-semibold uppercase tracking-widest text-xs block mb-2 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                {t("form.badge")}
              </span>

              <h1 className="font-oswald text-3xl font-normal tracking-wide text-white md:text-4xl">
                {t("form.title")}
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {t("authorized.description")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="flex items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400 backdrop-blur-md">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Input Folio/Cotización */}
              <div className="space-y-2">
                <label
                  htmlFor="quoteNumber"
                  className="text-[11px] font-bold uppercase tracking-widest text-slate-400 pl-1"
                >
                  {t("form.quoteLabel")}
                </label>

                <input
                  id="quoteNumber"
                  type="text"
                  required
                  placeholder={t("form.quotePlaceholder")}
                  value={quoteNumber}
                  onChange={(e) => setQuoteNumber(e.target.value)}
                  className="h-14 w-full rounded-2xl border border-yellow-400/10 bg-[#0d1322]/90 px-5 text-sm font-mono uppercase tracking-widest text-white outline-none transition-all placeholder:text-slate-600 focus:border-yellow-400/30 focus:ring-4 focus:ring-yellow-400/5"
                />
              </div>

              {/* Input Monto total */}
              <div className="space-y-2">
                <label
                  htmlFor="totalPrice"
                  className="text-[11px] font-bold uppercase tracking-widest text-slate-400 pl-1"
                >
                  {t("form.amountLabel")}
                </label>

                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5 text-yellow-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                    <DollarSign className="h-4 w-4" />
                  </div>

                  <input
                    id="totalPrice"
                    type="number"
                    required
                    step="0.01"
                    min="0.01"
                    placeholder={t("form.amountPlaceholder")}
                    value={totalPrice}
                    onChange={(e) =>
                      setTotalPrice(
                        e.target.value !== "" ? Number(e.target.value) : ""
                      )
                    }
                    className="h-14 w-full rounded-2xl border border-yellow-400/10 bg-[#0d1322]/90 pl-11 pr-16 text-sm font-semibold text-white outline-none transition-all placeholder:text-slate-600 focus:border-yellow-400/30 focus:ring-4 focus:ring-yellow-400/5"
                  />

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                    <span className="text-xs font-bold tracking-wider text-slate-500">
                      MXN
                    </span>
                  </div>
                </div>

                <p className="pl-1 text-[11px] text-slate-500">
                  {t("form.taxNote")}
                </p>
              </div>

              {/* Botón de envío */}
              <div className="pt-4">
                <motion.button
                  whileTap={!isAdding ? { scale: 0.98 } : {}}
                  type="submit"
                  disabled={isAdding}
                  className={[
                    "group flex h-14 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-300 uppercase tracking-wider",
                    isAdding
                      ? "cursor-not-allowed bg-slate-800 text-slate-500 border border-slate-700/50"
                      : "bg-yellow-300 text-black hover:-translate-y-0.5 hover:bg-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.25)]",
                  ].join(" ")}
                >
                  {isAdding ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>{t("buttons.adding")}</span>
                    </>
                  ) : (
                    <>
                      <span>{t("buttons.addToCart")}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}