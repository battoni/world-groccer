<script setup lang="ts">
import { computed } from 'vue';
import { REFERRER_POLICY, TARGET } from './types';

interface Props {
  content: string;
  href: string;
  referrerpolicy?: REFERRER_POLICY;
  target?: TARGET;
}

const props = defineProps<Props>();
const defaultProps = computed(() => {
  return {
    referrerpolicy: props.referrerpolicy ?? REFERRER_POLICY.STRICT_ORIGIN_CROSS,
    target: props.target ?? TARGET.SELF,
  };
});
</script>

<template>
  <a
    class="icon"
    rel="noopener"
    :href="href"
    :referrerpolicy="defaultProps.referrerpolicy"
    :target="defaultProps.target"
  >
    <slot v-if="$slots.default" />

    {{ content }}
  </a>
</template>
