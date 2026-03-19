import { useParams, Link, Navigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, Variants } from "framer-motion";
import Layout from "@/components/Layout";
import {
  ArrowLeft, Bot, Zap, Play, Monitor, Layers, Sparkles,
  ExternalLink, CheckCircle2, Globe, Cpu, Rocket
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import BlurReveal from "@/components/BlurReveal";
import AnimatedGradientText from "@/components/AnimatedGradientText";
import MagneticButton from "@/components/MagneticButton";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const MemberPortfolio = () => {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useLanguage();

  if (id !== "tiziano" && id !== "joaquin") {
    return <Navigate to="/equipo" replace />;
  }

  const isTiziano = id === "tiziano";

  const portfolioData = isTiziano ? {
    name: "Tiziano Ambrosino",
    titlePrefix: lang === "es" ? "Multiplicando Ventas con" : "Multiplying Sales with",
    role: lang === "es" ? "Estratega de Contenido & Conversión" : "Content & Conversion Strategist",
    mainDesc: lang === "es"
      ? "No solo edito videos o hago diseños: creo activos digitales que captan la atención de tu cliente ideal, construyen autoridad y convierten tráfico en facturación predecible."
      : "I don't just edit videos or design: I build digital assets that capture your ideal client's attention, build authority, and turn traffic into predictable revenue.",
    color: "#ff0080",
    gradient: "linear-gradient(135deg, rgba(255, 0, 128, 0.1) 0%, rgba(0, 217, 255, 0.1) 100%)",
    showcaseVideos: [
      { id: 1, videoUrl: "" },
      { id: 2, videoUrl: "" },
      { id: 3, videoUrl: "" },
    ],
    sections: [
      {
        title: lang === "es" ? "Video que Cierra Ventas (Short-Form)" : "Video that Closes Sales (Short-Form)",
        desc: lang === "es"
          ? "El contenido es tu mejor vendedor 24/7. Retenemos la atención en los primeros 3 segundos y la transformamos en deseo de compra a través de narrativas visuales de alto impacto."
          : "Content is your best 24/7 salesperson. We hold attention in the first 3 seconds and transform it into buying desire through high-impact visual narratives.",
        items: [
          {
            title: lang === "es" ? "Reels de Alta Retención" : "High-Retention Reels",
            icon: Play,
            tags: ["Tráfico Viral", "Conversión"],
            details: lang === "es"
              ? "Optimizamos tu contenido para vencer el scroll infinito. Más tiempo de visualización significa más alcance gratuito, más seguidores y nuevos clientes potenciales cada día."
              : "We optimize your content to beat the infinite scroll. More watch time means more organic reach, more followers, and new potential clients every day."
          },
          {
            title: lang === "es" ? "Clips de Autoridad" : "Authority Clips",
            icon: Sparkles,
            tags: ["Confianza", "Cierre"],
            details: lang === "es"
              ? "Posicionamos tu marca como la única opción lógica. Elevamos tu mensaje con diseño sonoro impecable y cortes clave que facilitan enormemente el trabajo de tu equipo de ventas."
              : "We position your brand as the only logical choice. We elevate your message with flawless sound design and key cuts that greatly ease your sales team's job."
          },
          {
            title: lang === "es" ? "Anuncios de Respuesta Directa" : "Direct Response Ads",
            icon: Rocket,
            tags: ["ROAS", "CPA Bajo"],
            details: lang === "es"
              ? "Rentabilidad desde el primer día. Diseñamos creatividades psicológicamente preparadas para generar clics baratos, reduciendo tu costo de adquisición y disparando el ROAS."
              : "Profitability from day one. We design creatives psychologically engineered for cheap clicks, lowering your acquisition cost and skyrocketing your ROAS."
          },
        ]
      },
      {
        title: lang === "es" ? "Identidad Visual para Escalar" : "Visual Identity to Scale",
        desc: lang === "es"
          ? "Un negocio premium no se ve barato. Construimos una percepción de valor inquebrantable que te permite aumentar tus precios y separar a tu marca de la competencia."
          : "A premium business doesn't look cheap. We build an unbreakable value perception that allows you to raise prices and distance your brand from the competition.",
        items: [
          {
            title: lang === "es" ? "Branding de Autoridad" : "Authority Branding",
            icon: Monitor,
            tags: ["Premium", "Confianza"],
            details: lang === "es"
              ? "Sistemas visuales corporativos que transmiten confianza total e instantánea para atraer al cliente ideal, el que valora tu trabajo y no pelea por el menor precio."
              : "Corporate visual systems that transmit total and instant trust to attract your ideal client—the one who values your work and doesn't haggle over price."
          },
          {
            title: lang === "es" ? "Assets Orientados a Conversión" : "Conversion Assets",
            icon: Layers,
            tags: ["Ventas", "Fricción Cero"],
            details: lang === "es"
              ? "Desde landing pages persuasivas hasta dossieres de venta impactantes. Diseñamos cada punto de contacto para eliminar la fricción y guiar al usuario directo a la compra."
              : "From persuasive landing pages to striking sales decks. We design every touchpoint to eliminate friction and guide the user straight to purchasing."
          },
          {
            title: lang === "es" ? "Miniaturas Clickeables" : "Clickable Thumbnails",
            icon: Play,
            tags: ["CTR Alto", "Tráfico"],
            details: lang === "es"
              ? "El 80% del éxito de un video está en el clic inicial. Implementamos gatillos psicológicos visuales para garantizar una Tasa de Clics (CTR) superior y acaparar el mercado."
              : "80% of a video's success is in the initial click. We implement visual psychological triggers to guarantee a superior Click-Through Rate (CTR) and capture the market."
          },
        ]
      }
    ]
  } : {
    name: "Joaquin Lotumolo",
    titlePrefix: lang === "es" ? "Escalando Operaciones con" : "Scaling Operations with",
    role: lang === "es" ? "Arquitecto de Sistemas & IA para Negocios" : "Business Systems & AI Architect",
    mainDesc: lang === "es"
      ? "Multiplico la capacidad de tu equipo sin elevar costos de nómina. Automatizo tu captación, seguimiento y entrega de servicios para que tu empresa pueda escalar sin techo operativo."
      : "I multiply your team's capability without raising payroll costs. I automate your lead capture, follow-up, and service delivery so your company can scale without an operational ceiling.",
    color: "#00ff80",
    gradient: "linear-gradient(135deg, rgba(0, 255, 128, 0.1) 0%, rgba(0, 217, 255, 0.1) 100%)",
    sections: [
      {
        title: lang === "es" ? "Sistemas de Operación Escalable" : "Scalable Operation Systems",
        desc: lang === "es"
          ? "Eliminamos los cuellos de botella manuales. Conectamos todas tus herramientas para que la información fluya al instante, evitando que los leads se enfríen y maximizando cada oportunidad."
          : "We eliminate manual bottlenecks. We connect all your tools so information flows instantly, preventing leads from going cold and maximizing every opportunity.",
        items: [
          {
            title: lang === "es" ? "Flujos de Lead Nurturing" : "Lead Nurturing Flows",
            icon: Layers,
            tags: ["Seguimiento", "Conversión"],
            details: lang === "es"
              ? "Sistemas infalibles. Desde que un prospecto impacta hasta que agenda una llamada, nuestra automatización lo nutre y precalifica 24/7 sin que tú muevas un dedo."
              : "Infallible systems. From when a prospect arrives to when they book a call, our automation nurtures and pre-qualifies them 24/7 without you lifting a finger."
          },
          {
            title: lang === "es" ? "Operaciones Sin Fricción" : "Frictionless Operations",
            icon: Cpu,
            tags: ["Eficiencia", "Ahorro"],
            details: lang === "es"
              ? "Integramos tu CRM, pasarelas de pago y entrega de servicio. Reducimos el error humano a cero y devolvemos cientos de horas mensuales para que te enfoques en crecer."
              : "We integrate your CRM, payment gateways, and service delivery. We reduce human error to zero and give back hundreds of hours monthly so you can focus on growing."
          },
          {
            title: lang === "es" ? "Máquinas de Adquisición" : "Acquisition Machines",
            icon: Globe,
            tags: ["Volumen", "Pipelines"],
            details: lang === "es"
              ? "Infraestructura técnica para capturar, derivar y trazar automáticamente cada oportunidad de venta, asegurando que ni un solo dólar se quede sobre la mesa."
              : "Technical infrastructure to automatically capture, route, and track every sales opportunity, ensuring not a single dollar is left on the table."
          },
        ]
      },
      {
        title: lang === "es" ? "Fuerza Laboral con Inteligencia Artificial" : "AI Powered Workforce",
        desc: lang === "es"
          ? "Implementamos agentes de IA que actúan como empleados infatigables. Reducen radicalmente tus costos operativos y elevan la experiencia de tus clientes a un nivel inalcanzable para la competencia."
          : "We implement AI agents that act as tireless employees. They radically reduce your operational costs and elevate your customer experience to a level unreachable by competitors.",
        items: [
          {
            title: lang === "es" ? "Soporte Automatizado 24/7" : "24/7 Automated Support",
            icon: Bot,
            tags: ["Retención", "Satisfacción"],
            details: lang === "es"
              ? "Agentes entreados con tu base de conocimiento que resuelven el 80% de las dudas al instante, con un tono ultra-humano que protege y potencia la relación con tus clientes."
              : "Agents trained on your knowledge base that resolve 80% of doubts instantly, with an ultra-human tone that protects and boosts your relationship with clients."
          },
          {
            title: lang === "es" ? "SDRs Inteligentes (Closers)" : "Intelligent SDRs (Closers)",
            icon: Zap,
            tags: ["Agendamiento", "Cualificación"],
            details: lang === "es"
              ? "Asistentes de ventas que conversan en tiempo real, filtran a los curiosos e insertan prospectos cualificados y listos para comprar directamente en el calendario de tu equipo."
              : "Sales assistants that converse in real-time, filter out tire-kickers, and insert qualified, ready-to-buy prospects right into your team's calendar."
          },
          {
            title: lang === "es" ? "Agentes Operativos Específicos" : "Specific Operative Agents",
            icon: Sparkles,
            tags: ["Ventaja Injusta", "Estrategia"],
            details: lang === "es"
              ? "Redes de IA diseñadas a medida para investigar el mercado, redactar propuestas hiper personalizadas o analizar datos, dándole a tu agencia una ventaja competitiva masiva."
              : "Custom-designed AI networks tailored to research the market, write hyper-personalized proposals, or analyze data, giving your agency a massive competitive edge."
          },
        ]
      }
    ]
  };

  return (
    <Layout>
      <div className="bg-black min-h-screen pt-20">
        {/* Simple Header */}
        <section className="py-20 border-b border-white/5 relative">
          <div className="container mx-auto px-4">
            <Link
              to="/equipo"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {lang === "es" ? "Volver al Equipo" : "Back to Team"}
            </Link>

            <BlurReveal>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display">
                <span className="opacity-80">{portfolioData.titlePrefix}</span> <br />
                <AnimatedGradientText>{portfolioData.name}</AnimatedGradientText>
              </h1>
              <p className="text-xl text-white/60 max-w-2xl">
                {portfolioData.role}. {portfolioData.mainDesc}
              </p>
            </BlurReveal>
          </div>

          {/* Subtle Background Glow */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20 pointer-events-none blur-[120px]"
            style={{ background: portfolioData.gradient }}
          />
        </section>

        {/* Portfolio Sections */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            {portfolioData.sections.map((section, sIdx) => (
              <div key={sIdx} className="mb-24 last:mb-0">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                  <div className="max-w-xl">
                    <h2 className="text-3xl font-bold text-white mb-4">{section.title}</h2>
                    <p className="text-white/60 text-lg">{section.desc}</p>
                  </div>
                  <div className="hidden md:block h-px flex-1 bg-white/10 mx-12 mb-4" />
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {section.items.map((item, iIdx) => (
                    <motion.div key={iIdx} variants={staggerItem}>
                      <SpotlightCard
                        className="p-8 rounded-[32px] border border-white/10 bg-white/[0.02] h-full flex flex-col group hover:border-white/20 transition-all"
                      >
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                          style={{ background: 'rgba(255,255,255,0.05)' }}
                        >
                          <item.icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                        <p className="text-sm text-white/50 mb-6 leading-relaxed">
                          {item.details}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-white/5 text-white/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </SpotlightCard>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Showcase Videos (Only for Short-Form Section) */}
                {portfolioData.showcaseVideos && sIdx === 0 && (
                  <div className="mt-16 border-t border-white/5 pt-16">
                    <div className="text-center mb-12">
                      <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                        {lang === "es" ? "Máquinas de Retención (Short-Form)" : "Retention Machines (Short-Form)"}
                      </h3>
                      <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        {lang === "es"
                          ? "Ejemplos de nuestro formato vertical diseñado para máxima conversión y watch time."
                          : "Examples of our vertical format designed for maximum conversion and watch time."}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                      {portfolioData.showcaseVideos.map((video, idx) => (
                        <motion.div
                          key={video.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.2, duration: 0.6 }}
                          className="flex justify-center"
                        >
                          {/* Phone Mockup Frame */}
                          <div className="relative w-full max-w-[280px] aspect-[9/16] bg-zinc-900 rounded-[2.5rem] border-[6px] border-zinc-900 overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.2)] group ring-1 ring-white/10">
                            {/* Notch */}
                            <div className="absolute top-0 inset-x-0 h-6 bg-zinc-900 rounded-b-xl w-[40%] mx-auto z-20 flex justify-center items-center">
                              <div className="w-12 h-1.5 bg-black/50 rounded-full"></div>
                            </div>

                            {/* Side Buttons */}
                            <div className="absolute -left-[6px] top-24 w-1 h-12 bg-zinc-800 rounded-l-md pointer-events-none"></div>
                            <div className="absolute -left-[6px] top-40 w-1 h-16 bg-zinc-800 rounded-l-md pointer-events-none"></div>
                            <div className="absolute -right-[6px] top-32 w-1 h-16 bg-zinc-800 rounded-r-md pointer-events-none"></div>

                            {/* Video Player placeholder / active */}
                            <div className="w-full h-full bg-zinc-950 flex flex-col items-center justify-center relative">
                              {video.videoUrl ? (
                                <video
                                  src={video.videoUrl}
                                  className="w-full h-full object-cover"
                                  loop
                                  muted
                                  playsInline
                                  controls
                                />
                              ) : (
                                <div className="text-center p-6 text-white/30 flex flex-col items-center gap-4 z-10">
                                  <Play className="w-12 h-12 opacity-50" />
                                  <p className="text-xs font-bold uppercase tracking-widest text-white/50">{lang === "es" ? "Espacio para Video" : "Video Placeholder"}</p>
                                </div>
                              )}
                              {/* Overlay Gradient for depth */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none z-0"></div>

                              {/* Play button overlay if no video playing */}
                              {!video.videoUrl && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                                  <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10">
                                    <Play className="w-8 h-8 text-white/50 translate-x-0.5" />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Closing / Contact CTA for this member */}
        <section className="py-24 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              {lang === "es" ? "¿Trabajamos Juntos?" : "Let's Work Together"}
            </h2>
            <MagneticButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
              >
                {t("hero.cta1")}
                <ExternalLink className="w-5 h-5" />
              </Link>
            </MagneticButton>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MemberPortfolio;
