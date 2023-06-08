<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { BaseIcon, BaseLink, BaseLinkProps } from '@BaseUi';
import type { ILink } from './type';

interface Props {
  external?: boolean;
  isIcon?: boolean;
  link: ILink;
  testId?: string;
}

const props = defineProps<Props>();

const dynamicClasses = computed(() => {
  return [props.link?.class, { 'is-icon': props.isIcon }];
});
</script>

<template>
  <RouterLink
    v-if="!external"
    :class="['link', ...dynamicClasses]"
    :data-testid="testId"
    :key="link.id"
    :to="link.target"
  >
    <BaseIcon
      isButton
      class="icon"
      :icon="link.icon"
      :data-testid="`${testId}_base-icon`"
    />

    <AppText
      v-if="!isIcon"
      font="font-body"
    >
      {{ link.id }}
    </AppText>
  </RouterLink>

  <BaseLink
    v-else
    :content="link.id"
    :href="link.target"
    :target="BaseLinkProps.TARGET.BLANK"
  >
    <BaseIcon
      isButton
      class="icon"
      :icon="link.icon"
    />
  </BaseLink>
</template>

<style scoped>
.link {
  @apply duration-[150]
    flex
    gap-2
    items-center
    mb-[10px]
    text-text-active
    font-medium
    transition-[color]
    transition-[background_color];
}

.link.is-icon {
  @apply duration-150 
    mb-0 
    transition-[color]
    transition-[background_color];
}

.link.router-link-active .icon.is-button {
  @apply bg-background-default text-text-success;
}

.link:hover .icon.is-button,
.link.is-icon:hover .icon.is-button {
  @apply bg-background-default text-text-success;
}

.link.router-link-active,
.link:hover {
  @apply text-text-success font-semibold;
}
</style>
