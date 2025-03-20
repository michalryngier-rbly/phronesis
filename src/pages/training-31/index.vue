<script setup lang="ts">
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #31
    </h1>
    <p class="text-subtitle-1 mb-4">
      Summarizing key findings
    </p>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      Orders Early Access
    </p>

    <h2 class="font-weight-medium">
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


    <h2 class="font-weight-medium">
      Test scenarios:
    </h2>

    <v-row class="my">
      <v-col cols="3">
        <h3>
          1. Create an order with mixed monthly plan subscription and yearly plan subscription
        </h3>
        <p>
          Check order details including items<br>
          <a href="https://jh-recomm-orders-feature-branch.d2lwxktxnpxork.amplifyapp.com/phronesis-lucky-clover-casino/invoices/in_01JPSV1PC24AGDX5YP0M0J85G8">New order</a> - monthly + yearly subscriptions
          <v-icon color="success">
            mdi-check
          </v-icon>
        </p>

        <v-img
          src="@/assets/trainings/3/monthly-yearly/order.png"
          class="rounded-lg elevation-4 mt-1"
        />
      </v-col>

      <v-col cols="3">
        <h3>Activated an order and check the invoice, and upcoming invoice</h3>
        <p>
          After paying the invoice the upcoming invoice contains only the monthly subscription plan.
          <v-icon color="success">
            mdi-check
          </v-icon>
        </p>

        <v-img
          src="@/assets/trainings/3/monthly-yearly/upcoming-invoice.png"
          class="rounded-lg elevation-4 mt-1"
        />
      </v-col>
    </v-row>

    <v-row class="my">
      <v-col cols="3">
        <h3>
          2. Create an one-time order
        </h3>
        <p>
          Check order details including items<br>
          <a
            href="https://jh-recomm-orders-feature-branch.d2lwxktxnpxork.amplifyapp.com/phronesis-lucky-clover-casino/invoices/in_01JPSVN4S0KZGNY8WG982WQ70C"
          >New order</a> - one time order
          <v-icon color="success">
            mdi-check
          </v-icon>
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
          <v-icon color="success">
            mdi-check
          </v-icon>
        </p>

        <v-img
          src="@/assets/trainings/3/one-time/upcoming-invoice.png"
          class="rounded-lg elevation-4 mt-1"
        />
      </v-col>
    </v-row>

    <v-row class="my">
      <v-col cols="3">
        <h3>3. Create an order with mixed monthly plan subscription and one time sale</h3>
        <p>
          Check order details including item<br>
          <a
            href="https://jh-recomm-orders-feature-branch.d2lwxktxnpxork.amplifyapp.com/phronesis-lucky-clover-casino/invoices/in_01JPSTJEE6WEXQQX02K7N8VRSZ"
          >New order</a> - mixed monthly plan subscription and one time sale
          <v-icon color="success">
            mdi-check
          </v-icon>
        </p>

        <v-img
          src="@/assets/trainings/3/monthly-one-time/order.png"
          class="rounded-lg elevation-4 mt-1"
        />
      </v-col>

      <v-col cols="3">
        <h3>Activate an order and check the invoice, and upcoming invoice</h3>
        After paying the invoice the upcoming invoice contains the monthly subscription plan.
        <v-icon color="success">
          mdi-check
        </v-icon>

        <v-img
          src="@/assets/trainings/3/monthly-one-time/upcoming-invoice.png"
          class="rounded-lg elevation-4 mt-1"
        />
      </v-col>
    </v-row>

    <v-row class="my-2">
      <v-col cols="3">
        <h3>4.a. Create an order with a metered billing plan subscription</h3>
        <p>
          Check order details including item<br>
          <a
            href="https://jh-recomm-orders-feature-branch.d2lwxktxnpxork.amplifyapp.com/phronesis-lucky-clover-casino/invoices/in_01JPT0FWXTBKXWN3XMJNT6B53R"
          >New order</a> - contains an activation fee without an amount resulting in the invoice being for $0.
          <v-icon color="error">
            mdi-close
          </v-icon>
        </p>

        <v-img
          src="@/assets/trainings/3/metered-billing/order.png"
          class="rounded-lg elevation-4 mt-1"
        />
      </v-col>

      <v-col cols="3">
        <h3>Activate an order and check the invoice, and upcoming invoice</h3>
        After paying the invoice the error occurred
        <v-icon color="error">
          mdi-close
        </v-icon>

        <v-img
          src="@/assets/trainings/3/metered-billing/error.png"
          class="rounded-lg elevation-4 mt-1"
        />
      </v-col>
    </v-row>

    <v-row class="my-2">
      <v-col cols="3">
        <h3>4.b. Create an order with a metered billing plan subscription: TODO: pay without activation fee</h3>
        <p>
          Check order details including item<br>
          <a
            href="https://jh-recomm-orders-feature-branch.d2lwxktxnpxork.amplifyapp.com/phronesis-lucky-clover-casino/invoices/in_01JPT0FWXTBKXWN3XMJNT6B53R"
          >New order</a> - contains an activation fee without an amount resulting in the invoice being for $0.
          <v-icon color="error">
            mdi-close
          </v-icon>
        </p>

        <v-img
          src="@/assets/trainings/3/metered-billing/order.png"
          class="rounded-lg elevation-4 mt-1"
        />
      </v-col>

      <v-col cols="3">
        <h3>Activate an order and check the invoice, and upcoming invoice</h3>
        After paying the invoice the error occurred
        <v-icon color="error">
          mdi-close
        </v-icon>

        <v-img
          src="@/assets/trainings/3/metered-billing/error.png"
          class="rounded-lg elevation-4 mt-1"
        />
      </v-col>
    </v-row>

    <v-row class="my-2">
      <v-col cols="3">
        <h3>5. Create an order with a subscription that has a plan override TODO: make this order</h3>
        <p>
          Check order details including item<br>
          <a
            href=""
          >New order</a> - contains a subscription that has a plan override.
          <v-icon color="success">
            mdi-check
          </v-icon>
        </p>

        <!--        <v-img-->
        <!--          src="@/assets/trainings/3/plan-override/order.png"-->
        <!--          class="rounded-lg elevation-4 mt-1"-->
        <!--        />-->
      </v-col>

      <v-col cols="3">
        <h3>Activate an order and check the invoice, and upcoming invoice</h3>
        After paying the invoice ...
        <v-icon color="success">
          mdi-check
        </v-icon>

        <!--        <v-img-->
        <!--          src="@/assets/trainings/3/plan-override/upcoming-invoice.png"-->
        <!--          class="rounded-lg elevation-4 mt-1"-->
        <!--        />-->
      </v-col>
    </v-row>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Bugs Found (3)
    </h2>

    <v-list>
      <v-list-item class="mb-4">
        <v-list-item-icon>
          <v-icon color="red">
            mdi-bug
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          Creating an order for a metered billing with a setup fee and trying to pay it results in error.
          <v-list
            class="border-lg my-2"
          >
            <v-list-item>
              <v-list-item-title>
                <strong>Steps to reproduce:</strong>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              1. Create a metered billing plan with a setup fee.
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                2. Create an order for that plan.
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                2. Make a payment for the plan.
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <strong>Result:</strong> Redirect with an error<br>
                <strong>Expected result:</strong> Order is payed.
              </v-list-item-content>
              <v-list-item-media>
                <v-img
                  src="@/assets/trainings/3/bugs/payment-error.png"
                  class="rounded-lg elevation-4 mt-1"
                  max-width="25%"
                />
              </v-list-item-media>
            </v-list-item>
          </v-list>
        </v-list-item-content>
      </v-list-item>

      <v-list-item class="mb-4">
        <v-list-item-icon>
          <v-icon color="red">
            mdi-bug
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          Creating an order for a metered billing with setup fee results in invoice with just one item with 0 quantity for setup fee.
          <v-list
            class="border-lg my-2"
          >
            <v-list-item>
              <v-list-item-title>
                <strong>Steps to reproduce:</strong>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              1. Create a metered billing plan with a setup fee.
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                2. Create an order for that plan.
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <strong>Result:</strong> Quantity for setup fee is 0.<br>
                <strong>Expected result:</strong> Quantity for setup fee is 1.
              </v-list-item-content>
              <v-list-item-media>
                <v-img
                  src="@/assets/trainings/3/bugs/setup-fee-quantity.png"
                  class="rounded-lg elevation-4 mt-1"
                  max-width="25%"
                />
              </v-list-item-media>
            </v-list-item>
          </v-list>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="red">
            mdi-bug
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          Updating quantity for setup fee updates the Sum of reported usage value.
          <v-list
            class="border-lg my-2"
          >
            <v-list-item>
              <v-list-item-title>
                <strong>Steps to reproduce:</strong>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              1. Create a metered billing plan with a setup fee.
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                2. Create an order for that plan.
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                3. Update the quantity for the activation fee using <v-icon>mdi-pencil</v-icon>.
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                4. Click on the Quantity value of the invoice Setup fee unit
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <strong>Result:</strong> Sum of reported usage equals the set quantity for setup fee.<br>
                <strong>Expected result:</strong> Sum of reported usage equals 0.
              </v-list-item-content>
              <v-list-item-media>
                <v-img
                  src="@/assets/trainings/3/bugs/sum-of-reported-usage.png"
                  class="rounded-lg elevation-4 mt-1"
                  max-width="25%"
                />
              </v-list-item-media>
            </v-list-item>
          </v-list>
        </v-list-item-content>
      </v-list-item>
    </v-list>


    <v-divider class="my-4" />

    <h2 class="font-weight-medium">
      Confusing Things (1)
    </h2>

    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="orange">
            mdi-alert-circle
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          Setup fee for metered billing quantity can be updated. Shouldn't it be set to 1 by default?
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="orange">
            mdi-alert-circle
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          Invoice for metered billing has only setup fee position. Shouldn't it have 2 positions - setup fee and actual pricing plan?
        </v-list-item-content>
      </v-list-item>

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
            max-width="25%"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Additional Notes
    </h2>
    <p>- ...</p>
  </v-container>
</template>
