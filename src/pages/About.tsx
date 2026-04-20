import { useLanguage } from "@/contexts/LanguageContext";
import { motion, Variants } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Target, Zap, Users, Heart, ArrowRight } from "lucide-react";
import BlurReveal from "@/components/shared/BlurReveal";
import { Link } from "react-router-dom";

const sc: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const si: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } } };

const About = () => {
  const { t, lang } = useLanguage();

  const pillars = [
    { icon: Target, title: lang === 'es' ? "Resultados primero" : "Results first", desc: lang === 'es' ? "Todo lo que hacemos está orientado a que consigas más clientes" : "Everything we do is focused on getting you more clients" },
    { icon: Zap, title: lang === 'es' ? "Sistemas que funcionan" : "Systems that work", desc: lang === 'es' ? "Construimos sistemas completos, no soluciones parciales" : "We build complete systems, not partial solutions" },
    { icon: Users, title: lang === 'es' ? "Para negocios reales" : "For real businesses", desc: lang === 'es' ? "Trabajamos con negocios que quieren crecer y necesitan un sistema profesional" : "We work with businesses that want to grow and need a professional system" },
    { icon: Heart, title: lang === 'es' ? "Acompañamiento continuo" : "Ongoing support", desc: lang === 'es' ? "No te dejamos solo. Soporte mensual incluido" : "We don't leave you alone. Monthly support included" },
  ];

  return (
    <Layout>
      <div style={{ backgroundColor: 'var(--surface)', paddingTop: '60px' }}>
        {/* Hero */}
        <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center mt-16 mb-24">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="inline-block mb-6 px-4 py-2 rounded-full" style={{ border: '1px solid var(--border-color)' }}>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>{t("about.title")}</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="font-aspekta font-bold mb-8" style={{ color: 'var(--text-primary)', fontSize: 'clamp(2.2rem, 7vw, 3.5rem)', lineHeight: 1.1 }}>
              {t("about.hero.title")}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '160%' }}>
              {t("about.hero.subtitle")}
            </motion.p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 sm:py-24" style={{ backgroundColor: 'var(--surface-secondary)' }}>
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <BlurReveal>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: 'var(--text-muted)' }}>{t("about.story.label")}</p>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>{t("about.story.title")}</h2>
            </BlurReveal>
            <BlurReveal delay={0.2}>
              <p className="text-base leading-relaxed text-center" style={{ color: 'var(--text-secondary)', lineHeight: '180%' }}>
                {t("about.story.text")}
              </p>
            </BlurReveal>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 sm:py-24" style={{ backgroundColor: 'var(--surface)' }}>
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BlurReveal>
                <div className="rounded-[24px] p-8 h-full card-contrast">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--card-text-muted)' }}>{t("about.mission.label")}</p>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--card-text)', lineHeight: '170%' }}>
                    {t("about.mission.text")}
                  </p>
                </div>
              </BlurReveal>
              <BlurReveal delay={0.15}>
                <div className="rounded-[24px] p-8 h-full card-contrast">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--card-text-muted)' }}>{t("about.vision.label")}</p>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--card-text)', lineHeight: '170%' }}>
                    {t("about.vision.text")}
                  </p>
                </div>
              </BlurReveal>
            </div>
          </div>
        </section>

        {/* Values / Pillars */}
        <section className="py-16 sm:py-24" style={{ backgroundColor: 'var(--surface-secondary)' }}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <BlurReveal><p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>{t("about.pillars")}</p></BlurReveal>
              <BlurReveal delay={0.1}><h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{t("about.definition.title")}</h2></BlurReveal>
              <BlurReveal delay={0.2}><p className="max-w-2xl mx-auto text-base" style={{ color: 'var(--text-secondary)', lineHeight: '160%' }}>{t("about.definition.subtitle")}</p></BlurReveal>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={sc} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {pillars.map((p, i) => (
                <motion.div key={i} variants={si} className="rounded-[20px] p-8 hover:-translate-y-0.5 transition-all card-surface">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: 'var(--icon-bg)' }}>
                    <p.icon className="w-5 h-5" style={{ color: 'var(--text-primary)' }} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Commitment CTA */}
        <section className="py-16 sm:py-24 card-contrast">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
            <BlurReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--card-text)' }}>{t("about.compromise.title")}</h2>
              <p className="text-base mb-6" style={{ color: 'var(--card-text-muted)', lineHeight: '160%' }}>{t("about.compromise.subtitle")}</p>
              <p className="text-base mb-10" style={{ color: 'var(--card-text-muted)', lineHeight: '160%' }}>{t("about.compromise.future")}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all"
                style={{ backgroundColor: 'var(--card-text)', color: 'var(--card-bg)' }}>
                {t("hero.cta1")} <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </BlurReveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
