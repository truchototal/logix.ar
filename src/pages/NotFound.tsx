import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const { lang } = useLanguage();
  return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--surface)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center px-4">
          <h1 className="text-8xl font-bold mb-4" style={{ color: 'var(--border-color)' }}>404</h1>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>{lang === "en" ? "Page not found" : "Página no encontrada"}</h2>
          <p className="mb-8 max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>{lang === "en" ? "The page you're looking for doesn't exist." : "La página que buscás no existe."}</p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <Home className="w-4 h-4" strokeWidth={1.5} /> {lang === "en" ? "Back to home" : "Volver al inicio"}
          </Link>
        </motion.div>
      </div>
  );
};

export default NotFound;
