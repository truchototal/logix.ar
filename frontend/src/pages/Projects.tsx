import { useLanguage } from "@/contexts/LanguageContext";
import { motion, Variants } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { ArrowRight, PawPrint, Dumbbell, Scissors } from "lucide-react";
import BlurReveal from "@/components/shared/BlurReveal";
import { Link } from "react-router-dom";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
};

const Projects = () => {
  const { t, lang } = useLanguage();

  const projects = [
    {
      icon: PawPrint, title: "Pet's Life", type: lang === 'es' ? "Pet Shop / Peluquería Canina" : "Pet Shop / Grooming",
      desc: lang === 'es' ? "Implementamos web profesional con sistema de turnos online y WhatsApp integrado. El negocio pasó de coordinar todo por mensajes a tener un sistema automático que organiza su agenda." : "We built a professional website with online booking and integrated WhatsApp. The business went from coordinating everything via messages to having an automatic system that organizes their schedule.",
      result: lang === 'es' ? "Más consultas, turnos organizados y clientes que vuelven" : "More inquiries, organized bookings, and returning clients",
      link: "https://petslifenqn.com.ar"
    },
    {
      icon: Dumbbell, title: lang === 'es' ? "Ambrosino Automotores" : "Ambrosino Automotores", type: lang === 'es' ? "Concesionario" : "Dealership",
      desc: lang === 'es' ? "Implementamos web profesional con sistema de manejo de publicaciones. El negocio pasó de coordinar todo por mensajes a tener un sistema automático que organiza su agenda." : "Complete system: website with class info, schedules, and publication management system. WhatsApp for automatic inquiries about pricing and availability.",
      result: lang === 'es' ? "Nuevos clientes y ventas" : "New clients and sales",
      link: "https://ambrosino-motors.vercel.app/"
    }
  ];

  return (
    <Layout>
      <div className="relative w-full min-h-full" style={{ backgroundColor: 'var(--surface)' }}>
        {/* Hero */}
        <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center pt-16">
          <div className="container mx-auto px-4 sm:px-6 relative text-center max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="inline-block mb-6 px-4 py-2 rounded-full" style={{ border: '1px solid var(--border-color)' }}>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>{t("projects.hero.title")}</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="font-aspekta font-bold mb-8" style={{ color: 'var(--text-primary)', fontSize: 'clamp(2.2rem, 7vw, 3.5rem)', lineHeight: 1.1 }}>
              {t("projects.title")}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '160%' }}>
              {t("projects.subtitle")}
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {projects.map((project, i) => (
                <motion.div key={i} variants={staggerItem} className="rounded-[24px] p-8 flex flex-col hover:-translate-y-0.5 transition-all card-contrast">
                  <project.icon className="w-7 h-7 mb-5" style={{ color: 'var(--card-text)' }} strokeWidth={1.5} />
                  <span className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--card-text-muted)' }}>{project.type}</span>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--card-text)' }}>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity inline-flex items-center gap-1.5 border-b border-transparent hover:border-current pb-0.5">
                        {project.title} ↗
                      </a>
                    ) : project.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--card-text-muted)' }}>{project.desc}</p>
                  <div className="pt-4" style={{ borderTop: '1px solid rgba(128,128,128,0.2)' }}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--card-text-muted)' }}>{lang === 'es' ? 'Resultado' : 'Result'}</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--card-text)' }}>{project.result}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24" style={{ backgroundColor: 'var(--surface-secondary)' }}>
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl">
            <BlurReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                {lang === 'es' ? '¿Querés resultados como estos?' : 'Want results like these?'}
              </h2>
              <p className="mb-8 text-base" style={{ color: 'var(--text-secondary)' }}>
                {lang === 'es' ? 'Contanos sobre tu negocio y te mostramos cómo podemos ayudarte.' : 'Tell us about your business and we\'ll show you how we can help.'}
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                {t("hero.cta1")} <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </BlurReveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
