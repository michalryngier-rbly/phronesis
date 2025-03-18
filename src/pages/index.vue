<script lang="ts" setup>
import {TRAININGS} from "@/pages/index";
</script>

<template>
  <v-row>
    <v-col
      v-for="training in TRAININGS"
      :key="training.id"
      cols="4"
      class="align-content-lg-space-between"
    >
      <v-card
        height="200"
        color="primary"
        class="d-flex flex-column"
      >
        <v-card-title>{{ training.title }}</v-card-title>
        <v-card-text>{{ training.description }}</v-card-text>

        <v-spacer />

        <v-card-actions>
          <v-btn
            :to="training.route"
            class="mx-auto"
          >
            Go to training
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss">

</style>
