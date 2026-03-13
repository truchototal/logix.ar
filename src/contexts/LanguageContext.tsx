import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "es" | "en";

interface Translations {
  [key: string]: { es: string; en: string };
}

const translations: Translations = {
  // Nav
  "nav.home": { en: "Home", es: "Inicio" },
  "nav.about": { en: "About Us", es: "Nosotros" },
  "nav.projects": { en: "Projects", es: "Proyectos" },
  "nav.contact": { en: "Contact", es: "Contacto" },
  "nav.team": { en: "Team", es: "Equipo" },

  // Team Page
  "team.title": { en: "The Team", es: "El Equipo" },
  "team.hero.title": { en: "Creative Minds Behind Logix.ar", es: "Mentes Creativas Detrás de Logix.ar" },
  "team.hero.subtitle": {
    en: "Meet the experts who bring your digital visions to life with precision and creativity.",
    es: "Conoce a los expertos que dan vida a tus visiones digitales con precisión y creatividad.",
  },
  "team.editor.name": { en: "Tiziano Ambrosino", es: "Tiziano Ambrosino" },
  "team.editor.role": { en: "Short-Form Video Editor", es: "Editor de Video (Short-form)" },
  "team.editor.desc": {
    en: "Expert in high-impact short-form content, specializing in dynamic editing for TikToks, Reels, and YouTube Shorts that capture attention and drive engagement.",
    es: "Experto en contenido de alto impacto para formatos cortos, especializado en edición dinámica para TikToks, Reels y YouTube Shorts que captan la atención y generan engagement.",
  },
  "team.designer.name": { en: "Tiziano Ambrosino", es: "Tiziano Ambrosino" },
  "team.designer.role": { en: "Graphic & Brand Designer", es: "Diseñador Gráfico y de Marca" },
  "team.designer.desc": {
    en: "Creating powerful visual identities through custom logos, professional banners, striking flyers, and high-conversion thumbnails.",
    es: "Creando identidades visuales potentes a través de logos a medida, banners profesionales, flayers impactantes y miniaturas de alta conversión.",
  },
  "team.automation.name": { en: "Joaquin Lotumolo", es: "Joaquin Lotumolo" },
  "team.automation.role": { en: "Automation Team", es: "Equipo de Automatizaciones" },
  "team.automation.desc": {
    en: "Specialist in developing autonomous systems, intelligent agents, and custom workflows that eliminate friction and maximize operational efficiency.",
    es: "Especialista en desarrollar sistemas autónomos, agentes inteligentes y flujos de trabajo a medida que eliminan fricciones y maximizan la eficiencia operativa.",
  },
  "team.portfolio.title": { en: "Featured Work", es: "Trabajos Destacados" },
  "team.portfolio.editor.item1": { en: "Viral Reels Collection", es: "Colección de Reels Virales" },
  "team.portfolio.editor.item2": { en: "High-Energy TikToks", es: "TikToks de Alta Energía" },
  "team.portfolio.designer.item1": { en: "Logo & Brand Identity", es: "Logos e Identidad de Marca" },
  "team.portfolio.designer.item2": { en: "Banners & Thumbnails", es: "Banners y Miniaturas" },
  "team.portfolio.automation.item1": { en: "Intelligent CRM Sync", es: "Sincronización de CRM" },
  "team.portfolio.automation.item2": { en: "Autonomous AI Agents", es: "Agentes de IA Autónomos" },
  "team.portfolio": { en: "View Portfolio", es: "Ver Portafolio" },

  // Hero
  "hero.title": { en: "Intelligent Systems to Optimize your Business", es: "Sistemas Inteligentes para Optimizar tu Negocio" },
  "hero.subtitle": {
    en: "Create, implement and monitor intelligent systems and AI agents that optimize processes, connect tools and improve your company's productivity.",
    es: "Crea, implementa y supervisa sistemas inteligentes y agentes de IA que optimizan procesos, conectan herramientas y mejoran la productividad de tu empresa.",
  },
  "hero.cta1": { en: "Contact Us", es: "Contáctanos" },
  "hero.cta2": { en: "View projects", es: "Ver proyectos" },

  "cta.start": { en: "Get Started", es: "Comienza ahora" },
  "cta.title": { en: "Ready to Transform Your Business?", es: "¿Listo para Transformar tu Negocio?" },
  "cta.subtitle": {
    en: "Discover how our intelligent systems can revolutionize your operations and drive growth.",
    es: "Descubre cómo nuestros sistemas inteligentes pueden revolucionar tus operaciones e impulsar el crecimiento.",
  },


  // Features
  "features.title": { en: "What We Do", es: "Qué Hacemos" },
  "features.subtitle": {
    en: "End-to-end AI solutions designed for real business impact.",
    es: "Soluciones de IA de principio a fin diseñadas para un impacto empresarial real.",
  },
  "feat.automation": { en: "Automation", es: "Automatización" },
  "feat.automation.desc": {
    en: "Streamline workflows with intelligent automation that reduces manual effort and eliminates errors.",
    es: "Optimiza flujos de trabajo con automatización inteligente que reduce el esfuerzo manual y elimina errores.",
  },
  "feat.agents": { en: "AI Agents", es: "Agentes de IA" },
  "feat.agents.desc": {
    en: "Deploy autonomous AI agents that handle complex tasks, learn, and improve over time.",
    es: "Despliega agentes de IA autónomos que gestionan tareas complejas, aprenden y mejoran con el tiempo.",
  },
  "feat.integrations": { en: "Integrations", es: "Integraciones" },
  "feat.integrations.desc": {
    en: "Connect your tools and platforms seamlessly with custom-built integrations and APIs.",
    es: "Conecta tus herramientas y plataformas de forma fluida con integraciones y APIs a medida.",
  },
  "feat.custom": { en: "Custom Solutions", es: "Soluciones a Medida" },
  "feat.custom.desc": {
    en: "Tailored AI systems built specifically for your unique business challenges and goals.",
    es: "Sistemas de IA diseñados específicamente para los desafíos y objetivos únicos de tu negocio.",
  },

  // Projects
  "projects.hero.title": { en: "Our Success Cases", es: "Casos de Éxito" },
  "projects.title": { en: "Solutions that Transform Businesses", es: "Soluciones que Transforman Negocios" },
  "projects.subtitle": {
    en: "Real solutions we've built for real businesses.",
    es: "Soluciones reales que hemos construido para empresas reales.",
  },
  "projects.info1": { en: "OUR PROJECTS", es: "NUESTROS PROYECTOS" },
  "projects.info.title": { en: "Implementations Realized", es: "Implementaciones Realizadas" },
  "projects.info2": {
    en: "Discover how we have transformed businesses with our intelligent systems. Explore our projects to see the real impact of our solutions.",
    es: "Descubre cómo hemos transformado negocios con nuestros sistemas inteligentes. Explora nuestros proyectos para ver el impacto real de nuestras soluciones.",
  },
  "projects.info3": { en: "", es: "¿Tiene un proyecto en mente?" },


  // Contact
  "contact.title": { en: "Get in Touch", es: "Contáctanos" },
  "contact.subtitle": {
    en: "Ready to transform your business with AI? Let's talk.",
    es: "¿Listo para transformar tu negocio con IA? Hablemos.",
  },
  "contact.name": { en: "Name", es: "Nombre" },
  "contact.email": { en: "Email", es: "Correo electrónico" },
  "contact.message": { en: "Message", es: "Mensaje" },
  "contact.send": { en: "Send Message", es: "Enviar Mensaje" },
  "contact.email.business": { en: "Or reach us at", es: "O escríbenos a" },

  // Footer}
  "footer.company": { en: "Company", es: "Empresa" },
  "footer.product": { en: "Product", es: "Producto" },
  "footer.rights": { en: "All rights reserved.", es: "Todos los derechos reservados." },
  "footer.tagline": {
    en: "We design automation and artificial intelligence systems that optimize processes and scale digital businesses.",
    es: "Diseñamos sistemas de automatización e inteligencia artificial que optimizan procesos y escalan negocios digitales.",
  },

  // about
  "about.title": { en: "Our Story", es: "Nuestra Historia" },
  "about.hero.title": { en: "Our Vision to Reality", es: "De la Visión a la Realidad" },
  "about.hero.subtitle": {
    en: "The story of Logix.ar is one of innovation, discipline, and a commitment to excellence. Discover how we transformed the idea of automating businesses into a tangible reality.",
    es: "La historia de Logix.ar es una historia de innovación, disciplina y compromiso con la excelencia. Descubre cómo transformamos la idea de automatizar empresas en una realidad tangible.",
  },
  "about.pillars": { en: "Our Pillars", es: "Nuestros Pilares" },
  "about.definition.title": { en: "What Defines Us", es: "Lo Que Nos Define" },
  "about.definition.subtitle": {
    en: "We believe technology should generate measurable impact. We don't aim to implement isolated tools, but to design complete digital ecosystems.",
    es: "Creemos que la tecnología debe generar impacto medible. No buscamos implementar herramientas aisladas, sino diseñar ecosistemas digitales completos.",
  },
  "about.differentiation.title": { en: "What Sets Us Apart", es: "Lo Que Nos Diferencia" },
  "about.differentiation.subtitle": {
    en: "Our unique blend of technical expertise, strategic vision, and relentless focus on results sets us apart in the world of intelligent automation.",
    es: "Nuestra combinación única de experiencia técnica, visión estratégica y enfoque implacable en los resultados nos distingue en el mundo de la automatización inteligente.",
  },
  "about.structure.title": { en: "Our Structured Approach", es: "Nuestro Enfoque Estructurado" },
  "about.structure.subtitle": {
    en: "We follow a disciplined, structured approach to every project, ensuring that we deliver solutions that are not only innovative but also reliable and scalable.",
    es: "Seguimos un enfoque disciplinado y estructurado en cada proyecto, asegurando que entregamos soluciones que no solo son innovadoras, sino también confiables y escalables.",
  },
  "about.compromise.title": { en: "Our Commitment", es: "Nuestro Compromiso" },
  "about.compromise.subtitle": {
    en: "Logix.ar stands for discipline, constant evolution, and strategic vision. We continuously refine our technical capabilities, expand our knowledge in artificial intelligence, and develop increasingly robust solutions.",
    es: "Logix.ar representa disciplina, evolución constante y visión estratégica. Seguimos perfeccionando nuestras capacidades técnicas, ampliando conocimientos en inteligencia artificial y desarrollando soluciones cada vez más sólidas.",
  },
  "about.compromise.future": {
    en: "The story is just beginning, and we are building every step with planning, vision, and commitment towards the future.",
    es: "La historia recién comienza, y estamos construyendo cada paso con planificación, visión y compromiso hacia el futuro.",
  },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const savedLang = localStorage.getItem("logix_lang");
    return (savedLang === "es" || savedLang === "en") ? savedLang : "es";
  });

  const setLang = (newLang: Lang) => {
    localStorage.setItem("logix_lang", newLang);
    setLangState(newLang);
  };

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
