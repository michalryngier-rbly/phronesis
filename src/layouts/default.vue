<script setup lang="ts">

import {useRoute} from 'vue-router'
import AppLayout from '@/layouts/app-layout.vue';
import CasinoLayout from '@/layouts/casino-layout.vue';
import { useTheme } from 'vuetify'

const theme = useTheme();

const routeTheme = computed(() => {
  const theme = useRoute().meta?.theme;
  return theme ? theme : 'light';
});

const routeLayout = computed(() => {
  const layout = useRoute().meta?.layout;
  switch (layout) {
    case 'casino':
      return CasinoLayout;
    default:
      return AppLayout;
  }
});

function setThemeValue() {
  theme.global.name.value = routeTheme.value;
};

onUpdated(setThemeValue);
onMounted(setThemeValue)

</script>

<template>
  <component :is="routeLayout">
    <slot />
  </component>
</template>

<style scoped lang="scss">
</style>
