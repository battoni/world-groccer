<script setup lang="ts">
import { computed } from 'vue';
import { styleFromStateHelper } from '@Helpers';
import {
  TheSidebarFooter,
  TheSidebarHeader,
  TheSidebarMain,
} from './components';

interface Emits {
  (e: 'onToggleSidenav'): void;
}

interface Props {
  isActive?: boolean;
}

const emit = defineEmits<Emits>();
const props = defineProps<Props>();

const dynamicClasses = computed(() => {
  const { activeClass } = styleFromStateHelper();

  return [activeClass(props.isActive)];
});
</script>

<template>
  <aside :class="['sidebar', ...dynamicClasses]">
    <TheSidebarHeader />

    <TheSidebarMain />

    <TheSidebarFooter @onToggleSidenav="emit('onToggleSidenav')" />
  </aside>
</template>

<style scoped>
.sidebar {
  @apply bg-background-default
    bottom-0
    duration-[250ms]
    fixed
    flex
    flex-col
    left-0
    max-w-full
    top-0
    transition-[transform]
    translate-x-[calc(-100%-20px)]
    w-full
    z-40;
}

.sidebar.is-active {
  @apply translate-x-[0];
}

@media (min-width: 1024px) {
  .sidebar {
    @apply border-2 
    m-[20px] 
    max-w-[var(--sidenav-width)] 
    p-[10px] 
    rounded 
    w-full;
  }
  .sidebar.is-active {
    @apply translate-x-[0];
  }
}
</style>
