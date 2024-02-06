<script setup lang="ts">
const colorMode = useColorMode()
const toggleColorMode = () => {
    colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}
const themeIcon = computed(() => {
    return colorMode.value === 'light' ? 'i-tabler-sun' : 'i-tabler-moon'
})
</script>

<template>
    <div class="flex flex-row justify-between py-6">
        <span class="text-xl dark:text-green-400 text-gray-900"> Tho<b>MenZ</b> </span>
        <div>
            <UButton aria-label="Contact button" color="gray" disabled icon="i-tabler-message" variant="link"></UButton>
            <NuxtLink aria-label="Check out more on my Github" to="https://github.com/thomenz" target="_blank">
                <UButton aria-label="Github" icon="i-tabler-brand-github" variant="link"></UButton>
            </NuxtLink>
            <NuxtLink aria-label="I'm also on X!" to="https://twitter.com/MenzingerT" target="_blank">
            <UButton aria-label="X" color="white" icon="i-tabler-brand-x" variant="link"></UButton>
            </NuxtLink>
            <UButton @click="toggleColorMode()"  aria-label="Change theme to dark or light" color="gray" :icon="themeIcon" variant="link"></UButton>
        </div>
    </div>
</template>