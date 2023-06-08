<script setup lang="ts">
import { computed } from 'vue';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { formatterHelper } from '@Helpers';
import { BaseCard, BaseIcon } from '@BaseUi';
import { ComposedTag, ComposedTagProps } from '@ComposedUi';

interface Props {
  hasTags?: boolean;
  icon: IconDefinition;
  isCurrency?: boolean;
  label: string;
  results: number[];
}

const props = defineProps<Props>();

const { setCurrencyToUSD, setThousandsSeparator } = formatterHelper();

const { ERROR } = ComposedTagProps.TYPES_ENUM;

const formatter = computed(() =>
  props.isCurrency ? setCurrencyToUSD : setThousandsSeparator
);
</script>

<template>
  <BaseCard class="kpi">
    <BaseIcon
      class="kpi-icon"
      :icon="icon"
    />

    <hr class="divider" />

    <AppText
      class="mb-2"
      tag="h2"
      font="title"
      size="text-regular"
    >
      {{ label }}
    </AppText>

    <template v-if="!hasTags">
      <AppText class="kpi-result offers-sent">
        {{ formatter(results[0]) }}
      </AppText>
    </template>

    <template v-else>
      <div class="row">
        <ComposedTag
          class="tag"
          label="control"
        />

        <AppText class="kpi-result">
          {{ formatter(results[0]) }}
        </AppText>
      </div>

      <div class="row">
        <ComposedTag
          class="tag"
          label="experimental"
          :type="ERROR"
        />

        <AppText class="kpi-result">
          {{ formatter(results[1]) }}
        </AppText>
      </div>
    </template>
  </BaseCard>
</template>

<style scoped>
.kpi {
  @apply p-5;
}

.kpi-icon {
  @apply block text-text-success mb-1 text-xl;
}

.kpi-result.text {
  @apply text-2xl tracking-wider font-bold;
}

.offers-sent.text {
  @apply text-4xl;
}

.divider {
  @apply border-[var(--color-green)] border-t-4 mb-1 rounded-[4px] w-[30px];
}

.row {
  @apply flex gap-2 mb-2;
}

.tag {
  @apply inline-block text-white font-bold text-sm;
}

@media (min-width: 1024px) {
  .offers-sent.text {
    @apply text-5xl;
  }
}
</style>
