export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        welcome: "Hello! I'm \n Thiago Menzinger",
        formation: "IT Technician",
        superior: "Mechatronics Engineering Student",
        skills:"Skills & Experience",
        meta :"Web Developer | IT Technician | Mechatronics Engineering Student | Technology and innovation enthusiast",
        soon: "Soon"
      },
      pt: {
        welcome: "Olá! Eu sou \n Thiago Menzinger",
        formation: "Técnico em Informática",
        superior: "Estudante de Engenharia Mecatrônica",
        skills:"Habilidades & Experiência",
        meta: "Desenvolvedor Web | Técnico de TI | Estudante de Engenharia Mecatrônica | Entusiasta da tecnologia e inovação",
        soon: "Em Breve"
      }
    }
  }))