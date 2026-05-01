import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight, Check, Zap, Crown, Building2,
  Quote, MessageCircle, Shield, Clock, Sparkles,
  ChevronDown, Search, Wrench, Rocket, Users,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import BlurReveal from "@/components/shared/BlurReveal";
import { useState } from "react";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

const Planes = () => {
  const { t, lang } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = [
    {
      icon: Zap,
      name: t("plans.start.name"),
      tagline: t("plans.start.tagline"),
      ideal: t("plans.start.ideal"),
      priceSetup: t("plans.start.price.setup"),
      priceMonthly: t("plans.start.price.monthly"),
      features: [
        t("plans.start.f1"), t("plans.start.f2"), t("plans.start.f3"),
        t("plans.start.f4"), t("plans.start.f5"), t("plans.start.f6"),
      ],
      highlighted: false,
      accent: "rgba(59, 130, 246, 0.12)",
      accentSolid: "#3B82F6",
    },
    {
      icon: Crown,
      name: t("plans.pro.name"),
      tagline: t("plans.pro.tagline"),
      ideal: t("plans.pro.ideal"),
      priceSetup: t("plans.pro.price.setup"),
      priceMonthly: t("plans.pro.price.monthly"),
      features: [
        t("plans.pro.f1"), t("plans.pro.f2"), t("plans.pro.f3"),
        t("plans.pro.f4"), t("plans.pro.f5"), t("plans.pro.f6"), t("plans.pro.f7"),
      ],
      highlighted: true,
      accent: "rgba(168, 85, 247, 0.15)",
      accentSolid: "#A855F7",
    },
    {
      icon: Building2,
      name: t("plans.enterprise.name"),
      tagline: t("plans.enterprise.tagline"),
      ideal: t("plans.enterprise.ideal"),
      priceSetup: t("plans.enterprise.price.setup"),
      priceMonthly: t("plans.enterprise.price.monthly"),
      features: [
        t("plans.enterprise.f1"), t("plans.enterprise.f2"), t("plans.enterprise.f3"),
        t("plans.enterprise.f4"), t("plans.enterprise.f5"), t("plans.enterprise.f6"),
        t("plans.enterprise.f7"),
      ],
      highlighted: false,
      accent: "rgba(234, 179, 8, 0.12)",
      accentSolid: "#EAB308",
    },
  ];

  const testimonials = [
    { textKey: "plans.testimonials.1.text", nameKey: "plans.testimonials.1.name", roleKey: "plans.testimonials.1.role" },
    { textKey: "plans.testimonials.2.text", nameKey: "plans.testimonials.2.name", roleKey: "plans.testimonials.2.role" },
  ];

  const whoFor = [
    {
      plan: t("plans.start.name"), accentSolid: "#3B82F6",
      title: lang === 'es' ? 'Negocios que están empezando online' : 'Businesses starting online',
      desc: lang === 'es'
        ? 'Si tu negocio no tiene presencia web profesional o dependés de WhatsApp o Instagram para conseguir clientes, Start es tu punto de partida. En 1–2 semanas tenés una base que trabaja para vos.'
        : "If your business has no professional web presence or relies on WhatsApp and Instagram to get clients, Start is your entry point. In 1–2 weeks you have a foundation that works for you.",
      examples: lang === 'es' ? 'Barberías · Salones de belleza · Pet shops · Consultorios · Talleres' : 'Barbershops · Salons · Pet shops · Clinics · Workshops',
    },
    {
      plan: t("plans.pro.name"), accentSolid: "#A855F7",
      title: lang === 'es' ? 'Negocios con flujo constante de clientes' : 'Businesses with steady client flow',
      desc: lang === 'es'
        ? 'Si ya tenés clientes pero perdés horas respondiendo mensajes y coordinando turnos, Pro automatiza ese trabajo. El bot de WhatsApp atiende 24/7 y el sistema de turnos se llena solo.'
        : "If you already have clients but waste hours answering messages and scheduling, Pro automates that work. The WhatsApp bot runs 24/7 and the booking system fills itself.",
      examples: lang === 'es' ? 'Gimnasios · Clínicas estéticas · Centros de salud · Concesionarias · Inmobiliarias' : 'Gyms · Aesthetics clinics · Health centers · Dealerships · Real estate',
    },
    {
      plan: t("plans.enterprise.name"), accentSolid: "#EAB308",
      title: lang === 'es' ? 'Empresas con operación compleja' : 'Companies with complex operations',
      desc: lang === 'es'
        ? 'Si tenés equipos, procesos internos y necesitás que todo funcione conectado, Enterprise construye el ecosistema digital completo. CRM a medida, agentes IA por departamento y soporte permanente.'
        : "If you have teams and internal processes that need to work connected, Enterprise builds the complete digital ecosystem. Custom CRM, AI agents per department, and permanent support.",
      examples: lang === 'es' ? 'Empresas de servicios · Franquicias · Operaciones multi-sede · Distribuidoras' : 'Service companies · Franchises · Multi-location operations · Distributors',
    },
  ];

  const steps = [
    { num: "01", icon: Search, title: t("plans.how.1.title"), desc: t("plans.how.1.desc") },
    { num: "02", icon: Wrench, title: t("plans.how.2.title"), desc: t("plans.how.2.desc") },
    { num: "03", icon: Rocket, title: t("plans.how.3.title"), desc: t("plans.how.3.desc") },
    { num: "04", icon: Users,  title: t("plans.how.4.title"), desc: t("plans.how.4.desc") },
  ];

  const allIncluded = [
    { icon: Shield,   text: lang === 'es' ? 'Sin costos ocultos' : 'No hidden costs' },
    { icon: Clock,    text: lang === 'es' ? 'Entrega en tiempo acordado' : 'On-time delivery' },
    { icon: Sparkles, text: lang === 'es' ? 'Soporte mensual incluido' : 'Monthly support included' },
    { icon: Check,    text: lang === 'es' ? 'Revisiones hasta que quede perfecto' : 'Revisions until perfect' },
  ];

  const faqs = [
    {
      q: lang === 'es' ? '¿Cuánto tarda la implementación?' : 'How long does implementation take?',
      a: lang === 'es'
        ? 'El plan Start se implementa en 1–2 semanas. El Pro en 2–4 semanas. Enterprise puede variar según la complejidad, pero nunca más de 6 semanas.'
        : 'Start plan is implemented in 1–2 weeks. Pro in 2–4 weeks. Enterprise varies by complexity but never more than 6 weeks.',
    },
    {
      q: lang === 'es' ? '¿Qué pasa si no me gusta el resultado?' : "What if I don't like the result?",
      a: lang === 'es'
        ? 'Trabajamos con revisiones incluidas en cada plan. Si no estás conforme, lo ajustamos hasta que funcione para tu negocio.'
        : "We work with revisions included in each plan. If you're not satisfied, we adjust until it works for your business.",
    },
    {
      q: lang === 'es' ? '¿Necesito conocimientos técnicos?' : 'Do I need technical knowledge?',
      a: lang === 'es'
        ? 'Cero. Nosotros hacemos todo. Vos te enfocás en tu negocio, nosotros en el sistema.'
        : 'Zero. We handle everything. You focus on your business, we handle the system.',
    },
    {
      q: lang === 'es' ? '¿Puedo cambiar de plan después?' : 'Can I change plans later?',
      a: lang === 'es'
        ? 'Sí, podés escalar de plan en cualquier momento. Solo pagás la diferencia.'
        : 'Yes, you can scale up at any time. You just pay the difference.',
    },
    {
      q: lang === 'es' ? '¿Los precios están en dólares?' : 'Are prices in USD?',
      a: lang === 'es'
        ? 'Sí, los precios están expresados en dólares estadounidenses. El pago se coordina según tu país y método preferido.'
        : 'Yes, prices are in US dollars. Payment is coordinated according to your country and preferred method.',
    },
  ];

  return (
    <Layout>
      <div className="relative w-full min-h-full" style={{ backgroundColor: 'var(--surface)' }}>
        <section className="relative page-hero flex items-center pb-24">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="inline-block mb-6 px-4 py-2 rounded-full" style={{ border: '1px solid var(--border-color)' }}>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                {t("plans.hero.badge")}
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="font-aspekta font-bold mb-8" style={{ color: 'var(--text-primary)', fontSize: 'clamp(2.2rem, 7vw, 3.5rem)', lineHeight: 1.1 }}>
              {t("plans.hero.title")}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '160%' }}>
              {t("plans.hero.subtitle")}
            </motion.p>
          </div>
        </section>

        <div className="gradient-divider" />

        {/* ========== PLANS GRID ========== */}
        <section className="py-20 sm:py-28" style={{ backgroundColor: 'var(--surface)' }}>
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <BlurReveal>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: 'var(--text-muted)' }}>
                {t("plans.section.label")}
              </p>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: 'var(--text-primary)' }}>
                {t("plans.section.title")}
              </h2>
            </BlurReveal>
            <BlurReveal delay={0.15}>
              <p className="text-base text-center mb-14 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                {t("plans.section.subtitle")}
              </p>
            </BlurReveal>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start"
            >
              {plans.map((plan, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className={`relative rounded-[24px] p-7 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                    plan.highlighted ? 'card-contrast lg:scale-[1.04]' : 'card-surface'
                  }`}
                  style={plan.highlighted ? { boxShadow: '0 12px 48px rgba(0,0,0,0.15)' } : {}}
                >
                  {plan.highlighted && (
                    <div
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                      style={{ background: 'linear-gradient(135deg, #A855F7, #7C3AED)', color: '#FFFFFF' }}
                    >
                      {lang === 'es' ? '⭐ Más popular' : '⭐ Most popular'}
                    </div>
                  )}

                  {/* Icon + name */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: plan.highlighted ? 'rgba(255,255,255,0.12)' : plan.accent }}
                    >
                      <plan.icon
                        className="w-5 h-5"
                        style={{ color: plan.highlighted ? 'var(--card-text)' : plan.accentSolid }}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold leading-tight"
                        style={{ color: plan.highlighted ? 'var(--card-text)' : 'var(--text-primary)' }}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className="text-xs font-medium"
                        style={{ color: plan.highlighted ? 'var(--card-text-muted)' : 'var(--text-muted)' }}
                      >
                        {plan.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div
                    className="rounded-2xl p-5 mb-5"
                    style={{ backgroundColor: plan.highlighted ? 'rgba(255,255,255,0.06)' : 'var(--icon-bg)' }}
                  >
                    <p className="text-2xl font-bold mb-0.5" style={{ color: plan.highlighted ? 'var(--card-text)' : 'var(--text-primary)' }}>
                      {plan.priceSetup}
                    </p>
                    <p className="text-sm font-medium" style={{ color: plan.highlighted ? 'var(--card-text-muted)' : 'var(--text-secondary)' }}>
                      {plan.priceMonthly}
                    </p>
                  </div>

                  {/* Ideal for */}
                  <p className="text-xs mb-5 leading-relaxed" style={{ color: plan.highlighted ? 'var(--card-text-muted)' : 'var(--text-muted)' }}>
                    {plan.ideal}
                  </p>

                  {/* Features */}
                  <div className="flex-1 space-y-2.5 mb-7">
                    {plan.features.map((feature, fi) => (
                      <div key={fi} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            backgroundColor: plan.highlighted ? 'var(--card-text)' : plan.accentSolid,
                            color: plan.highlighted ? 'var(--card-bg)' : '#FFFFFF',
                          }}
                        >
                          <Check className="w-3 h-3" strokeWidth={2.5} />
                        </div>
                        <span className="text-sm leading-snug" style={{ color: plan.highlighted ? 'var(--card-text)' : 'var(--text-primary)' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                      plan.highlighted ? '' : 'btn-secondary'
                    }`}
                    style={plan.highlighted ? { background: 'linear-gradient(135deg, #A855F7, #7C3AED)', color: '#FFFFFF' } : {}}
                  >
                    {lang === 'es' ? 'Empezar ahora' : 'Get started'}
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="gradient-divider" />

        {/* ========== WHO IT'S FOR ========== */}
        <section className="py-20 sm:py-28" style={{ backgroundColor: 'var(--surface-secondary)' }}>
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <BlurReveal>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: 'var(--text-muted)' }}>
                {lang === 'es' ? '¿PARA QUIÉN ES CADA PLAN?' : 'WHO IS EACH PLAN FOR?'}
              </p>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: 'var(--text-primary)' }}>
                {lang === 'es' ? 'Encontrá el tuyo' : 'Find yours'}
              </h2>
            </BlurReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {whoFor.map((w, i) => (
                <BlurReveal key={i} delay={0.08 * i}>
                  <div className="rounded-[20px] p-7 h-full flex flex-col card-surface">
                    <span
                      className="text-xs font-bold uppercase tracking-widest mb-4 inline-block"
                      style={{ color: w.accentSolid }}
                    >
                      Plan {w.plan}
                    </span>
                    <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{w.title}</h3>
                    <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--text-secondary)' }}>{w.desc}</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{w.examples}</p>
                  </div>
                </BlurReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="gradient-divider" />

        {/* ========== PROCESS ========== */}
        <section className="py-20 sm:py-28" style={{ backgroundColor: 'var(--surface-secondary)' }}>
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <BlurReveal>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: 'var(--text-muted)' }}>
                {t("plans.how.label")}
              </p>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: 'var(--text-primary)' }}>
                {t("plans.how.title")}
              </h2>
            </BlurReveal>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="p-7 rounded-[20px] text-center transition-all duration-300 hover:-translate-y-0.5 card-surface"
                >
                  <span className="text-3xl font-bold block mb-4" style={{ color: 'var(--border-color)' }}>{step.num}</span>
                  <step.icon className="w-6 h-6 mx-auto mb-4" style={{ color: 'var(--text-primary)' }} strokeWidth={1.5} />
                  <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="gradient-divider" />

        {/* ========== TESTIMONIALS ========== */}
        <section className="py-20 sm:py-28" style={{ backgroundColor: 'var(--surface)' }}>
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <BlurReveal>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: 'var(--text-muted)' }}>
                {t("plans.testimonials.label")}
              </p>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: 'var(--text-primary)' }}>
                {t("plans.testimonials.title")}
              </h2>
            </BlurReveal>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="rounded-[20px] p-7 card-surface flex flex-col transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Quote className="w-6 h-6 mb-4 opacity-20" style={{ color: 'var(--text-primary)' }} strokeWidth={1} />
                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--text-secondary)' }}>
                    «{t(testimonial.textKey)}»
                  </p>
                  <div className="pt-4 flex items-center gap-3" style={{ borderTop: '1px solid var(--border-color)' }}>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: 'var(--icon-bg)', color: 'var(--text-primary)' }}
                    >
                      {t(testimonial.nameKey).charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{t(testimonial.nameKey)}</p>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t(testimonial.roleKey)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="gradient-divider" />

        {/* ========== FAQ ========== */}
        <section className="py-20 sm:py-28" style={{ backgroundColor: 'var(--surface-secondary)' }}>
          <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
            <BlurReveal>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: 'var(--text-muted)' }}>
                {lang === 'es' ? 'PREGUNTAS FRECUENTES' : 'FAQ'}
              </p>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--text-primary)' }}>
                {lang === 'es' ? '¿Tenés dudas?' : 'Got questions?'}
              </h2>
            </BlurReveal>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <BlurReveal key={i} delay={0.05 * i}>
                  <div
                    className="rounded-2xl overflow-hidden card-surface"
                    style={{ borderColor: openFaq === i ? 'var(--text-muted)' : undefined }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="text-sm font-semibold pr-4" style={{ color: 'var(--text-primary)' }}>
                        {faq.q}
                      </span>
                      <ChevronDown
                        className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
                        style={{ color: 'var(--text-muted)', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)' }}
                        strokeWidth={2}
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  </div>
                </BlurReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CTA FINAL ========== */}
        <section className="py-20 sm:py-28 card-contrast">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
            <BlurReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--card-text)' }}>
                {t("plans.cta.title")}
              </h2>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <p className="text-base mb-10 max-w-lg mx-auto" style={{ color: 'var(--card-text-muted)' }}>
                {t("plans.cta.subtitle")}
              </p>
            </BlurReveal>
            <BlurReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: 'var(--card-text)', color: 'var(--card-bg)' }}
                >
                  {t("plans.cta.button")}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
                <a
                  href="https://wa.me/5492995707006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ border: '1px solid rgba(128,128,128,0.3)', color: 'var(--card-text)' }}
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                  {t("plans.cta.secondary")}
                </a>
              </div>
            </BlurReveal>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Planes;
