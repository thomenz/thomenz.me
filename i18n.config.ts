export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        welcome: "Hello! I'm \n Thiago Menzinger",
        formation: "💻 IT Technician",
        superior: "🎓 Mechatronics Engineering Student (Unicesumar)",
        certificate: "🤖 IBM AI Developer Professional Certificate",
        skills:"Skills & Experience",
        meta :"Web Developer | IT Technician | Mechatronics Engineering Student | Technology and innovation enthusiast",
      },
      pt: {
        welcome: "Olá! Eu sou \n Thiago Menzinger",
        formation: "💻 Técnico em Informática",
        superior: "🎓 Estudante de Engenharia Mecatrônica (Unicesumar)",
        certificate: "🤖 Desenvolvedor de IA Certificado pela IBM®",
        skills:"Habilidades & Experiência",
        meta: "Desenvolvedor Web | Técnico de TI | Estudante de Engenharia Mecatrônica | Entusiasta da tecnologia e inovação",
      }
    }
  }))