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
              Teamwork :).
            </li>
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
              <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/coupons/5-percent-off-yearly-membership">$5 off the yearly Premium membership</a>
            </li>
            <li>
              <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/coupons/10-percent-off-april">10% off during April</a>
            </li>
            <li>
              <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/coupons/15-percent-off-for-canadians">15% off for Canadian customers</a>
            </li>
            <li>
              <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/coupons/20-percent-off-for-orders-larger-than-500">$20 off for orders of more than $500</a>
            </li>
            <li>
              <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/coupons/10-percent-off-the-first-3-months-of-the-monthly">10% off the first 3 months of the Premium monthly membership</a>
            </li>
            <li>
              <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/coupons/buy-yearly-get-partner-2">Buy a Premium yearly membership, get 1 free month of a partner membership</a>
            </li>
            <li>
              <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/data-tables/grd_seg_01JQRQXT33JB8TAE7SJERENQWB">Data tables section of recomm to list all coupon redemptions</a>
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

          <v-img
            src="@/assets/trainings/33/redemption-number-always-invalid.png"
            class="rounded-lg elevation-2 mt-2"
            max-width="30%"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          issue
        >


          <div class="d-flex justify-space-between">
            <div class="ma-2">
              Invalid form request sent when submitting coupon for customers from selected country.
              <v-img
                src="@/assets/trainings/33/invalid-country-request-ui.png"
                class="rounded-lg elevation-2 mt-2"
              />
            </div>
            <div class="ma-2">
              In devtools it shows invalid field <v-code>countries</v-code>, which should be <v-code>countryIds</v-code>
              <v-img
                src="@/assets/trainings/33/invalid-country-request-devtools.png"
                class="rounded-lg elevation-2 mt-2"
              />
            </div>
            <div class="ma-2">
              It could be solved by making an API call directly (open image in new tab to see fully)
              <v-img
                src="@/assets/trainings/33/invalid-country-request-postman.png"
                class="rounded-lg elevation-2 mt-2"
              />
            </div>
          </div>

        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          issue
        >
          There is no clear way of creating <code>bxgy</code> coupon without setting a discount amount. It is not obvious that discount is applied to Y item and we tried to set discount amount to 0 first.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
        >
          We have found the
          <v-code>Discounts per redemption</v-code>
          and
          <v-code>Redemptions per customer</v-code>
          a little confusing. We saw a coupon <v-code>applied</v-code> multiple times on the customer's timeline even though <v-code>redemptions</v-code> were set to 1.
          Then we read the gray text and it made sense, but it is not very intuitive.
          <v-img
            src="@/assets/trainings/33/redemption-per-customer.png"
            class="rounded-lg elevation-2 mt-2"
            max-width="30%"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          issue
        >
          Could not put ID column first in the new data table segment, like in the example. It was possible to drag and drop the ID column to the first position in the settings, but in the column view, it was overridden by default settings, where ID and Coupon ID were greyed out and forbidden to rearrange.
          <v-img
            src="@/assets/trainings/33/id-column-settings.png"
            class="rounded-lg elevation-2 mt-2"
            max-width="30%"
          />
          <v-img
            src="@/assets/trainings/33/id-column-actual.png"
            class="rounded-lg elevation-2 mt-2"
            max-width="50%"
          />
          <v-img
            src="@/assets/trainings/33/id-column-greyed.png"
            class="rounded-lg elevation-2 mt-2"
            max-width="30%"
          />
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
