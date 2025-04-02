<script setup lang="ts">

import {useRoute} from 'vue-router'
import DemoLayout from '@/layouts/demo-layout.vue';
import AppLayout from '@/layouts/app-layout.vue';

</script>

<template>
  <component :is="useRoute().meta?.layout === 'demo' ? DemoLayout : AppLayout">
    <slot />
  </component>
</template>

<style scoped lang="scss">
</style>
