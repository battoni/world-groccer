<script setup lang="ts">
import { TARGET } from './types';
import BaseLink from './BaseLink.vue';
</script>

<template>
  <Story>
    <BaseLink
      content="Meu Link"
      href="https://guilherme.battoni.dev"
      :target="TARGET.BLANK"
    />
  </Story>
</template>
