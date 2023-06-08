<script setup lang="ts">
import { APP_ICONS } from '@Helpers';
import { ComposedLink } from '@ComposedUi';

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
      id: 'CLV Trending',
      target: '/trending-view',
    },
  },
  {
    external: false,
    isIcon: false,
    link: {
      class: '',
      icon: APP_ICONS.faMoneyBillTrendUp,
      id: 'Offers',
      target: '/offers',
    },
  },
];

const logoutLink = {
  external: false,
  isIcon: false,
  link: {
    class: '',
    icon: APP_ICONS.faDoorOpen,
    id: 'Logout',
    target: '/',
  },
};
</script>

<template>
  <main class="main">
    <ComposedLink
      v-for="link in links"
      :key="link.link.id"
      v-bind="link"
    />

    <ComposedLink v-bind="logoutLink" />
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
