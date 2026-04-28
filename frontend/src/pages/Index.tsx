import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight, XCircle, Clock, Instagram, AlertTriangle,
  Globe, MessageCircle, CalendarCheck, Bell,
  TrendingUp, CalendarDays, MessageSquare, BarChart3,
  Check, Search, Wrench, Rocket, Users
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import BlurReveal from "@/components/shared/BlurReveal";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const Index = () => {
  const { t, lang } = useLanguage();

  const problems = [
    { icon: Clock, text: t("problem.1") },
    { icon: XCircle, text: t("problem.2") },
    { icon: Instagram, text: t("problem.3") },
    { icon: AlertTriangle, text: t("problem.4") },
  ];

  const solutions = [
    { icon: Globe, title: t("solution.1.title"), desc: t("solution.1.desc") },
    { icon: MessageCircle, title: t("solution.2.title"), desc: t("solution.2.desc") },
    { icon: CalendarCheck, title: t("solution.3.title"), desc: t("solution.3.desc") },
    { icon: Bell, title: t("solution.4.title"), desc: t("solution.4.desc") },
  ];

  const benefits = [
    { icon: TrendingUp, text: t("benefits.1") },
    { icon: CalendarDays, text: t("benefits.2") },
    { icon: MessageSquare, text: t("benefits.3") },
    { icon: BarChart3, text: t("benefits.4") },
  ];

  const includes = [
    t("includes.1"), t("includes.2"), t("includes.3"), t("includes.4"), t("includes.5"),
  ];

  const steps = [
    { num: "01", icon: Search, title: t("steps.1.title"), desc: t("steps.1.desc") },
    { num: "02", icon: Wrench, title: t("steps.2.title"), desc: t("steps.2.desc") },
    { num: "03", icon: Rocket, title: t("steps.3.title"), desc: t("steps.3.desc") },
    { num: "04", icon: Users, title: t("steps.4.title"), desc: t("steps.4.desc") },
  ];

  return (
    <Layout>
      <div className="relative w-full min-h-full" style={{ backgroundColor: 'var(--surface)' }}>

        {/* ========== HERO ========== */}
        <section className="relative min-h-[85vh] sm:min-h-screen flex items-center pt-16 hero-glow">
          <div className="container mx-auto p-12 px-4 sm:px-6 relative text-center max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-8 inline-block px-4 py-2 rounded-full"
              style={{ color: 'var(--text-muted)', border: '1px solid var(--border-color)' }}
            >
              {lang === 'es' ? 'SISTEMA DE ADQUISICIÓN DE CLIENTES' : 'CLIENT ACQUISITION SYSTEM'}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-aspekta font-bold mb-8"
              style={{ color: 'var(--text-primary)', fontSize: 'clamp(2.2rem, 7vw, 4.2rem)', lineHeight: 1.08, letterSpacing: '-0.03em' }}
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-10 max-w-xl mx-auto leading-relaxed"
              style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '170%' }}
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                {t("hero.cta1")}
              </Link>
              <a href="#como-funciona" className="btn-secondary inline-flex items-center justify-center gap-2">
                {t("hero.cta2")}
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </motion.div>
          </div>
        </section>

        <div className="gradient-divider" />

        {/* ========== PROBLEMA ========== */}
        <section className="py-20 sm:py-28" style={{ backgroundColor: 'var(--surface-secondary)' }}>
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <BlurReveal>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: 'var(--text-muted)' }}>{t("problem.label")}</p>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--text-primary)' }}>{t("problem.title")}</h2>
            </BlurReveal>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((p, i) => (
                <motion.div key={i} variants={staggerItem} className="flex items-center gap-4 p-5 rounded-2xl card-surface">
                  <p.icon className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--text-primary)' }} strokeWidth={1.5} />
                  <span className="text-base font-medium" style={{ color: 'var(--text-primary)' }}>{p.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="gradient-divider" />

        {/* ========== SOLUCIÓN ========== */}
        <section className="py-20 sm:py-28" style={{ backgroundColor: 'var(--surface)' }}>
          <div className="container mx-auto px-4 sm:px-6">
            <BlurReveal>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: 'var(--text-muted)' }}>{t("solution.label")}</p>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 max-w-3xl mx-auto" style={{ color: 'var(--text-primary)' }}>{t("solution.title")}</h2>
            </BlurReveal>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {solutions.map((s, i) => (
                <motion.div key={i} variants={staggerItem} className="rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-0.5 card-contrast">
                  <s.icon className="w-6 h-6 mb-5" style={{ color: 'var(--card-text)' }} strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--card-text)' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed card-muted" style={{ color: 'var(--card-text-muted)' }}>{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="gradient-divider" />

        {/* ========== BENEFICIOS ========== */}
        <section className="py-20 sm:py-28" style={{ backgroundColor: 'var(--surface-secondary)' }}>
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <BlurReveal>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: 'var(--text-muted)' }}>{t("benefits.label")}</p>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--text-primary)' }}>{t("benefits.title")}</h2>
            </BlurReveal>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((b, i) => (
                <motion.div key={i} variants={staggerItem} className="flex items-start gap-4 p-6 rounded-2xl card-surface">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--icon-bg)' }}>
                    <b.icon className="w-5 h-5" style={{ color: 'var(--text-primary)' }} strokeWidth={1.5} />
                  </div>
                  <span className="text-base font-medium pt-2" style={{ color: 'var(--text-primary)' }}>{b.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="gradient-divider" />

        {/* ========== QUÉ INCLUYE ========== */}
        <section className="py-20 sm:py-28" style={{ backgroundColor: 'var(--surface)' }}>
          <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
            <BlurReveal>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: 'var(--text-muted)' }}>{t("includes.label")}</p>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--text-primary)' }}>{t("includes.title")}</h2>
            </BlurReveal>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="space-y-3">
              {includes.map((item, i) => (
                <motion.div key={i} variants={staggerItem} className="flex items-center gap-4 p-5 rounded-2xl card-contrast">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--card-text)', color: 'var(--card-bg)' }}>
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                  <span className="text-base font-medium" style={{ color: 'var(--card-text)' }}>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="gradient-divider" />

        {/* ========== CÓMO FUNCIONA ========== */}
        <section id="como-funciona" className="py-20 sm:py-28" style={{ backgroundColor: 'var(--surface-secondary)' }}>
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <BlurReveal>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: 'var(--text-muted)' }}>{t("steps.label")}</p>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: 'var(--text-primary)' }}>{t("steps.title")}</h2>
            </BlurReveal>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step, i) => (
                <motion.div key={i} variants={staggerItem} className="p-7 rounded-[20px] text-center transition-all duration-300 hover:-translate-y-0.5 card-surface">
                  <span className="text-3xl font-bold block mb-4" style={{ color: 'var(--border-color)' }}>{step.num}</span>
                  <step.icon className="w-6 h-6 mx-auto mb-4" style={{ color: 'var(--text-primary)' }} strokeWidth={1.5} />
                  <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== RESULTADOS ========== */}
        <section className="py-20 sm:py-28" style={{ backgroundColor: 'var(--surface)' }}>
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <BlurReveal>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: 'var(--text-muted)' }}>{t("results.label")}</p>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--text-primary)' }}>{t("results.title")}</h2>
            </BlurReveal>
            <BlurReveal delay={0.2}>
              <div className="rounded-[24px] p-8 sm:p-10 card-contrast">
                <span className="text-xs font-semibold uppercase tracking-widest card-muted" style={{ color: 'var(--card-text-muted)' }}>
                  {lang === 'es' ? 'CASO DE ÉXITO' : 'SUCCESS CASE'}
                </span>
                <h3 className="text-2xl font-bold mt-3 mb-3" style={{ color: 'var(--card-text)' }}>
                  <a href="https://petslifenqn.com.ar" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    Pet's Life ↗
                  </a>
                </h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--card-text-muted)' }}>
                  {lang === 'es'
                    ? 'Negocio local que necesitaba organizar su agenda y dejar de perder consultas. Implementamos su web con sistema de turnos y WhatsApp integrado. Resultado: más consultas, mejor organización y clientes que vuelven.'
                    : 'Local business that needed to organize their schedule and stop losing inquiries. We built their website with a booking system and integrated WhatsApp. Result: more inquiries, better organization, and returning clients.'}
                </p>
                <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--card-text)' }}>
                  {lang === 'es' ? 'Ver más soluciones' : 'See more solutions'}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </BlurReveal>
          </div>
        </section>

        {/* ========== OFERTA ========== */}
        <section className="py-20 sm:py-28" style={{ backgroundColor: 'var(--surface-secondary)' }}>
          <div className="container mx-auto px-4 sm:px-6 max-w-2xl text-center">
            <BlurReveal>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>{t("offer.label")}</p>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>{t("offer.title")}</h2>
            </BlurReveal>
            <BlurReveal delay={0.2}>
              <div className="rounded-[24px] p-8 sm:p-12 card-surface">
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <div className="flex-1 p-5 rounded-2xl" style={{ backgroundColor: 'var(--icon-bg)' }}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>{t("offer.setup")}</p>
                    <p className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{lang === 'es' ? 'Consultar' : 'Ask us'}</p>
                  </div>
                  <div className="flex-1 p-5 rounded-2xl" style={{ backgroundColor: 'var(--icon-bg)' }}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>{t("offer.monthly")}</p>
                    <p className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{lang === 'es' ? 'Consultar' : 'Ask us'}</p>
                  </div>
                </div>
                <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>{t("offer.includes")}</p>
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                  {t("hero.cta1")}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </BlurReveal>
          </div>
        </section>

        {/* ========== CTA FINAL ========== */}
        <section className="py-20 sm:py-28 card-contrast">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
            <BlurReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--card-text)' }}>{t("cta.title")}</h2>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: 'var(--card-text-muted)' }}>{t("cta.subtitle")}</p>
            </BlurReveal>
            <BlurReveal delay={0.2}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
                style={{ backgroundColor: 'var(--card-text)', color: 'var(--card-bg)' }}
              >
                {t("cta.start")}
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </BlurReveal>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Index;
