<script setup lang="ts">
import { APP_ICONS } from '@Helpers';
import { BaseCard, BaseIcon } from '@BaseUi';
import { ComposedTag } from '@ComposedUi';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
</script>

<template>
  <section class="kpi-highlights">
    <BaseCard class="kpi">
      <BaseIcon
        class="kpi-icon"
        :icon="APP_ICONS.faCartShopping"
      />

      <hr class="divider" />

      <AppText
        tag="h2"
        font="title"
        size="text-regular"
      >
        Offers Sent
      </AppText>

      <AppText
        class="kpi-result tracking font-bold"
        size="text-[clamp(1rem,_3rem,_5rem)]"
      >
        154.016
      </AppText>
    </BaseCard>

    <BaseCard class="kpi">
      <BaseIcon
        class="kpi-icon"
        :icon="APP_ICONS.faUsers"
      />

      <hr class="divider" />

      <AppText
        class="mb-4"
        tag="h2"
        font="title"
        size="text-regular"
      >
        Repeaters
      </AppText>

      <div class="mb-4">
        <ComposedTag
          class="inline-block text-white font-bold text-sm"
          label="control"
        />
        <AppText
          class="kpi-result tracking"
          size="text-large"
        >
          43.176
        </AppText>
      </div>

      <div>
        <ComposedTag
          class="inline-block text-white font-bold text-sm"
          label="experimental"
          type="error"
        />
        <AppText
          class="kpi-result tracking"
          size="text-large"
        >
          8.067
        </AppText>
      </div>
    </BaseCard>

    <BaseCard class="kpi">
      <BaseIcon
        class="kpi-icon"
        :icon="APP_ICONS.faWallet"
      />

      <hr class="divider" />

      <AppText
        class="mb-4"
        tag="h2"
        font="title"
        size="text-regular"
      >
        CLV
      </AppText>

      <div class="mb-4">
        <ComposedTag
          class="inline-block text-white font-bold text-sm"
          label="control"
        />
        <AppText
          class="kpi-result tracking"
          size="text-large"
        >
          $2,313,409.25
        </AppText>
      </div>

      <div>
        <ComposedTag
          class="inline-block text-white font-bold text-sm"
          label="experimental"
          type="error"
        />
        <AppText
          class="kpi-result tracking"
          size="text-large"
        >
          $442,430.25
        </AppText>
      </div>
    </BaseCard>
  </section>
</template>

<style>
.kpi-highlights {
  @apply flex gap-2;
}

.kpi-highlights .kpi {
  @apply p-5;
}

.kpi-icon {
  @apply block text-text-success mb-1 text-xl;
}

.kpi-result {
  @apply tracking-wider;
}

.divider {
  @apply border-[var(--color-green)] border-t-4 mb-1 rounded-[4px] w-[30px];
}

.row {
  @apply flex justify-start gap-4;
}
</style>
