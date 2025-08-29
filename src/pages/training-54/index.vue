<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #54: Deposits (third time)
    </h1>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/free-trials">Project 54: Deposits (third time)</a>
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
          title="Deposit strategy - calculator"
          suggestion
        >
          Instead of increments, it would be good to have static values. Adding a 'Static' option to the
          'Calculator' select field would be just fine. We would like to set for example $10, $20, $50 as options to
          choose with and the last deposit amount as well.

          <image-dialog
            image-src="trainings/54/add-static.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Deposit form - updating the address manually"
          confusing
          suggestion
        >
          There is no option to manually enter the address when you try to edit the saved payment method (Only search in
          google maps is available). It would be good to have an option to enter the address manually.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Deposit strategy - Filter selection differs from other places"
          confusing
        >
          <ul class="ml-6">
            <li>
              In other places, when selecting filters, we have a dropdown with available operators (in, not in, etc.).
              Here we have Filter and Value only.
            </li>
            <li>
              When selecting tags, we usually have a multiselect with tags that are available and we can select from
              them.
            </li>
          </ul>
          <br>
          Additionally: We may add ability to add the tag on the go.

          <image-dialog
            image-src="trainings/54/filters.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Deposit strategy - Filter for Gateway account ID is not available"
          confusing
          issue
        >
          We couldn't find an option to set the maximum deposit amount for a single deposit for the Interac payment
          instrument. Filters in Deposit strategy don't have an option for a Gateway account ID.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Deposit form - re-rendering breaks the form"
          confusing
          issue
        >
          When we try to re-render the component, sometimes it shows "Unexpected error", mostly when we try to re-render
          with different currency. See implementation
          <router-link to="/casino/deposit">
            here.
          </router-link>

          <image-dialog
            image-src="trainings/54/rerender.gif"
            max-width="60"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Deposit form - Increment on deposit amount input is not handled"
          suggestion
          issue
        >
          When entering the amount, the increment/decrement buttons work by 0.01 always, should match the settings.

          <image-dialog
            image-src="trainings/54/increment.gif"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Deposit strategy - filters don't recognize tags"
          issue
        >
          It doesn't recognize tags (We tried tag name and tag ID), it ignores the filter with tag.

          <br>
          Steps to reproduce:
          <ol class="ml-6">
            <li>Go to 'Settings' -> 'Deposits' -> 'Deposit strategies'</li>
            <li>Create or update a deposit strategy</li>
            <li>In filters section add 'Customer > Tags' filter</li>
            <li>Set value of the filter to VIP and/or an ID of a VIP tag</li>
            <li>Set 'Allow custom amount' to true and set 'Maximum amount' to 100 000</li>
            <li>Proceed to cashier payment form, make sure it uses a Customer with VIP tag</li>
            <li>The maximum amount for custom amount is not same as a value set for the strategy</li>
          </ol>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Deposit form - refreshing on every amount change"
          issue
        >
          When entering the amount, at some point it shows all the payment instruments (Even the ones not
          available for that currency due to Gateway Account settings).

          <image-dialog
            image-src="trainings/54/changing-amount.gif"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Deposit form - updating the address shows error"
          issue
        >
          When trying to edit the payment method, first time you try to change the address it shows error that address
          line 1 is required despite it being filled.

          <image-dialog
            image-src="trainings/54/change-address.gif"
            max-width="30"
          />
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
