<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #37
    </h1>
    <p class="text-subtitle-1 mb-4">
      Quickbooks integration
    </p>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      Quickbooks integration
    </p>

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/quickbooks-integration">Project 37: Quickbooks
        integration</a>
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
          completed
        >
          <ul class="ml-3">
            <li>
              ...
            </li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          title="Something went wrong"
        >
          <v-row>
            <v-col class="align-content-center">
              Go to Apps -> QuickBooks:
            </v-col>
            <v-col class="text-center align-content-center">
              Results in:
            </v-col>
            <v-col class="align-content-center">
              <v-card
                color="red-lighten-5"
                border="md"
              >
                <v-card-text>
                  Something went wrong, please try again or contact support.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col class="align-content-center">
              Nothing seems to be wrong, there's no error visible in inspector.
            </v-col>
            <v-col>
              <image-dialog
                image-src="trainings/37/something-went-wrong.png"
              />
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
