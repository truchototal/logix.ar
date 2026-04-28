import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer
      style={{
        backgroundColor: 'var(--footer-bg)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="flex-1">
            <img
              src="/Logo.png"
              alt="Logix.ar Logo"
              className="h-5 sm:h-6 w-auto"
              style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}
              loading="lazy"
            />
            <p className="mt-3 text-sm max-w-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t("footer.tagline")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>{t("footer.product")}</h3>
              <Link to="/" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>{t("nav.home")}</Link>
              <Link to="/projects" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>{t("nav.projects")}</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>{t("footer.company")}</h3>
              <Link to="/about" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>{t("nav.about")}</Link>
              <Link to="/equipo" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>{t("nav.team")}</Link>
              <Link to="/contact" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>{t("nav.contact")}</Link>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-6" style={{ borderTop: '1px solid var(--border-color)' }}>
          <p className="text-xs text-center md:text-left" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Logix.ar — {t("footer.rights")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs">
              <Link to="/privacy-policy" className="transition-colors" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link>
              <Link to="/terms-of-service" className="transition-colors" style={{ color: 'var(--text-muted)' }}>Terms of Service</Link>
            </div>
            <div className="flex gap-4 sm:border-l sm:pl-6" style={{ borderColor: 'var(--border-color)' }}>
              <a href="https://www.instagram.com/logix.ar/" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: 'var(--text-muted)' }}>
                <FaInstagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@logixar" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: 'var(--text-muted)' }}>
                <FaTiktok size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
