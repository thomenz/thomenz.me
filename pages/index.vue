<script setup lang=ts>
const { t } = useI18n()
useSeoMeta({
  title: 'Thiago Menzinger',
  description: t('meta'),
})
  useHead({
  meta: [
    { name: 'facebook-domain-verification', content: '6nztvvmk30mhzwk1gtx5tgo6z9opfn' }
  ],
})

const habilidades = [
  {
    name: 'JavaScript',
    icon: 'i-skill-icons-javascript',https://www.facebook.com/login.php?next=https%3A%2F%2Fdevelopers.facebook.com%2Fsettings%2Fdeveloper%2Findie-verification%2F
    value: 60,
  },
  {
    name: 'TypeScript',
    icon: 'i-skill-icons-typescript',
    value: 40,
  },
  {
    name: 'Python',
    icon: 'i-skill-icons-python-dark',
    value: 40,
  },

  {
    name: 'C#',
    icon: 'i-skill-icons-cs',
    value: 40,
  },
  {
    name: 'Vue.js 3',
    icon: 'i-skill-icons-vuejs-dark',
    value: 60,
  },
  {
    name: 'Nuxt.js',
    icon: 'i-skill-icons-nuxtjs-dark',
    value: 60,
  },
  {
    name: 'Node.js',
    icon: 'i-skill-icons-nodejs-dark',
    value: 50,
  },
  {
    name: 'Bun',
    icon: 'i-devicon-bun',
    value: 40,
  },
  {
    name: 'Tailwind CSS',
    icon: 'i-skill-icons-tailwindcss-dark',
    value: 60,
  },
  {
    name: 'GitHub',
    icon: 'i-skill-icons-github-dark',
    value: 50,
  },
  {
    name: 'Inkscape',
    icon: 'i-devicon-inkscape',
    value: 50,
  },
  {
    name: 'Blender',
    icon: 'i-skill-icons-blender-dark',
    value: 40,
  },
  {
    name: 'Cloudflare',
    icon: 'i-skill-icons-cloudflare-dark',
    value: 40,
  },
  {
    name: 'AppWrite',
    icon: 'i-skill-icons-appwrite',
    value: 40,
  },
  {
    name: 'Firebase',
    icon: 'i-devicon-firebase',
    value: 60,
  },
  {
    name: 'Linux',
    icon: 'i-skill-icons-linux-dark',
    value: 50,
  },
  {
    name: 'Windows',
    icon: 'i-skill-icons-windows-dark',
    value: 70,
  },
]

</script>

<template>
  <div class="flex flex-col min-h-[calc(100vh)] px-7 m-auto max-w-[1280px]">
    <div class="absolute top-3 lg:-top-12 lg:-left-7 lg:w-96 lg:h-96 -left-2 rounded-full w-40 h-40 bg-sky-500 blur-3xl opacity-25 lg:opacity-10 -z-1"></div>
    <Menu />
    <main class="grid grid-cols-1 gap-7">
      <section class="grid grid-cols-1 lg:grid-cols-2">
        <div class="flex space-y-5 col-span-1 flex-col">
          <div class="relative">
            <h1 class="text-4xl whitespace-pre-line leading-tight md:text-3xl lg:text-5xl font-semibold">{{
              $t('welcome')
            }}</h1>
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex flex-row gap-3 items-center">
              <div class="flex flex-col text-lg dark:text-gray-200">
                <h2> {{ $t('formation') }}</h2>
              </div>
            </div>
            <div class="flex flex-col dark:text-gray-300">
              <h2 class="text-lg"> {{ $t('superior') }}</h2>
            </div>
            <div class="flex flex-col dark:text-gray-300">
              <NuxtLink aria-label="IBM AI Developer Badge"
                to="https://coursera.org/share/94195a7fe464aa58cf1e8d89689dc0fa" target="_blank">
                <h2 class="text-lg underline underline-offset-4"> {{ $t('certificate') }}</h2>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div v-if="false" class="flex flex-col col-span-1">
          <div class="flex flex-col w-full grow">
          </div>
          <div>
            <UInput :padded="false" placeholder="Conversar..." variant="none"
              class="w-full border-b-2 py-3 border-gray-500 dark:border-gray-800">
              <template #trailing>
                <UButton :padded="false" color="gray" variant="link" icon="i-tabler-send-2"></UButton>
              </template>
            </UInput>
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
                class="col-span-1 md:hover:scale-105 hover:scale-100 transition-all ease-in-out duration-300 flex flex-row items-center space-x-3">
                <UIcon class="text-4xl md:text-xl lg:text-4xl" :name="habilidade.icon" />
                <div class="flex flex-col -mt-1 min-w-16 md:min-w-11 lg:min-w-16 space-y-1">
                  <p class="text-sm">{{ habilidade.name }}</p>
                  <UMeter :value="habilidade.value" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="flex justify-end text-sm mb-3 mt-10 gap-2 w-full">
      <span class="text-gray-500">2023 - PRESENT &COPY Thiago Menzinger</span>
    </footer>
  </div>
</template>
