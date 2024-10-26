<script setup lang="ts">
const colorMode = useColorMode()

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
    return locales.value.filter(i => i.code !== locale.value)
})

const toggleColorMode = () => {
    colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}
const theming = computed(() => {
    let icon, logoClass;
    colorMode.value === 'light' ? (icon = 'i-tabler-sun', logoClass = '') : (icon = 'i-tabler-moon', logoClass = 'invert')
    return { icon, logoClass }
})

</script>

<template>
    <nav class="flex flex-row py-2 items-center justify-between">
        <NuxtLink aria-label="To homepage" :to="'/' + locale" class="cursor-pointer">
            <UButton aria-label="Logo" size="lg" class="p-0 mt-1" variant="link">
                <NuxtImg fit="cover" width="35" height="35"
                    :class="[theming.logoClass, 'hover:scale-110 transition-transform ease-in-out delay-100 duration-300']"
                    src="/itig_logo.svg" alt="Thiago Menzinger Logo" loading="lazy" />
            </UButton>
        </NuxtLink>
        <div class="flex flex-row space-y-2 items-center">
            <UButton aria-label="Contact button" disabled size="lg" color="gray" class="mt-2" icon="i-tabler-message"
                variant="link"></UButton>
            <NuxtLink aria-label="Check out more on my Github" to="https://github.com/thomenz" target="_blank">
                <UButton aria-label="Github" size="lg" color="gray" icon="i-tabler-brand-github" variant="link">
                </UButton>
            </NuxtLink>
            <NuxtLink aria-label="My LinkedIn account" to="https://br.linkedin.com/in/thiago-menzinger-5029a42b9"
                target="_blank">
                <UButton aria-label="LinkedIn" size="lg" color="gray" icon="i-tabler-brand-linkedin" variant="link">
                </UButton>
            </NuxtLink>
            <UButton @click="toggleColorMode()" size="lg" aria-label="Change theme to dark or light" color="gray"
                :icon="theming.icon" variant="link"></UButton>
            <NuxtLink v-for="loc in availableLocales" :key="loc.code" :to="switchLocalePath(loc.code)">
                <UButton class="uppercase p-1 text-[1.1rem]" aria-label="Language selector" size="lg" color="gray"
                    variant="link"> {{ locale }}</UButton>
            </NuxtLink>
        </div>
    </nav>
</template>