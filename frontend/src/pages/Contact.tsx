import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import { submitContactForm } from "@/services/contact";

const Contact = () => {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({ name: "", whatsapp: "", businessType: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");
    try {
      const result = await submitContactForm({
        name: formData.name,
        whatsapp: formData.whatsapp,
        businessType: formData.businessType,
        message: formData.message,
      });
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", whatsapp: "", businessType: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  const info = [
    { icon: Mail, title: lang === "en" ? "Email" : "Correo", value: "logixarcompany@gmail.com", link: "mailto:logixarcompany@gmail.com" },
    { icon: Phone, title: lang === "en" ? "Phone" : "Teléfono", value: "+54 9 29 9603-2898", link: "tel:+5419296032898" },
    { icon: MapPin, title: lang === "en" ? "Location" : "Ubicación", value: "Neuquén, Argentina", link: "#" },
  ];

  const types = [
    { value: "", label: lang === "en" ? "Select your business type" : "Seleccioná tu tipo de negocio" },
    { value: "gym", label: t("contact.business.gym") },
    { value: "salon", label: t("contact.business.salon") },
    { value: "pet", label: t("contact.business.pet") },
    { value: "services", label: t("contact.business.services") },
    { value: "gastro", label: t("contact.business.gastro") },
    { value: "other", label: t("contact.business.other") },
  ];

  const inputStyle = { backgroundColor: 'var(--input-bg)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' };

  return (
    <Layout>
      <div style={{ backgroundColor: 'var(--surface)' }}>
        <section className="py-28 sm:py-36">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-6 px-4 py-2 rounded-full" style={{ border: '1px solid var(--border-color)' }}>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>{t("nav.contact")}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{t("contact.title")}</h1>
              <p className="max-w-2xl mx-auto text-base" style={{ color: 'var(--text-secondary)' }}>{t("contact.subtitle")}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mx-auto max-w-5xl">
              <div className="lg:col-span-2">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  className="rounded-[24px] p-8 sm:p-10 h-full" style={{ backgroundColor: 'var(--surface-secondary)', border: '1px solid var(--border-color)' }}>
                  <h3 className="text-xl font-semibold mb-8" style={{ color: 'var(--text-primary)' }}>
                    {lang === "en" ? "Contact Information" : "Información de Contacto"}
                  </h3>
                  <div className="flex flex-col gap-8">
                    {info.map((c, i) => (
                      <a key={i} href={c.link} className="group flex flex-col items-start gap-3 transition-opacity hover:opacity-80">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--icon-bg)' }}>
                          <c.icon className="w-5 h-5" style={{ color: 'var(--text-primary)' }} strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>{c.title}</p>
                          <h4 className="text-base font-medium" style={{ color: 'var(--text-primary)' }}>{c.value}</h4>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="lg:col-span-3 rounded-[24px] p-8 sm:p-10 card-surface">
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {lang === "en" ? "Tell us about your business" : "Contanos sobre tu negocio"}
                </h3>
                <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
                  {lang === "en" ? "We usually respond within 24 hours." : "Normalmente respondemos en menos de 24 horas."}
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>{t("contact.name")}</label>
                      <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder={lang === "en" ? "Your name" : "Tu nombre"} required
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={inputStyle}
                        onFocus={(e) => e.currentTarget.style.borderColor = 'var(--border-hover)'} onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>WhatsApp</label>
                      <input type="tel" value={formData.whatsapp} onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })} placeholder="+54 9 11 1234 5678" required
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={inputStyle}
                        onFocus={(e) => e.currentTarget.style.borderColor = 'var(--border-hover)'} onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>{t("contact.business.type")}</label>
                    <select value={formData.businessType} onChange={(e) => setFormData({ ...formData, businessType: e.target.value })} required
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none appearance-none" style={{ ...inputStyle, color: formData.businessType ? 'var(--text-primary)' : 'var(--text-muted)' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--border-hover)'} onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                      {types.map((t) => <option key={t.value} value={t.value} disabled={t.value === ""}>{t.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>{lang === "en" ? "Anything else? (optional)" : "¿Algo más? (opcional)"}</label>
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder={lang === "en" ? "Tell us about your needs..." : "Contanos lo que necesitás..."} rows={3}
                      className="w-full px-4 py-3 rounded-xl text-sm resize-none focus:outline-none" style={inputStyle}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--border-hover)'} onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'} />
                  </div>
                  <button type="submit" disabled={submitStatus === "loading"} className="btn-primary w-full flex items-center justify-center gap-2">
                    {submitStatus === "loading" ? (lang === "en" ? "Sending..." : "Enviando...") : submitStatus === "success" ? (lang === "en" ? "✓ Sent!" : "✓ ¡Enviado!") : <>{t("contact.send")} <Send className="w-4 h-4" strokeWidth={1.5} /></>}
                  </button>
                </form>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-12 text-center">
              <h3 className="text-sm font-semibold mb-6" style={{ color: 'var(--text-secondary)' }}>{lang === "en" ? "Follow us" : "Seguinos"}</h3>
              <div className="flex justify-center gap-4">
                {[{ href: "https://www.instagram.com/logix.ar/", I: FaInstagram }, { href: "https://www.tiktok.com/@logixar", I: FaTiktok }, { href: "https://www.facebook.com/profile.php?id=61587834152628", I: FaFacebook }].map(({ href, I }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                    style={{ backgroundColor: 'var(--icon-bg)', color: 'var(--text-secondary)' }}>
                    <I size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
