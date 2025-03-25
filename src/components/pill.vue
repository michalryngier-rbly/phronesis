<script setup lang="ts">
defineProps<{
  bgColor: string
  icon: string
}>()
</script>

<template>
  <div
    :class="`pa-1 mr-2 rounded-pill bg-${bgColor} w-10 d-flex align-content-center text-body-2`"
  >
    <v-icon
      color="white"
      class="mr-2 my-auto ml-1"
    >
      {{ icon }}
    </v-icon>
    <div class="font-weight-bold pa-1 mr-2">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
