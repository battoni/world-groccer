<script setup lang="ts">
import { ref } from 'vue';
import TheSidebar from '../TheSideNav/TheSideNav.vue';
import TheTopNav from '../TheTopNav/TheTopNav.vue';

const isActive = ref(true);

function onToggleSidenav() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <section>
    <TheSidebar
      :isActive="isActive"
      @onToggleSidenav="onToggleSidenav"
    />

    <TheTopNav
      :isActive="isActive"
      @onToggleSidenav="onToggleSidenav"
    />
  </section>
</template>
