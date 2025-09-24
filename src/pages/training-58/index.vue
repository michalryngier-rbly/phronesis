<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";

const toAssetSrc = (url: string) => new URL(url, import.meta.url).href
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #58: Pricing formulas
    </h1>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/pricing-formulas">Project 58: Pricing formulas</a>
    </p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made us smile 😄">
          <ul class="ml-3">
            <li>
              Quick & easy Phronesis 💪
            </li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Validation messages"
          issue
        >
          Doubled error message when no value is set.

          <image-dialog
            image-src="trainings/58/validation-messages.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Inconsistency in input fields"
          confusing
        >
          Input sizing is inconsistent

          <image-dialog
            image-src="trainings/58/input-sizing.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Missing error state"
          suggestion
          issue
        >
          Minimum quantity has no error state when error comes from API. Should we add validation for negative amounts
          in Recomm too?

          <image-dialog
            image-src="trainings/58/minimum-input.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Brackets are not compared correctly"
          issue
        >
          <v-row>
            <v-col cols="6">
              We can set:<br>
              0 - 50<br>
              51 - 30 and the form saves fine, without issues when updating<br>
            </v-col>
            <v-col cols="6">
              <video
                controls
                class="w-50"
                :src="toAssetSrc('../../assets/trainings/58/brackets-compared.webm')"
              />
            </v-col>

            <v-col cols="6">
              When updating: brackets are compared to the initial value and not their current value
            </v-col>
            <v-col cols="6">
              <video
                controls
                class="w-50"
                :src="toAssetSrc('../../assets/trainings/58/brackets-compared-2.webm')"
              />
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Using unit labels"
          confusing
        >
          Should it be called ‘sessions’ too? (same as the unit label)

          <image-dialog
            image-src="trainings/58/using-units-label.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Displaying recurring order fields on one-time-sales"
          confusing
        >
          Should we display trial and setup fee for one-time-sale?

          <image-dialog
            image-src="trainings/58/pricing-plan.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Back button issue"
          issue
        >
          Back button should take us to product list but it takes us to the form.

          <image-dialog
            image-src="trainings/58/back-button.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Same pricing plan IDs not allowed for different products"
          confusing
        >
          Should we be able to create pricing plan with the same id for different products?

          <image-dialog
            image-src="trainings/58/same-pricing-plans-id.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Unit label in the invoice"
          confusing
          suggestion
        >
          We might use unit label in the invoice (sessions in this case) instead of ‘units’.

          <image-dialog
            image-src="trainings/58/unit-labels-invoice.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
