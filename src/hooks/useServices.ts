"use client";

import { Product } from "@/types/product";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";


const servicesDataSpanish: Product[] = [
  {
    id: "1",
    name: "PACK DE ICONOS O ELEMENTOS GRÁFICOS",
    price: 100,
    currency: "MXN + IVA",
    image: "https://images.pexels.com/photos/32508435/pexels-photo-32508435.jpeg?auto=compress,format&w=800&q=75",
    features: ["Diseño de 2 iconos personalizados"],
  },
  {
    id: "2",
    name: "PLANTILLA PERSONALIZADA PARA REDES SOCIALES",
    price: 350,
    currency: "MXN + IVA",
    image: "https://images.pexels.com/photos/5426401/pexels-photo-5426401.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Diseño de 1 plantilla para publicaciones, historias o portadas de Facebook, Instagram, LinkedIn, etc.",
    ],
  },
  {
    id: "3",
    name: "DISEÑO DE 1 PLANTILLA PARA PUBLICACIONES",
    price: 580,
    currency: "MXN + IVA",
    image: "https://images.pexels.com/photos/8886104/pexels-photo-8886104.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Guía descargable con combinaciones de colores y tipografías recomendadas para crear una identidad de marca sólida.",
    ],
  },
  {
    id: "4",
    name: "DISEÑO DE APLICACIONES",
    price: 1108,
    currency: "MXN + IVA",
    image: "https://images.pexels.com/photos/11780441/pexels-photo-11780441.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Consultoría: Reunión para entender necesidades y objetivos.",
      "Wireframes Básicos: Bocetos iniciales para 2-3 pantallas.",
      "Diseño de UI: Diseño visual para las pantallas definidas.",
      "Paleta de Colores y Tipografía: Selección de esquema de colores y fuentes.",
      "Prototipo de Baja Fidelidad: Modelo interactivo básico para visualizar navegación.",
      "Revisión: 1-2 rondas de revisiones.",
    ],
  },
  {
    id: "5",
    name: "GRÁFICOS ANIMADOS",
    price: 3800,
    currency: "MXN + IVA",
    image: "https://images.pexels.com/photos/34205960/pexels-photo-34205960.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Consultoría: Reunión para entender el objetivo y los requisitos del proyecto.",
      "Animación Básica: Creación de gráficos animados de hasta 30 segundos.",
      "Diseño Gráfico: Diseño de elementos gráficos necesarios para la animación.",
      "Animación en 2D: Animaciones en 2D sin efectos avanzados.",
      "Revisión: 1 ronda de revisión para ajustes menores.",
    ],
  },
  {
    id: "6",
    name: "ILUSTRACIÓN E ÍCONOS",
    price: 5400,
    currency: "MXN + IVA",
    image: "https://images.pexels.com/photos/31113917/pexels-photo-31113917.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Ilustraciones Personalizadas: Creación de dos ilustraciones a medida.",
      "Diseño de Íconos: Desarrollo de 2 íconos personalizados.",
      "Variación de Estilos: Hasta 4 estilos diferentes.",
      "Revisión y Ajustes.",
      "Entrega en Formatos Diversos: PNG, SVG, AI, EPS.",
    ],
  },
  {
    id: "7",
    name: "DISEÑO DE INTERFACES DE APLICACIONES MÓVILES",
    price: 6500,
    currency: "MXN + IVA",
    image: "https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Investigación y Análisis",
      "Bocetos Iniciales",
      "Diseño Visual (hasta 2 diseños)",
      "Diseño de Interacción",
      "Pruebas de Usabilidad",
      "Entrega y Documentación",
    ],
  },
  {
    id: "8",
    name: "OPTIMIZACIÓN PARA MÓVILES",
    price: 8120,
    currency: "MXN + IVA",
    image: "https://images.pexels.com/photos/32912373/pexels-photo-32912373.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Optimización del Rendimiento",
      "Optimización de la Interfaz de Usuario (UI)",
      "Optimización de la Experiencia del Usuario (UX)",
      "Optimización de Recursos",
      "Pruebas y Depuración",
      "SEO para Móviles (si aplica)",
    ],
  },
  {
    id: "9",
    name: "ASESORÍA EN ESTRATEGIAS DE MARKETING Y DISEÑO",
    price: 10000,
    currency: "MXN + IVA",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Consultoría: Reunión para definir objetivos y necesidades.",
      "Evaluación de Estrategia de Marketing.",
      "Recomendaciones de Diseño.",
      "Plan de Acción.",
      "Sesiones de Asesoría: 2 sesiones de 1 hora cada una.",
      "Informe Resumido.",
    ],
  },
  {
    id: "10",
    name: "EMAIL MARKETING",
    price: 10700,
    currency: "MXN + IVA",
    image: "https://images.pexels.com/photos/5706025/pexels-photo-5706025.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Consultoría: Reunión para definir objetivos y estrategias básicas.",
      "Revisión de Estrategia Actual.",
      "Configuración de Herramientas.",
      "Creación de Plantillas Básicas: Hasta 2 plantillas.",
      "Calendario de Envíos.",
      "Soporte por correo electrónico durante un mes.",
    ],
  },
  {
    id: "11",
    name: "MANUAL DE IDENTIDAD",
    price: 12000,
    currency: "MXN + IVA",
    image: "https://images.pexels.com/photos/326512/pexels-photo-326512.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Consultoría: Reunión para definir los objetivos y el alcance.",
      "Investigación y Análisis del mercado.",
      "Diseño de Logotipo en versiones básicas.",
      "Paleta de Colores con códigos (Pantone, CMYK, RGB, Hex).",
      "Tipografía: Selección de fuentes principales y secundarias.",
      "Manual Básico con especificaciones.",
      "Revisión: 1 ronda de revisión.",
    ],
  },
  {
    id: "12",
    name: "DESARROLLO DE PLATAFORMAS",
    price: 18000,
    currency: "MXN + IVA",
    image: "https://images.pexels.com/photos/6289025/pexels-photo-6289025.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Consultoría: Reunión para definir los objetivos y requisitos.",
      "Diseño de Interfaz (UI) con enfoque en experiencia del usuario.",
      "Desarrollo Web: Plataforma web simple o landing page.",
      "Funcionalidades esenciales: formularios, galerías, redes sociales.",
      "Pruebas y Optimización.",
    ],
  },
  {
    id: "13",
    name: "DISEÑO DE MATERIALES DIGITALES",
    price: 3500,
    currency: "MXN + IVA",
    image: "https://images.pexels.com/photos/13432289/pexels-photo-13432289.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Consultoría: Reunión breve para definir objetivos.",
      "Diseño de Materiales: Flyer, banner o post para redes sociales.",
      "Elementos Gráficos: Inclusión de gráficos simples.",
      "Diseño en Formatos Comunes: JPEG, PNG, PDF.",
      "Revisión: 1 ronda de revisión.",
    ],
  },
];

const servicesDataEnglish: Product[] = [
  {
    id: "1",
    name: "ICONS OR GRAPHIC ELEMENTS PACK",
    price: 100,
    currency: "MXN + VAT",
    image: "https://images.pexels.com/photos/32508435/pexels-photo-32508435.jpeg?auto=compress,format&w=800&q=75",
    features: ["Design of 2 custom icons"],
  },
  {
    id: "2",
    name: "CUSTOM SOCIAL MEDIA TEMPLATE",
    price: 350,
    currency: "MXN + VAT",
    image: "https://images.pexels.com/photos/5426401/pexels-photo-5426401.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Design of 1 template for posts, stories, or covers for Facebook, Instagram, LinkedIn, etc.",
    ],
  },
  {
    id: "3",
    name: "DESIGN OF 1 TEMPLATE FOR POSTS",
    price: 580,
    currency: "MXN + VAT",
    image: "https://images.pexels.com/photos/8886104/pexels-photo-8886104.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Downloadable guide with recommended color combinations and typography to create a solid brand identity.",
    ],
  },
  {
    id: "4",
    name: "APPLICATION DESIGN",
    price: 1108,
    currency: "MXN + VAT",
    image: "https://images.pexels.com/photos/11780441/pexels-photo-11780441.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Consulting: Meeting to understand needs and objectives.",
      "Basic Wireframes: Initial sketches for 2-3 screens.",
      "UI Design: Visual design for the defined screens.",
      "Color Palette and Typography: Selection of color scheme and fonts.",
      "Low-Fidelity Prototype: Basic interactive model to visualize navigation.",
      "Review: 1-2 rounds of reviews.",
    ],
  },
  {
    id: "5",
    name: "MOTION GRAPHICS",
    price: 3800,
    currency: "MXN + VAT",
    image: "https://images.pexels.com/photos/34205960/pexels-photo-34205960.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Consulting: Meeting to understand project objectives and requirements.",
      "Basic Animation: Creation of motion graphics up to 30 seconds long.",
      "Graphic Design: Design of necessary graphic elements for the animation.",
      "2D Animation: 2D animations without advanced effects.",
      "Review: 1 round of review for minor adjustments.",
    ],
  },
  {
    id: "6",
    name: "ILLUSTRATION AND ICONS",
    price: 5400,
    currency: "MXN + VAT",
    image: "https://images.pexels.com/photos/31113917/pexels-photo-31113917.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Custom Illustrations: Creation of two tailor-made illustrations.",
      "Icon Design: Development of 2 custom icons.",
      "Style Variation: Up to 4 different styles.",
      "Review and Adjustments.",
      "Delivery in Multiple Formats: PNG, SVG, AI, EPS.",
    ],
  },
  {
    id: "7",
    name: "MOBILE APPLICATION INTERFACE DESIGN",
    price: 6500,
    currency: "MXN + VAT",
    image: "https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Research and Analysis",
      "Initial Sketches",
      "Visual Design (up to 2 designs)",
      "Interaction Design",
      "Usability Testing",
      "Delivery and Documentation",
    ],
  },
  {
    id: "8",
    name: "MOBILE OPTIMIZATION",
    price: 8120,
    currency: "MXN + VAT",
    image: "https://images.pexels.com/photos/32912373/pexels-photo-32912373.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Performance Optimization",
      "User Interface (UI) Optimization",
      "User Experience (UX) Optimization",
      "Resource Optimization",
      "Testing and Debugging",
      "Mobile SEO (if applicable)",
    ],
  },
  {
    id: "9",
    name: "MARKETING AND DESIGN STRATEGY CONSULTING",
    price: 10000,
    currency: "MXN + VAT",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Consulting: Meeting to define objectives and needs.",
      "Marketing Strategy Assessment.",
      "Design Recommendations.",
      "Action Plan.",
      "Consulting Sessions: 2 sessions of 1 hour each.",
      "Summary Report.",
    ],
  },
  {
    id: "10",
    name: "EMAIL MARKETING",
    price: 10700,
    currency: "MXN + VAT",
    image: "https://images.pexels.com/photos/5706025/pexels-photo-5706025.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Consulting: Meeting to define objectives and basic strategies.",
      "Current Strategy Review.",
      "Tool Configuration.",
      "Basic Template Creation: Up to 2 templates.",
      "Shipping Schedule.",
      "Email support for one month.",
    ],
  },
  {
    id: "11",
    name: "BRAND IDENTITY MANUAL",
    price: 12000,
    currency: "MXN + VAT",
    image: "https://images.pexels.com/photos/326512/pexels-photo-326512.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Consulting: Meeting to define objectives and scope.",
      "Market Research and Analysis.",
      "Logo Design in basic versions.",
      "Color Palette with codes (Pantone, CMYK, RGB, Hex).",
      "Typography: Selection of primary and secondary fonts.",
      "Basic Manual with specifications.",
      "Review: 1 round of review.",
    ],
  },
  {
    id: "12",
    name: "PLATFORM DEVELOPMENT",
    price: 18000,
    currency: "MXN + VAT",
    image: "https://images.pexels.com/photos/6289025/pexels-photo-6289025.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Consulting: Meeting to define objectives and requirements.",
      "Interface Design (UI) with a focus on user experience.",
      "Web Development: Simple web platform or landing page.",
      "Essential features: forms, galleries, social media.",
      "Testing and Optimization.",
    ],
  },
  {
    id: "13",
    name: "DIGITAL MATERIALS DESIGN",
    price: 3500,
    currency: "MXN + VAT",
    image: "https://images.pexels.com/photos/13432289/pexels-photo-13432289.jpeg?auto=compress,format&w=800&q=75",
    features: [
      "Consulting: Brief meeting to define objectives.",
      "Materials Design: Flyer, banner, or social media post.",
      "Graphic Elements: Inclusion of simple graphics.",
      "Design in Common Formats: JPEG, PNG, PDF.",
      "Review: 1 round of review.",
    ],
  },
];

export function useServices() {
  const [services, setServices] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const locale = useLocale()

  const servicesData = locale == "es" ? servicesDataSpanish : servicesDataEnglish;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Simular delay de red
        await new Promise((resolve) => setTimeout(resolve, 500));
        setServices(servicesData);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar los servicios");
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
}
