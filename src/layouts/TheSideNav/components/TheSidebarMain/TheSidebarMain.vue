<script setup lang="ts">
import { APP_ICONS } from '@Helpers';
import { ComposedLink } from '@ComposedUi';
import { LogoutButton } from '@AuthModule';

const links = [
  {
    external: false,
    isIcon: false,
    link: {
      class: '',
      icon: APP_ICONS.faHouse,
      id: 'Home',
      target: '/',
    },
  },
  {
    external: false,
    isIcon: false,
    link: {
      class: '',
      icon: APP_ICONS.faCartShopping,
      id: 'Offers',
      target: '/offers',
    },
  },
  {
    external: false,
    isIcon: false,
    link: {
      class: '',
      icon: APP_ICONS.faUsers,
      id: 'Groups',
      target: '/groups',
    },
  },
];
</script>

<template>
  <main class="main">
    <ComposedLink
      v-for="link in links"
      :key="link.link.id"
      v-bind="link"
    />

    <LogoutButton class="logout" />
  </main>
</template>

<style scoped>
.main {
  @apply flex flex-col flex-[1_0_auto] p-[calc(20px+2px)];
}

.logout {
  @apply flex;
}

@media (min-width: 1024px) {
  .main {
    @apply p-[10px];
  }

  .logout {
    @apply hidden;
  }
}
</style>
