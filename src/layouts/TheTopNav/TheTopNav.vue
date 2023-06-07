<script setup lang="ts">
import { computed } from 'vue';
import { APP_ICONS, styleFromStateHelper } from '@Helpers';
import { BaseIcon } from '@BaseUi';
import { ComposedLink } from '@ComposedUi';

interface Emits {
  (e: 'onToggleSidenav'): void;
}

interface Props {
  isActive?: boolean;
}

const emit = defineEmits<Emits>();
const props = defineProps<Props>();

const links = [
  {
    external: false,
    isIcon: true,
    link: {
      class: '',
      icon: APP_ICONS.faBell,
      id: 'notifications',
      target: '/notifications',
    },
  },
];

const { activeClass } = styleFromStateHelper();

const dynamicClasses = computed(() => [activeClass(props.isActive)]);
</script>

<template>
  <aside :class="['layer', ...dynamicClasses]" />

  <aside :class="['navbar', ...dynamicClasses]">
    <BaseIcon
      isButton
      class="icon sidenav-toggle"
      :icon="APP_ICONS.faBars"
      @click="emit('onToggleSidenav')"
    />

    <section class="shortcuts">
      <ComposedLink
        v-for="link in links"
        :key="link.link.id"
        v-bind="link"
      />
    </section>
  </aside>
</template>

<style scoped>
.navbar {
  @apply bg-background-default
    border-2
    bottom-0
    duration-[250ms]
    fixed
    flex
    ease-in-out
    left-[20px]
    items-center
    justify-between
    m-[20px]
    mx-0
    max-h-[64px]
    p-[10px]
    right-0
    rounded
    transition-[width]
    w-[calc(100%-40px)];
}

.layer {
  @apply bg-background-default
    bottom-0
    fixed
    h-[22px]
    transition-all
    w-[calc(100%-40px)];
}

.layer.is-active,
.navbar.is-active {
  @apply left-[calc(var(--sidenav-width)+20px)] w-[var(--navbar-width)];
}

.layer.is-active {
  @apply h-[22px] w-full;
}

.shortcuts {
  @apply flex gap-2;
}

.shortcuts .link,
.shortcuts .link.router-link-active {
  @apply m-auto;
}

@media (min-width: 1024px) {
  .navbar {
    @apply ml-0 top-0 w-[calc(100%-40px)];
  }

  .navbar.is-active {
    @apply ml-5;
  }

  .layer {
    @apply top-0;
  }
}
</style>
