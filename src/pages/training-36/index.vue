<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #36
    </h1>
    <p class="text-subtitle-1 mb-4">
      Custom domains
    </p>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      Custom domains
    </p>

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p><a href="https://team.rebilly.dev/phronesis-training/projects/custom-domains">Project 36: Custom domains</a></p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made us smile 😄">
          <ul class="ml-3">
            <li>
              Teamwork :).
            </li>
            <li>
              Piotr has joined us!
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
              We were able to create custom domain for
              <v-code>luckyclovercasino.giize.com</v-code>.
            </li>
            <li>
              We generated deposit request that included our domain in the url.
            </li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          title="Not sure which method was correct choice"
        >
          We were not sure which method was the correct choice:
          <ul class="ml-3">
            <li>Collect payment</li>
            <li>Billing portal link</li>
            <li>Request deposit</li>
          </ul>
          <image-dialog
            image-src="trainings/36/payment-methods.png"
            max-width="60"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          title="No payment method available in billing portal"
        >
          When using billing portal link we were not able to add new payment method.
          <image-dialog
            image-src="trainings/36/billing-portal.png"
            max-width="60"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          title="Hosted payment form link does not include the custom domain"
        >
          <v-row>
            <v-col cols="12">
              We have created hosted payment form link with
              <v-code>Collect payment</v-code>
              . Link does not contain custom domain, but when visited redirects to the custom domain which is confusing.
            </v-col>
            <v-col cols="12">
              <v-code>
                https://sandbox.secure-payments.app/payments/approval/txn_01JSHC20N7YM9245TZS1TN7D8E/1fadc215898b403dafc2e170bf93b9b8/
              </v-code>
              redirects to
              <v-code>https://luckyclovercasino.giize.com/payment/?token=...</v-code>
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          issue
          title="Nested subdomains are not valid"
        >
          <v-row>
            <v-col cols="12">
              We could not add a domain that was a nested subdomain, for example
              <v-code>nested-subdomain.subdomain.domain.com</v-code>
              , but single subdomain was correct
              <v-code>subdomain.domain.com</v-code>
            </v-col>
            <v-col cols="6">
              <image-dialog
                image-src="trainings/36/nested-subdomain.png"
                max-width="100"
              />
            </v-col>
            <v-col cols="6">
              <image-dialog
                image-src="trainings/36/subdomain.png"
                max-width="100"
              />
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
