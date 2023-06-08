<script setup lang="ts">
import { BaseIcon } from '@BaseUi';
import { ComposedLink } from '@ComposedUi';
import { APP_ICONS } from '@Helpers';

interface Emits {
  (e: 'onToggleSidenav'): void;
}

const emit = defineEmits<Emits>();

const logoutLink = {
  external: false,
  isIcon: false,
  link: {
    class: '',
    icon: APP_ICONS.faDoorOpen,
    id: 'Logout',
    target: '/signin',
  },
};
</script>

<template>
  <footer class="footer">
    <div
      class="toggle"
      @click="emit('onToggleSidenav')"
    >
      <BaseIcon
        :icon="APP_ICONS.faLeftLong"
        isButton
      />
    </div>

    <ComposedLink v-bind="logoutLink" />
  </footer>
</template>

<style scoped>
.footer {
  @apply flex flex-col p-[calc(20px+2px)] shrink-0;
}

.toggle {
  @apply block;
}

.logout {
  @apply hidden;
}

@media (min-width: 1024px) {
  .footer {
    @apply p-2;
  }

  .logout {
    @apply flex;
  }
  .toggle {
    @apply hidden;
  }
}
</style>
