<script setup lang=ts>
const colorMode = useColorMode()
const btvariant = computed(() => {
  return colorMode.value === 'light' ? 'solid' : 'outline'
})
</script>

<template>
  <div class="flex flex-col min-h-[calc(100vh)] justify-between px-7 m-auto max-w-[1280px]">
    <Menu />
    <main class="grid sm:grid-cols-2 grid-cols-1 gap-7 items-center">
      <article class="col-span-1 flex flex-col md:mx-2 lg:mx-10 sm:p-0 gap-3">
        <header>
          <h1 class="text-5xl sm:text-6xl font-bold">{{ $t('welcome') }}</h1>
          <p class="text-xl">{{ $t('description') }}</p>
        </header>
        <NuxtLink class="self-end mt-2" to="https://github.com/thomenz" target="_blank">
          <UButton size="lg" icon="i-tabler-brand-github" :variant="btvariant"> Github </UButton>
        </NuxtLink>
      </article>
      <div class="col-span-1 flex flex-row w-full mb-10 justify-center">
        <NuxtImg fit="cover" width="340" height="299" sizes="75vw sm:40vw md:340px " class="hover:scale-110 ease-in-out duration-300" src="/cogs.webp"
          alt="AI generated isometric 3d office" />
      </div>
    </main>
    <footer class="flex justify-end text-sm mb-5 w-full">
      <span class="text-gray-500">2023 - PRESENT &COPY Thiago Menzinger</span>
    </footer>
  </div>
</template>
