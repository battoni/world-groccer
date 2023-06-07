<template>
  <section class="cetralized-layout">
    <slot />
  </section>
</template>

<style scoped>
.cetralized-layout {
  @apply grid h-full place-content-center w-full;
}
</style>
