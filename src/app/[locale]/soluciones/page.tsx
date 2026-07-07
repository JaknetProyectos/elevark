"use client";

import { useServices } from "@/hooks/useServices";
import { usePackages } from "@/hooks/usePackages";
import { ContactSection } from "@/components/ContactSection";
import { Link } from "@/i18n/routing";
import { useCart } from "@/context/CartContext";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { getOptimizedUrl } from "@/lib/images";
import { formatPrice } from "@/lib/price";

function ServiceCard({
  service,
}: {
  service: {
    id: string;
    name: string;
    price: number;
    currency: string;
    image: string;
    features: string[];
  };
}) {
  const { addItem } = useCart();
  const t = useTranslations("plans.cards");

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[1.8rem] border border-yellow-400/10 bg-[#12192a]/60 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/25 hover:bg-[#18233d]/70 shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
    >
      <div>
        <div className="aspect-[16/10] overflow-hidden relative border-b border-yellow-400/10">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12192a] to-transparent opacity-40" />
        </div>
        <div className="p-6">
          <h3 className="font-oswald text-xl uppercase mb-2 text-white group-hover:text-yellow-300 transition-colors tracking-wide">
            {service.name}
          </h3>
          <p className="text-yellow-300 font-bold text-lg mb-5 drop-shadow-[0_0_8px_rgba(250,204,21,0.3)]">
            $ {formatPrice(service.price)} <span className="text-xs text-slate-400 font-normal">{t("taxNote")}</span>
          </p>
          <ul className="space-y-2.5 text-sm text-slate-300">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className="text-yellow-400 h-4 w-4 mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="p-6 pt-0">
        <motion.button
          whileTap={{ scale: 0.97 }}
          className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-3 px-4 rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.2)] transition-colors text-sm uppercase tracking-wider"
          onClick={() => {
            addItem({
              name: service.name,
              currency: service.currency,
              features: service.features,
              id: service.id,
              image: service.image,
              price: service.price,
            }, 1);
          }}
        >
          {t("addToCart")}
        </motion.button>
      </div>
    </motion.div>
  );
}

function PackageCard({
  pkg,
}: {
  pkg: {
    id: string;
    name: string;
    price: number;
    currency: string;
    image: string;
    features: string[];
    highlighted?: boolean;
  };
}) {
  const { addItem } = useCart();
  const t = useTranslations("plans.cards");

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.8rem] border bg-[#12192a]/60 backdrop-blur-xl transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.4)] ${
        pkg.highlighted 
          ? "border-yellow-300/40 bg-[#162035]/80 ring-1 ring-yellow-300/20" 
          : "border-yellow-400/10 hover:border-yellow-400/25 hover:bg-[#18233d]/70"
      }`}
    >
      {pkg.highlighted && (
        <div className="absolute top-3 right-4 z-10 bg-yellow-300 text-black text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-[0_0_12px_rgba(250,204,21,0.4)]">
          {t("recommended")}
        </div>
      )}

      <div>
        <div className="aspect-[16/10] overflow-hidden relative border-b border-yellow-400/10">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12192a] to-transparent opacity-40" />
        </div>
        <div className="p-6">
          <h3 className="font-oswald text-xl uppercase mb-2 text-white group-hover:text-yellow-300 transition-colors tracking-wide">
            {pkg.name}
          </h3>
          <p className="text-yellow-300 font-bold text-2xl mb-5 drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]">
            $ {formatPrice(pkg.price)} <span className="text-xs text-slate-400 font-normal">{t("taxNote")}</span>
          </p>
          <ul className="space-y-2.5 text-sm text-slate-300">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className="text-yellow-400 h-4 w-4 mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-6 pt-0">
        <motion.button
          whileTap={{ scale: 0.97 }}
          className={`w-full font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-sm uppercase tracking-wider ${
            pkg.highlighted
              ? "bg-yellow-400 hover:bg-yellow-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              : "bg-yellow-300 hover:bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.2)]"
          }`}
          onClick={() => {
            addItem({
              name: pkg.name,
              currency: pkg.currency,
              features: pkg.features,
              id: pkg.id,
              image: pkg.image,
              price: pkg.price,
              highlighted: pkg.highlighted,
            }, 1);
          }}
        >
          {t("addToCart")}
        </motion.button>
      </div>
    </motion.div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="animate-pulse rounded-[1.8rem] border border-yellow-400/5 bg-[#12192a]/40 overflow-hidden">
      <div className="bg-slate-800/50 aspect-[16/10]" />
      <div className="p-6 space-y-4">
        <div className="h-5 bg-slate-800/80 rounded w-3/4" />
        <div className="h-4 bg-slate-800/80 rounded w-1/4" />
        <div className="space-y-2">
          <div className="h-3 bg-slate-800/50 rounded w-full" />
          <div className="h-3 bg-slate-800/50 rounded w-5/6" />
        </div>
        <div className="h-10 bg-slate-800/80 rounded-xl w-full pt-4" />
      </div>
    </div>
  );
}

export default function SolucionesPage() {
  const t = useTranslations("plans");
  const { services, loading: servicesLoading, error: servicesError } = useServices();
  const { packages, loading: packagesLoading, error: packagesError } = usePackages();

  return (
    <div className="bg-[#0d1322] text-slate-100 min-h-screen relative overflow-hidden pb-32 selection:bg-yellow-500/30 selection:text-yellow-200">
      
      {/* Capas de Brillo de Fondo Ambientales (Blurs) */}
      <div className="pointer-events-none absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[150px]" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 lg:pt-28 lg:pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-normal mb-4 text-white">
            {t("services.title")}
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
            {t("services.description")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {servicesError && (
            <div className="text-center text-red-400 bg-red-500/10 border border-red-500/20 p-4 rounded-xl mb-8">{servicesError}</div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesLoading
              ? Array.from({ length: 6 }).map((_, idx) => <LoadingSkeleton key={idx} />)
              : services.map((service) => <ServiceCard key={service.id} service={service} />)}
          </div>
        </div>
      </section>

      {/* Custom Project Section */}
      <section className="relative py-16 border-y border-yellow-400/10 bg-[#12192a]/30 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 relative rounded-2xl overflow-hidden border border-yellow-400/10 max-w-2xl mx-auto shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img
                src={getOptimizedUrl("https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
                alt={t("customProject.imageAlt")}
                className="w-full h-auto object-cover opacity-90"
              />
            </div>
            <h2 className="font-oswald text-2xl md:text-3xl uppercase mb-4 text-white">
              {t("customProject.title")}
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed uppercase text-xs tracking-wider max-w-2xl mx-auto">
              {t("customProject.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#contacto"
                className="w-full sm:w-auto inline-block bg-yellow-300 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-colors duration-200 uppercase tracking-wider text-xs shadow-[0_0_15px_rgba(250,204,21,0.2)]"
              >
                {t("customProject.buttons.quote")}
              </Link>
              <Link
                href="/soluciones/personalizada"
                className="w-full sm:w-auto inline-block border border-yellow-400/20 bg-[#18233d]/60 text-yellow-300 px-8 py-3 rounded-xl font-semibold hover:bg-[#18233d] hover:border-yellow-400/40 transition-colors duration-200 uppercase tracking-wider text-xs"
              >
                {t("customProject.buttons.pay")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="font-oswald text-4xl md:text-5xl font-normal mb-4 text-white">
              {t("packages.title")}
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
              {t("packages.description")}
            </p>
          </div>

          {packagesError && (
            <div className="text-center text-red-400 bg-red-500/10 border border-red-500/20 p-4 rounded-xl mb-8">{packagesError}</div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packagesLoading
              ? Array.from({ length: 3 }).map((_, idx) => <LoadingSkeleton key={idx} />)
              : packages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}