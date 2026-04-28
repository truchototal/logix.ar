import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";

const TermsOfService = () => {
  const { lang, t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const sections = [
    {
      title: lang === "en" ? "1. General Scope of Service" : "1. Alcance General del Servicio",
      content: lang === "en"
        ? "Logix.ar provides digital client acquisition systems, which may include custom web development, WhatsApp AI integration, and automated booking systems. By contracting us, you agree that you are acquiring a system designed to scale your business, bound by the specific scope defined in your service agreement."
        : "Logix.ar proporciona sistemas digitales de adquisición de clientes, que pueden incluir desarrollo web personalizado, integración de IA en WhatsApp y sistemas de reservas automatizados. Al contratarnos, aceptás que estás adquiriendo un sistema diseñado para escalar tu negocio, regido por el alcance específico definido en tu acuerdo de servicio."
    },
    {
      title: lang === "en" ? "2. Client Responsibilities" : "2. Responsabilidades del Cliente",
      content: lang === "en"
        ? "To ensure the system functions optimally, you agree to provide necessary assets (logos, branding, specific service details) in a timely manner. Delays in asset provision may result in corresponding delays in deployment."
        : "Para garantizar que el sistema funcione de manera óptima, aceptás proporcionar los activos necesarios (logotipos, branding, detalles de servicios específicos) de manera oportuna. Los retrasos en la provisión de activos pueden resultar en retrasos correspondientes en el despliegue."
    },
    {
      title: lang === "en" ? "3. Platform Usage & Restrictions" : "3. Uso de la Plataforma y Restricciones",
      content: lang === "en"
        ? "You are granted a non-exclusive license to use the developed systems. You may not reverse-engineer, resell, or distribute our proprietary automation workflows or internal codebase without explicit written consent from Logix.ar."
        : "Se te otorga una licencia no exclusiva para usar los sistemas desarrollados. No podés aplicar ingeniería inversa, revender ni distribuir nuestros flujos de automatización propietarios ni nuestro código base interno sin el consentimiento explícito por escrito de Logix.ar."
    },
    {
      title: lang === "en" ? "4. Maintenance and Support" : "4. Mantenimiento y Soporte",
      content: lang === "en"
        ? "Ongoing maintenance and support are provided as part of the monthly subscription model. This includes server uptime monitoring, minor content updates, and API integration maintenance. Major feature additions are subject to separate scoping."
        : "El mantenimiento y soporte continuo se proporcionan como parte del modelo de suscripción mensual. Esto incluye monitoreo de tiempo de actividad del servidor, actualizaciones menores de contenido y mantenimiento de integración de API. Las adiciones de funcionalidades principales están sujetas a presupuestos separados."
    },
    {
      title: lang === "en" ? "5. Termination of Services" : "5. Terminación de Servicios",
      content: lang === "en"
        ? "Either party may terminate the monthly service agreement with a 30-day notice. Upon termination, client-owned data (such as contact lists and domain names) will be fully transferred, while proprietary Logix.ar infrastructure (servers and bespoke software logic) remains with us."
        : "Cualquiera de las partes puede rescindir el acuerdo de servicio mensual con un aviso de 30 días. Al momento de la rescisión, los datos propiedad del cliente (como listas de contactos y nombres de dominio) serán transferidos en su totalidad, mientras que la infraestructura propietaria de Logix.ar (servidores y lógica de software a medida) permanecerá con nosotros."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-24" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              {lang === "en" ? "Terms of Service" : "Términos de Servicio"}
            </h1>
            <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
              {lang === "en" ? "Last updated: April 2026" : "Última actualización: Abril 2026"}
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className="text-[1.05rem] leading-relaxed mb-12" style={{ color: 'var(--text-secondary)' }}>
              {lang === "en" 
                ? "These Terms of Service outline the rules and regulations for the use of Logix.ar's client acquisition systems. By working with us, you expect exceptional results, and we expect a professional partnership."
                : "Estos Términos de Servicio establecen las reglas y regulaciones para el uso de los sistemas de adquisición de clientes de Logix.ar. Al trabajar con nosotros, esperás resultados excepcionales y nosotros esperamos una colaboración profesional."}
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
                {lang === "en" ? "Need Clarification?" : "¿Necesitás Aclaraciones?"}
              </h3>
              <p className="text-base mb-4" style={{ color: 'var(--text-secondary)' }}>
                {lang === "en" 
                  ? "If you have any questions before signing on, let's talk them through." 
                  : "Si tenés alguna pregunta antes de firmar, hablemos sobre ellas."}
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

export default TermsOfService;
