import { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ArrowDown } from "lucide-react";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuLangOpen, setMenuLangOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/equipo", label: t("nav.team") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-4 left-0 right-0 mx-auto w-[95%] max-w-6xl z-[100] bg-black/40 backdrop-blur-xl border rounded-[2rem] transition-all duration-300" style={{ borderColor: 'rgba(255, 255, 255, 0.15)', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
      <div className="w-full px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-6 transition-all duration-300 p-5">
          <img src="/LogoPNGBlancoChico.png" alt="Logix.ar Logo" className="h-5 sm:h-6 w-auto" loading="eager" />
        </a>

        {/* Desktop links - Absolutely centered */}
        <div className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[13px] font-regular transition-all duration-300 relative group px-4 py-2 rounded-full flex items-center justify-center"
              style={{
                color: isActive(link.to) ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#dfdfdf';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isActive(link.to) ? '#dfdfdf' : 'rgba(255, 255, 255, 0.65)';
              }}
            >
              <span className="relative z-10">{link.label}</span>
              {isActive(link.to) && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                  layoutId="activeNavPill"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3 relative">
          <button
            onClick={() => setMenuLangOpen(!menuLangOpen)}
            className="flex items-center text-xs font-bold px-3 py-2 gap-1 rounded-full transition-all duration-300 uppercase tracking-wider"
            style={{
              color: '#ffffff',
              border: '1px solid rgba(201, 201, 201, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Globe className="w-4 h-4" />
            {menuLangOpen ? <X className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
          </button>

          {/* Language dropdown menu */}
          <AnimatePresence>
            {menuLangOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-12 right-0 rounded-lg overflow-hidden shadow-lg z-50"
                style={{
                  background: 'rgba(0, 0, 0, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <button
                  onClick={() => {
                    setLang("en");
                    setMenuLangOpen(false);
                  }}
                  className="w-full px-4 py-2.5 text-sm text-left transition-colors hover:bg-white/10"
                  style={{
                    color: lang === "en" ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                    fontWeight: lang === "en" ? 'bold' : 'normal',
                  }}
                >
                  English
                </button>
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }} />
                <button
                  onClick={() => {
                    setLang("es");
                    setMenuLangOpen(false);
                  }}
                  className="w-full px-4 py-2.5 text-sm text-left transition-colors hover:bg-white/10"
                  style={{
                    color: lang === "es" ? '#ffffffff' : 'rgba(255, 255, 255, 0.7)',
                    fontWeight: lang === "es" ? 'bold' : 'normal',
                  }}
                >
                  Español
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <Link
            to="/contact"
            className="text-[13px] font-medium text-white px-4 py-1.5 rounded-full transition-all duration-300 tracking-wide"
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
            {lang === 'es' ? 'Contáctanos' : 'Contact Us'}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white hover:opacity-80 transition-opacity p-5"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full overflow-hidden rounded-[2rem] border"
            style={{
              background: 'rgba(0, 0, 0, 0.85)',
              borderColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium py-2 transition-colors"
                  style={{
                    color: isActive(link.to) ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => { setLang(lang === "en" ? "es" : "en"); }}
                className="flex items-center gap-1.5 text-sm py-2 transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                <Globe className="w-3.5 h-3.5" />
                {lang === "en" ? "Español" : "English"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
