<script setup>
import('~/assets/css/theme.css')

</script>


<template>
  <UContainer  >

  <div class="min-h-screen  flex flex-col justify-between">
    <div>
      <HeaderAppHeader class="py-3" />
      <main class="">
        <slot />
      </main>
    </div>
  </div>
  </UContainer>
</template>