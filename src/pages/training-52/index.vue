<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #52: Risk scores
    </h1>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/risk-scores">Project 52: Risk scores</a>
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
        <phronesis-card title="Result">
          We have failed to run risk score simulation and weren't sure about risk score calculations.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          issue
          suggestion
          title="Simulations failed for us every time"
        >
          See a Sentry error <a href="https://sentry.rebilly.com/rebilly/rebilly-app/issues/34245">here</a>.

          <p>Additionally: simulation could work like data exports - send notification when simulation is completed.</p>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          issue
          title="Risk score factor does not trigger with high values"
        >
          We set risk score factor to between 5 and 99999, and it did not trigger. When we changed it to between 5 and 1000, it did trigger.

          <p>To reproduce:</p>
          <ol class="ml-6">
            <li>Go to 'Update risk score settings'</li>
            <li>Select 'Add new risk factor'</li>
            <li>Select 'Customer lifetime value' or any other</li>
            <li>Set 'is between' to 5 and 99999</li>
            <li>Make a payment which meets the risk factor</li>
            <li>See it did not trigger</li>
          </ol>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          issue
          confusing
          title="Risk score on transaction is not always displayed properly"
        >
          Risk score on transaction is not always displayed properly - sometimes it says 0 and sometimes value is correctly displayed. We refreshed the page and it was sometimes 0 and sometimes it was correct.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          title="Confusing 'refresh' button on risk score simulation"
        >
          There are two 'refresh' buttons on risk score simulation modal. It is not clear what they do, especially when there is no data loaded yet.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          suggestion
          confusing
          title="Seconds have to be used to determine block duration"
        >
          We were confused about why we need to use seconds. Might be nice to add dropdown with unit options.

          <p>To reproduce:</p>
          <ol class="ml-6">
            <li>Go to 'Update risk score settings'</li>
            <li>See block duration input</li>
          </ol>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          suggestion
          confusing
          title="No ‘clear input’ button for Threshold button"
        >
          Threshold input has no ‘clear input’ button, which is confusing. It would be nice to have one.

          <p>To reproduce:</p>
          <ol class="ml-6">
            <li>Go to 'Update risk score settings'</li>
            <li>See threshold input</li>
          </ol>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          title="No direct way to set inf value for in between value"
        >
          We were confused how we should set 'more than X' value for in between value. We couldn't leave the second value empty, so we had to set it to a very high number, which is not intuitive, especially when risk factor was about the lifetime value.

          <p>To reproduce:</p>
          <ol class="ml-6">
            <li>Go to 'Update risk score settings'</li>
            <li>Select 'Add new risk factor'</li>
            <li>Select 'Customer lifetime value'</li>
            <li>Confused about what should be set for the second value</li>
          </ol>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          suggestion
          title="Add spinner when running simulation"
        >
          Would be nice to have a spinner when running risk score simulation, so we know that something is happening.

          <p>To reproduce:</p>
          <ol class="ml-6">
            <li>Go to 'Update risk score settings</li>
            <li>Click on 'Run simulation'</li>
            <li>In modal click on 'Run simulation'</li>
            <li>See list empty state where spinner would be a better fit</li>
          </ol>
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
