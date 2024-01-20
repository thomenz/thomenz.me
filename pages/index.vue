<template>
  <Menu />
  <div class="flex flex-col min-h-[calc(100vh-150px)] justify-center m-auto max-w-[1280px]">
    <div class="grid sm:grid-cols-2 grid-cols-1 gap-7 items-center">
      <div class="flex flex-col sm:ml-20 p-7  sm:p-0 gap-3">
        <h1 class="text-5xl  sm:text-6xl font-bold">{{ $t('welcome') }}</h1>
        <p class="text-xl">{{ $t('description') }}</p>
        <NuxtLink class="self-end mt-2 lg:mr-10" to="https://github.com/thomenz" target="_blank">
          <UButton size="lg" icon="i-tabler-brand-github" variant="outline"> Github </UButton>
        </NuxtLink>
      </div>
      <div class="flex flex-row w-full justify-center">
        <img class="hover:scale-110 ease-in-out duration-300" width="400px" src="/office.webp" alt="">
      </div>
    </div>
  </div>
  <footer class="flex justify-end text-sm w-full max-w-[1366px] m-auto">
    <span class="text-gray-500 p-3">2023 - PRESENT &COPY Thiago Menzinger</span>
  </footer>
</template>
