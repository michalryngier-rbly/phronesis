<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #33
    </h1>
    <p class="text-subtitle-1 mb-4">
      Summarizing key findings
    </p>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      Coupons
    </p>

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p><a href="https://www.rebilly.com/docs/settings/coupons-and-discounts">Project 33: Coupons</a></p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made you smile? :)">
          <ul class="ml-3">
            <li>
              We have learned to read the instructions :).
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
              <a href="http://">$5 off the yearly Premium membership</a>
            </li>
            <li>
              <a href="http://">10% off during April</a>
            </li>
            <li>
              <a href="http://">$20 off for orders of more than $500</a>
            </li>
            <li>
              <a href="http://">Buy a Premium yearly membership, get 1 free month of a partner membership</a>
            </li>
            <li>
              <a href="http://">Buy a Premium yearly membership, get 1 free month of a partner membership</a>
            </li>
            <li>
              <a href="http://">Data tables section of recomm to list all coupon redemptions</a>
            </li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          issue
        >
          Data validation for a number of redemptions always shows invalid state
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          issue
        >
          Invalid form request sent when submitting coupon for customers from selected country.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          issue
        >
          There is no clear way of creating <code>bxgy</code> coupon without setting a discount amount.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
        >
          We have found the
          <v-code>
            Discounts per redemption
          </v-code>
          and
          <v-code>Redemptions per customer</v-code>
          a little confusing. We saw <v-code>redeemed</v-code> multiple times on the customer's timeline even though redemptions were set to 1.
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
