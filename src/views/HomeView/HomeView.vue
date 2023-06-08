<script setup lang="ts">
import { TheDashboardLayout } from '@Layouts';
import { KpiClvTrending, KpiHighlight, KpiStatistics } from '@OfferModule';
</script>

<template>
  <TheDashboardLayout>
    <section class="highlights-section">
      <KpiHighlight />
    </section>

    <section class="statistics-section">
      <KpiStatistics />

      <KpiClvTrending />
    </section>
  </TheDashboardLayout>
</template>

<style scoped>
.highlights-section {
  @apply mb-5;
}
.statistics-section {
  @apply flex gap-5 justify-start;
}
</style>
