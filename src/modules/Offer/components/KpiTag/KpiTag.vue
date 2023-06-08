<script setup lang="ts">
import { TYPES_ENUM } from '@/components/composed/ComposedTag/types';
import { ComposedTag } from '@ComposedUi';

interface Props {
  label: string;
  type?: TYPES_ENUM;
}

withDefaults(defineProps<Props>(), {
  type: TYPES_ENUM.SUCCESS,
});
</script>

<template>
  <ComposedTag
    class="tag"
    :label="label"
    :type="type"
  />
</template>

<style>
.tag {
  @apply inline-block text-white font-bold text-sm;
}
</style>
