<script setup lang="ts">
</script>

<template>
  <v-container>
    <h1 class="text-h4 font-weight-bold mb-2">
      Debrief Report #2
    </h1>
    <p class="text-subtitle-1">
      Summarizing key findings
    </p>

    <v-divider class="my-4" />

    <h2 class="font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      Pay an invoice
    </p>

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      Your boss wants you to evaluate Rebilly's invoicing system for their product offerings. For this task, create and
      pay an invoice for each type of product. Pay invoices using the Rebilly back office, as well as via a payment link
      that could be displayed to an end user.
    </p>

    <v-divider class="my-4" />

    <h2 class="font-weight-medium">
      Results
    </h2>

    <v-row class="mt-2">
      <v-col cols="12">
        <h3>Our new products</h3>
        <p>
          <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/products">Our new products</a>, created
          according to the requirements
        </p>
      </v-col>
    </v-row>


    <v-row class="mt-2">
      <v-col cols="12">
        <h3>Our invoices for the products</h3>

        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">
                mdi-invoice-list-outline
              </v-icon>
            </v-list-item-icon>
            <a
              href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/invoices/in_01JPMR7QJH1CZ97H1Z89XZ3HG8"
            >Invoice #1</a> for Basic Membership
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">
                mdi-invoice-list-outline
              </v-icon>
            </v-list-item-icon>
            <a
              href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/invoices/in_01JPMRE3WQ1V0HFF9N571PN8S4"
            >Invoice #2</a> for Premium Membership
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">
                mdi-invoice-list-outline
              </v-icon>
            </v-list-item-icon>
            <a
              href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/invoices/in_01JPMRH7SEVBPFS10PEC0B59N6"
            >Invoice #3</a> for 3 hours of Consulting Services
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">
                mdi-invoice-list-outline
              </v-icon>
            </v-list-item-icon>
            <a
              href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/invoices/in_01JPSTJEE6WEXQQX02K7N8VRSZ"
            >Invoice #4</a> for 10 hours of Consulting Services (payed by a payment link)
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
