<script setup lang="ts">
</script>

<template>
  <v-container>
    <h1 class="text-h4 font-weight-bold mb-2">
      Debrief Report #31
    </h1>
    <p class="text-subtitle-1 mb-4">
      Summarizing key findings
    </p>

    <v-divider class="mb-4" />

    <h2 class="text-h5 font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      Orders Early Access
    </p>

    <h2 class="text-h5 font-weight-medium">
      Description
    </h2>
    <p>
      Your account manager at Rebilly reached out to you to inform you that they've made improvements to their order management system. It is still in beta, but as an important customer, they are providing you with advanced access to try it out and provide feedback. Specifically they would like you to test the following scenarios:
    </p>
    <p>- Create an order with mixed monthly plan subscription and yearly plan subscription</p>
    <p>- Create an one-time order</p>
    <p>- Create an order with mixed monthly plan subscription and one time sale</p>
    <p>- Create an order with a metered billing plan subscription</p>
    <p>- Create an order with a subscription that has a plan override</p>
    <p>- Check order details including items</p>
    <p>- Activate an order and check the invoice, and upcoming invoice</p>

    <v-divider class="mb-4 mt-4" />

    <h2 class="text-h5 font-weight-medium">
      Screenshots
    </h2>

    <v-row class="mt-2">
      <v-col cols="12" />
    </v-row>

    <v-divider class="mb-4" />

    <h2 class="text-h5 font-weight-medium">
      Bugs Found
    </h2>

    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="red">
            mdi-bug
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>...</v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-4" />

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
        <v-list-item-content>...</v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-4" />

    <h2 class="text-h5 font-weight-medium">
      Additional Notes
    </h2>
    <p>- ...</p>
  </v-container>
</template>
