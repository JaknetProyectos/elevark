"use client";

import LegalStyle from "@/components/LegalStyle";
import { useLocale } from "next-intl";

function LegalEs() {
  return (
    <div className="legal-container">
      <LegalStyle />

      <section>
        <h1>POLÍTICA DE DEVOLUCIONES Y REEMBOLSO</h1>

        <h2>Introducción</h2>
        <p>
          En ELEVARK, nos esforzamos por ofrecer servicios de alta calidad a nuestros
          clientes. Sin embargo, comprendemos que pueden surgir circunstancias en las
          que sea necesario un reembolso. Esta política establece las condiciones y
          procedimientos para las devoluciones y reembolsos de los servicios
          adquiridos a través de nuestro sitio web
          {" "}
          <a
            href="http://elevark.com.mx"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://elevark.com.mx
          </a>.
        </p>

        <h2>1. Ámbito de Aplicación</h2>
        <p>
          Esta política se aplica a todos los servicios ofrecidos por ELEVARK,
          incluyendo pero no limitado a servicios de marketing, diseño gráfico,
          consultoría y otros servicios profesionales. Al contratar nuestros
          servicios, usted acepta los términos de esta política.
        </p>

        <h2>2. Proceso de Reembolso</h2>
        <p>
          Cuando un cliente solicita un reembolso, el proceso se llevará a cabo según
          las siguientes condiciones:
        </p>

        <h3>2.1. Solicitud de Reembolso</h3>
        <p>
          Para iniciar el proceso de reembolso, el cliente debe contactar a ELEVARK a
          través del correo electrónico:
          {" "}
          <a href="mailto:ayuda@elevark.com.mx">
            ayuda@elevark.com.mx
          </a>
          {" "}
          dentro de los primeros 30 días después de la adquisición del servicio.
        </p>

        <h3>2.2. Evaluación de la Solicitud</h3>
        <p>
          ELEVARK evaluará cada solicitud de reembolso de manera individual. Se
          considerarán las razones de la solicitud y el estado del servicio prestado
          hasta el momento de la solicitud.
        </p>

        <h2>3. Elegibilidad para Reembolsos</h2>
        <p>
          Los reembolsos estarán sujetos a las siguientes condiciones:
        </p>

        <h3>3.1. Servicios No Completados</h3>
        <p>
          Si el servicio contratado no ha sido completado conforme a lo acordado, el
          cliente puede ser elegible para un reembolso completo o parcial,
          dependiendo del progreso del trabajo.
        </p>

        <h3>3.2. Cancelación del Proyecto</h3>
        <p>
          En caso de cancelación del proyecto por causas atribuibles a ELEVARK, se
          emitirá un reembolso completo del monto pagado.
        </p>

        <h3>3.3. Créditos</h3>
        <p>
          En lugar de un reembolso directo, el cliente puede optar por recibir un
          crédito en su cuenta de ELEVARK para futuras contrataciones. Este crédito
          será visible en la sección “Mis Finanzas” del perfil del cliente.
        </p>

        <h2>4. Métodos de Reembolso</h2>
        <p>
          El reembolso se realizará utilizando el mismo método de pago empleado por
          el cliente al momento de la transacción inicial.
        </p>

        <h3>4.1. Pagos con Tarjeta de Crédito</h3>
        <p>
          Para pagos realizados con tarjeta de crédito, el reembolso se procesará a
          través de un retorno a la tarjeta utilizada. Este proceso puede tardar hasta
          10 días hábiles en reflejarse en la cuenta del cliente, aunque en casos
          excepcionales podría demorar hasta 30 días hábiles.
        </p>

        <h3>4.2. Otros Métodos de Pago</h3>
        <p>
          En caso de que en el futuro se acutalicen los métodos de pago, por otras
          opciones alternas a las tarjetas de crédito o débito, lso pagos realizados
          mediante esos métodos o plataformas de pago como pueden ser PayPal o
          negocios con servicios similares, el reembolso se procesará a la cuenta
          correspondiente en un plazo de 10 a 30 días hábiles, así como en términos
          por lo dispuesto en la última actualización de estas políticas.
        </p>

        <h2>5. Limitaciones y Exclusiones</h2>
        <p>
          No se otorgarán reembolsos en los siguientes casos:
        </p>

        <h3>5.1. Servicios Completados</h3>
        <p>
          Si el servicio ha sido completamente entregado y aceptado por el cliente,
          no se emitirá ningún reembolso.
        </p>

        <h3>5.2. Gastos Administrativos</h3>
        <p>
          Cualquier gasto administrativo incurrido durante el proceso de contratación
          y prestación del servicio no será reembolsado.
        </p>

        <h2>6. Política de Cancelación de Proyectos</h2>
        <p>
          En caso de problemas con el proyecto, este podrá ser cancelado. Si el
          proyecto se cancela antes de que los fondos sean liberados al profesional,
          el monto en garantía podrá ser reembolsado al cliente o mantenido como
          crédito en su cuenta.
        </p>

        <h2>7. Plazos para el Reembolso</h2>
        <p>
          El proceso de reembolso será gestionado por ELEVARK dentro de las 48 horas
          hábiles posteriores a la recepción de la solicitud de reembolso.
        </p>

        <h2>8. Contacto</h2>
        <p>
          Para cualquier consulta o información adicional sobre esta Política de
          Devoluciones y Reembolso, el usuario puede ponerse en contacto con ELEVARK
          a través del correo electrónico:
          {" "}
          <a href="mailto:ayuda@elevark.com.mx">
            ayuda@elevark.com.mx
          </a>.
        </p>

        <h2>9. Declaración de Consentimiento</h2>
        <p>
          El uso del portal implica el consentimiento expreso del usuario a esta
          Política de Devoluciones y Reembolso. Al utilizar o contratar los servicios
          de ELEVARK, el usuario manifiesta su acuerdo expreso con esta política.
        </p>

        <h2>10. Actualizaciones de la Política</h2>
        <p>
          ELEVARK se reserva el derecho de modificar esta política en cualquier
          momento. Cualquier cambio será comunicado a través de nuestro sitio web y
          será efectivo a partir de su publicación.
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
        <h1>RETURN AND REFUND POLICY</h1>

        <h2>Introduction</h2>
        <p>
          At ELEVARK, we strive to provide high-quality services to our clients.
          However, we understand that circumstances may arise in which a refund is
          necessary. This policy establishes the terms, conditions, and procedures
          for returns and refunds of services purchased through our website{" "}
          <a
            href="http://elevark.com.mx"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://elevark.com.mx
          </a>.
        </p>

        <h2>1. Scope of Application</h2>
        <p>
          This policy applies to all services offered by ELEVARK, including but not
          limited to marketing services, graphic design, consulting, and other
          professional services. By purchasing our services, you agree to the terms
          of this policy.
        </p>

        <h2>2. Refund Process</h2>
        <p>
          When a customer requests a refund, the process will be carried out under
          the following conditions:
        </p>

        <h3>2.1. Refund Request</h3>
        <p>
          To initiate the refund process, the customer must contact ELEVARK via
          email at{" "}
          <a href="mailto:ayuda@elevark.com.mx">
            ayuda@elevark.com.mx
          </a>{" "}
          within the first 30 days after purchasing the service.
        </p>

        <h3>2.2. Evaluation of the Request</h3>
        <p>
          ELEVARK will evaluate each refund request individually. The reasons for
          the request and the status of the services provided up to the time of the
          request will be taken into consideration.
        </p>

        <h2>3. Eligibility for Refunds</h2>
        <p>
          Refunds will be subject to the following conditions:
        </p>

        <h3>3.1. Incomplete Services</h3>
        <p>
          If the contracted service has not been completed as agreed, the customer
          may be eligible for a full or partial refund, depending on the progress of
          the work.
        </p>

        <h3>3.2. Project Cancellation</h3>
        <p>
          In the event that a project is canceled due to reasons attributable to
          ELEVARK, a full refund of the amount paid will be issued.
        </p>

        <h3>3.3. Credits</h3>
        <p>
          Instead of receiving a direct refund, the customer may choose to receive a
          credit in their ELEVARK account for future purchases. This credit will be
          visible in the <strong>"My Finances"</strong> section of the customer's
          profile.
        </p>

        <h2>4. Refund Methods</h2>
        <p>
          Refunds will be issued using the same payment method used by the customer
          for the original transaction.
        </p>

        <h3>4.1. Credit Card Payments</h3>
        <p>
          For payments made by credit card, the refund will be processed as a return
          to the card used for the original purchase. This process may take up to 10
          business days to appear in the customer's account, although in exceptional
          cases it may take up to 30 business days.
        </p>

        <h3>4.2. Other Payment Methods</h3>
        <p>
          If, in the future, additional payment methods are introduced as
          alternatives to credit or debit cards, payments made through those methods
          or payment platforms such as PayPal or similar services will be refunded to
          the corresponding account within 10 to 30 business days, in accordance
          with the provisions established in the latest update of this policy.
        </p>

        <h2>5. Limitations and Exclusions</h2>
        <p>
          Refunds will not be granted in the following cases:
        </p>

        <h3>5.1. Completed Services</h3>
        <p>
          If the service has been fully delivered and accepted by the customer, no
          refund will be issued.
        </p>

        <h3>5.2. Administrative Expenses</h3>
        <p>
          Any administrative expenses incurred during the contracting and delivery
          of the service will not be refunded.
        </p>

        <h2>6. Project Cancellation Policy</h2>
        <p>
          In the event of issues with the project, it may be canceled. If the
          project is canceled before the funds are released to the professional, the
          escrowed amount may either be refunded to the customer or retained as
          account credit.
        </p>

        <h2>7. Refund Processing Time</h2>
        <p>
          ELEVARK will process refund requests within 48 business hours after
          receiving the refund request.
        </p>

        <h2>8. Contact</h2>
        <p>
          For any questions or additional information regarding this Return and
          Refund Policy, users may contact ELEVARK by email at{" "}
          <a href="mailto:ayuda@elevark.com.mx">
            ayuda@elevark.com.mx
          </a>.
        </p>

        <h2>9. Statement of Consent</h2>
        <p>
          Use of the platform constitutes the user's express consent to this Return
          and Refund Policy. By using or purchasing ELEVARK's services, the user
          expressly agrees to the terms of this policy.
        </p>

        <h2>10. Policy Updates</h2>
        <p>
          ELEVARK reserves the right to modify this policy at any time. Any changes
          will be communicated through our website and will become effective upon
          publication.
        </p>
      </section>
    </div>
  );
}

export default function LegalPage() {
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow mt-32 container mx-auto px-6 py-20 max-w-4xl">
        {locale === "es" ? <LegalEs /> : <LegalEn />}
      </main>
    </div>
  );
}