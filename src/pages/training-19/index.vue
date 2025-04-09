<script setup lang="ts">

import PhronesisCard from "@/components/phronesis-card.vue";

</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #19
    </h1>
    <p class="text-subtitle-1 mb-4">
      Summarizing key findings
    </p>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      VIP customers
    </p>

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/casino-vip-customers">Project 19: VIP customers</a>
    </p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made you smile? :)">
          <ul class="ml-3">
            <li>Team work!</li>
            <li>How easy it was despite 3 hour estimate :)</li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          completed
        >
          A VIP tag which is automatically applied to customers who have spent more than $10000.
          <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/automated-tagging/tag_rule_01JRD72MXNNHJ7JSXRQM7AGAS1">Link to automated tagging rule</a>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          completed
        >
          <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/data-tables/grd_seg_01JRD7HYBZF7RS9HBV5X12V9T4?filter=tags:VIP">Link to VIP table</a>.
          Customers there are sorted by lifetime revenue, descending.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          completed
        >
          Showing Skrill payment method only to VIPs. First we created a rule in the rule engine, as per documentation, but a simpler way is to specify the condition directly on the payment gateway.
          <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/gateway-accounts/testprocessor">Link to payment gateway</a>.

          <image-dialog
            image-src="trainings/19/payment-gateway.png"
            max-width="70"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          issue
          title="Triggering automated tagging when lifetime revenue has crossed the threshold"
        >
          When experimenting with automated tagging, we found out that the tag is not applied to the customer if the lifetime revenue has crossed the threshold.
          It is only applied when after the next transaction, suggesting that automated tagging is triggered before the lifetime revenue has been updated.
          <image-dialog
            image-src="trainings/19/tag-not-added.png"
            max-width="70"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          issue
          title="Weird error message"
        >
          When we entered alphabetic characters in the rule condition, we got an error, which just said <v-code>.</v-code> (dot).
          <image-dialog
            image-src="trainings/19/error-dot.png"
            max-width="70"
          />
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
