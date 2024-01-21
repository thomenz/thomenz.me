<template>
    <div class="flex flex-row justify-between max-w-[1280px] m-auto p-6">
        <span class="text-xl text-green-400"> Tho<b>MenZ</b> </span>
        <div>
            <UButton aria-label="Contact" disabled icon="i-tabler-message" variant="link"></UButton>

            <NuxtLink aria-label="Check out more on my Github" to="https://github.com/thomenz" target="_blank">
                <UButton aria-label="Github" icon="i-tabler-brand-github" variant="link"></UButton>
            </NuxtLink>
            <UButton disabled aria-label="X" icon="i-tabler-brand-x" variant="link"></UButton>
        </div>
    </div>
</template>