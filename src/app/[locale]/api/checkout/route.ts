import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getTranslations } from "next-intl/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const SUPPORT_EMAIL = "ayuda@elevark.com.mx";
const BRAND_NAME = "Elevark";
const BRAND_URL = "elevark.com.mx";
const BRAND_LOGO = "https://elevark.com.mx/title.png"; 

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { orderId, amount, customer, items, metadata, locale: bodyLocale } = body;

    // Priorizar el locale enviado desde el frontend o usar fallback
    const acceptLanguage = req.headers.get("accept-language") || "es";
    const fallbackLocale = acceptLanguage.split(",")[0].split("-")[0] || "es";
    const locale = bodyLocale || fallbackLocale;

    // Inicializar traductor de next-intl en server-side
    const t = await getTranslations({ locale, namespace: "PurchaseReceipt" });

    if (!orderId || !amount || !customer || !items) {
      return NextResponse.json(
        { error: t("missingFields") },
        { status: 400 }
      );
    }

    // 1. EMAIL PARA EL CLIENTE (TICKET / RECIBO DE COMPRA)
    const clientReceiptHtml = renderReceiptTemplate({
      title: t("clientTitle"),
      subtitle: t("clientSubtitle", { orderId }),
      orderId,
      amount,
      customer,
      items,
      metadata,
      isBusiness: false,
      locale,
      t,
    });

    await resend.emails.send({
      from: `${BRAND_NAME} <${SUPPORT_EMAIL}>`,
      to: customer.email,
      subject: t("clientSubject", { orderId, brandName: BRAND_NAME }),
      html: clientReceiptHtml,
    });

    // 2. EMAIL PARA EL NEGOCIO (NOTIFICACIÓN DE VENTA)
    const businessNotificationHtml = renderReceiptTemplate({
      title: t("businessTitle"),
      subtitle: t("businessSubtitle", { amount: amount.toFixed(2) }),
      orderId,
      amount,
      customer,
      items,
      metadata,
      isBusiness: true,
      locale,
      t,
    });

    await resend.emails.send({
      from: `${BRAND_NAME} Sales <${SUPPORT_EMAIL}>`,
      to: SUPPORT_EMAIL,
      subject: t("businessSubject", { orderId, amount: amount.toFixed(2) }),
      html: businessNotificationHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Error interno del servidor" },
      { status: 500 }
    );
  }
}

// Función helper para generar el HTML del ticket con la estética gris oscuro y amarillo neón
function renderReceiptTemplate({
  title,
  subtitle,
  orderId,
  amount,
  customer,
  items,
  metadata,
  isBusiness,
  locale,
  t,
}: {
  title: string;
  subtitle: string;
  orderId: string;
  amount: number;
  customer: any;
  items: any[];
  metadata: any;
  isBusiness: boolean;
  locale: string;
  t: any;
}) {
  const formattedDate = new Date().toLocaleDateString(locale === "es" ? "es-MX" : "en-US", {
    timeZone: "America/Mexico_City",
  });

  return `
    <!DOCTYPE html>
    <html lang="${locale}">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0c0e; color: #f3f4f6; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
        .wrapper { max-width: 600px; margin: 40px auto; padding: 20px; }
        .container { background-color: #121214; border: 1px solid rgba(250, 204, 21, 0.1); border-radius: 24px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.6); }
        .header { padding: 36px 24px 24px 24px; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.04); background-color: #1a1a1e; }
        .logo { height: 30px; width: auto; object-fit: contain; }
        .content { padding: 36px 36px; }
        .title { font-size: 24px; font-weight: 600; color: #ffffff; margin: 0 0 10px 0; letter-spacing: -0.02em; }
        .subtitle { font-size: 14px; color: #9ca3af; margin: 0 0 28px 0; line-height: 1.6; }
        .section-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.18em; color: #facc15; margin-bottom: 12px; }
        
        /* Estilos de Ticket de compra */
        .ticket-box { background-color: #1a1a1e; border-radius: 18px; border: 1px solid rgba(255, 255, 255, 0.03); padding: 22px; margin-bottom: 28px; }
        .ticket-row { display: table; width: 100%; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px dashed rgba(255, 255, 255, 0.06); }
        .ticket-row:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
        .item-name { display: table-cell; font-size: 14px; color: #e5e7eb; font-weight: 500; }
        .item-qty { font-size: 12px; color: #6b7280; margin-left: 6px; }
        .item-price { display: table-cell; text-align: right; font-size: 14px; color: #f3f4f6; font-weight: 600; }
        
        .total-box { margin-top: 16px; padding-top: 16px; border-top: 2px solid rgba(250, 204, 21, 0.2); }
        .total-label { font-size: 14px; font-weight: 700; color: #ffffff; text-transform: uppercase; }
        .total-amount { font-size: 20px; font-weight: 700; color: #facc15; text-align: right; }
        
        .grid { display: table; width: 100%; table-layout: fixed; margin-bottom: 24px; }
        .col { display: table-cell; width: 50%; vertical-align: top; }
        .info-label { font-size: 11px; font-weight: 600; text-transform: uppercase; color: #6b7280; letter-spacing: 0.08em; margin-bottom: 4px; }
        .info-value { font-size: 13px; color: #cbd5e1; line-height: 1.5; padding-right: 10px; }
        
        .meta-box { font-size: 13px; color: #9ca3af; background-color: #1a1a1e; padding: 14px 18px; border-radius: 14px; border-left: 3px solid #facc15; margin-bottom: 28px; }
        .footer { text-align: center; padding: 28px; font-size: 12px; color: #4b5563; border-top: 1px solid rgba(255, 255, 255, 0.04); background-color: #0c0c0e; }
        .footer a { color: #facc15; text-decoration: none; font-weight: 500; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          
          <!-- Header Logo -->
          <div class="header">
            <img src="${BRAND_LOGO}" alt="${BRAND_NAME}" class="logo" />
          </div>

          <!-- Body Content -->
          <div class="content">
            <h1 class="title">${title}</h1>
            <p class="subtitle">${subtitle}</p>

            <!-- Datos Generales de la Transacción -->
            <div class="grid">
              <div class="col">
                <div class="info-label">${t("orderIdLabel")}</div>
                <div class="info-value" style="font-family: monospace; font-size: 14px; color: #ffffff;">${orderId}</div>
              </div>
              <div class="col">
                <div class="info-label">${t("paymentDateLabel")}</div>
                <div class="info-value">${formattedDate}</div>
              </div>
            </div>

            <!-- Detalles del Cliente & Envío -->
            <div class="section-label">${isBusiness ? t("buyerInfo") : t("billingDetails")}</div>
            <div class="grid">
              <div class="col">
                <div class="info-label">${t("customerLabel")}</div>
                <div class="info-value">
                  <strong>${customer.nombre} ${customer.apellido}</strong><br/>
                  ${customer.email}<br/>
                  ${customer.telefono}
                </div>
              </div>
              <div class="col">
                <div class="info-label">${t("addressLabel")}</div>
                <div class="info-value">
                  ${customer.direccion}<br/>
                  ${customer.direccion2 ? customer.direccion2 + '<br/>' : ''}
                  ${customer.ciudad}, ${customer.estado}<br/>
                  CP: ${customer.cp}, ${customer.pais}
                  ${customer.empresa ? `<br/><strong>${t("companyLabel")}:</strong> ` + customer.empresa : ''}
                </div>
              </div>
            </div>

            <!-- Notas o Metadata del Cupón -->
            ${metadata && (metadata.notes || Object.keys(metadata).length > 0) ? `
              <div class="info-label">${t("operationDetails")}</div>
              <div class="meta-box">
                ${metadata.notes || JSON.stringify(metadata)}
              </div>
            ` : ''}

            <!-- Desglose de Productos (Ticket) -->
            <div class="section-label">${t("productSummary")}</div>
            <div class="ticket-box">
              ${items.map((item: any) => `
                <div class="ticket-row">
                  <div class="item-name">
                    ${item.product.name}
                    <span class="item-qty">x${item.quantity || 1}</span>
                  </div>
                  <div class="item-price">
                    $${(Number(item.product.price) * (item.quantity || 1)).toFixed(2)} MXN
                  </div>
                </div>
              `).join('')}
              
              <!-- Total -->
              <div class="ticket-row total-box">
                <div class="item-name total-label">${t("totalPaid")}</div>
                <div class="item-price total-amount">$${amount.toFixed(2)} MXN</div>
              </div>
            </div>

            ${!isBusiness ? `
              <p style="font-size: 13px; color: #6b7280; margin-top: 28px; line-height: 1.6; font-style: italic;">
                ${t("clientDisclaimer")}
              </p>
            ` : ''}
          </div>

          <!-- Footer Legal -->
          <div class="footer">
            © ${new Date().getFullYear()} <a href="${BRAND_URL}">${BRAND_NAME}</a>. ${t("allRightsReserved")}<br/>
            ${t("footerText")}
          </div>

        </div>
      </div>
    </body>
    </html>
  `;
}