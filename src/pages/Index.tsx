import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, type Variants } from "framer-motion";
import { Bot, Zap, Plug, Settings, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SpotlightCard from "@/components/SpotlightCard";
import BlurReveal from "@/components/BlurReveal";
import AnimatedGradientText from "@/components/AnimatedGradientText";
import MagneticButton from "@/components/MagneticButton";

const features = [
  { icon: Zap, key: "automation" },
  { icon: Bot, key: "agents" },
  { icon: Plug, key: "integrations" },
  { icon: Settings, key: "custom" },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Full page background wrapper */}
      <div className="relative w-full min-h-full" style={{
        backgroundColor: '#000000',
        backgroundImage: `
          radial-gradient(circle at 50% 0%, rgba(0, 217, 255, 0.05) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(0, 112, 240, 0.05) 0%, transparent 60%)
        `,
      }}>

        {/* Hero Section */}
        <section className="relative overflow-visible min-h-[85vh] sm:min-h-screen flex items-center py-16      sm:py-0">
          {/* Radial vignette overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 1,
          }} />

          <div className="container mx-auto px-4 sm:px-6 relative text-center max-w-5xl" style={{ zIndex: 2 }}>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-aspekta font-semibold mb-8"
              style={{
                color: 'white',
                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                fontFamily: 'Aspekta, Space Grotesk, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                lineHeight: 1.1,
              }}
            >
              {t("hero.title").split(" ").slice(0, 3).join(" ")}
              <AnimatedGradientText className="block mt-2">
                {t("hero.title").split(" ").slice(3).join(" ")}
              </AnimatedGradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{
                color: '#a1a5a0',
                fontSize: '1.125rem',
                fontWeight: 400,
                lineHeight: '150%',
              }}
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <MagneticButton strength={0.15}>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 group"
                  style={{
                    backgroundColor: '#000000',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#000000';
                  }}
                >
                  {t("hero.cta1")}
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Link
                  to="/projects"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-black font-medium transition-all duration-300 group"
                  style={{
                    backgroundColor: '#e9ecef',
                    border: '1px solid #e9ecef',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#d3d6d8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#e9ecef';
                  }}
                >
                  {t("hero.cta2")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 sm:py-23 relative">
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="text-center mb-10 sm:mb-20">
              <BlurReveal delay={0}>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-4"
                  style={{ color: '#ffffff', textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}
                >
                  CARACTERÍSTICAS PRINCIPALES
                </p>
              </BlurReveal>
              <BlurReveal delay={0.1}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6 font-semibold"
                  style={{ color: 'white' }}
                >
                  {t("features.title")}
                </h2>
              </BlurReveal>
              <BlurReveal delay={0.2}>
                <p
                  className="max-w-2xl mx-auto text-lg"
                  style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.125rem', lineHeight: '150%' }}
                >
                  {t("features.subtitle")}
                </p>
              </BlurReveal>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {features.map((feat) => (
                <motion.div key={feat.key} variants={staggerItem}>
                  <SpotlightCard
                    className="group relative overflow-hidden rounded-[32px] p-8 sm:p-10 transition-all duration-300 h-full"
                    style={{
                      background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.45) 0%, rgba(10, 51, 54, 0.3) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(124, 153, 163, 0.15) 100%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 51, 54, 0.23) 100%)';
                    }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center transition-all"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(124, 153, 163, 0.15) 100%)',
                        boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <feat.icon className="w-6 h-6 transition-all" style={{ color: '#ffffff' }} />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-3 font-display" style={{ color: 'white' }}>
                      {t(`feat.${feat.key}`)}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                      {t(`feat.${feat.key}.desc`)}
                    </p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 relative text-center max-w-3xl">
            <BlurReveal>
              <SpotlightCard
                className="p-12 sm:p-16 rounded-[40px] transition-all"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.45) 0%, rgba(10, 51, 54, 0.3) 100%)',
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(36, 32, 32, 0.1) 0%, rgba(50, 66, 71, 0.15) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 51, 54, 0.23) 100%)';
                }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-display" style={{ color: 'white' }}>
                  {t("cta.title")}
                </h2>
                <p className="mb-8" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {t("cta.subtitle")}
                </p>
                <MagneticButton strength={0.2} className="inline-flex">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-black font-medium transition-all duration-300 group text-lg"
                    style={{
                      backgroundColor: '#e9ecef',
                      border: '1px solid #e9ecef',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#d3d6d8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#e9ecef';
                    }}
                  >
                    {t("cta.start")}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>
              </SpotlightCard>
            </BlurReveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
