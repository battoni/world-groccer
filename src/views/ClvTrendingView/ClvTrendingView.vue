<script setup lang="ts">
import { computed } from 'vue';
import { TheDashboardLayout } from '@Layouts';
import { KpiClvTrending, useOfferStore } from '@OfferModule';

// TODO : API integration
const data = [
  { label: '2021-03-13', expSum: 2, ctrlSum: 2 },
  { label: '2021-03-14', expSum: 54, ctrlSum: 4 },
  { label: '2021-03-15', expSum: 56, ctrlSum: 6 },
  { label: '2021-03-16', expSum: 58, ctrlSum: 8 },
  { label: '2021-03-17', expSum: 60, ctrlSum: 10 },
  { label: '2021-03-18', expSum: 62, ctrlSum: 62 },
  { label: '2021-03-19', expSum: 64, ctrlSum: 64 },
  { label: '2021-03-20', expSum: 66, ctrlSum: 66 },
  { label: '2021-03-21', expSum: 118, ctrlSum: 118 },
  { label: '2021-03-22', expSum: 120, ctrlSum: 120 },
  { label: '2021-03-23', expSum: 122, ctrlSum: 122 },
  { label: '2021-03-24', expSum: 174, ctrlSum: 124 },
  { label: '2021-03-25', expSum: 174.75, ctrlSum: 124.75 },
  { label: '2021-03-26', expSum: 226.25, ctrlSum: 125.5 },
  { label: '2021-03-27', expSum: 227, ctrlSum: 176.25 },
  { label: '2021-03-28', expSum: 227.75, ctrlSum: 177 },
  { label: '2021-03-29', expSum: 228.5, ctrlSum: 177.75 },
  { label: '2021-03-30', expSum: 229.25, ctrlSum: 228.5 },
  { label: '2021-03-31', expSum: 230, ctrlSum: 229.25 },
  { label: '2021-04-01', expSum: 281, ctrlSum: 230.25 },
  { label: '2021-04-02', expSum: 332, ctrlSum: 231.25 },
  { label: '2021-04-03', expSum: 383, ctrlSum: 282.25 },
  { label: '2021-04-04', expSum: 384, ctrlSum: 283.25 },
  { label: '2021-04-05', expSum: 385.5, ctrlSum: 334.25 },
  { label: '2021-04-06', expSum: 436.5, ctrlSum: 335.25 },
  { label: '2021-04-07', expSum: 487.5, ctrlSum: 336.25 },
  { label: '2021-04-08', expSum: 538.5, ctrlSum: 387.25 },
  { label: '2021-04-09', expSum: 539.5, ctrlSum: 438.25 },
  { label: '2021-04-10', expSum: 590.5, ctrlSum: 439.25 },
  { label: '2021-04-11', expSum: 641.5, ctrlSum: 440.25 },
  { label: '2021-04-12', expSum: 642.5, ctrlSum: 441.75 },
  { label: '2021-04-13', expSum: 643.5, ctrlSum: 442.75 },
  { label: '2021-04-14', expSum: 644.5, ctrlSum: 493.75 },
  { label: '2021-04-15', expSum: 645.5, ctrlSum: 544.75 },
  { label: '2021-04-16', expSum: 696.5, ctrlSum: 545.75 },
  { label: '2021-04-17', expSum: 697.5, ctrlSum: 547.25 },
  { label: '2021-04-18', expSum: 748.5, ctrlSum: 548.75 },
  { label: '2021-04-19', expSum: 750, ctrlSum: 549.5 },
  { label: '2021-04-20', expSum: 751.5, ctrlSum: 551 },
  { label: '2021-04-21', expSum: 752.5, ctrlSum: 551.75 },
  { label: '2021-04-22', expSum: 753.5, ctrlSum: 602.75 },
  { label: '2021-04-23', expSum: 805.5, ctrlSum: 603.75 },
  { label: '2021-04-24', expSum: 856.5, ctrlSum: 655.75 },
  { label: '2021-04-25', expSum: 907.5, ctrlSum: 657.75 },
  { label: '2021-04-26', expSum: 909.5, ctrlSum: 708.75 },
  { label: '2021-04-27', expSum: 960.5, ctrlSum: 759.75 },
  { label: '2021-04-28', expSum: 962.5, ctrlSum: 761.75 },
  { label: '2021-04-29', expSum: 1014, ctrlSum: 762.75 },
];
const offerStore = useOfferStore();

offerStore.$patch({ repeaters: data });

const chartData = computed(() => {
  return { labels: offerStore.labels, datasets: offerStore.dataSets };
});
</script>

<template>
  <TheDashboardLayout>
    <KpiClvTrending
      header="CLV Daily Trending View"
      :chartData="chartData"
    />
  </TheDashboardLayout>
</template>
