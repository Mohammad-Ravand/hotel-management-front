<script setup>

</script>


<template>
  <header class="w-full flex justify-center">
    <nav class="text-center flex gap-3  w-fit">
      <NuxtLink to="/guests">
        <UButton class=" !text-gray-100">guests</UButton>
      </NuxtLink>
      <NuxtLink to="/rooms">
        <UButton class="text-primary !text-gray-100">rooms</UButton>
      </NuxtLink>
      <NuxtLink to="/conversations">
        <UButton class=" !text-gray-100">conversations</UButton>
      </NuxtLink>

    </nav>
  </header>
</template>
