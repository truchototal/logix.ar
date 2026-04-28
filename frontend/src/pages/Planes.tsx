import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight, Check, Search, Wrench, Rocket, TrendingUp,
  Zap, Crown, Building2, Star, Quote, MessageCircle
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import BlurReveal from "@/components/shared/BlurReveal";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

const Planes = () => {
  const { t, lang } = useLanguage();

  const processSteps = [
    { num: "01", icon: Search, titleKey: "plans.how.1.title", descKey: "plans.how.1.desc" },
    { num: "02", icon: Wrench, titleKey: "plans.how.2.title", descKey: "plans.how.2.desc" },
    { num: "03", icon: Rocket, titleKey: "plans.how.3.title", descKey: "plans.how.3.desc" },
    { num: "04", icon: TrendingUp, titleKey: "plans.how.4.title", descKey: "plans.how.4.desc" },
  ];

  const plans = [
    {
      icon: Zap,
      name: t("plans.start.name"),
      tagline: t("plans.start.tagline"),
      quote: t("plans.start.quote"),
      ideal: t("plans.start.ideal"),
      priceSetup: t("plans.start.price.setup"),
      priceMonthly: t("plans.start.price.monthly"),
      features: [
        t("plans.start.f1"), t("plans.start.f2"), t("plans.start.f3"),
        t("plans.start.f4"), t("plans.start.f5"), t("plans.start.f6"),
      ],
      highlighted: false,
    },
    {
      icon: Crown,
      name: t("plans.pro.name"),
      tagline: t("plans.pro.tagline"),
      quote: t("plans.pro.quote"),
      ideal: t("plans.pro.ideal"),
      priceSetup: t("plans.pro.price.setup"),
      priceMonthly: t("plans.pro.price.monthly"),
      features: [
        t("plans.pro.f1"), t("plans.pro.f2"), t("plans.pro.f3"),
        t("plans.pro.f4"), t("plans.pro.f5"), t("plans.pro.f6"), t("plans.pro.f7"),
      ],
      highlighted: true,
    },
    {
      icon: Building2,
      name: t("plans.enterprise.name"),
      tagline: t("plans.enterprise.tagline"),
      quote: t("plans.enterprise.quote"),
      ideal: t("plans.enterprise.ideal"),
      priceSetup: t("plans.enterprise.price.setup"),
      priceMonthly: t("plans.enterprise.price.monthly"),
      features: [
        t("plans.enterprise.f1"), t("plans.enterprise.f2"), t("plans.enterprise.f3"),
        t("plans.enterprise.f4"), t("plans.enterprise.f5"), t("plans.enterprise.f6"),
        t("plans.enterprise.f7"),
      ],
      highlighted: false,
    },
  ];

  const testimonials = [
    { textKey: "plans.testimonials.1.text", nameKey: "plans.testimonials.1.name", roleKey: "plans.testimonials.1.role" },
    { textKey: "plans.testimonials.2.text", nameKey: "plans.testimonials.2.name", roleKey: "plans.testimonials.2.role" },
    { textKey: "plans.testimonials.3.text", nameKey: "plans.testimonials.3.name", roleKey: "plans.testimonials.3.role" },
  ];

  return (
    <Layout>
      <div className="relative w-full min-h-full" style={{ backgroundColor: 'var(--surface)' }}>

        {/* ========== HERO ========== */}
        <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center pt-16 hero-glow">
          <div className="container mx-auto p-12 px-4 sm:px-6 relative text-center max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-8 inline-block px-4 py-2 rounded-full"
              style={{ color: 'var(--text-muted)', border: '1px solid var(--border-color)' }}
            >
              {t("plans.hero.badge")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-aspekta font-bold mb-8"
              style={{ color: 'var(--text-primary)', fontSize: 'clamp(2.2rem, 7vw, 4.2rem)', lineHeight: 1.08, letterSpacing: '-0.03em' }}
            >
              {t("plans.hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-10 max-w-xl mx-auto leading-relaxed"
              style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '170%' }}
            >
              {t("plans.hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a href="#planes" className="btn-primary inline-flex items-center justify-center gap-2">
                {lang === 'es' ? 'Ver planes' : 'See plans'}
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </motion.div>
          </div>
        </section>

        <div className="gradient-divider" />

        {/* ========== CÓMO LO HACEMOS ========== */}
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
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="relative p-7 rounded-[20px] text-center transition-all duration-300 hover:-translate-y-1 card-surface"
                >
                  <span className="text-3xl font-bold block mb-4" style={{ color: 'var(--border-color)' }}>{step.num}</span>
                  <step.icon className="w-6 h-6 mx-auto mb-4" style={{ color: 'var(--text-primary)' }} strokeWidth={1.5} />
                  <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t(step.titleKey)}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t(step.descKey)}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="gradient-divider" />

        {/* ========== PLANES ========== */}
        <section id="planes" className="py-20 sm:py-28" style={{ backgroundColor: 'var(--surface)' }}>
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
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
            >
              {plans.map((plan, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className={`relative rounded-[24px] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                    plan.highlighted ? 'card-contrast lg:scale-[1.03]' : 'card-surface'
                  }`}
                  style={plan.highlighted ? { boxShadow: '0 8px 40px rgba(0,0,0,0.12)' } : {}}
                >
                  {/* Popular badge */}
                  {plan.highlighted && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                      style={{
                        backgroundColor: 'var(--text-primary)',
                        color: 'var(--surface)',
                      }}
                    >
                      {lang === 'es' ? '⭐ Más popular' : '⭐ Most popular'}
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: plan.highlighted ? 'rgba(255,255,255,0.15)' : 'var(--icon-bg)',
                        }}
                      >
                        <plan.icon
                          className="w-5 h-5"
                          style={{ color: plan.highlighted ? 'var(--card-text)' : 'var(--text-primary)' }}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-xl font-bold"
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

                    <p
                      className="text-sm italic mb-4"
                      style={{ color: plan.highlighted ? 'var(--card-text-muted)' : 'var(--text-secondary)' }}
                    >
                      "{plan.quote}"
                    </p>

                    <p
                      className="text-xs mb-5"
                      style={{ color: plan.highlighted ? 'var(--card-text-muted)' : 'var(--text-muted)' }}
                    >
                      {plan.ideal}
                    </p>
                  </div>

                  {/* Price */}
                  <div
                    className="rounded-2xl p-5 mb-6"
                    style={{
                      backgroundColor: plan.highlighted ? 'rgba(255,255,255,0.08)' : 'var(--icon-bg)',
                    }}
                  >
                    <p
                      className="text-2xl font-bold mb-1"
                      style={{ color: plan.highlighted ? 'var(--card-text)' : 'var(--text-primary)' }}
                    >
                      {plan.priceSetup}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: plan.highlighted ? 'var(--card-text-muted)' : 'var(--text-secondary)' }}
                    >
                      {plan.priceMonthly}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 space-y-3 mb-8">
                    {plan.features.map((feature, fi) => (
                      <div key={fi} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            backgroundColor: plan.highlighted ? 'var(--card-text)' : 'var(--text-primary)',
                            color: plan.highlighted ? 'var(--card-bg)' : 'var(--surface)',
                          }}
                        >
                          <Check className="w-3 h-3" strokeWidth={2.5} />
                        </div>
                        <span
                          className="text-sm"
                          style={{ color: plan.highlighted ? 'var(--card-text)' : 'var(--text-primary)' }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                      plan.highlighted ? '' : 'btn-secondary'
                    }`}
                    style={plan.highlighted ? {
                      backgroundColor: 'var(--card-text)',
                      color: 'var(--card-bg)',
                    } : {}}
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

        {/* ========== TESTIMONIOS ========== */}
        <section className="py-20 sm:py-28" style={{ backgroundColor: 'var(--surface-secondary)' }}>
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
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="rounded-[20px] p-8 card-contrast transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
                >
                  <Quote className="w-8 h-8 mb-5 opacity-30" style={{ color: 'var(--card-text)' }} strokeWidth={1} />
                  <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'var(--card-text-muted)' }}>
                    "{t(testimonial.textKey)}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(128,128,128,0.15)' }}
                    >
                      <Star className="w-4 h-4" style={{ color: 'var(--card-text)' }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--card-text)' }}>{t(testimonial.nameKey)}</p>
                      <p className="text-xs" style={{ color: 'var(--card-text-muted)' }}>{t(testimonial.roleKey)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
              <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: 'var(--card-text-muted)' }}>
                {t("plans.cta.subtitle")}
              </p>
            </BlurReveal>
            <BlurReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
                  style={{ backgroundColor: 'var(--card-text)', color: 'var(--card-bg)' }}
                >
                  {t("plans.cta.button")}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
                <a
                  href="https://wa.me/5492995741741"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
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
