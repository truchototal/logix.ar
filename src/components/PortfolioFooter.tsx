import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft } from "lucide-react";
import MagneticButton from "./MagneticButton";

const PortfolioFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-20 border-t border-white/5 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/5 pointer-events-none" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h3 className="text-2xl font-bold text-white mb-8">
          {t("cta.title")}
        </h3>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <MagneticButton>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
            >
              {t("hero.cta1")}
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link
              to="/equipo"
              className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("nav.team")}
            </Link>
          </MagneticButton>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
          <img src="/LogoLogixPng.png" alt="Logix.ar Logo" className="h-5 opacity-40 hover:opacity-100 transition-opacity" />
          <p className="text-xs text-white/20 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Logix.ar — {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
