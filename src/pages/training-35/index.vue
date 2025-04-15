<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #35
    </h1>
    <p class="text-subtitle-1 mb-4">
      Shipping rates
    </p>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      Shipping rates
    </p>

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p><a href="https://team.rebilly.dev/phronesis-training/projects/shipping-rates">Project 35: Shipping rates</a></p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made us smile 😄">
          <ul class="ml-3">
            <li>
              Teamwork :).
            </li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          completed
        >
          <ul class="ml-3">
            <li>
              <a href="" />
            </li>
          </ul>
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          confusing
          issue
          title="Cannot create order: Delivery address does not exist"
        >
          We could not create an order with <v-code>Rebilly</v-code> shipping rate selected - delivery address didn
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
