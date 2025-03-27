<script setup lang="ts">

import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #32
    </h1>
    <p class="text-subtitle-1 mb-4">
      Summarizing key findings
    </p>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      Support team
    </p>

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p><a href="https://team.rebilly.dev/phronesis-training/projects/support-team">Project 32: Support team</a></p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made you smile? :)">
          <ul class="ml-3">
            <li>...</li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
        >
          <ul class="ml-3">
            <li>Adding permissions is not user friendly.</li>
            <li>Having to copy-paste them from the documentation is hard.</li>
            <li>There is no way to search for them (browser's search does not see the textarea content).</li>
            <li>Textarea cannot be expanded.</li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          issue
        >
          No information how permissions have to be written (comma/space/new line separated).
          <v-img
            src="@/assets/trainings/32/confusing/permissions.png"
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
          Empty actions list when insufficient permissions.
          <v-img
            src="@/assets/trainings/32/confusing/empty-actions.png"
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
          Various UI elements visible when the user has no permission to access them. (example: KPIs, Automations)
          <v-img
            src="@/assets/trainings/32/confusing/kpis.png"
            class="rounded-lg elevation-2 mt-2"
            max-width="30%"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
        >
          It is not clear which permissions will be used when creating/updating the user.
          We think it should be possible to use role's permissions without any modification.
          <v-img
            src="@/assets/trainings/32/confusing/create-user.png"
            class="rounded-lg elevation-2 mt-2"
            max-width="30%"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
        >
          Sometimes when creating the user error is displayed but the user is created. We don't know why it sometimes
          works and sometimes doesn't.

          <div class="d-flex justify-start mt-2">
            <v-img
              src="@/assets/trainings/32/confusing/create-user-error.gif"
              class="rounded-lg elevation-2 mx-1"
              max-width="30%"
            />
            <v-img
              src="@/assets/trainings/32/confusing/create-user-no-error.gif"
              class="rounded-lg elevation-2 mx-1"
              max-width="30%"
            />
          </div>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
        >
          We couldn't access creating billing portal link despite having all permissions related to the billing portal
          link. We needed to check the network tab to see that we need
          <code class="bg-grey-lighten-3">PostAuthenticationToken</code>
          permission.

          <v-img
            src="@/assets/trainings/32/confusing/create-billing-portal-link.gif"
            class="rounded-lg elevation-2 mt-2"
            max-width="30%"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
        >
          We couldn't create KYC request documents with KYC agent but had that option visible.
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
