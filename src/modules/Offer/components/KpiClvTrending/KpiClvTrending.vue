<script setup lang="ts">
import { APP_ICONS } from '@Helpers';
import { BaseCard } from '@BaseUi';
import KpiHeader from '../KpiHeader/KpiHeader.vue';

const { faMoneyBillTrendUp } = APP_ICONS;
</script>

<template>
  <section class="trending">
    <KpiHeader
      :icon="faMoneyBillTrendUp"
      label="Daily Trending CLV"
    />
    <BaseCard> </BaseCard>
  </section>
</template>

<style scoped>
.trending {
  @apply block w-full;
}
</style>
