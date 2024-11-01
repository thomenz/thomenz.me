<script lang="ts" setup>
import type { ButtonVariant } from '#ui/types'

// The colorMode Function is getting called late on Safari and te colorMode is not being updated on the first render
const colorMode = useColorMode()

const { locale } = useI18n()

const theming = computed(() => {
  let icon: string, btnVar: ButtonVariant;
  colorMode.value === 'light' ? (icon = 'i-tabler-sun', btnVar = 'soft') : (icon = 'i-tabler-moon', btnVar = 'soft')
  return { icon, btnVar }
})

const diffs = ['Google Business Profile com gestão profissional.', 'Sites sob medida com DNA de conversão.', 'Google Ads orientado a performance.', 'Analytics avançado com dados em tempo real.', 'Gestão 360° da sua presença digital.']

const items = [{
  label: 'Como funciona o tráfego pago?',
  defaultOpen: true,
  content: 'O tráfego pago é uma estratégia de marketing digital que permite sua empresa aparecer instantaneamente nas primeiras posições do Google e redes sociais. Através de anúncios segmentados, conseguimos direcionar sua mensagem exatamente para quem está procurando seus produtos ou serviços. O melhor? Você só paga quando alguém realmente se interessa e clica no seu anúncio. É como ter uma vitrine premium no maior shopping center digital do mundo!'
}, {
  label: 'Quanto investir por mês em trafego pago?',
  content: 'O investimento ideal em tráfego pago varia de acordo com seus objetivos e mercado. Para começar, recomendamos um orçamento mínimo de R$ 900 a R$ 3.000 mensais para obter resultados significativos. Porém, o mais importante é ter uma estratégia personalizada que maximize seu retorno sobre investimento. Quer saber qual o melhor investimento para seu negócio? Entre em contato para uma análise gratuita!'
}, {
  label: 'Como colocar meu negócio no Google?',
  content: 'Existem várias maneiras de destacar seu negócio no Google: otimização SEO, Google Meu Negócio, Google Ads e marketing de conteúdo. O segredo é combinar essas estratégias de forma inteligente para maximizar sua visibilidade online. Nossa equipe especializada pode criar um plano personalizado para sua empresa dominar os resultados de busca!'
}, {
  label: 'Quanto custa o Google Meu Negócio?',
  content: 'O Google Meu Negócio é gratuito! Porém, para aproveitar todo seu potencial, é necessário otimizar seu perfil, gerenciar avaliações, postar conteúdo regularmente e manter as informações atualizadas. Nossa equipe oferece gestão profissional do seu perfil para garantir máxima visibilidade local e mais clientes.'
}, {
  label: 'Como anunciar no Google Ads?',
  content: 'Anunciar no Google Ads requer conhecimento técnico para criar campanhas eficientes. O processo envolve pesquisa de palavras-chave, criação de anúncios persuasivos, definição de públicos-alvo e otimização constante. Nossa equipe certificada pelo Google pode cuidar de todo esse processo, garantindo o melhor retorno para seu investimento.'
}, {
  label: 'Quanto custa criar um site para minha empresa?',
  content: 'Boa notícia! O site está incluído em nossos planos completos de marketing digital. Oferecemos soluções que integram design moderno, otimização para buscadores e experiência do usuário. Além do site, você recebe todo o suporte de marketing digital para atrair e converter mais clientes. Solicite uma proposta personalizada!'
},
{
  label: 'Qual o prazo para ver resultados com marketing digital?',
  content: 'Cada negócio tem seu tempo de maturação, mas nossos clientes costumam ver os primeiros resultados em 30-90 dias. Trabalhamos com metas claras e relatórios transparentes para você acompanhar cada evolução. Quer saber mais sobre nossos casos de sucesso?'
},
{
  label: 'Por que escolher uma agência de marketing digital?',
  content: 'Marketing digital eficiente exige experiência, ferramentas profissionais e dedicação constante. Nossa agência oferece uma equipe completa de especialistas pelo custo de um único funcionário, além de estratégias testadas e comprovadas em diversos segmentos. Agende uma consulta e descubra como podemos impulsionar seu negócio!'
}]

const reviews = [{
  img: '/thiago_menzinger.jpg',
  name: 'Reviwer Name',
  alt: 'image alt',
  content: 'Review Content',
  stars: 5
},
]

const diff = [
  {
    icon: 'i-tabler-world-search',
    content: 'Visibilidade que gera oportunidades reais.'
  },
  {
    icon: 'i-tabler-target-arrow',
    content: 'Destacamos diferenciais únicos do seu negócio.'
  },
  {
    icon: 'i-tabler-chess',
    content: 'Estratégia personalizada, alcance exponencial.'
  },
  {
    icon: 'i-hugeicons-artificial-intelligence-04',
    content: 'Tecnologia a serviço do resultado.'
  }
]

const cases = [
  {
    site: 'https://drarafaellabarreto.com/',
    grafico: '/kleber_grafico.webp',
    img: 'kleber_dentista.webp',
    alt: 'Imagem do grafico de desempenho do Dr. Kleber Sandim',
  },
  {
    site: 'https://www.drklebersandim.com/',
    grafico: '/rafaela_grafico.webp',
    img: 'rafaela_dentista.webp',
    alt: 'Imagem do grafico de desempenho da Dra. Rafaela Barreto',
  }
]
</script>

<template>
  <div class="min-h-[100svh] max-w-7xl mx-auto pb-14">
    <nav class="flex flex-row justify-between p-4 py-5">
      <NuxtLink aria-label="To homepage" :to="'/'+ locale" class="cursor-pointer flex flex-row items-center gap-2">
        <UButton aria-label="Logo" class="p-0" variant="link">
          <NuxtImg fit="cover" width="40" height="40" :placeholder="[40, 40]"
            :class="['dark:invert hover:scale-110 transition-transform ease-in-out delay-100 duration-300']"
            src="/itig_logo.svg" alt="Thiago Menzinger Logo" loading="lazy" />
        </UButton>
        <div class="flex flex-col justify-center lg:pb-1">
          <h1 class="font-bold text-lg">20/80</h1>
          <p class="text-sm"> Marketing e Automação</p>
        </div>
      </NuxtLink>
      <div class="flex flex-row gap-2">
        <NuxtLink aria-label="Contato Chatbot IA" to="#" class="cursor-pointer">
          <UButton disabled size="xl" aria-label="Change theme to dark or light" color="white" variant="solid" class="w-14 h-14">
            <UIcon name="i-tabler-message" class="w-8 h-8"></UIcon>
          </UButton>
        </NuxtLink>
        <NuxtLink aria-label="Contato por WhatsApp" to="https://wa.me/5567981683825" target="_blank" class="cursor-pointer">
          <UButton size="xl" aria-label="Change theme to dark or light" color="emerald" variant="solid"
            class="w-14 h-14">
            <UIcon name="i-tabler-brand-whatsapp" class="w-8 h-8"></UIcon>
          </UButton>
        </NuxtLink>
      </div>
    </nav>
    <UDivider />
    <div class="grid grid-cols-1 lg:grid-cols-5 p-4 gap-14">
      <div class="lg:col-span-3 gap-5 flex flex-col">
        <div class="relative flex flex-col pb-10 pt-5 gap-4 overflow-hidden">
          <div class="flex flex-row gap-4 items-center justify-between z-10">
            <span class="text-5xl lg:text-7xl font-semibold tracking-wide"> Alcance </span>
          </div>
          <div class="flex flex-row gap-2 justify-between z-10">
            <span class="text-5xl lg:text-7xl font-semibold">Novos</span>
            <UButton color="emerald" :variant="theming.btnVar" class="px-4 z-10" :ui="{ rounded: 'rounded-xl' }">
              <UIcon name="i-tabler-map-2" class="w-8 h-8 mr-1"></UIcon>
              <span class="text-start">
                Sua marca no mapa <br> é só o começo.
              </span>
            </UButton>
          </div>
          <div class="flex flex-row gap-2 z-10">
            <span class="text-5xl lg:text-7xl font-semibold">Horizontes</span>
          </div>
          <p class="mt-4 z-10 lg:text-lg">Do pin no mapa ao verdadeiro protagonismo. Mais que uma localização, criamos experiências
            que conectam sua marca aos clientes. Cada detalhe conta para alcançar novos horizontes e multiplicar
            resultados.</p>
          <div :style="`background-image: url('/path_to_top.svg')`"
            class="absolute z-0 bg-cover bg-left-top lg:left-0 top-0 left-7 opacity-10 dark:opacity-25 w-full h-full"></div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-7 lg:mt-10 gap-7 lg:gap-4">
          <UCard class="rounded-lg lg:col-span-3 hidden">
            <UCarousel v-slot="{ item }" :items="reviews" indicators :ui="{
              item: 'basis-full', indicators: {
                wrapper: 'relative bottom-0 mt-4'
              }
            }" class="w-full rounded-lg overflow-hidden">
              <div class="flex flex-col space-y-5">
                <div class="flex flex-col gap-4">
                  <div class="flex flex-row items-center gap-2">
                    <NuxtImg fit="cover" width="40" height="40" class="rounded-full" :placeholder="[40, 40]" :src="item.img"
                      :alt="item.alt" loading="lazy" />
                    <span class="font-semibold">{{ item.name }}</span>
                  </div>
                  <div>
                    {{ item.content }}
                  </div>
                  <div class="flex flex-row gap-1 self-end text-yellow-500">
                    <UIcon v-for="n in item.stars" name="i-tabler-star-filled" class="w-5 h-5"></UIcon>
                  </div>
                </div>
              </div>
            </UCarousel>
          </UCard>
          <div class="grid grid-cols-2 lg:col-span-7 lg:gap-4 gap-6">
          <UCard v-for="df in diff" class="rounded-lg">
            <div class="flex flex-col items-center gap-3 justify-center text-center">
              <div class="flex flex-col border-[1px] dark:border-gray-500 rounded-full p-4">
                <UIcon :name="df.icon" class="w-10 h-10 text-emerald-400"></UIcon>
              </div>
              <span>{{ df.content }}</span>
            </div>
          </UCard>
        </div>
        </div>
      </div>
      <div class="lg:col-span-2 dark:lg:bg-gray-900 lg:bg-gray-200 lg:p-5 lg:rounded-xl flex flex-col gap-10">
        <h2 class="font-semibold text-2xl">Da visibilidade ao sucesso: criando oportunidades que convertem.</h2>
        <UCarousel v-slot="{ item }" :items="cases" indicators :ui="{
          item: 'basis-full h-[520px] lg:h-80', indicators: {
            wrapper: 'relative bottom-0 mt-4'
          }
        }" class="w-full rounded-lg h-full overflow-hidden">
          <div class="relative">
            <NuxtImg fit="cover" width="900" height="1440" class="rounded-xl shadow-md w-[80%] ml-5 lg:ml-14 lg:w-[42%]" :placeholder="[900, 1440]"
              :src="item.img" :alt="item.alt" loading="lazy" />
            <NuxtImg fit="cover" width="400" height="300"
              class="absolute mx-auto rounded-xl w-[200px] h-[150px] shadow-md -bottom-0 right-5 lg:right-24" :placeholder="[400, 300]"
              :src="item.grafico" :alt="item.alt" loading="lazy" />
          </div>
        </UCarousel>
        <UCard class="rounded-lg">
        <ul class="flex flex-col gap-4">
          <h2 class="font-semibold text-2xl mb-5">Resultado digital mensurável: do planejamento ao sucesso.</h2>
          <li v-for="d in diffs">
            <div class="flex flex-row gap-2">
              <UIcon name="i-tabler-circle-check-filled" class="w-6 h-6 text-green-400"></UIcon>
              <span>{{ d }}</span>
            </div>
          </li>
        </ul>
      </UCard>
      </div>
      <div class="flex flex-col gap-5 lg:col-span-5">
        <h2 class="text-2xl font-semibold">Perguntas Frequentes:</h2>
        <UAccordion :items="items"
          :ui="{ wrapper: 'flex flex-col w-full', item: { size: 'text-md px-3', color: 'dark:text-gray-300' } }">
          <template #default="{ item, index, open }">
            <UButton color="white" variant="ghost" class="border-b border-gray-200 text-md dark:border-gray-700"
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
      <div class="flex flex-col w-full gap-5 lg:gap-7 lg:w-full lg:col-span-5 lg:items-center">
        <h2 class="text-2xl font-semibold">Entre em Contato:</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <NuxtLink aria-label="Contato por WhatsApp" to="https://wa.me/5567981683825" target="_blank" class="cursor-pointer">
          <UButton block size="lg" aria-label="Contato via WhatsApp" color="emerald" variant="solid" class="h-14">
            <UIcon name="i-tabler-brand-whatsapp" class="w-8 h-8"></UIcon>
            <div class="flex flex-col items-start">
            <span>Solicite uma Proposta Personalizada</span>
            <span class="font-normal"> Atendimento WhatsApp</span>
            </div>
          </UButton>
        </NuxtLink>
        <NuxtLink aria-label="Contato Online" to="#" class="cursor-pointer">
          <UButton block disabled size="lg" aria-label="Conversa com Chatbot IA" color="sky" variant="solid" class="h-14">
            <UIcon name="i-tabler-message" class="w-8 h-8"></UIcon>
            <div class="flex flex-col items-start">
            <span>Tire Suas Dúvidas 24 Horas</span>
            <span class="font-normal"> Agente de Inteligência Artificial</span>
            </div>
          </UButton>
        </NuxtLink>
        </div>
        
      </div>
    </div>
  </div>
</template>