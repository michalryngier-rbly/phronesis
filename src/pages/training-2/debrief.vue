<script setup lang="ts">
</script>

<template>
  <v-container>
    <h1 class="text-h4 font-weight-bold mb-2">
      Debrief Report #2
    </h1>
    <p class="text-subtitle-1 mb-4">
      Summarizing key findings
    </p>

    <v-divider class="mb-4" />

    <h2 class="text-h5 font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      Pay an invoice
    </p>

    <h2 class="text-h5 font-weight-medium">
      Description
    </h2>
    <p>
      Your boss wants you to evalute Rebilly's invoicing system for their product offerings. For this task, create and pay an invoice for each type of product. Pay invoices using the Rebilly back office, as well as via a payment link that could be displayed to an end user.
    </p>

    <v-divider class="mb-4 mt-4" />

    <h2 class="text-h5 font-weight-medium">
      Results
    </h2>

    <v-row class="mt-2">
      <v-col cols="12">
        <h3>Our new products</h3>
        <p><a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/products">https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/products</a> Our new products, created according to the requirements</p>
      </v-col>
    </v-row>


    <v-row class="mt-2">
      <v-col cols="12">
        <h3>Our invoices for the products</h3>
        <ul>
          <li><a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/invoices/in_01JPMR7QJH1CZ97H1Z89XZ3HG8">Invoice #1</a> for Basic Membership</li>
          <li><a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/invoices/in_01JPMRE3WQ1V0HFF9N571PN8S4">Invoice #2</a> for Premium Membership</li>
          <li><a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/invoices/in_01JPMRH7SEVBPFS10PEC0B59N6">Invoice #2</a> for 3 hours of Consulting Services</li>
        </ul>
      </v-col>
    </v-row>

    <v-divider class="mb-4 mt-4" />

<!--    <h2 class="text-h5 font-weight-medium">-->
<!--      Screenshots-->
<!--    </h2>-->

<!--    <v-row class="mt-2">-->
<!--      <v-col cols="6">-->
<!--        <h3>Our new products</h3>-->
<!--        <p><a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/products">https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/products</a> Our new products, created according to the requirements</p>-->

<!--        <v-img-->
<!--          src="@/assets/template/new-org.png"-->
<!--          class="rounded-lg elevation-4 mt-1"-->
<!--        />-->
<!--      </v-col>-->
<!--    </v-row>-->

<!--    <v-divider class="my-4" />-->

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
          <v-img
            src="@/assets/template/email-error.png"
            class="rounded-lg elevation-4 mt-1"
            max-width="50%"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>
