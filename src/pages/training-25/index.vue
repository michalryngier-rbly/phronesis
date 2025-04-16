<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #25
    </h1>
    <p class="text-subtitle-1 mb-4">
      Integrate Checkout.com dispute notifications
    </p>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      Integrate Checkout.com dispute notifications
    </p>

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p><a href="https://team.rebilly.dev/phronesis-training/projects/integrate-checkoutcom-disputes">Project 25: Integrate Checkout.com dispute notifications</a></p>

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
          issue
          title="Could not complete the training"
        >
          <v-row>
            <v-col>
              We did not manage to complete the training due to CheckoutCom issue that we have encountered. We know we
              should have
              <v-code>processing channel</v-code>
              created for our sandbox account on CheckoutCom, but we didn't.
              We have tried to create a test account for a
              <v-code>@rebilly.com</v-code>
              and
              <v-code>@gmail.com</v-code>
              emails but both times it was the same problem. We needed to create a Webhook via API because the form submit
              button was disabled for the same reason.
            </v-col>
            <v-col>
              <image-dialog
                image-src="trainings/25/no-processing-channel.png"
                max-width="90"
              />
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
