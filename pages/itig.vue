<script lang="ts" setup>
import type { ButtonVariant } from '#ui/types'

const colorMode = useColorMode()

const { locale } = useI18n()

const theming = computed(() => {
  let icon:string, logoClass:string, btnVar:ButtonVariant;
  colorMode.value === 'light' ? (icon = 'i-tabler-sun', logoClass = '', btnVar = 'solid') : (icon = 'i-tabler-moon', logoClass = 'invert', btnVar = 'soft')
  return { icon, logoClass, btnVar }
})

const diffs = ['Google My Business otimizado e gerenciado profissionalmente.', 'Sites personalizados desenvolvidos do zero com foco em conversão.', 'Campanhas estratégicas no Google Ads para máximo retorno.', 'Análise avançada com integração de GTAG e métricas em tempo real.', 'Gestão completa da sua presença digital com resultados mensuráveis.']

const items = [{
  label: 'Getting Started',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'Installation',
  icon: 'i-heroicons-arrow-down-tray',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'Theming',
  icon: 'i-heroicons-eye-dropper',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'Layouts',
  icon: 'i-heroicons-rectangle-group',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'Components',
  icon: 'i-heroicons-square-3-stack-3d',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'Utilities',
  icon: 'i-heroicons-wrench-screwdriver',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}]
</script>

<template>
  <div class="min-h-[100svh] max-w-7xl mx-auto mb-14">
    <nav class="flex flex-row justify-between p-4 py-5">
      <NuxtLink aria-label="To homepage" :to="'/' + locale" class="cursor-pointer flex flex-row items-center gap-2">
        <UButton aria-label="Logo" class="p-0" variant="link">
          <NuxtImg fit="cover" width="40" height="40"
            :class="[theming.logoClass, 'hover:scale-110 transition-transform ease-in-out delay-100 duration-300']"
            src="/itig_logo.svg" alt="Thiago Menzinger Logo" />
        </UButton>
        <div class="flex flex-col justify-center lg:pb-1">
          <h1 class="font-bold text-lg">Leverage</h1>
          <p class="text-sm"> Marketing e Automação</p>
        </div>
      </NuxtLink>
      <div class="flex flex-row gap-2">
        <NuxtLink aria-label="To homepage" :to="'/' + locale" class="cursor-pointer">
          <UButton size="xl" aria-label="Change theme to dark or light" color="white" variant="solid" class="w-14 h-14">
            <UIcon name="i-tabler-message" class="w-8 h-8"></UIcon>
          </UButton>
        </NuxtLink>
        <NuxtLink aria-label="To homepage" :to="'/' + locale" class="cursor-pointer">
          <UButton size="xl" aria-label="Change theme to dark or light" color="emerald" :variant="theming.btnVar" class="w-14 h-14">
            <UIcon name="i-tabler-brand-whatsapp" class="w-8 h-8"></UIcon>
          </UButton>
        </NuxtLink>
      </div>
    </nav>
    <UDivider />
    <div class="grid grid-cols-1 p-4 gap-14">

      <div class="relative flex flex-col gap-4 pt-10 pb-5 overflow-hidden">
        <div class="flex flex-row gap-4 items-center justify-between z-10">
          <span class="text-5xl font-semibold tracking-wide"> Alcance </span>
        </div>
        <div class="flex flex-row gap-2 justify-between z-10">
          <span class="text-5xl font-semibold">Novos</span>
          <UButton color="emerald" :variant="theming.btnVar" class="px-4 z-10" :ui="{ rounded: 'rounded-xl' }">
            <UIcon name="i-tabler-map-2" class="w-8 h-8 mr-1"></UIcon>
            <span class="text-start">
              Sua marca no mapa <br> é só o começo.
            </span>
          </UButton>
        </div>
        <div class="flex flex-row gap-2 z-10">
          <span class="text-5xl font-semibold">Horizontes</span>
        </div>
        <p class="mt-4 z-10">Do pin no mapa ao verdadeiro protagonismo. Mais que uma localização, criamos experiências
          que conectam sua marca aos clientes. Cada detalhe conta para alcançar novos horizontes e multiplicar
          resultados.</p>
        <div :style="`background-image: url('/path_to_top.svg')`"
          class="absolute z-0 bg-cover bg-left-top top-0 left-7 opacity-15 dark:opacity-25 w-full h-96"></div>
      </div>

      <UCard class="rounded-lg">
        <div class="flex flex-col gap-4">
          <div class="flex flex-row items-center gap-2">
            <span class="w-12 h-12 rounded-full flex flex-col items-center justify-center bg-gray-600">
              <UIcon name="i-tabler-user" class="w-6 h-6 text-white"></UIcon>
            </span>
            <span class="font-semibold">Avaliações de Clientes</span>
          </div>
          <div>
            "É a melhor equipe nesse campo de atuação. Eu não seu o que faria sem eles. Sempre estão disponíveis para
            ajudar quando preciso."
          </div>
          <div class="flex flex-row gap-1 self-end text-yellow-500">
            <UIcon v-for="n in 5" name="i-tabler-star-filled" class="w-5 h-5"></UIcon>
          </div>
        </div>
      </UCard>

      <div class="grid grid-cols-2 gap-6">
        <UCard class="rounded-lg">
          <div class="flex flex-col items-center gap-3 justify-center text-center">
            <div class="flex flex-col border-[1px] border-gray-500 rounded-full p-4">
              <UIcon name="i-tabler-world-search" class="w-10 h-10"></UIcon>
            </div>
            <span>Visibilidade que gera oportunidades reais.</span>
          </div>
        </UCard>
        <UCard class="rounded-lg">
          <div class="flex flex-col items-center gap-3 justify-center text-center">
            <div class="flex flex-col border-[1px] border-gray-500 rounded-full p-4">
              <UIcon name="i-tabler-target-arrow" class="w-10 h-10"></UIcon>
            </div>
            <span>Destacamos diferenciais únicos do seu negócio.</span>
          </div>
        </UCard>
        <UCard class="rounded-lg">
          <div class="flex flex-col items-center gap-3 justify-center text-center">
            <div class="flex flex-col border-[1px] border-gray-500 rounded-full p-4">
              <UIcon name="i-tabler-chess" class="w-10 h-10"></UIcon>
            </div>
            <span>Estratégia personalizada, alcance exponencial.</span>
          </div>
        </UCard>
        <UCard class="rounded-lg">
          <div class="flex flex-col items-center gap-3 justify-center text-center">
            <div class="flex flex-col border-[1px] border-gray-500 rounded-full p-4">
              <UIcon name="i-hugeicons-artificial-intelligence-04" class="w-10 h-10"></UIcon>
            </div>
            <span>Tecnologia a serviço do resultado.</span>
          </div>
        </UCard>
      </div>

      <div class="relative mb-10">
        <div class="w-full p-5 rounded-3xl h-[450px] bg-gray-700">
          Fotos ou vídeos de um case de sucesso
        </div>
        <div class="absolute mx-auto rounded-xl p-5 w-60 h-32 -bottom-7 right-5 bg-gray-400">
          Um gráfico ou barras com resultados
        </div>
      </div>

      <UCard class="rounded-lg">
        <ul class="flex flex-col gap-4">
          <h2 class="font-semibold text-2xl mb-5">Presença Digital Completa:</h2>
          <li v-for="d in diffs">
            <div class="flex flex-row gap-2">
              <UIcon name="i-tabler-circle-check-filled" class="w-6 h-6 text-green-400"></UIcon>
              <span>{{ d }}</span>
            </div>
          </li>
        </ul>
      </UCard>

      <div class="flex flex-col gap-5">
        <h2 class="text-2xl font-semibold">Perguntas Frequentes:</h2>
        <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
          <template #default="{ item, index, open }">
            <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-700"
              :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
              <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>
              <template #trailing>
                <UIcon name="i-heroicons-chevron-right-20-solid"
                  class="w-5 h-5 ms-auto transform transition-transform duration-200" :class="[open && 'rotate-90']" />
              </template>
            </UButton>
          </template>
        </UAccordion>
      </div>
    </div>
  </div>
</template>