"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  FileText,
  RotateCcw,
} from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative mt-20 pt-10 overflow-hidden rounded-t-[3rem] border-t border-yellow-400/15 bg-transparent  text-white">

      <div className="relative  pb-10 px-2 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Legal */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-yellow-300">
              {t("legal.title")}
            </h3>

            <div className="space-y-3">
              <Link
                href="/legal/terminos"
                className="group flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-yellow-300"
              >
                <FileText className="h-4 w-4 text-yellow-400 group-hover:text-yellow-300" />
                {t("legal.terms")}
              </Link>

              <Link
                href="/legal/reembolsos"
                className="group flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-yellow-300"
              >
                <RotateCcw className="h-4 w-4 text-yellow-400 group-hover:text-yellow-300" />
                {t("legal.refunds")}
              </Link>

              <Link
                href="/legal/privacidad"
                className="group flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-yellow-300"
              >
                <ShieldCheck className="h-4 w-4 text-yellow-400 group-hover:text-yellow-300" />
                {t("legal.privacy")}
              </Link>
            </div>

            <div className="mt-8">
              <img
                src="/cards.png"
                alt={t("legal.paymentAlt")}
                className="h-14 w-auto opacity-90"
              />
            </div>
          </div>


          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-yellow-300">
              {t("contact.title")}
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#182137] text-yellow-300">
                  <Phone className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    {t("contact.phoneLabel")}
                  </p>

                  <p className="text-sm text-slate-200">
                    5550881886
                  </p>
                </div>
              </div>


              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#182137] text-yellow-300">
                  <MapPin className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    {t("contact.addressLabel")}
                  </p>

                  <p className="text-sm leading-relaxed text-slate-300">
                    {t("contact.addressLine1")},
                    <br />
                    {t("contact.addressLine2")}
                    <br />
                    {t("contact.addressLine3")},
                    <br />
                    {t("contact.addressLine4")}
                  </p>
                </div>
              </div>


              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#182137] text-yellow-300">
                  <Mail className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    {t("contact.emailLabel")}
                  </p>

                  <p className="text-sm text-slate-200">
                    ayuda@elevark.com.mx
                  </p>
                </div>
              </div>

            </div>
          </div>


          {/* Brand */}
          <div className="flex flex-col items-center justify-center md:items-end">

            <div className="flex items-center gap-3 rounded-3xl border border-yellow-400/10 bg-[#121a2c] px-6 py-5 shadow-[0_0_30px_rgba(34,211,238,0.08)]">

              <img
                src="/logo.png"
                alt="Elevark"
                className="h-14 w-auto"
              />

              <img
                src="/title.png"
                alt="Elevark"
                className="h-12 w-auto"
              />

            </div>

            <p className="mt-5 max-w-xs text-center text-xs text-slate-500 md:text-right">
              {t("brand.tagline")}
            </p>

          </div>

        </div>


        {/* Copyright */}
        <div className="mb-12 mt-6 border-t border-yellow-400/10 p-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Elevark. {t("copyright")}
        </div>

        <div className="mb-2 p-1"> {" "}</div>


      </div>
    </footer>
  );
}