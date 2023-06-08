<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  @apply border-2
    max-w-full
    p-2 
    rounded 
    w-full;
}
</style>
