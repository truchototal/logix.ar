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
    role: lang === "es" ? "Editor & Diseñador" : "Editor & Designer",
    color: "#ff0080",
    gradient: "linear-gradient(135deg, rgba(255, 0, 128, 0.1) 0%, rgba(0, 217, 255, 0.1) 100%)",
    sections: [
      {
        title: lang === "es" ? "Edición de Video Short-Form" : "Short-Form Video Editing",
        desc: lang === "es"
          ? "Dominio total de la narrativa visual para plataformas verticales. Me enfoco en capturar la atención en los primeros 3 segundos y mantenerla mediante cortes dinámicos, sound design inmersivo y subtítulos animados de alto impacto."
          : "Total mastery of visual storytelling for vertical platforms. I focus on capturing attention in the first 3 seconds and maintaining it through dynamic cuts, immersive sound design, and high-impact animated subtitles.",
        items: [
          {
            title: lang === "es" ? "Reels Virales" : "Viral Reels",
            icon: Play,
            tags: ["High-Retention", "Dynamic"],
            details: lang === "es"
              ? "Edición optimizada para algoritmos, priorizando el 'watch time' y la interacción mediante loops perfectos y transiciones fluidas."
              : "Algorithm-optimized editing, prioritizing watch time and interaction through perfect loops and fluid transitions."
          },
          {
            title: lang === "es" ? "Clips de Storytelling" : "Storytelling Clips",
            icon: Sparkles,
            tags: ["Narrative", "Audio"],
            details: lang === "es"
              ? "Transformo contenido crudo en historias cautivadoras, utilizando diseño sonoro avanzado y ritmos visuales que refuerzan el mensaje."
              : "I transform raw content into captivating stories, using advanced sound design and visual rhythms that reinforce the message."
          },
          {
            title: lang === "es" ? "Anuncios para Redes" : "Social Media Ads",
            icon: Rocket,
            tags: ["Conversion", "Impact"],
            details: lang === "es"
              ? "Creación de anuncios diseñados específicamente para generar clics, combinando estética premium con llamados a la acción claros."
              : "Creation of ads designed specifically to generate clicks, combining premium aesthetics with clear calls to action."
          },
        ]
      },
      {
        title: lang === "es" ? "Diseño Gráfico & Branding" : "Graphic Design & Branding",
        desc: lang === "es"
          ? "Desarrollo de sistemas visuales coherentes que comunican la esencia de cada marca. Desde la arquitectura de un logo hasta la composición de assets digitales, cada píxel tiene un propósito estratégico."
          : "Development of coherent visual systems that communicate the essence of each brand. From logo architecture to digital asset composition, every pixel has a strategic purpose.",
        items: [
          {
            title: lang === "es" ? "Identidad de Marca" : "Brand Identity",
            icon: Monitor,
            tags: ["Scalable", "Modern"],
            details: lang === "es"
              ? "Diseño de logotipos y guías de estilo completas que garantizan una presencia profesional y memorable en todos los canales."
              : "Design of logos and complete style guides that guarantee a professional and memorable presence across all channels."
          },
          {
            title: lang === "es" ? "Assets Publicitarios" : "Advertising Assets",
            icon: Layers,
            tags: ["Layout", "Coherence"],
            details: lang === "es"
              ? "Banners, flyers y piezas gráficas para campañas digitales que mantienen la consistencia visual y maximizan el impacto."
              : "Banners, flyers, and graphic pieces for digital campaigns that maintain visual consistency and maximize impact."
          },
          {
            title: lang === "es" ? "Miniaturas de Alta Conversión" : "High-Conversion Thumbnails",
            icon: Play,
            tags: ["CTR", "Composition"],
            details: lang === "es"
              ? "Diseño de miniaturas personalizadas que destacan en el feed, optimizadas para maximizar el porcentaje de clics (CTR)."
              : "Design of custom thumbnails that stand out in the feed, optimized to maximize the click-through rate (CTR)."
          },
        ]
      }
    ]
  } : {
    name: "Joaquin Lotumolo",
    role: lang === "es" ? "Líder de Automatización e IA" : "Head of Automation & AI",
    color: "#00ff80",
    gradient: "linear-gradient(135deg, rgba(0, 255, 128, 0.1) 0%, rgba(0, 217, 255, 0.1) 100%)",
    sections: [
      {
        title: lang === "es" ? "Sistemas de Automatización" : "Automation Systems",
        desc: lang === "es"
          ? "Arquitectura de flujos de trabajo que eliminan tareas repetitivas y liberan el potencial de los equipos. Integramos herramientas disjuntas en un ecosistema digital fluido y libre de errores."
          : "Workflows architecture that eliminates repetitive tasks and unlocks team potential. We integrate disjointed tools into a fluid, error-free digital ecosystem.",
        items: [
          {
            title: lang === "es" ? "Sincronización de Datos" : "Data Synchronization",
            icon: Layers,
            tags: ["ETL", "Real-Time"],
            details: lang === "es"
              ? "Implementación de flujos que mantienen CRMs, bases de datos y herramientas de gestión actualizadas automáticamente sin intervención humana."
              : "Implementation of flows that keep CRMs, databases, and management tools automatically updated without human intervention."
          },
          {
            title: lang === "es" ? "Orquestación de Procesos" : "Process Orchestration",
            icon: Cpu,
            tags: ["Advanced Logic", "Reliability"],
            details: lang === "es"
              ? "Diseño de flógicas complejas que conectan múltiples plataformas (ej. Make, Zapier, n8n) para automatizar el ciclo de vida completo de un cliente."
              : "Design of complex logic connecting multiple platforms (e.g., Make, Zapier, n8n) to automate a customer's full lifecycle."
          },
          {
            title: lang === "es" ? "Sistemas de Captación" : "Lead Capture Systems",
            icon: Globe,
            tags: ["Scalable", "Webhooks"],
            details: lang === "es"
              ? "Automatización de la entrada de leads desde cualquier fuente, con calificación automática y distribución instantánea al equipo de ventas."
              : "Automation of lead entry from any source, with automatic qualification and instant distribution to the sales team."
          },
        ]
      },
      {
        title: lang === "es" ? "Agentes de Inteligencia Artificial" : "AI Intelligence Agents",
        desc: lang === "es"
          ? "Desarrollo de asistentes autónomos potenciados por LLMs de última generación. No son simples chatbots, sino agentes capaces de razonar, ejecutar tareas y mejorar la eficiencia operativa 24/7."
          : "Development of autonomous assistants powered by latest-generation LLMs. Not just simple chatbots, but agents capable of reasoning, executing tasks, and improving operational efficiency 24/7.",
        items: [
          {
            title: lang === "es" ? "Soporte al Cliente IA" : "AI Customer Support",
            icon: Bot,
            tags: ["NLP", "Context-Aware"],
            details: lang === "es"
              ? "Agentes que resuelven consultas complejas utilizando la base de conocimiento de la empresa con un tono humano y preciso."
              : "Agents that resolve complex inquiries using the company's knowledge base with a human and precise tone."
          },
          {
            title: lang === "es" ? "Calificadores de Leads" : "AI Sales Qualifiers",
            icon: Zap,
            tags: ["Salesforce", "Smart"],
            details: lang === "es"
              ? "Asistentes que conversan con prospectos, filtran por presupuesto/interés y programan reuniones directamente en el calendario."
              : "Assistants that talk to prospects, filter by budget/interest, and schedule meetings directly in the calendar."
          },
          {
            title: lang === "es" ? "Sistemas Multi-Agente" : "Multi-Agent Networks",
            icon: Sparkles,
            tags: ["Collaboration", "AI"],
            details: lang === "es"
              ? "Enjambres de agentes que colaboran entre sí para resolver problemas integrales, desde investigación de mercado hasta redacción de informes."
              : "Swarms of agents collaborating to solve end-to-end problems, from market research to report writing."
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
                <span className="opacity-80">{lang === "es" ? "Portfolio de" : "Portfolio of"}</span> <br />
                <AnimatedGradientText>{portfolioData.name}</AnimatedGradientText>
              </h1>
              <p className="text-xl text-white/60 max-w-2xl">
                {portfolioData.role}. {lang === "es" ? "Explora mi trabajo y especialidades." : "Explore my work and specialties."}
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
