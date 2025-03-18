<script lang="ts" setup>
import {TRAININGS} from "@/pages/index";
</script>

<template>
  <v-row>
    <v-col
      v-for="training in TRAININGS"
      :key="training.id"
      cols="3"
    >
      <v-card
        height="150"
        color="primary"
      >
        <v-card-title>{{ training.title }}</v-card-title>
        <v-card-text>{{ training.description }}</v-card-text>
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
