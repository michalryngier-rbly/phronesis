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
            <li>
              Book on "How to never lose at roulette". Sounds funny, also considering its size :).
            </li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          completed
        >
          <ul class="ml-3">
            We managed to create shipping rates for various scenarios:
            <li>
              <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/shipping-rates/update/free-for-vip">Free book shipping for VIPs</a>
            </li>
            <li>
              <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/shipping-rates/update/ship-to-canada">Book shipping to Canada</a>
            </li>
            <li>
              <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/shipping-rates/update/ship-blackjack-book-to-usa">Shipping of blackjack book to USA</a>
            </li>
            <li>
              <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/shipping-rates/update/ship-roulette-book-to-usa">Shipping of roulette book to USA</a>
            </li>
            <li>
              <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/shipping-rates/update/ship-roulette-book-elsewhere">Shipping of roulette book elsewhere</a>
            </li>
            <li>
              <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/shipping-rates/update/ship-blackjack-book-elsewhere">Shipping of blackjack book elsewhere</a>
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
          We could not create an order with <v-code>Recomm</v-code> and shipping rate calculation by Rebilly selected
          - delivery address didn't pass validation. Trying to do it via Postman with different tweaks also sis not work.
          We tried everything: changing the address, changing the country, etc.
          <image-dialog
            image-src="trainings/35/could-not-create-order-in-recomm.png"
            max-width="60"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          confusing
          issue
          title="Cannot change invoice to include the shipping plans"
        >
          We could not change the shipping rate on existing invoices as well. It was possible to add a line with our "Books" product
          and it even enable the shipping on the invoice, but the shipping price was 0 CAD despite fulfilling the conditions for paid shipping.
          We tried everything here as well: changing addresses (billing and delivery), changing the country, etc.
          <image-dialog
            image-src="trainings/35/could-not-apply-shipping-rate-to-invoice.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          confusing
          issue
          title="Cannot change shipping rate calculation mode on existing invoices"
        >
          On aforementioned invoice we could change shipping rate to manual, but could not change it back to Rebilly (automatic).
          <image-dialog
            image-src="trainings/35/could-not-change-rate-to-rebilly.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          confusing
          issue
          title="Cannot buy the book via payment form as well"
        >
          As a bonus we tried to buy the book via payment form, but it was not possible as well.
          <image-dialog
            image-src="trainings/35/could-not-buy-via-payment-form.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          confusing
          title="Customer edit form has only one address"
        >
          When editing customer, it's unclear which address we change: delivery, billing or both. There is only one.
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
