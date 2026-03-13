import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-black" style={{ borderColor: 'rgba(0, 217, 255, 0.1)', backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(5, 10, 20, 0.8) 100%)' }}>
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="flex-1">
            <span className="font-display text-lg font-semibold" style={{ color: 'white' }}>
              <img src="/LogoPNGBlancoChico.png" alt="Logix.ar Logo" className="h-5 sm:h-6 w-auto" loading="lazy" />
            </span>
            <p className="mt-3 text-sm max-w-xs leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              {t("footer.tagline")}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#00aeff' }}>{t("footer.product")}</h3>
              <Link to="/" className="text-sm transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00d9ff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>{t("nav.home")}</Link>
              <Link to="/projects" className="text-sm transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00d9ff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>{t("nav.projects")}</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#00aeff' }}>{t("footer.company")}</h3>
              <Link to="/about" className="text-sm transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00d9ff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>{t("nav.about")}</Link>
              <Link to="/equipo" className="text-sm transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00d9ff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>{t("nav.team")}</Link>
              <Link to="/contact" className="text-sm transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00d9ff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>{t("nav.contact")}</Link>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid rgba(0, 217, 255, 0.1)' }}>
          <p className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            © {new Date().getFullYear()} Logix.ar — {t("footer.rights")}
          </p>
          <div className="flex gap-6 items-center">
            <div className="flex gap-4 text-xs">
              <Link to="/privacy-policy" className="transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00d9ff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>Privacy Policy</Link>
              <Link to="/terms-of-service" className="transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00d9ff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>Terms of Service</Link>
            </div>
            <div className="flex gap-4" style={{ borderLeft: '1px solid rgba(0, 217, 255, 0.1)', paddingLeft: '1.5rem' }}>
              <a href="https://www.instagram.com/logix.ar/" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00d9ff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>
                <FaInstagram size={18} />
              </a>
              <a href="https://discord.gg/wMNd3GFGuq" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00d9ff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>
                <FaDiscord size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
