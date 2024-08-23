<script lang="ts" setup>
import premio from '/premio.webp'
import cynthya from '/cynthya.webp'
import ogimage from '/ogimage.jpg'
import { useRobotsRule } from '#imports'

const rule = useRobotsRule()
rule.value = 'noindex, nofollow'
const isOpen = ref(false)

useSeoMeta({
  title: 'Rifa da Cynthya',
  ogTitle: 'Rifa da Cynthya',
  description: 'É só abrir o link e escolher os números que deseja comprar. Cada número custa R$ 10,00 e você pode comprar quantos quiser!',
  ogDescription: 'É só abrir o link e escolher os números que deseja comprar. Cada número custa R$ 10,00 e você pode comprar quantos quiser!',
  ogImage: ogimage,
})

const notAvailableNumbers = ref<any>([])

const getAvailableNumbers = async () => {
  const response = await fetch('https://meta-ai-worker.thiagomenzinger.workers.dev/rifas',)
  const data = await response.json()
  notAvailableNumbers.value = data.map((entry: { numbers: string }) => entry.numbers.split(',').map(Number)).flat()
}

await getAvailableNumbers()

const selected = ref<number[]>([])

const sendWhatsappMessage = () => {
  const numbers = selected.value.join(', ')
  const message = `Olá, gostaria de comprar o(s) número(s) ${numbers} da sua rifa Cynthya!`
  window.open(`https://api.whatsapp.com/send?phone=556784132198&text=${message}`)
}

const selectNumber = (n: number) => {
  if (selected.value.includes(n)) {
    selected.value = selected.value.filter((i) => i !== n)
  } else {
    selected.value = [...selected.value, n]
  }
}

const isSelected = (n: number) => {
  return selected.value.includes(n) ? 'ring-4 ring-blue-300 ring-inset' : ''
}

const checkIfNumberisAvailable = (n: number) => {
  return notAvailableNumbers.value.includes(n) ? true : false
}

const value = computed(() => {
  return selected.value.reduce((acc, n) => acc + 10, 0)
})

const toast = useToast()

const useCopyToClipboard = () => {
  navigator.clipboard.writeText('67984132198')
  toast.add({
    title: 'Chave PIX copiada!',
    description: 'Agora é só colar no seu aplicativo de pagamento e me enviar os números que comprou!',
    timeout: 5000,
    color: 'blue',
  })
}
</script>

<template>
  <div class="relative p-3 bg-gradient-to-br from-pink-50 to-pink-100">
    <NuxtRouteAnnouncer />
    <div class="flex flex-col items-center pt-4 justify-center">   
    <img :src="cynthya" alt="Rifa da Cynthya" width="300">
    <img :src="premio" alt="Premios" width="400" class="brightness-105">
    </div>
    <div class="flex justify-center">
      <ul class="list-disc text-xs text-black">
        <li>Kit Natura Meu Primeiro Humor.</li>
        <li>Desodorante Colônia Química de Humor Masculino 75 ml.</li>
        <li>Sabonetes em barra Tododia, uma caixa com 5 unidades.</li>
      </ul>
    </div>
    <div class="flex text-black justify-center items-center mt-4 font-semibold flex-col p-4">
      <p>Valor R$ 10,00</p>
      <p>Clique nos números para selecionar!</p>
      <p>Os números mais claros já foram vendidos!</p>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-4 mt-3 p-4 lg:px-32 mb-16">
      <div v-for="n in 300" class="flex flex-row items-center">
        <div v-if="checkIfNumberisAvailable(n)" 
          class="flex flex-col text-white font-bold ml-2 bg-pink-200 w-11 h-11 text-center justify-center text-bold rounded-full p-1 px-2">
          {{ n }}</div>
          <div v-else @click="selectNumber(n)" :class="[isSelected(n), 'flex flex-col text-white font-bold ml-2 bg-pink-500 w-11 h-11 text-center justify-center text-bold rounded-full p-1 px-2']">
          {{ n }}</div>
      </div>
      <p class="col-span-5 text-black ml-2 mt-2 text-justify"><b>SORTEIO: </b>30 de Setembro de 2024 ou imediatamente ao
        acabarem os números!</p>
    </div>
    <div class="fixed bottom-0 backdrop-blur-sm bg-white/30 h-20 text-black left-0 right-0">
      <div class="flex flex-row items-center justify-around lg:justify-end lg:space-x-10 mt-4 px-4">
        <div class="text-2xl text-gray-700 font-bold">
          {{ value + `,00` }} R$
        </div>
        <div>
          <UButton :disabled="selected.length >= 1 ? false : true" @click="isOpen = !isOpen" size="xl" color="pink">
           Confirmar! </UButton>
        </div>
      </div>
    </div>
    <UModal v-model="isOpen">
      <div class="p-5 flex flex-col space-y-6 text-xl">
        <h2>Você pode copiar minha chave PIX, pagar e me enviar quais números comprou, ou me chamar direto no WhatsApp, obrigada!</h2>
        <div class="flex flex-col space-y-3">
        <UButton icon="i-heroicons-clipboard-document" color="sky" size="xl" @click="useCopyToClipboard()"> Copiar chave PIX (67984132198)</UButton>
        <UButton icon="i-tabler-brand-whatsapp" size="xl" @click="sendWhatsappMessage()"> Falar pelo WhatsApp</UButton>
        </div>
      </div>
    </UModal>
  </div>
</template>
