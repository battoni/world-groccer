<script setup lang="ts">
import { computed } from 'vue';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { formatterHelper } from '@Helpers';
import { BaseCard } from '@BaseUi';
import { ComposedTagProps } from '@ComposedUi';
import KpiCardHeader from '../KpiCardHeader/KpiCardHeader.vue';
import KpiTag from '../KpiTag/KpiTag.vue';

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
    <KpiCardHeader
      :icon="icon"
      :label="label"
    />

    <template v-if="!hasTags">
      <AppText class="kpi-result offers-sent">
        {{ formatter(results[0]) }}
      </AppText>
    </template>

    <template v-else>
      <div class="row">
        <KpiTag label="control" />

        <AppText class="kpi-result">
          {{ formatter(results[0]) }}
        </AppText>
      </div>

      <div class="row">
        <KpiTag
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
.kpi-result.text {
  @apply text-2xl tracking-wider font-bold;
}

.offers-sent.text {
  @apply text-4xl;
}

.row {
  @apply flex gap-2 mb-2;
}

@media (min-width: 1024px) {
  .offers-sent.text {
    @apply text-5xl;
  }
}
</style>
