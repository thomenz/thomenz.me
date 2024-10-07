export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'pt_BR',
    messages: {
      en: {
        welcome: "Hello! I'm \n Thiago Menzinger",
        formation: "💻 IT Technician",
        superior: "🎓 Mechatronics Engineering Student (Unicesumar)",
        certificate: "🤖 IBM® AI Developer Professional Certificate",
        description: "Creating innovative digital solutions, from development to promotion",
        skills:"Skills & Experience",
        meta :"Web/AI Developer | IT Technician | Mechatronics Engineering Student | Technology and Innovation Enthusiast",
      },
      pt: {
        welcome: "Olá! Eu sou \n Thiago Menzinger",
        formation: "💻 Técnico em Informática",
        superior: "🎓 Engenheiro Mecatrônico em Formação (Unicesumar)",
        certificate: "🤖 Desenvolvedor de IA Certificado pela IBM®",
        description: "Criando soluções digitais inovadoras, desde o desenvolvimento até a promoção.",
        skills:"Habilidades & Experiência",
        meta: "Desenvolvedor Web/IA | Técnico de TI | Engenheiro Mecatrônico em Formação | Entusiasta da Tecnologia e Inovação",
      }
    }
  }))