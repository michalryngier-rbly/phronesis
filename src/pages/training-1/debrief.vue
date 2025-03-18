<script setup lang="ts">
</script>

<template>
  <v-container>
    <h1 class="text-h4 font-weight-bold mb-2">
      Debrief Report #1
    </h1>
    <p class="text-subtitle-1 mb-4">
      Summarizing key findings
    </p>

    <v-divider class="mb-4" />

    <h2 class="text-h5 font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      Create a test environment
    </p>

    <h2 class="text-h5 font-weight-medium">
      Description
    </h2>
    <p>
      You recently started a new job at a tech company. As one of your first tasks, your boss has asked you to evaluate Rebilly's solution. To get started, they have asked you to set up a test environment. Create a sandbox environment for a fake store in order to do the remainder of your evaluation.
    </p>

    <v-divider class="mb-4 mt-4" />

    <h2 class="text-h5 font-weight-medium">
      Screenshots
    </h2>

    <v-row class="mt-2">
      <v-col cols="6">
        <h3>Our new organization</h3>
        <p>
          <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/websites">
            https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/websites
          </a> We decided to go with the Ireland theme since yesterday was St Patrick's Day :D
        </p>

        <v-img
          src="@/assets/trainings/1/new-org.png"
          class="rounded-lg elevation-4 mt-1"
        />
      </v-col>
    </v-row>

    <v-divider class="my-4" />

    <h2 class="text-h5 font-weight-medium">
      Confusing Things
    </h2>
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="orange">
            mdi-alert-circle
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          Adding whitespace at the beginning of the email prompted an error without any explanation.
        </v-list-item-content>
        <v-list-item-media>
          <v-img
            src="@/assets/trainings/1/email-error.png"
            class="rounded-lg elevation-4 mt-1"
            max-width="50%"
          />
        </v-list-item-media>
      </v-list-item>
    </v-list>
  </v-container>
</template>
