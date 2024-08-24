<script setup lang="ts">
useHead({
  meta: [
    { name: 'facebook-domain-verification', content: '1fhni8a7u3algp44if6zmh5p4x2aqd' }
  ],
})
</script>

<template>
  <div class="bg-gradient-to-l dark:from-neutral-900 from-gray-200 dark:to-neutral-950 to-gray-100">
    <NuxtPage />
  <UNotifications />
  </div>
</template>