<script lang="ts" setup>
import premio from '/premio.webp'
import cynthya from '/cynthya.webp'
import { useRobotsRule } from '#imports'

const rule = useRobotsRule()
rule.value = 'noindex, nofollow'

useSeoMeta({
  title: 'Rifa da Cynthya',
  description: "Rifa da Cynthya",
})

const notAvailableNumbers = ref<any>([])
const availableNumbers = computed(() => {
  return Array.from({ length: 300 }, (_, i) => i + 1).filter((n) => !notAvailableNumbers.value.includes(n))
})

const getAvailableNumbers = async () => {
  const response = await fetch('https://meta-ai-worker.thiagomenzinger.workers.dev/rifas',)
  const data = await response.json()
  // for each entry in data that contains numeros: "1,2,3,4,5" split it and map to a number array
  notAvailableNumbers.value = data.map((entry: { numeros: string }) => entry.numeros.split(',').map(Number)).flat()
}

await getAvailableNumbers()

const selected = ref<number[]>([])

const sendWhatsappMessage = () => {
  const numbers = selected.value.join(',')
  const message = `Olá, gostaria de comprar os números ${numbers} da rifa da Cynthya!`
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
  return selected.value.includes(n) ? 'ring-4 ring-pink-500 ring-inset' : ''
}

const value = computed(() => {
  return selected.value.reduce((acc, n) => acc + 10, 0)
})
</script>

<template>
  <div class="relative p-3 bg-gradient-to-br from-pink-50 to-pink-100">
    <NuxtRouteAnnouncer />
    <img :src="cynthya" alt="Rifa da Cynthya" width="300" class="ml-5">
    <img :src="premio" alt="Premios" width="400" class="brightness-105">
    <div class="flex justify-center">
      <ul class="list-disc text-xs text-black">
        <li>Kit Natura Meu Primeiro Humor.</li>
        <li>Desodorante Colônia Química de Humor Masculino 75 ml.</li>
        <li>Sabonetes em barra Tododia, uma caixa com 5 unidades.</li>
      </ul>
    </div>
    <div class="flex text-black font-bold flex-col p-4">
      <p>Valor R$ 10,00</p>
      <p>Clique nos números para selecionar!</p>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-12 gap-4 mt-3 p-4 mb-16">
      <div v-for="n in availableNumbers" class="flex flex-row items-center">
        <div @click="selectNumber(n)"
          :class="[isSelected(n), 'flex flex-col text-white font-bold ml-2 bg-pink-300 w-11 h-11 text-center justify-center text-bold rounded-full p-1 px-2']">
          {{ n }}</div>
      </div>
      <p class="col-span-5 text-black ml-2 mt-2 text-justify"><b>SORTEIO: </b>30 de Setembro de 2024 ou imediatamente ao
        acabarem os números!</p>
    </div>
    <div class="fixed bottom-0 backdrop-blur-sm bg-white/30 h-20 text-black left-0 right-0">
      <div class="flex flex-row items-center justify-around mt-4 px-4">
        <div class="text-4xl text-gray-700 font-bold">
          {{ value + `,00` }} R$
        </div>
        <div>
          <UButton :disabled="selected.length >= 1 ? false : true" @click="sendWhatsappMessage()" size="xl" color="pink">
            Quero esses! </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
