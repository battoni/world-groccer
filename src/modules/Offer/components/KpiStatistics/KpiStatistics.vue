<script setup lang="ts">
import { APP_ICONS, formatterHelper } from '@Helpers';
import { BaseCard } from '@BaseUi';
import { ComposedTag, ComposedTagProps } from '@ComposedUi';
import KpiHeader from '../KpiHeader/KpiHeader.vue';
import KpiCardHeader from '../KpiCardHeader/KpiCardHeader.vue';

const { faChartPie, faCheckDouble } = APP_ICONS;
const { ERROR } = ComposedTagProps.TYPES_ENUM;

const { setThousandsSeparator } = formatterHelper();

const results = [11111, 22222];
</script>

<template>
  <section class="statistics">
    <KpiHeader
      :icon="faChartPie"
      label="Statistics"
    />

    <BaseCard>
      <KpiCardHeader
        :icon="faCheckDouble"
        label="Select period to aggregate"
      />

      <div class="row">
        <ComposedTag
          class="tag"
          label="control"
        />

        <AppText class="kpi-result">
          {{ setThousandsSeparator(results[0]) }}
        </AppText>
      </div>

      <div class="row">
        <ComposedTag
          class="tag"
          label="experimental"
          :type="ERROR"
        />

        <AppText class="kpi-result">
          {{ setThousandsSeparator(results[1]) }}
        </AppText>
      </div>
    </BaseCard>
  </section>
</template>

<style scoped>
.statistics {
  @apply block min-w-[33%];
}

.kpi-result.text {
  @apply text-2xl tracking-wider font-bold;
}

.row {
  @apply flex gap-2 mb-2;
}
</style>
