<script setup lang=ts>
const { t } = useI18n()

useSeoMeta({
  title: 'Thiago Menzinger',
  description: t('meta'),
})
const colorMode = useColorMode()
const btvariant = computed(() => {
  return colorMode.value === 'light' ? 'solid' : 'outline'
})

const habilidades = [
  {
    name: 'JavaScript',
    icon: 'i-skill-icons-javascript',
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
    name: 'HTML5',
    icon: 'i-skill-icons-html',
    value: 60,
  },
  {
    name: 'CSS3',
    icon: 'i-skill-icons-css',
    value: 50,
  },
  {
    name: 'Photoshop',
    icon: 'i-skill-icons-photoshop',
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
    name: 'Linux',
    icon: 'i-skill-icons-linux-dark',
    value: 50,
  },
  {
    name: 'Windows',
    icon: 'i-skill-icons-windows-dark',
    value: 70,
  }
]

const about = ref(false)
const skills = ref(false)
const portifolio = ref(false)
// change the value of each ref above to true after 500 milliseconds
setTimeout(() => {
  about.value = true
}, 500)
setTimeout(() => {
  skills.value = true
}, 1000)
setTimeout(() => {
  portifolio.value = true
}, 1500)
</script>

<template>
  <div class="flex flex-col min-h-[calc(100vh)] justify-between px-7 py-2 m-auto max-w-[1280px]">
    <Menu />
    <main class="grid sm:grid-cols-2 grid-cols-1 space-y-10 py-7 items-center">
      <article class="relative col-span-1 flex flex-col md:mx-2 lg:mx-10 sm:p-0 space-y-7">
        <Transition name="slide-right"> 
        <UChip  v-if="portifolio" class="absolute sm:right-3 right-0 top-10" position="top-left" :text="$t('soon')" color="yellow" size="2xl">
        <UButton  color="gray" disabled variant="outline"> portifolio</UButton>
      </UChip>
    </Transition>
        <h1 class="text-4xl whitespace-pre-line leading-tight sm:text-6xl font-bold">{{ $t('welcome') }}</h1>
        <Transition name="slide-right">
        <div v-if="about"
          class="flex w-full space-y-6 rounded-lg hover:scale-105 transition-all p-5 ease-in-out duration-500 bg-gradient-to-br dark:from-[#47fab223] from-white to-transparent flex-col">
          <div class="flex flex-row items-center space-x-6">
            <div class="flex flex-col text-lg dark:text-gray-200">
              <h4 class="font-bold"> {{ $t('formation') }}</h4>
            </div>
            <div class="bg-white rounded p-1">
              <NuxtLink aria-label="To homepage" :to="'https://crt01.gov.br/'" target="_blank">
                <NuxtImg class="cursor-pointer" fit="cover" width="90" src="/logocft.webp" alt="CFT Logo" />
              </NuxtLink>
            </div>
          </div>
          <div class="flex flex-col dark:text-gray-300">
            <h4 class="font-bold text-lg"> {{ $t('superior') }}</h4>
            <p> Unicesumar - 2020/2024</p>
          </div>
        </div>
      </Transition>
      </article>
      <article class="col-span-1 flex flex-col md:mx-2 lg:mx-10 sm:p-0 space-y-7">
        <Transition name="slide-right">
        <div v-if="skills"
          class="flex w-full space-y-6 rounded-lg hover:scale-105 transition-all p-5 ease-in-out duration-500 bg-gradient-to-br dark:from-[#4797fa37] from-white to-transparent flex-col">
          <div class="flex flex-col text-lg dark:text-gray-300">
            <h4 class="font-bold"> {{ $t('skills') }}</h4>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-5">
            <div v-for=" habilidade in habilidades" :key="habilidade.name"
              class="col-span-1 hover:scale-125 hover:ml-4 transition-all ease-in-out duration-300 flex flex-row items-center space-x-3">
              <UIcon class="text-4xl" :name="habilidade.icon" />
              <div class="flex flex-col -mt-1 min-w-20 space-y-1">
                <p class="text-sm">{{ habilidade.name }}</p>
                <UMeter :value="habilidade.value" />
              </div>
            </div>
          </div>
        </div>
      </Transition>
      </article>
    </main>
    <footer class="flex justify-end text-sm mb-5 gap-2 w-full">
      <span class="text-gray-500">2023 - PRESENT &COPY Thiago Menzinger</span>
      <span class="dark:text-gray-700 text-gray-400">Beta 1.0</span>
    </footer>
  </div>
</template>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
