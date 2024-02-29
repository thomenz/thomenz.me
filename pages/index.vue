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

</script>

<template>
  <div class="flex flex-col min-h-[calc(100vh)] justify-between px-7 m-auto max-w-[1280px]">
    <Menu />
    <main class="grid sm:grid-cols-2 grid-cols-1 space-y-10 items-center">
      <article class="col-span-1 flex flex-col md:mx-2 lg:mx-10 sm:p-0 space-y-7">
        <header class="flex flex-col space-y-7">
          <h1 class="text-5xl sm:text-6xl font-bold">{{ $t('welcome') }}</h1>
          <p class="text-xl">{{ $t('description') }}</p>
        </header>
        <NuxtLink class="self-end mt-2" to="https://github.com/thomenz" target="_blank">
          <UButton size="lg" icon="i-tabler-brand-github" :variant="btvariant"> Github </UButton>
        </NuxtLink>
      </article>
      <div class="col-span-1 flex flex-row w-full mb-10 justify-center">
        <NuxtImg fit="cover" width="340" height="299" sizes="75vw sm:40vw md:340px " class="hover:scale-110 dark:brightness-125 brightness-115 contrast-125 ease-in-out duration-300" src="/cogs.webp"
          alt="AI generated isometric 3d office" />
      </div>
    </main>
    <footer class="flex justify-end text-sm mb-5 gap-2 w-full">
      <span class="text-gray-500">2023 - PRESENT &COPY Thiago Menzinger</span> 
      <span class="dark:text-gray-700 text-gray-400">Alpha 0.5</span>
    </footer>
  </div>
</template>
