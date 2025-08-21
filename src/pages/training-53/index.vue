<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #53: Free trials
    </h1>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/free-trials">Project 53: Free trials</a>
    </p>

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
          title="Paying the $0 invoice manually"
          confusing
        >
          It was not immediately clear we needed to manually pay the first $0 invoice to activate trial subscription and
          verify credit card.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Renewal time is missing"
          issue
        >
          Renewal time is not displayed in the Order details section beside the invoice (only date is displayed), but it
          is displayed on the Customer page.

          <image-dialog
            image-src="trainings/53/order_details.png"
            max-width="60"
          />
          <image-dialog
            image-src="trainings/53/subscription.png"
            max-width="60"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Dialog data is not cleared"
          confusing
          issue
        >
          When setting invalid date for a trial end date in the dialog, the dialog data is not cleared and the invalid
          date is still displayed after reopening it.

          <p>To reproduce</p>
          <ol class="ml-6">
            <li>Go to Customer with active subscription with trial</li>
            <li>Click on Active subscription -> View</li>
            <li>Click on 'Change trial end date'</li>
            <li>Dialog will open</li>
            <li>Current end date is set</li>
            <li>Input invalid date</li>
            <li>Click 'Change'</li>
            <li>See error</li>
            <li>Click on 'Change trial end date'</li>
            <li>Previously typed invalid date is set in dialog instead of the current end date</li>

            <image-dialog
              image-src="trainings/53/change-trial.gif"
              max-width="60"
            />
          </ol>
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
