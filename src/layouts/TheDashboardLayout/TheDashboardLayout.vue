<script setup lang="ts">
import { computed, ref } from 'vue';
import { styleFromStateHelper } from '@Helpers';
import TheSidebar from '../TheSideNav/TheSideNav.vue';
import TheTopNav from '../TheTopNav/TheTopNav.vue';

const isActive = ref(true);

const dynamicClasses = computed(() => {
  const { activeClass } = styleFromStateHelper();

  return [activeClass(isActive.value)];
});

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

    <main :class="['main', ...dynamicClasses]">
      <TheTopNav
        :isActive="isActive"
        @onToggleSidenav="onToggleSidenav"
      />

      <section class="content">
        <slot />
      </section>
    </main>
  </section>
</template>

<style scoped>
.main {
  @apply duration-[250ms] h-full p-5 relative transition-all;
}

.main.is-active {
  @apply ml-[var(--sidenav-width)] overflow-y-hidden;
}

.main .content {
  @apply duration-[200ms] pb-[84px];
}

@media (min-width: 1024px) {
  .main {
    @apply pl-5;
  }

  .main .content {
    @apply pt-[84px] pb-[10px] mb-[20px];
  }

  .main.is-active {
    @apply ml-[calc(var(--sidenav-width)+20px)];
    overflow-y: initial;
  }
}
</style>
