<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #15
    </h1>
    <p class="text-subtitle-1 mb-4">
      Casino deposit 3ds
    </p>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      Casino deposit 3ds
    </p>

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/casino-deposit-3ds&quot;">Project 15: Casino
        deposit 3ds</a>
    </p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made you smile? :)">
          <ul class="ml-3">
            <li>
              Teamwork :).
            </li>
            <li>
              We were able to create a gateway account for the CA bank issued cards only.
            </li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          title="Test payment cards"
        >
          We could not find a payment card issued by CA bank for a manual 3DS challenge.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          issue
          title="Sticky Gateway Issue"
        >
          Turning off
          <v-code>sticky gateway</v-code>
          option does not keep the
          <v-code>Advanced configuration</v-code>
          turned ON. When turning ON and OFF
          <v-code>Advanced configuration</v-code>
          the
          <v-code>sticky gateway</v-code>
          changes to ON again.

          <v-img
            src="@/assets/trainings/15/advanced-configuration.gif"
            class="rounded-lg elevation-2 mt-2"
            max-width="100%"
          />
        </phronesis-card>
        <v-img />
      </v-col>
    </v-row>
  </v-container>
</template>
