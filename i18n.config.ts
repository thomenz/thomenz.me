export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        welcome: "Hello! I'm Thiago Menzinger",
        description: "This site is under construction: one gear at a time, I'm building a haven for my mechatronic musings and digital daydreams. Brace yourself for an engineer's playground of projects, code, and creative chaos. Stay tuned, and let's connect on Github!",
      },
      pt: {
        welcome: "Olá! Eu sou Thiago Menzinger",
        description: "Uma engrenagem de cada vez, estou construindo um refúgio para minhas divagações mecatrônicas e devaneios digitais. Prepare-se para um playground de projetos de um Engenheiro em Mecatrônica, Técnico em TI repleto de código e caos criativo. Fique ligado e vamos nos conectar no Github!"
      }
    }
  }))