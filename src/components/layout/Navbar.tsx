import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Globe, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/equipo", label: t("nav.team") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100]"
      style={{
        backgroundColor: 'var(--nav-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div className="h-16 max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/Logo.png"
            alt="Logix.ar"
            className="h-5 w-auto"
            style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}
            loading="eager"
          />
        </Link>

        {/* Desktop center links */}
        <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[13px] font-medium px-4 py-2 rounded-lg transition-all duration-200 relative"
              style={{
                color: isActive(link.to) ? 'var(--text-primary)' : 'var(--text-secondary)',
                backgroundColor: isActive(link.to) ? 'var(--hover-bg)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (!isActive(link.to)) {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.to)) {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop right actions */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
            title={theme === 'light' ? 'Dark mode' : 'Light mode'}
          >
            {theme === 'light' ? (
              <Moon className="w-[18px] h-[18px]" strokeWidth={1.5} />
            ) : (
              <Sun className="w-[18px] h-[18px]" strokeWidth={1.5} />
            )}
          </button>

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
            title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
          >
            <span className="text-[11px] font-bold uppercase tracking-wider">{lang === "en" ? "ES" : "EN"}</span>
          </button>

          {/* CTA */}
          <Link
            to="/contact"
            className="text-[13px] font-medium px-5 py-2 rounded-lg transition-all duration-200 ml-1"
            style={{
              backgroundColor: 'var(--text-primary)',
              color: 'var(--surface)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            {t("nav.cta")}
          </Link>
        </div>

        {/* Mobile right actions */}
        <div className="flex lg:hidden items-center gap-1">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            {theme === 'light' ? (
              <Moon className="w-[18px] h-[18px]" strokeWidth={1.5} />
            ) : (
              <Sun className="w-[18px] h-[18px]" strokeWidth={1.5} />
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-lg"
            style={{ color: 'var(--text-primary)' }}
          >
            {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{
              backgroundColor: 'var(--nav-bg)',
              borderBottom: '1px solid var(--border-color)',
            }}
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium py-2.5 px-3 rounded-lg transition-colors"
                  style={{
                    color: isActive(link.to) ? 'var(--text-primary)' : 'var(--text-secondary)',
                    backgroundColor: isActive(link.to) ? 'var(--hover-bg)' : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => { setLang(lang === "en" ? "es" : "en"); }}
                className="flex items-center gap-2 text-sm py-2.5 px-3 rounded-lg"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Globe className="w-4 h-4" strokeWidth={1.5} />
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
