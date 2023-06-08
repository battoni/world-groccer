<script setup lang="ts">
import { computed, mergeProps } from 'vue';
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { APP_ICONS } from '@Helpers';
import { BaseCard } from '@BaseUi';
import { ComposedLink } from '@ComposedUi';
import KpiHeader from '../KpiHeader/KpiHeader.vue';

interface DataSet {
  label: string;
  backgroundColor: string;
  data: number[];
}

interface Props {
  header: string;
  hasLink?: boolean;
  chartData: {
    labels: string[];
    datasets: DataSet[];
  };
}

defineProps<Props>();

const { faMoneyBillTrendUp } = APP_ICONS;

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const link = {
  external: false,
  isIcon: false,
  link: {
    class: '',
    icon: APP_ICONS.faMoneyBillTrendUp,
    id: 'Full list here',
    target: '/trending-view',
  },
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
};
</script>

<template>
  <section class="trending">
    <section class="header">
      <KpiHeader
        :icon="faMoneyBillTrendUp"
        :label="header"
      />

      <ComposedLink
        v-if="hasLink"
        v-bind="link"
      />
    </section>

    <BaseCard>
      <Bar
        id="clv-chart"
        :options="chartOptions"
        :data="chartData"
      />
    </BaseCard>
  </section>
</template>

<style scoped>
.trending {
  @apply block w-full;
}

.header {
  @apply flex justify-between;
}
</style>
