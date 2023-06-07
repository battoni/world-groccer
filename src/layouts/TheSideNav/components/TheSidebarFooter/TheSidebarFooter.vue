<script setup lang="ts">
import { BaseIcon } from '@BaseUi';
import { LogoutButton } from '@AuthModule';
import { APP_ICONS } from '@Helpers';

interface Emits {
  (e: 'onToggleSidenav'): void;
}

const emit = defineEmits<Emits>();
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

    <LogoutButton class="logout" />
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
