<script setup lang="ts">
import LogoSrc from './assets/logo.webp';

interface Props {
  logoOnly?: boolean;
  logoClasses?: string;
  companyNameClasses?: string;
  sloganClasses?: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <img
      :class="['logo', logoClasses]"
      :src="LogoSrc"
      title="World Grocerry logo"
      alt="An image with a leaf growing from inside of a bowl that represents World Grocerry's logo."
    />

    <section v-if="!logoOnly">
      <AppText
        :class="['company-name', companyNameClasses]"
        tag="h2"
      >
        World Groccer
      </AppText>

      <AppText :class="['slogan', sloganClasses]">
        where quality meets flavor
      </AppText>
    </section>
  </div>
</template>

<style scoped>
.logo {
  @apply m-auto mb-3;
}

.company-name,
.slogan {
  @apply text-center text-white;
}

.company-name {
  @apply uppercase;
}
</style>
