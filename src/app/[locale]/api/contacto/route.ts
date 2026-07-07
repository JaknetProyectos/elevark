import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

const SUPPORT_EMAIL = "ayuda@elevark.com.mx";
const BRAND_NAME = "Elevark";
const BRAND_URL = "elevark.com.mx";
const BRAND_LOGO = "https://elevark.com.mx/title.png"; 

// Campos estándar para filtrarlos en la sección de "Campos adicionales"
const STANDARD_FIELDS = ["nombre", "email", "mensaje", "asunto"];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, email, mensaje, asunto = "Nuevo mensaje de contacto" } = body;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos requeridos (nombre, email, mensaje)" },
        { status: 400 }
      );
    }

    // Extraer de forma dinámica cualquier propiedad extra enviada en el lead
    const extraFields = Object.entries(body).filter(
      ([key, val]) => !STANDARD_FIELDS.includes(key) && val !== undefined && val !== null && val !== ""
    );

    // 1. EMAIL PARA EL NEGOCIO (LEAD DE CONTACTO)
    const businessEmailHtml = renderEmailTemplate({
      title: "Nuevo Lead de Contacto",
      subtitle: "Se ha recibido un nuevo formulario desde el sitio web.",
      nombre,
      email,
      mensaje,
      extraFields,
      isBusiness: true,
    });

    await resend.emails.send({
      from: `${BRAND_NAME} Leads <${SUPPORT_EMAIL}>`, 
      to: SUPPORT_EMAIL,
      subject: `🚨 [Lead] ${asunto} - ${nombre}`,
      html: businessEmailHtml,
    });

    // 2. EMAIL PARA EL CLIENTE (CONFIRMACIÓN DE RECEPCIÓN)
    const clientEmailHtml = renderEmailTemplate({
      title: "Hemos recibido tu mensaje",
      subtitle: "Gracias por ponerte en contacto con nuestro equipo de estrategia y diseño.",
      nombre,
      email,
      mensaje,
      extraFields,
      isBusiness: false,
    });

    await resend.emails.send({
      from: `${BRAND_NAME} <${SUPPORT_EMAIL}>`,
      to: email,
      subject: `✓ Recibimos tu solicitud - ${BRAND_NAME}`,
      html: clientEmailHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Error interno del servidor" },
      { status: 500 }
    );
  }
}

// Función helper para generar el HTML con la estética premium gris oscuro y amarillo de Elevark
function renderEmailTemplate({
  title,
  subtitle,
  nombre,
  email,
  mensaje,
  extraFields,
  isBusiness,
}: {
  title: string;
  subtitle: string;
  nombre: string;
  email: string;
  mensaje: string;
  extraFields: [string, any][];
  isBusiness: boolean;
}) {
  return `
    <!DOCTYPE html>
    <html lang="es">
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
        .section-label { font-size: 11px; font-weight: 700; text-transform: uppercase; tracking-style: normal; letter-spacing: 0.18em; color: #facc15; margin-bottom: 12px; }
        .card { background-color: #1a1a1e; border-radius: 18px; border: 1px solid rgba(255, 255, 255, 0.03); padding: 22px; margin-bottom: 28px; }
        .field { margin-bottom: 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.03); padding-bottom: 12px; }
        .field:last-child { margin-bottom: 0; border-bottom: none; padding-bottom: 0; }
        .label { font-size: 11px; font-weight: 600; text-transform: uppercase; color: #6b7280; letter-spacing: 0.08em; margin-bottom: 5px; }
        .value { font-size: 14px; color: #e5e7eb; font-weight: 500; }
        .msg-box { font-size: 14px; color: #e5e7eb; line-height: 1.6; white-space: pre-wrap; background-color: #1a1a1e; padding: 18px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.03); }
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

            <div class="section-label">${isBusiness ? 'Detalles del Solicitante' : 'Resumen de tu Mensaje'}</div>
            
            <div class="card">
              <div class="field">
                <div class="label">Nombre</div>
                <div class="value">${nombre}</div>
              </div>
              <div class="field">
                <div class="label">Correo Electrónico</div>
                <div class="value" style="color: #facc15; font-weight: 600;">${email}</div>
              </div>
              
              <!-- Render Dinámico de Cualquier Campo Adicional (Telefono, Presupuesto, etc.) -->
              ${extraFields.map(([key, value]) => `
                <div class="field">
                  <div class="label">${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
                  <div class="value">${value}</div>
                </div>
              `).join('')}
            </div>

            <div class="section-label">Mensaje enviado</div>
            <div class="msg-box">${mensaje}</div>

            ${!isBusiness ? `
              <p style="font-size: 13px; color: #6b7280; margin-top: 28px; line-height: 1.6; font-style: italic;">
                * Este es un correo automatizado confirmando la recepción de tu solicitud. Nuestro equipo de estrategia y desarrollo analizará tus datos para contactarte a la brevedad.
              </p>
            ` : ''}
          </div>

          <!-- Footer Legal -->
          <div class="footer">
            © ${new Date().getFullYear()} <a href="${BRAND_URL}">${BRAND_NAME}</a>. Todos los derechos reservados.<br/>
            Infraestructura de Hosting, Estrategia Digital & Desarrollo Web de Alto Rendimiento.
          </div>

        </div>
      </div>
    </body>
    </html>
  `;
}