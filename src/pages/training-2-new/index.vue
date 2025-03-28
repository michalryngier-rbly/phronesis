<script setup lang="ts">

import PhronesisCard from "@/components/phronesis-card.vue";

</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #2
    </h1>
    <p class="text-subtitle-1 mb-4">
      Summarizing key findings
    </p>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      Create invoice retry
    </p>

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/create-invoice-retry">Project 2: Create invoice
        retry</a>
    </p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made you smile? :)">
          <ul class="ml-3">
            <li>Team work!</li>
            <li>Invalid placeholders in email notifications</li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          completed
        >
          <ul class="ml-3">
            <li><a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/notifications/events/transaction-declined/bind/4">Email notification</a></li>
            <li><a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/rules/billing/renewal-invoice-payment-declined/rule/4">Billing rule for scheduling a retry</a></li>
            <li><a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/orders/ord_01JQEEB5NJBQS9EX3F7JSV9BB8/upcoming-invoice">Order with retried payments</a></li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          title="Scheduling autopay"
        >
          It is confusing what timezone is used for the scheduled time. We weren't sure if that's UTC, local time or any other.
          <v-img
            src="@/assets/trainings/2-new/confusing/schedule-autopay.png"
            class="rounded-lg elevation-2 mt-2"
            max-width="30%"
          />
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
