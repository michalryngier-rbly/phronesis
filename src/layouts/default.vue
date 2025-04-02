<script setup lang="ts">

import {useRoute} from 'vue-router'
import DemoLayout from '@/layouts/demo-layout.vue';
import AppLayout from '@/layouts/app-layout.vue';
import { useTheme } from 'vuetify'

const theme = useTheme();

const routeTheme = computed(() => {
  const theme = useRoute().meta?.theme;
  return theme ? theme : 'light';
});

const routeLayout = computed(() => {
  const layout = useRoute().meta?.layout;
  return layout === 'demo' ? DemoLayout : AppLayout;
});

theme.global.name.value = routeTheme.value;

</script>

<template>
  <component :is="routeLayout">
    <slot />
  </component>
</template>

<style scoped lang="scss">
</style>
