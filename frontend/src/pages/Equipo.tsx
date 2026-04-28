import { useLanguage } from "@/contexts/LanguageContext";
import { motion, Variants } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Code, Palette, LineChart, ArrowRight } from "lucide-react";
import BlurReveal from "@/components/shared/BlurReveal";
import { Link } from "react-router-dom";

const sc: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
const si: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } } };

const Equipo = () => {
  const { t } = useLanguage();

  const areas = [
    {
      icon: Code,
      title: t("team.area1.title"),
      desc: t("team.area1.desc"),
      items: [t("team.area1.item1"), t("team.area1.item2"), t("team.area1.item3")],
    },
    {
      icon: Palette,
      title: t("team.area2.title"),
      desc: t("team.area2.desc"),
      items: [t("team.area2.item1"), t("team.area2.item2"), t("team.area2.item3")],
    },
    {
      icon: LineChart,
      title: t("team.area3.title"),
      desc: t("team.area3.desc"),
      items: [t("team.area3.item1"), t("team.area3.item2"), t("team.area3.item3")],
    },
  ];

  return (
    <Layout>
      <div style={{ backgroundColor: 'var(--surface)' }}>
        {/* Hero */}
        <section className="pt-32 pb-16 sm:pt-44 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-6 px-4 py-2 rounded-full" style={{ border: '1px solid var(--border-color)' }}>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>{t("team.title")}</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-aspekta font-bold mb-8" style={{ color: 'var(--text-primary)', fontSize: 'clamp(2.2rem, 7vw, 3.5rem)', lineHeight: 1.1 }}>
              {t("team.hero.title")}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto text-base" style={{ color: 'var(--text-secondary)' }}>
              {t("team.hero.subtitle")}
            </motion.p>
          </div>
        </section>

        {/* Work Areas */}
        <section className="pb-20 sm:pb-28">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sc} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {areas.map((area, i) => (
                <motion.div key={i} variants={si}
                  className="rounded-[24px] p-8 flex flex-col hover:-translate-y-0.5 transition-all card-contrast">
                  <div className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(128,128,128,0.15)' }}>
                    <area.icon className="w-6 h-6" style={{ color: 'var(--card-text)' }} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--card-text)' }}>{area.title}</h3>
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--card-text-muted)' }}>{area.desc}</p>
                  <div className="space-y-2 pt-5" style={{ borderTop: '1px solid rgba(128,128,128,0.2)' }}>
                    {area.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--card-text)' }} />
                        <span className="text-sm" style={{ color: 'var(--card-text)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 card-contrast">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <BlurReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--card-text)' }}>{t("cta.title")}</h2>
              <p className="text-base mb-10" style={{ color: 'var(--card-text-muted)' }}>{t("cta.subtitle")}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm"
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

export default Equipo;
