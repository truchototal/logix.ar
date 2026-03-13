import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import Layout from "@/components/Layout";
import { PenTool, Palette, ExternalLink, Award, Sparkles, Play, Monitor, Layers, Bot, Zap } from "lucide-react";
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
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const Equipo = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      id: "automation",
      icon: Bot,
      name: t("team.automation.name"),
      role: t("team.automation.role"),
      desc: t("team.automation.desc"),
      color: "rgba(0, 255, 128, 0.2)",
      gradient: "linear-gradient(135deg, rgba(0, 255, 128, 0.1) 0%, rgba(0, 200, 255, 0.05) 100%)",
      portfolio: [
        { title: t("team.portfolio.automation.item1"), icon: Layers, type: "Systems" },
        { title: t("team.portfolio.automation.item2"), icon: Zap, type: "AI Agents" },
      ]
    },
    {
      id: "editor",
      icon: PenTool,
      name: t("team.editor.name"),
      role: t("team.editor.role"),
      desc: t("team.editor.desc"),
      color: "rgba(0, 217, 255, 0.2)",
      gradient: "linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(0, 112, 240, 0.05) 100%)",
      portfolio: [
        { title: t("team.portfolio.editor.item1"), icon: Play, type: "Video" },
        { title: t("team.portfolio.editor.item2"), icon: Sparkles, type: "Ads" },
      ]
    },
    {
      id: "designer",
      icon: Palette,
      name: t("team.designer.name"),
      role: t("team.designer.role"),
      desc: t("team.designer.desc"),
      color: "rgba(255, 0, 128, 0.2)",
      gradient: "linear-gradient(135deg, rgba(255, 0, 128, 0.1) 0%, rgba(128, 0, 255, 0.05) 100%)",
      portfolio: [
        { title: t("team.portfolio.designer.item1"), icon: Monitor, type: "UI/UX" },
        { title: t("team.portfolio.designer.item2"), icon: Layers, type: "Product" },
      ]
    },
  ];

  return (
    <Layout>
      <div className="relative w-full min-h-screen" style={{
        backgroundColor: '#000000',
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(0, 217, 255, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(255, 0, 128, 0.03) 0%, transparent 50%)
        `,
      }}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 sm:pt-48 sm:pb-24 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 relative text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white">
                {t("team.title")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-aspekta font-semibold mb-8 text-white"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                lineHeight: 1.1,
              }}
            >
              {t("team.hero.title").split(" ").slice(0, -2).join(" ")} <br />
              <AnimatedGradientText className="block mt-2">
                {t("team.hero.title").split(" ").slice(-2).join(" ")}
              </AnimatedGradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="max-w-2xl mx-auto text-lg leading-relaxed mb-12"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              {t("team.hero.subtitle")}
            </motion.p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="pb-2 relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-8xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            >
              {teamMembers.map((member) => (
                <motion.div key={member.id} variants={staggerItem}>
                  <SpotlightCard
                    className="group relative overflow-hidden rounded-[40px] p-8 sm:p-12 transition-all duration-500 h-full flex flex-col"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    <div className="flex flex-col items-center text-center mb-10">
                      {/* Avatar Wrapper */}
                      <div
                        className="w-22 h-22 rounded-3xl mb-8 flex items-center justify-center relative group-hover:scale-110 transition-all duration-500 p-4"
                        style={{
                          background: member.gradient,
                          border: `1px solid ${member.color}`,
                          boxShadow: `0 0 30px ${member.color}`,
                        }}
                      >
                        <member.icon className="w-10 h-10 text-white" />
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                      </div>

                      <h3 className="text-3xl font-bold mb-2 text-white font-display">
                        {member.name}
                      </h3>
                      <p
                        className="text-sm font-semibold uppercase tracking-wider mb-6 px-4 py-1.5 rounded-full inline-block"
                        style={{
                          color: member.id === 'editor' ? '#00d9ff' : member.id === 'designer' ? '#ff0080' : '#00ff80',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        {member.role}
                      </p>

                      <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                        {member.desc}
                      </p>
                    </div>

                    {/* Portfolio Mini Section */}
                    <div className="mt-auto pt-8 border-t border-white/10">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6 text-center">
                        {t("team.portfolio.title")}
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {member.portfolio.map((project, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="p-4 rounded-2xl transition-all duration-300 group/item"
                            style={{
                              background: 'rgba(255, 255, 255, 0.03)',
                              border: '1px solid rgba(255, 255, 255, 0.05)',
                            }}
                          >
                            <div className="flex flex-col gap-3">
                              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-white/10 transition-colors">
                                <project.icon className="w-4 h-4 text-white/60" />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-white/40 uppercase mb-1">{project.type}</p>
                                <p className="text-sm font-semibold text-white/90 leading-tight">{project.title}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-8 flex justify-center">
                        <MagneticButton>
                          <Link 
                            to={member.id === 'automation' ? '/portfolio/joaquin' : '/portfolio/tiziano'}
                            className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300"
                            style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              color: 'white'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'white';
                              e.currentTarget.style.color = 'black';
                              e.currentTarget.style.borderColor = 'white';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                              e.currentTarget.style.color = 'white';
                              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                          >
                            {t("team.portfolio")}
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </MagneticButton>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <BlurReveal>
              <div
                className="max-w-4xl mx-auto p-12 sm:p-20 rounded-[50px] relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Award className="w-16 h-16 text-white/20 mx-auto mb-8" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {t("cta.title")}
                </h2>
                <p className="text-lg mb-10 text-white/60">
                  {t("cta.subtitle")}
                </p>
                <div className="flex justify-center">
                  <MagneticButton>
                    <a
                      href="/contact"
                      className="px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block"
                    >
                      {t("hero.cta1")}
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </BlurReveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Equipo;
