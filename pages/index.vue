<script setup lang=ts>

interface Habilidades {
  name: string
  icon: string
  value: number
  tipo: string
}

const { t } = useI18n()

useSeoMeta({
  title: 'Thiago Menzinger',
  description: t('meta'),
})

const habilidades: Habilidades[] = [
  {
    name: 'JavaScript',
    icon: 'i-skill-icons-javascript',
    value: 65,
    tipo: 'Linguagens',
  },
  {
    name: 'TypeScript',
    icon: 'i-skill-icons-typescript',
    value: 50,
    tipo: 'Linguagens',
  },
  {
    name: 'Python',
    icon: 'i-skill-icons-python-dark',
    value: 40,
    tipo: 'Linguagens',
  },

  {
    name: 'C#',
    icon: 'i-skill-icons-cs',
    value: 35,
    tipo: 'Linguagens',
  },
  {
    name: 'Vue.js 3',
    icon: 'i-skill-icons-vuejs-dark',
    value: 60,
    tipo: 'Frameworks',
  },
  {
    name: 'Nuxt.js',
    icon: 'i-skill-icons-nuxtjs-dark',
    value: 65,
    tipo: 'Frameworks',
  },
  {
    name: 'Tauri',
    icon: 'i-logos-tauri',
    value: 30,
    tipo: 'Ferramentas',
  },
  {
    name: 'Node.js',
    icon: 'i-skill-icons-nodejs-dark',
    value: 50,
    tipo: 'Runtime',
  },
  {
    name: 'Bun',
    icon: 'i-devicon-bun',
    value: 50,
    tipo: 'Runtime',
  },
  {
    name: 'PM2',
    icon: 'i-logos-pm2-icon',
    value: 35,
    tipo: 'Ferramentas',
  },
  {
    name: 'Tailwind CSS',
    icon: 'i-skill-icons-tailwindcss-dark',
    value: 65,
    tipo: 'Frameworks',
  },
  {
    name: 'GitHub',
    icon: 'i-skill-icons-github-dark',
    value: 55,
    tipo: 'Ferramentas',
  },
  {
    name: 'Inkscape',
    icon: 'i-devicon-inkscape',
    value: 55,
    tipo: 'Ferramentas',
  },
  {
    name: 'Blender',
    icon: 'i-skill-icons-blender-dark',
    value: 40,
    tipo: 'Ferramentas',
  },
  {
    name: 'Cloudflare',
    icon: 'i-skill-icons-cloudflare-dark',
    value: 60,
    tipo: 'Ferramentas',
  },
  {
    name: 'AppWrite',
    icon: 'i-skill-icons-appwrite',
    value: 40,
    tipo: 'Banco de Dados',
  },
  {
    name: 'Firebase',
    icon: 'i-devicon-firebase',
    value: 60,
    tipo: 'Banco de Dados',
  },
  {
    name: 'Linux',
    icon: 'i-skill-icons-linux-dark',
    value: 50,
    tipo: 'Sistemas Operacionais',
  },
  {
    name: 'Windows',
    icon: 'i-skill-icons-windows-dark',
    value: 70,
    tipo: 'Sistemas Operacionais',
  },
  {
    name: 'Google ADs',
    icon: 'i-logos-google-ads',
    value: 50,
    tipo: 'Ferramentas',
  },
  {
    name: 'Google Analytics 4',
    icon: 'i-logos-google-analytics',
    value: 45,
    tipo: 'Ferramentas',
  },
]

</script>

<template>
  <div class="flex flex-col min-h-[calc(100vh)] px-7 m-auto max-w-[1280px]">
    <div
      class="top-3 absolute lg:-top-12 hidden dark:block lg:-left-7 lg:w-96 lg:h-96 -left-2 rounded-full w-40 h-40 bg-sky-500 blur-3xl opacity-25 lg:opacity-10 -z-1">
    </div>
    <Menu />
    <main class="grid grid-cols-1 gap-7">
      <section class="grid grid-cols-1 lg:grid-cols-2">
        <div class="flex space-y-5 col-span-1 flex-col">
          <div class="relative py-7">
            <h1 class="text-4xl whitespace-pre-line leading-tight md:text-3xl lg:text-5xl font-semibold">{{
              $t('welcome')
              }}</h1>
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex flex-col dark:text-gray-300">
              <h2 class="text-lg"> {{ $t('superior') }}</h2>
            </div>
            <div class="flex flex-col text-lg dark:text-gray-200">
                <h2> {{ $t('formation') }}</h2>
              </div>
            <div class="flex flex-col dark:text-gray-300">
              <NuxtLink aria-label="IBM AI Developer Badge"
                to="https://coursera.org/share/94195a7fe464aa58cf1e8d89689dc0fa" target="_blank">
                <h2 class="text-lg underline underline-offset-4"> {{ $t('certificate') }}</h2>
              </NuxtLink>
            </div>
            <div class="flex flex-col dark:text-white font-semibold pt-5">
              <h2 class="text-2xl lg:text-3xl"> {{ $t('description') }}</h2>
            </div>
          </div>
        </div>
      </section>
      <section class="flex flex-col mt-3 col-span-1 space-y-7">
        <UDivider />
        <div>
          <h2 class="font-semibold text-xl mb-3"> {{ $t('skills') }}</h2>
          <div
            class="flex w-full rounded-lg transition-all p-5 md:p-7 ease-in-out duration-500 bg-gradient-to-br dark:from-[#4797fa37] from-white to-transparent flex-col">
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <div v-for=" habilidade in habilidades" :key="habilidade.name"
                class="col-span-1 md:hover:scale-105 hover:scale-100 transition-all ease-in-out duration-300 flex flex-row items-center justify-start space-x-3">
                <UIcon class="text-4xl md:text-xl lg:text-4xl max-w-8" :name="habilidade.icon" />
                <div class="flex flex-col -mt-1 min-w-16 md:min-w-11 lg:min-w-16 space-y-1">
                  <p class="text-sm">{{ habilidade.name }}</p>
                  <UMeter class="max-w-16" :value="habilidade.value" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="flex justify-end text-sm mb-7 mt-10 gap-2 w-full">
      <span class="text-gray-500">&COPY 2025 - Thiago Menzinger</span>
    </footer>
  </div>
</template>
