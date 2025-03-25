<script setup lang="ts">
import Pill from "@/components/pill.vue";

defineProps<{
  confusing?: boolean
  issue?: boolean
}>()
</script>

<template>
  <v-card
    elevation="2"
    rounded
  >
    <v-card-title
      v-if="confusing || issue"
      class="d-flex mb-2 bg-grey-lighten-4"
    >
      <pill
        v-if="confusing"
        bg-color="warning"
        icon="mdi-alert-circle"
      >
        Confusing
      </pill>

      <pill
        v-if="issue"
        bg-color="error"
        icon="mdi-bug"
      >
        Issue
      </pill>
    </v-card-title>
    <v-card-text class="d-flex flex-column align-content-center">
      <div class="text-body-1">
        <slot />
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss">
</style>
