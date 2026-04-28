import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  const { lang, t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const sections = [
    {
      title: lang === "en" ? "1. Information Collection" : "1. Recopilación de Información",
      content: lang === "en"
        ? "We collect information you explicitly provide to us when you request our services, fill out forms, or interact with our systems. This is strictly limited to data necessary for business operations (name, email, phone, business details)."
        : "Recopilamos la información que nos proporcionás explícitamente al solicitar nuestros servicios, completar formularios o interactuar con nuestros sistemas. Esto se limita estrictamente a los datos necesarios para operaciones comerciales (nombre, correo email, teléfono, detalles del negocio)."
    },
    {
      title: lang === "en" ? "2. Data Usage & Processing" : "2. Uso y Procesamiento de Datos",
      content: lang === "en"
        ? "Your data is used exclusively to build, maintain, and optimize your client acquisition systems. We do not use your data or your clients' data for any external purposes, nor do we train public AI models on your private business information."
        : "Tus datos se utilizan exclusivamente para construir, mantener y optimizar tus sistemas de adquisición de clientes. No usamos tus datos ni los de tus clientes con fines externos, ni entrenamos modelos de IA públicos con la información privada de tu negocio."
    },
    {
      title: lang === "en" ? "3. Security & Infrastructure" : "3. Seguridad e Infraestructura",
      content: lang === "en"
        ? "We employ enterprise-grade security measures. Your configurations, automations, and client lists are stored in secure, encrypted environments. Access is strictly limited to authorized Logix.ar personnel involved in your project."
        : "Empleamos medidas de seguridad de nivel empresarial. Tus configuraciones, automatizaciones y listas de clientes se almacenan en entornos seguros y encriptados. El acceso está estrictamente limitado al personal autorizado de Logix.ar involucrado en tu proyecto."
    },
    {
      title: lang === "en" ? "4. Third-Party Integrations" : "4. Integraciones de Terceros",
      content: lang === "en"
        ? "Our systems integrate with trusted providers (e.g., Meta/WhatsApp API, Google Calendar, Stripe). Data shared with these entities is governed by their respective privacy policies and is limited to what is required for the system to function."
        : "Nuestros sistemas se integran con proveedores de confianza (ej. API de Meta/WhatsApp, Google Calendar, Stripe). Los datos compartidos con estas entidades se rigen por sus respectivas políticas de privacidad y se limitan a lo necesario para que el sistema funcione."
    },
    {
      title: lang === "en" ? "5. Your Data Rights" : "5. Tus Derechos de Datos",
      content: lang === "en"
        ? "You retain full ownership of your client data. You can request a full export, modification, or deletion of your data from our servers at any time by contacting us."
        : "Conservás la propiedad total de los datos de tus clientes. Podés solicitar una exportación completa, modificación o eliminación de tus datos de nuestros servidores en cualquier momento contactándonos."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-24" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              {lang === "en" ? "Privacy Policy" : "Política de Privacidad"}
            </h1>
            <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
              {lang === "en" ? "Last updated: April 2026" : "Última actualización: Abril 2026"}
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className="text-[1.05rem] leading-relaxed mb-12" style={{ color: 'var(--text-secondary)' }}>
              {lang === "en" 
                ? "At Logix.ar, we build systems designed to scale your business. Trust is the foundation of our partnership. This policy outlines exactly how we handle your data with the utmost transparency and security."
                : "En Logix.ar, construimos sistemas diseñados para escalar tu negocio. La confianza es la base de nuestra asociación. Esta política describe exactamente cómo manejamos tus datos con la máxima transparencia y seguridad."}
            </p>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="pb-12 border-b last:border-0" style={{ borderColor: 'var(--border-color)' }}>
                  <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                    {section.title}
                  </h2>
                  <p className="text-[1.05rem] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 rounded-2xl card-surface">
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                {lang === "en" ? "Questions?" : "¿Preguntas?"}
              </h3>
              <p className="text-base mb-4" style={{ color: 'var(--text-secondary)' }}>
                {lang === "en" 
                  ? "Reach out to our security and privacy team directly." 
                  : "Comunicate directamente con nuestro equipo de seguridad y privacidad."}
              </p>
              <a href="mailto:logixarcompany@gmail.com" className="font-semibold hover:underline" style={{ color: 'var(--text-primary)' }}>
                logixarcompany@gmail.com
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
