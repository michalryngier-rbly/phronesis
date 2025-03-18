<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute();

</script>

<template>
  <v-row>
    <v-col cols="6">
      <v-card
        color="primary"
      >
        <v-card-title>Debrief</v-card-title>
        <v-card-text>Go to the training debrief</v-card-text>
        <v-card-actions>
          <v-btn
            :to="route.name + 'debrief'"
            class="mx-auto"
          >
            See a debrief
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="6">
      <v-card color="primary">
        <v-card-title>Demo</v-card-title>
        <v-card-text>Go to the training Demo presentation</v-card-text>
        <v-card-actions>
          <v-btn
            target="_blank"
            :to="route.name + 'demo'"
            class="mx-auto"
          >
            See a Demo
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>
