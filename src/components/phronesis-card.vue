<script setup lang="ts">
import Pill from "@/components/pill.vue";

defineProps<{
  confusing?: boolean
  issue?: boolean
  completed?: boolean
  title?: string
  suggestion?: boolean
}>()
</script>

<template>
  <v-card
    elevation="2"
    rounded
  >
    <v-card-title
      v-if="confusing || issue || completed || title || suggestion"
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

      <pill
        v-if="suggestion"
        bg-color="primary"
        icon="mdi-lightbulb-on"
      >
        Suggestion
      </pill>

      <pill
        v-if="completed"
        bg-color="success"
        icon="mdi-check"
      >
        Completed
      </pill>

      <div class="ml-2">
        {{ title ?? '' }}
      </div>
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
