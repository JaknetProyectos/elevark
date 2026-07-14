"use client";

import LegalStyle from "@/components/LegalStyle";
import { useLocale } from "next-intl";

function LegalEs() {
  return (
    <div className="legal-container">
      <LegalStyle />

      <section>
        <h1>POLÍTICA DE PRIVACIDAD</h1>

        <p>
          De acuerdo con lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, ESTRATEGIAS PIXPEAK S.A. DE C.V. (en adelante “Elevark”) informa los términos y condiciones aplicables a los datos personales proporcionados a nuestra empresa.
        </p>

        <h3>Recopilación de Datos</h3>

        <p>
          Los datos personales recopilados (Nombre Completo, Correo Electrónico, Número Telefónico, y Detalles de Facturación) se obtienen a través de medios electrónicos, incluyendo formularios y correos electrónicos. Estos datos serán tratados para fines de identificación, promoción y comercialización de nuestros servicios, de acuerdo con nuestro objeto social.
        </p>

        <h3>Uso de los Datos</h3>

        <p>
          El uso de los datos personales recabados incluye, pero no se limita a, de identificación, promoción y comercialización de los servicios ofrecidos por Elevark, tales como Diseño de Aplicaciones, Gráficos Animados, Ilustraciones e Íconos, Manual de Identidad, Diseño de Interfaces de Aplicaciones Móviles, Desarrollo de Plataformas, Diseño de Materiales Digitales, Asesoría en Estrategias de Marketing, Email Marketing, y Optimización para Móviles.
        </p>

        <h3>Transferencia de Datos</h3>

        <p>
          Elevark podrá transferir sus datos personales a terceros, nacionales o extranjeros, siempre que los datos sean utilizados para los fines señalados en este aviso. En caso de transferencia de datos personales sensibles, se requerirá su autorización por escrito.
        </p>

        <h3>Medidas de Seguridad</h3>

        <p>
          Elevark cuenta con medidas de seguridad técnicas, físicas y administrativas para proteger sus datos personales y limitar su uso o divulgación no autorizada.
        </p>

        <h3>Derechos ARCO</h3>

        <p>
          El titular de los datos personales podrá ejercer los derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO), así como los derechos de divulgación y limitación de uso, o la revocación del consentimiento, en cualquier momento. Las solicitudes deben dirigirse a{" "}
          <a href="mailto:ayuda@elevark.com.mx">ayuda@elevark.com.mx</a>, proporcionando domicilio y/o correo electrónico para notificaciones, y documentos que acrediten la titularidad de los datos.
        </p>

        <h3>Modificaciones al Aviso de Privacidad</h3>

        <p>
          Elevark se reserva el derecho de efectuar modificaciones o actualizaciones a este aviso de privacidad, las cuales serán informadas a través de nuestra página web, correo electrónico, o cualquier otro medio autorizado.
        </p>

        <h3>Consentimiento del Usuario</h3>

        <p>
          Al utilizar o contratar los servicios ofrecidos por Elevark, el usuario manifiesta su acuerdo expreso con esta política de privacidad, confirmando que ha leído, entendido y aceptado plenamente los términos y condiciones aquí descritos.
        </p>

        <p>
          Para cualquier duda o aclaración respecto a este aviso de privacidad, por favor contacte a Elevark a través del correo{" "}
          <a href="mailto:ayuda@elevark.com.mx">ayuda@elevark.com.mx</a>.
        </p>
      </section>
    </div>
  );
}

function LegalEn() {
  return (
    <div className="legal-container">
      <LegalStyle />
      <section>
        <h1>PRIVACY POLICY</h1>

        <p>
          In accordance with the provisions of the Federal Law on the Protection of Personal Data Held by Private Parties, ESTRATEGIAS PIXPEAK S.A. DE C.V. (hereinafter referred to as “Elevark”) informs you of the terms and conditions applicable to the personal data provided to our company.
        </p>

        <h3>Data Collection</h3>

        <p>
          The personal data collected (Full Name, Email Address, Phone Number, and Billing Information) is obtained through electronic means, including forms and emails. This data will be processed for identification, promotion, and commercialization of our services, in accordance with our corporate purpose.
        </p>

        <h3>Use of Data</h3>

        <p>
          The use of the personal data collected includes, but is not limited to, identification, promotion, and commercialization of the services offered by Elevark, such as Application Design, Motion Graphics, Illustrations and Icons, Brand Identity Manuals, Mobile Application Interface Design, Platform Development, Digital Material Design, Marketing Strategy Consulting, Email Marketing, and Mobile Optimization.
        </p>

        <h3>Data Transfer</h3>

        <p>
          Elevark may transfer your personal data to third parties, whether domestic or international, provided that such data is used for the purposes described in this Privacy Policy. In the event of the transfer of sensitive personal data, your prior written authorization will be required.
        </p>

        <h3>Security Measures</h3>

        <p>
          Elevark implements technical, physical, and administrative security measures to protect your personal data and to prevent its unauthorized use or disclosure.
        </p>

        <h3>ARCO Rights</h3>

        <p>
          The data subject may exercise their rights of Access, Rectification, Cancellation, and Opposition (ARCO), as well as the rights to restrict the use or disclosure of personal data or to revoke consent, at any time. Requests must be sent to{" "}
          <a href="mailto:ayuda@elevark.com.mx">ayuda@elevark.com.mx</a>, providing a mailing address and/or email address for notifications, along with documents proving ownership of the personal data.
        </p>

        <h3>Changes to This Privacy Policy</h3>

        <p>
          Elevark reserves the right to make modifications or updates to this Privacy Policy, which will be communicated through our website, email, or any other authorized means.
        </p>

        <h3>User Consent</h3>

        <p>
          By using or contracting the services offered by Elevark, the user expressly agrees to this Privacy Policy, confirming that they have read, understood, and fully accepted the terms and conditions described herein.
        </p>

        <p>
          If you have any questions or require further clarification regarding this Privacy Policy, please contact Elevark at{" "}
          <a href="mailto:ayuda@elevark.com.mx">ayuda@elevark.com.mx</a>.
        </p>
      </section>
    </div>
  );
}

export default function LegalPage() {
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-grow mt-32 container mx-auto px-6 py-20 max-w-4xl">
        {locale === "es" ? <LegalEs /> : <LegalEn />}
      </main>
    </div>
  );
}