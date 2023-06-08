<script setup lang="ts">
import { APP_ICONS } from '@Helpers';
import type { Kpi } from './types';
import { KpiHighlightCard, KpiHighlightHeader } from './components';

const { faCartShopping, faUsers, faWallet } = APP_ICONS;

const results: Kpi[] = [
  {
    isCurrency: false,
    hasTags: false,
    icon: faCartShopping,
    label: 'Offers Sent',
    results: [154016],
  },
  {
    isCurrency: false,
    hasTags: true,
    icon: faUsers,
    label: 'Repeaters',
    results: [43176, 8067],
  },
  {
    isCurrency: true,
    hasTags: true,
    icon: faWallet,
    label: 'CVL',
    results: [2313409.25, 442430.25],
  },
];
</script>

<template>
  <section>
    <KpiHighlightHeader />

    <main class="kpi-highlights">
      <KpiHighlightCard
        v-for="(result, index) in results"
        v-bind="result"
        :key="index"
      />
    </main>
  </section>
</template>

<style>
.kpi-highlights {
  @apply flex flex-col gap-2;
}

@media (min-width: 1024px) {
  .kpi-highlights {
    @apply flex-row;
  }

  .offers-sent.text {
    @apply text-5xl;
  }
}
</style>
