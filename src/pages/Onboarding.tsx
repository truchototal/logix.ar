import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, Link as LinkIcon, Sparkles, CheckCircle2, AlertCircle, Info, MessageSquare, TrendingUp, Settings } from "lucide-react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import MagneticButton from "@/components/MagneticButton";
import { toast } from "sonner";

// Change this URL to your real webhook (Make, Zapier, etc.)
const WEBHOOK_URL = "YOUR_WEBHOOK_URL_HERE";

const Onboarding = () => {
    const { lang } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [automationType, setAutomationType] = useState('customer_service');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            // If the URL is still the placeholder, we just simulate success for testing
            if (WEBHOOK_URL === "YOUR_WEBHOOK_URL_HERE") {
                console.log("Onboarding Data (Simulated):", data);
                await new Promise(resolve => setTimeout(resolve, 2000));
            } else {
                const response = await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...data,
                        submittedAt: new Date().toISOString(),
                        source: 'Logix Onboarding Page'
                    }),
                });

                if (!response.ok) throw new Error('Network response was not ok');
            }

            setIsSubmitting(false);
            setIsSuccess(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
            toast.success(lang === "en" ? "Information sent successfully!" : "¡Información enviada con éxito!");
        } catch (error) {
            console.error("Error submitting form:", error);
            setIsSubmitting(false);
            toast.error(lang === "en" ? "Error sending information. Please try again." : "Error al enviar la información. Reintenta por favor.");
        }
    };

    const automationTypesList = [
        {
            id: 'customer_service',
            icon: <MessageSquare className="w-6 h-6" />,
            title: lang === "en" ? "Customer Support" : "Atención al Cliente",
            desc: lang === "en" ? "Answer FAQs and handle support 24/7" : "Responde dudas y atiende reclamos 24/7"
        },
        {
            id: 'sales',
            icon: <TrendingUp className="w-6 h-6" />,
            title: lang === "en" ? "Sales & Gen" : "Ventas y Captación",
            desc: lang === "en" ? "Qualify leads and book meetings" : "Califica leads, agenda reuniones y vende"
        },
        {
            id: 'internal',
            icon: <Settings className="w-6 h-6" />,
            title: lang === "en" ? "Internal Process" : "Automatización Interna",
            desc: lang === "en" ? "Automate repetitive tasks" : "Automatiza tareas internas"
        }
    ];

    const steps = [
        {
            icon: <Building2 className="w-6 h-6" style={{ color: '#00d9ff' }} />,
            title: lang === "en" ? "Business Info" : "Información del negocio",
            desc: lang === "en" ? "Tell us about your company" : "Datos básicos de tu empresa"
        },
        {
            icon: <LinkIcon className="w-6 h-6" style={{ color: '#00d9ff' }} />,
            title: lang === "en" ? "Connect Tools" : "Conectar herramientas",
            desc: lang === "en" ? "Link required platforms" : "Vinculación segura"
        },
        {
            icon: <Sparkles className="w-6 h-6" style={{ color: '#00d9ff' }} />,
            title: lang === "en" ? "System Activation" : "Activación",
            desc: lang === "en" ? "Ready in 24-48 hours" : "Listo en 24-48 horas"
        }
    ];

    return (
        <Layout>
            <div className="min-h-screen pt-32 pb-20 px-6 overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
                <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

                <div className="container mx-auto max-w-5xl">
                    <AnimatePresence mode="wait">
                        {!isSuccess ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Hero Section */}
                                <div className="text-center mb-16 relative">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                        className="w-16 h-16 mx-auto bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20 shadow-[0_0_30px_rgba(0,217,255,0.2)]"
                                    >
                                        <Sparkles className="w-8 h-8 text-cyan-400" />
                                    </motion.div>

                                    <motion.h1
                                        className="text-5xl md:text-6xl font-bold font-display mb-6 tracking-tight"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {lang === "en" ? "Activate your system" : "Activa tu sistema "}
                                        <br className="hidden md:block" />
                                        <span
                                            className="transparent"
                                            style={{
                                                background: 'linear-gradient(135deg, #00d9ff 0%, #0e62df 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                            }}
                                        >
                                            {lang === "en" ? "in less than 3 minutes" : "en menos de 3 minutos"}
                                        </span>
                                    </motion.h1>
                                    <motion.p
                                        className="text-xl max-w-2xl mx-auto"
                                        style={{ color: "rgba(255, 255, 255, 0.6)" }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {lang === "en"
                                            ? "We need some basic information to configure and deploy your custom automation environment securely."
                                            : "Necesitamos algunos datos para configurar, conectar y activar tu entorno de automatización de forma segura."}
                                    </motion.p>
                                </div>

                                {/* 3 Steps Visuals */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                                    {steps.map((step, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + (idx * 0.1) }}
                                            className="rounded-[24px] p-6 border relative overflow-hidden group"
                                            style={{
                                                background: 'linear-gradient(145deg, rgba(15, 15, 17, 0.6) 0%, rgba(5, 5, 8, 0.8) 100%)',
                                                borderColor: 'rgba(255, 255, 255, 0.05)',
                                                backdropFilter: 'blur(10px)',
                                            }}
                                        >
                                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/5 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-colors">
                                                {step.icon}
                                            </div>
                                            <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                                            <p className="text-sm font-medium" style={{ color: "rgba(255, 255, 255, 0.5)" }}>{step.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Main Bento Box Form */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                                    {/* Left Column: Requirements Info */}
                                    <div className="lg:col-span-4 h-full">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 }}
                                            className="sticky top-32 rounded-[32px] p-8 border"
                                            style={{
                                                background: 'linear-gradient(145deg, rgba(12, 12, 14, 0.9) 0%, rgba(5, 5, 8, 0.95) 100%)',
                                                borderColor: 'rgba(255, 255, 255, 0.05)',
                                                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                            }}
                                        >
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                                    <AlertCircle className="w-5 h-5 text-blue-400" />
                                                </div>
                                                <h3 className="text-xl font-semibold text-white">
                                                    {lang === "en" ? "Connections Required" : "Conexiones Necesarias"}
                                                </h3>
                                            </div>

                                            <p className="text-sm mb-6 leading-relaxed" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                                                {lang === "en"
                                                    ? "Depending on your plan, we may need to authorize secure connections with your current tools:"
                                                    : "Dependiendo de tu plan, puede ser necesario conectar de forma segura algunas de tus herramientas:"}
                                            </p>

                                            <ul className="space-y-4 mb-8">
                                                {['Gmail / Workspace', 'WhatsApp Business', lang === "en" ? "Website Forms" : 'Formulario de la web'].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/80">
                                                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 flex items-start gap-3">
                                                <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                                                <p className="text-xs leading-relaxed text-cyan-100/70">
                                                    {lang === "en"
                                                        ? "All connections are made through official OAuth secure authorizations. We do not store your passwords."
                                                        : "Aclaramos que todas las conexiones se hacen mediante autorización oficial y segura. No almacenamos tus contraseñas."}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Right Column: Form */}
                                    <div className="lg:col-span-8">
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.7 }}
                                            className="rounded-[32px] p-8 sm:p-12 border relative overflow-hidden"
                                            style={{
                                                background: 'linear-gradient(145deg, rgba(16, 16, 18, 0.9) 0%, rgba(8, 8, 10, 0.95) 100%)',
                                                borderColor: 'rgba(255, 255, 255, 0.08)',
                                                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                                                backdropFilter: 'blur(20px)',
                                            }}
                                        >
                                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

                                            <form onSubmit={handleSubmit} className="space-y-12">
                                                
                                                {/* Section 1: Automation Type */}
                                                <section className="space-y-6">
                                                    <h3 className="text-2xl font-semibold text-white border-b border-white/5 pb-4">
                                                        {lang === "en" ? "1. Select Automation Type" : "1. Tipo de Automatización"}
                                                    </h3>
                                                    <input type="hidden" name="automation_type" value={automationType} />
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        {automationTypesList.map((type) => (
                                                            <div
                                                                key={type.id}
                                                                onClick={() => setAutomationType(type.id)}
                                                                className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative group ${
                                                                    automationType === type.id 
                                                                    ? 'bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_30px_rgba(0,217,255,0.15)]' 
                                                                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                                                                }`}
                                                            >
                                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-colors ${
                                                                    automationType === type.id
                                                                    ? 'bg-cyan-500/20 text-cyan-400'
                                                                    : 'bg-white/10 text-white/70 group-hover:text-white'
                                                                }`}>
                                                                    {type.icon}
                                                                </div>
                                                                <h4 className="text-base font-semibold text-white mb-1">{type.title}</h4>
                                                                <p className="text-xs text-white/50">{type.desc}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </section>

                                                {/* Section 2: Business */}
                                                <section className="space-y-6">
                                                    <h3 className="text-2xl font-semibold text-white border-b border-white/5 pb-4">
                                                        {lang === "en" ? "2. Business Information" : "2. Información del negocio"}
                                                    </h3>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium text-white/60 uppercase tracking-wider">{lang === "en" ? "Business Name *" : "Nombre del negocio *"}</label>
                                                            <input name="business_name" required type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Ej. Logix Agency" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium text-white/60 uppercase tracking-wider">{lang === "en" ? "Industry *" : "Rubro *"}</label>
                                                            <input name="industry" required type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Ej. Bienes Raíces, E-commerce..." />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium text-white/60 uppercase tracking-wider">{lang === "en" ? "Website (Optional)" : "Página web (Opcional)"}</label>
                                                            <input name="website" type="url" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors" placeholder="https://..." />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium text-white/60 uppercase tracking-wider">{lang === "en" ? "City / Country *" : "Ciudad / País *"}</label>
                                                            <input name="location" required type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Buenos Aires, Argentina" />
                                                        </div>
                                                    </div>
                                                </section>

                                                {/* Section 3: Contact */}
                                                <section className="space-y-6">
                                                    <h3 className="text-2xl font-semibold text-white border-b border-white/5 pb-4">
                                                        {lang === "en" ? "3. Contact Information" : "3. Información de contacto"}
                                                    </h3>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium text-white/60 uppercase tracking-wider">{lang === "en" ? "Manager Name *" : "Nombre del responsable *"}</label>
                                                            <input name="contact_name" required type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium text-white/60 uppercase tracking-wider">{lang === "en" ? "Business Email *" : "Email del negocio *"}</label>
                                                            <input name="contact_email" required type="email" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors" />
                                                        </div>
                                                        <div className="space-y-2 sm:col-span-2">
                                                            <label className="text-sm font-medium text-white/60 uppercase tracking-wider">{lang === "en" ? "WhatsApp Number *" : "Número de WhatsApp *"}</label>
                                                            <input name="contact_whatsapp" required type="tel" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors" placeholder="+54 9 11..." />
                                                        </div>
                                                    </div>
                                                </section>

                                                {/* Section 4: Dynamic fields based on Automation Type */}
                                                <section className="space-y-6">
                                                    <h3 className="text-2xl font-semibold text-white border-b border-white/5 pb-4">
                                                        {lang === "en" ? "4. Technical Details" : "4. Detalles Técnicos"}
                                                    </h3>
                                                    <div className="space-y-8 relative">
                                                        <AnimatePresence mode="wait">
                                                            {automationType === 'customer_service' && (
                                                                <motion.div
                                                                    key="customer_service"
                                                                    initial={{ opacity: 0, y: 10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    exit={{ opacity: 0, y: -10 }}
                                                                    transition={{ duration: 0.3 }}
                                                                    className="space-y-8"
                                                                >
                                                                    <div className="space-y-2">
                                                                        <label className="text-sm font-medium text-white/60 uppercase tracking-wider">{lang === "en" ? "Platforms to Connect *" : "Plataformas a conectar *"}</label>
                                                                        <input name="platforms" required type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors" placeholder={lang === "en" ? "WhatsApp, Instagram, Website..." : "WhatsApp, Instagram, Web..."} />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <label className="text-sm font-medium text-white/60 uppercase tracking-wider">{lang === "en" ? "Tone of Voice *" : "Tono de Voz del Bot *"}</label>
                                                                        <input name="tone_of_voice" required type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors" placeholder={lang === "en" ? "Professional, Friendly, Casual..." : "Profesional, Amigable, Casual..."} />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <label className="text-sm font-medium text-white/60 uppercase tracking-wider">{lang === "en" ? "Frequently Asked Questions" : "Preguntas Frecuentes (FAQs)"}</label>
                                                                        <textarea name="faqs" rows={3} className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors resize-none" placeholder={lang === "en" ? "What do your customers usually ask?" : "¿Qué suelen preguntar tus clientes?"} />
                                                                    </div>
                                                                </motion.div>
                                                            )}

                                                            {automationType === 'sales' && (
                                                                <motion.div
                                                                    key="sales"
                                                                    initial={{ opacity: 0, y: 10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    exit={{ opacity: 0, y: -10 }}
                                                                    transition={{ duration: 0.3 }}
                                                                    className="space-y-8"
                                                                >
                                                                    <div className="space-y-2">
                                                                        <label className="text-sm font-medium text-white/60 uppercase tracking-wider">{lang === "en" ? "CRM/Tools to Connect *" : "CRM / Herramientas a conectar *"}</label>
                                                                        <input name="crm_tools" required type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors" placeholder={lang === "en" ? "HubSpot, Salesforce, Google Sheets..." : "HubSpot, Clientify, Google Sheets..."} />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <label className="text-sm font-medium text-white/60 uppercase tracking-wider">{lang === "en" ? "Lead Qualification *" : "Calificación de Leads *"}</label>
                                                                        <textarea name="lead_qualification" required rows={2} className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors resize-none" placeholder={lang === "en" ? "What questions should the bot ask to qualify a lead?" : "¿Qué preguntas debe hacer el bot para saber si es un buen cliente?"} />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <label className="text-sm font-medium text-white/60 uppercase tracking-wider">{lang === "en" ? "Sales Pitch / Value Prop" : "Propuesta de Valor / Pitch de Ventas"}</label>
                                                                        <textarea name="sales_pitch" rows={2} className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors resize-none" placeholder={lang === "en" ? "Why should they buy from you?" : "¿Por qué deberían comprarte? ¿Qué ofreces?"} />
                                                                    </div>
                                                                </motion.div>
                                                            )}

                                                            {automationType === 'internal' && (
                                                                <motion.div
                                                                    key="internal"
                                                                    initial={{ opacity: 0, y: 10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    exit={{ opacity: 0, y: -10 }}
                                                                    transition={{ duration: 0.3 }}
                                                                    className="space-y-8"
                                                                >
                                                                    <div className="space-y-2">
                                                                        <label className="text-sm font-medium text-white/60 uppercase tracking-wider">{lang === "en" ? "Current Workflow *" : "Flujo de trabajo actual *"}</label>
                                                                        <textarea name="current_workflow" required rows={3} className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors resize-none" placeholder={lang === "en" ? "Explain step by step how you currently do this..." : "Explica paso a paso cómo hacen esto actualmente en tu empresa..."} />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <label className="text-sm font-medium text-white/60 uppercase tracking-wider">{lang === "en" ? "Apps to Automate *" : "Aplicaciones involucradas *"}</label>
                                                                        <input name="apps" required type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors" placeholder={lang === "en" ? "Gmail, Trello, Slack, Notion..." : "Gmail, Trello, Slack, Google Drive..."} />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <label className="text-sm font-medium text-white/60 uppercase tracking-wider">{lang === "en" ? "Desired Outcome" : "Resultado Deseado"}</label>
                                                                        <textarea name="desired_outcome" rows={2} className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors resize-none" placeholder={lang === "en" ? "What exactly do you want the automation to do for you?" : "¿Qué te gustaría automatizar exactamente?"} />
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                </section>

                                                {/* Submit CTA */}
                                                <MagneticButton strength={0.1}>
                                                    <div className="pt-8">
                                                        <button
                                                            type="submit"
                                                            disabled={isSubmitting}
                                                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-bold text-lg transition-all"
                                                            style={{
                                                                background: isSubmitting ? '#ffffff' : 'linear-gradient(135deg, #ffffff 0%, #dadadaff 100%)',
                                                                color: isSubmitting ? 'black' : 'black',
                                                            }}
                                                        >
                                                            {isSubmitting ? (
                                                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                            ) : (
                                                                <>
                                                                    {lang === "en" ? "Submit Information" : "Enviar información"}
                                                                    <ArrowRight className="w-5 h-5" />
                                                                </>
                                                            )}
                                                        </button>
                                                    </div>
                                                </MagneticButton>
                                            </form>

                                        </motion.div>
                                    </div>

                                </div>
                            </motion.div>
                        ) : (
                            /* Success State */
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, type: "spring" }}
                                className="min-h-[60vh] flex items-center justify-center"
                            >
                                <div className="text-center p-12 rounded-[40px] border relative max-w-2xl w-full overflow-hidden" style={{
                                    background: 'linear-gradient(145deg, rgba(20, 20, 22, 0.9) 0%, rgba(10, 10, 12, 0.95) 100%)',
                                    borderColor: 'rgba(0, 217, 255, 0.2)',
                                    boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
                                    backdropFilter: 'blur(20px)',
                                }}>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none" />

                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                        className="w-24 h-24 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-8 border border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.2)]"
                                    >
                                        <CheckCircle2 className="w-12 h-12 text-green-400" />
                                    </motion.div>

                                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-white tracking-tight">
                                        ¡Hemos recibido<br />tu información! 🎉
                                    </h2>
                                    <p className="text-xl text-white/70 mb-10 leading-relaxed">
                                        Nuestro equipo técnico ya está evaluando tus datos y preparando la estructuración de tu sistema.<br /><br />
                                        <span className="text-cyan-400 font-semibold">Tiempo estimado de activación: 24 a 48 horas.</span>
                                    </p>

                                    <button
                                        onClick={() => window.location.href = '/'}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all border border-white/10 hover:border-white/30 hover:bg-white/5 text-white"
                                    >
                                        Volver al inicio
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </Layout>
    );
};

export default Onboarding;
