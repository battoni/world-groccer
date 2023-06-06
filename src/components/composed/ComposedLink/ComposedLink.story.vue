<script setup lang="ts">
import type { App } from 'vue';
import { APP_ICONS } from '@Helpers';
import { router } from '@Libraries';
import type { ILink } from './type';
import ComposedLink from './ComposedLink.vue';

const link: ILink = {
  icon: APP_ICONS.faBell,
  id: 'My Link',
  target: '/',
};

function setupApp({ app }: { app: App }) {
  app.use(router);
}
</script>

<template>
  <Story :setup-app="setupApp">
    <ComposedLink
      class="icon"
      :link="link"
      :isIcon="true"
    />
  </Story>
</template>
