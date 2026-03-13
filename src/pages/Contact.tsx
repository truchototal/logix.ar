import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import { fadeUp } from "@/lib/animations";

const Contact = () => {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "", number: "" });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      number: formData.number
    };

    await fetch("https://hook.us2.make.com/hx7e2wnk45hkra33s7ccckjru9e74lwc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "", number: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: lang === "en" ? "Email" : "Correo",
      value: "logixarcompany@gmail.com",
      link: "mailto:logixarcompany@gmail.com",
    },
    {
      icon: Phone,
      title: lang === "en" ? "Phone" : "Teléfono",
      value: "+54 9 29 9603-2898",
      link: "tel:+5419296032898",
    },
    {
      icon: MapPin,
      title: lang === "en" ? "Location" : "Ubicación",
      value: lang === "en" ? "Neuquen, Argentina" : "Neuquen, Argentina",
      link: "#",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <div className="relative w-full min-h-full flex items-center" style={{
        backgroundColor: '#000000',
        backgroundImage: `
          radial-gradient(circle at 50% 0%, rgba(0, 217, 255, 0.05) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(0, 112, 240, 0.05) 0%, transparent 60%)
        `,
      }}>
        <section className="py-16 sm:py-24 md:py-32 relative w-full">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div initial="hidden" animate="visible" className="text-center mb-10 sm:mb-20">
              <motion.div
                variants={fadeUp}
                custom={-1}
                className="inline-block mb-6 px-4 py-2 rounded-full transition-all"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#ffffff' }}>
                  {lang === "en" ? "Get in Touch" : "Contáctanos"}
                </span>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                custom={0}
                className="text-4xl md:text-5xl font-bold mb-6 font-display"
                style={{ color: 'white' }}
              >
                {t("contact.title")}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="max-w-2xl mx-auto text-lg"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                {t("contact.subtitle")}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mx-auto">
              {/* Left Column: Contact Info */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <motion.div
                  variants={fadeUp}
                  custom={2}
                  className="rounded-[32px] p-8 sm:p-10 transition-all h-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(8, 8, 8, 0.9) 0%, rgba(15, 20, 25, 0.8) 100%)',
                    border: '1px solid rgba(0, 217, 255, 0.1)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  }}
                >
                  <h3 className="text-2xl font-semibold font-display mb-8" style={{ color: 'white' }}>
                    {lang === "en" ? "Contact Information" : "Información de Contacto"}
                  </h3>
                  <div className="flex flex-col gap-8">
                    {contactInfo.map((info, i) => (
                      <a
                        key={i}
                        href={info.link}
                        className="group flex flex-col items-start gap-3 transition-opacity hover:opacity-80"
                      >
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{
                          background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.15) 0%, rgba(0, 153, 204, 0.05) 100%)',
                          border: '1px solid rgba(0, 217, 255, 0.2)',
                        }}>
                          <info.icon className="w-5 h-5" style={{ color: '#00d9ff' }} />
                        </div>
                        <div>
                          <p className="text-sm uppercase tracking-wider mb-1" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem' }}>{info.title}</p>
                          <h4 className="text-lg font-medium" style={{ color: 'white' }}>{info.value}</h4>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Form */}
              <motion.div
                variants={fadeUp}
                custom={3}
                className="lg:col-span-3 rounded-[32px] p-8 sm:p-12"
                style={{
                  background: 'linear-gradient(145deg, rgba(16, 18, 20, 0.9) 0%, rgba(10, 10, 12, 0.95) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 25px 50px -12px rgba(0, 217, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                }}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold font-display mb-2" style={{ color: 'white' }}>
                    {lang === "en" ? "Send a Message" : "Envíanos un Mensaje"}
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    {lang === "en" ? "We usually respond within 24 hours." : "Normalmente respondemos en menos de 24 horas."}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Grid for Name and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-3" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        {lang === "en" ? "Name" : "Nombre"}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={lang === "en" ? "John Doe" : "Juan Pérez"}
                        required
                        className="w-full px-5 py-4 transition-all focus:outline-none placeholder:text-white/30"
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: 'none',
                          borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          borderRadius: '12px 12px 0 0',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderBottomColor = '#00d9ff';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-3" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        {lang === "en" ? "WhatsApp/Number" : "Número / WhatsApp"}
                      </label>
                      <input
                        type="tel"
                        name="number"
                        value={formData.number}
                        onChange={handleInputChange}
                        placeholder="+54 9 11 1234 5678"
                        required
                        className="w-full px-5 py-4 transition-all focus:outline-none placeholder:text-white/30"
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: 'none',
                          borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          borderRadius: '12px 12px 0 0',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderBottomColor = '#00d9ff';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      {lang === "en" ? "Email Address" : "Correo Electrónico"}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="hello@company.com"
                      required
                      className="w-full px-5 py-4 transition-all focus:outline-none placeholder:text-white/30"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: 'none',
                        borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        borderRadius: '12px 12px 0 0',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderBottomColor = '#00d9ff';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      {lang === "en" ? "How can we help you?" : "¿En qué podemos ayudarte?"}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={lang === "en" ? "Tell us about your project or needs..." : "Cuéntanos sobre tu proyecto o necesidades..."}
                      rows={4}
                      required
                      className="w-full px-5 py-4 transition-all resize-none focus:outline-none placeholder:text-white/30"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: 'none',
                        borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        borderRadius: '12px 12px 0 0',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderBottomColor = '#00d9ff';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      }}
                    />
                  </div>

                  <div className="pt-4">

                    <button
                      type="submit"
                      disabled={submitStatus === "loading"}
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                      style={{
                        background: 'linear-gradient(135deg, #00d9ff 0%, #0099cc 100%)',
                        color: '#000000',
                        boxShadow: '0 0 10px rgba(0, 217, 255, 0.4)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.6)';
                        e.currentTarget.style.transform = 'scale(1.01)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 217, 255, 0.4)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      {submitStatus === "loading" ? (
                        <span>{lang === "en" ? "Sending..." : "Enviando..."}</span>
                      ) : submitStatus === "success" ? (
                        <span>{lang === "en" ? "✓ Sent!" : "✓ ¡Enviado!"}</span>
                      ) : (
                        <>
                          {lang === "en" ? "Send Message" : "Enviar Mensaje"}
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              custom={6}
              className="mt-12 text-center"
            >
              <h3 className="text-lg font-semibold mb-6" style={{ color: 'white' }}>
                {lang === "en" ? "Follow us on Social Media" : "Síguenos en Redes Sociales"}
              </h3>
              <div className="flex justify-center gap-6">
                <motion.a
                  href="https://www.instagram.com/logix.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-all"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2) 0%, rgba(0, 153, 204, 0.1) 100%)',
                    border: '1px solid rgba(0, 217, 255, 0.2)',
                    color: '#00d9ff',
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)',
                    borderColor: 'rgba(0, 217, 255, 0.5)',
                  }}
                >
                  <FaInstagram size={20} />
                </motion.a>

                <motion.a
                  href="https://www.tiktok.com/@logixar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-all"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2) 0%, rgba(0, 153, 204, 0.1) 100%)',
                    border: '1px solid rgba(0, 217, 255, 0.2)',
                    color: '#00d9ff',
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)',
                    borderColor: 'rgba(0, 217, 255, 0.5)',
                  }}
                >
                  <FaTiktok size={20} />
                </motion.a>

                <motion.a
                  href="https://www.facebook.com/profile.php?id=61587834152628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-all"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2) 0%, rgba(0, 153, 204, 0.1) 100%)',
                    border: '1px solid rgba(0, 217, 255, 0.2)',
                    color: '#00d9ff',
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)',
                    borderColor: 'rgba(0, 217, 255, 0.5)',
                  }}
                >
                  <FaFacebook size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
