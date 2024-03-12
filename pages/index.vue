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
    name: 'Vite',
    icon: 'i-skill-icons-vite-dark',
    value: 40,
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
  },
  {
    name: 'C++',
    icon: 'i-skill-icons-cpp',
    value: 30,
  },
  {
    name: 'C#',
    icon: 'i-skill-icons-cs',
    value: 40,
  },
  {
    name: 'Java',
    icon: 'i-skill-icons-java-dark',
    value: 25,
  }
]

const about = ref(false)
const skills = ref(false)
const portifolio = ref(false)

setTimeout(() => {
  about.value = true
}, 500)
setTimeout(() => {
  portifolio.value = true
}, 1000)
setTimeout(() => {
  skills.value = true
}, 1500)
</script>

<template>
  <div class="flex flex-col min-h-[calc(100vh)] px-7 py-2 m-auto max-w-[1280px]">
    <Menu />
    <main class="grid grid-cols-1 md:grid-cols-2 justify-center sm:flex-row gap-10 grow">
      <article class="flex flex-col mt-10 md:self-center col-span-1 md:mx-2 lg:mx-10 sm:p-0 space-y-7">
        <div class="relative">
          <Transition name="slide-right">
            <div v-if="portifolio" class="absolute right-0 top-3 sm:top-2">
            <UChip position="top-left" :text="$t('soon')" color="yellow" size="2xl">
              <UButton color="gray" disabled variant="outline"> portifolio</UButton>
            </UChip>
          </div>
          </Transition>
          <h1 class="text-4xl whitespace-pre-line leading-tight md:text-3xl lg:text-5xl font-bold">{{ $t('welcome') }}</h1>
        </div>
        <Transition name="slide-right">
          <div v-if="about"
            class="flex w-full space-y-6 rounded-lg hover:scale-105 transition-all p-5 ease-in-out duration-500 bg-gradient-to-br dark:from-[#47fab223] from-white to-transparent flex-col">
            <div class="flex flex-row gap-3 items-center">
              <div class="flex flex-col text-lg dark:text-gray-200">
                <h4 class="font-bold"> {{ $t('formation') }}</h4>
              </div>
              <NuxtImg fit="cover" sizes="100px" src="/logocft.webp" alt="CFT Logo" />
            </div>
            <div class="flex flex-col dark:text-gray-300">
              <h4 class="font-bold text-lg"> {{ $t('superior') }}</h4>
              <p> Unicesumar - 2020/2024</p>
            </div>
          </div>
        </Transition>
      </article>
      <article class="col-span-1 flex flex-col md:self-center md:mx-2 lg:mx-10 sm:p-0 space-y-7">
        <Transition name="slide-right">
          <div v-if="skills"
            class="flex w-full space-y-6 rounded-lg hover:scale-105 transition-all p-5 ease-in-out duration-500 bg-gradient-to-br dark:from-[#4797fa37] from-white to-transparent flex-col">
            <div class="flex flex-col text-lg dark:text-gray-300">
              <h4 class="font-bold"> {{ $t('skills') }}</h4>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
              <div v-for=" habilidade in habilidades" :key="habilidade.name"
                class="col-span-1 md:hover:scale-110 hover:scale-100 transition-all ease-in-out duration-300 flex flex-row items-center space-x-3">
                <UIcon class="text-4xl md:text-xl lg:text-4xl" :name="habilidade.icon" />
                <div class="flex flex-col -mt-1 min-w-16 md:min-w-11 lg:min-w-16 space-y-1">
                  <p class="text-sm">{{ habilidade.name }}</p>
                  <UMeter :value="habilidade.value" />
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </article>
    </main>
    <footer class="flex justify-end text-sm mb-3 mt-10 gap-2 w-full">
      <span class="text-gray-500">2023 - PRESENT &COPY Thiago Menzinger</span>
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
