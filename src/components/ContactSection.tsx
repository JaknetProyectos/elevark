"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useContact } from "@/hooks/useContact";

export function ContactSection() {
  const t = useTranslations("contact");

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const { sendContactForm, isLoading } = useContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("idle");
    setErrorMessage("");

    const result = await sendContactForm(formData);

    if (result.success) {
      setStatus("success");

      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
      });

      return;
    }

    setStatus("error");
    setErrorMessage(result.error || t("form.errorFallback"));
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#0b0f12] py-20 text-white"
    >

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          {/* Left Column */}
          <div>
            <h2 className="font-oswald mb-6 text-4xl md:text-5xl lg:text-6xl">
              {t("title")}
            </h2>

            <p className="mb-8 max-w-lg leading-relaxed text-white/70">
              {t("description")}
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-300">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300">
                    {t("info.email.label")}
                  </h4>

                  <p className="mt-1 text-white/85">
                    {t("info.email.value")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-300">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300">
                    {t("info.phone.label")}
                  </h4>

                  <p className="mt-1 text-white/85">
                    {t("info.phone.value")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-300">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300">
                    {t("info.address.label")}
                  </h4>

                  <p className="mt-1 text-sm leading-relaxed text-white/75">
                    {t("info.address.value")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder={t("form.placeholders.name")}
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    nombre: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-white/10 bg-[#11182d] px-4 py-3 text-white placeholder:text-white/35 transition-all duration-200 focus:border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
                required
              />

              <input
                type="email"
                placeholder={t("form.placeholders.email")}
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-white/10 bg-[#11182d] px-4 py-3 text-white placeholder:text-white/35 transition-all duration-200 focus:border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
                required
              />

              <input
                type="tel"
                placeholder={t("form.placeholders.phone")}
                value={formData.telefono}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    telefono: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-white/10 bg-[#11182d] px-4 py-3 text-white placeholder:text-white/35 transition-all duration-200 focus:border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
              />

              <textarea
                placeholder={t("form.placeholders.message")}
                rows={5}
                value={formData.mensaje}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    mensaje: e.target.value,
                  })
                }
                className="w-full resize-none rounded-2xl border border-white/10 bg-[#11182d] px-4 py-3 text-white placeholder:text-white/35 transition-all duration-200 focus:border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
                required
              />

              {status === "success" && (
                <div className="flex items-center gap-2 rounded-2xl border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-300">
                  <CheckCircle2 className="h-4 w-4" />
                  {t("form.successMessage")}
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300">
                  <AlertCircle className="h-4 w-4" />
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(250,204,21,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? t("form.buttons.sending") : t("form.buttons.send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}