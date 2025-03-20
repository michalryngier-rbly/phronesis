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
      Your account manager at Rebilly reached out to you to inform you that they've made improvements to their order
      management system. It is still in beta, but as an important customer, they are providing you with advanced access
      to try it out and provide feedback. Specifically they would like you to test the following scenarios:
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
      <v-col cols="3">
        <h3>
          <a
            href="https://jh-recomm-orders-feature-branch.d2lwxktxnpxork.amplifyapp.com/phronesis-lucky-clover-casino/invoices/in_01JPSV1PC24AGDX5YP0M0J85G8"
          >New order</a> - monthly + yearly subscriptions
        </h3>
        <p>
          Invoice created with monthly and yearly subscriptions
        </p>

        <v-img
          src="@/assets/trainings/3/monthly-yearly/order.png"
          class="rounded-lg elevation-4 mt-1"
        />
      </v-col>

      <v-col cols="3">
        <h3>Payed invoice</h3>
        <p>
          After paying the invoice the upcoming invoice contains only the monthly subscription plan.
        </p>

        <v-img
          src="@/assets/trainings/3/monthly-yearly/upcoming-invoice.png"
          class="rounded-lg elevation-4 mt-1"
        />
      </v-col>
    </v-row>

    <v-row class="mt-2">
      <v-col cols="3">
        <h3>
          <a
            href="https://jh-recomm-orders-feature-branch.d2lwxktxnpxork.amplifyapp.com/phronesis-lucky-clover-casino/invoices/in_01JPSVN4S0KZGNY8WG982WQ70C"
          >New order</a> - one time
        </h3>
        <p>
          Creating a new one time order
        </p>

        <v-img
          src="@/assets/trainings/3/one-time/order.png"
          class="rounded-lg elevation-4 mt-1"
        />
      </v-col>

      <v-col cols="3">
        <h3>Payed invoice</h3>
        <p>
          After paying the invoice the upcoming invoice does not contain anything.
        </p>

        <v-img
          src="@/assets/trainings/3/one-time/upcoming-invoice.png"
          class="rounded-lg elevation-4 mt-1"
        />
      </v-col>
    </v-row>

    <v-row class="mt-2">
      <v-col cols="3">
        <h3>Montly subscription + one time order</h3>
        <p>
          Creating a
          <a
            href="https://jh-recomm-orders-feature-branch.d2lwxktxnpxork.amplifyapp.com/phronesis-lucky-clover-casino/invoices/in_01JPSTJEE6WEXQQX02K7N8VRSZ"
          >new one order with monthly subcription and one time order</a>
        </p>

        <v-img
          src="@/assets/trainings/3/monthly-one-time/order.png"
          class="rounded-lg elevation-4 mt-1"
        />
      </v-col>

      <v-col cols="3">
        <h3>Payed invoice</h3>
        <p>
          After paying the invoice the upcoming invoice contain only the monthly subscription
        </p>

        <v-img
          src="@/assets/trainings/3/monthly-one-time/upcoming-invoice.png"
          class="rounded-lg elevation-4 mt-1"
        />
      </v-col>
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
        <v-list-item-content>
          Creating an order for a metered billing with setup fee results in invoice with just one item with 0 quantity for setup fee. Steps to reproduce:
          <ol>
            <li>Create a metered billing plan with a setup fee</li>
            <li>Create an order for that plan</li>
            <li>Edit the quantity of the setup fee</li>
            <li>Open url with</li>
          </ol>
        </v-list-item-content>
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
        <v-list-item-content>
          Plus icon on the meter billing list looks like a button
          <v-img
            src="@/assets/trainings/3/confusing/plus-button.png"
            class="rounded-lg elevation-4 mt-1"
            max-width="33%"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-4" />

    <h2 class="text-h5 font-weight-medium">
      Additional Notes
    </h2>
    <p>- ...</p>
  </v-container>
</template>
