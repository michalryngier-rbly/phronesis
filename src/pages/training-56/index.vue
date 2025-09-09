<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #56: Casino Demo Training
    </h1>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/casino-demo">Project 56: Casino Demo Training</a>
    </p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made us smile 😄">
          <ul class="ml-3">
            <li>
              Teamwork 💪
            </li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Last Name Required - shows for any invalid field"
          issue
        >
          The 'Last name is required' error message displays when Region or Postal code fields validation is triggered during registration
          or editing the profile.

          <image-dialog
            image-src="trainings/56/validations.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Missing Amount after a successful deposit"
          confusing
        >
          We did not see the deposited amount reflected in our account after a successful deposit nor when doing
          withdrawals, so we weren't sure if something actually happened.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Race condition in Ffvorite payment methods"
          issue
        >
          There is a race condition when displaying favorite payment methods - sometimes they are ordered by the last
          successful ones, and other times the order appears random. I this case our last successful method was
          Cryptocurrency, but we got a Payment Card on the top instead.

          <image-dialog
            image-src="trainings/56/favorite-methods.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Redirect after deposit cancellation"
          confusing
        >
          After canceling a deposit, we were redirected to a warning page with no option to return to the payment method
          selection. This should allow users to go back and choose a different payment method same way as when a
          transaction is declined.

          <image-dialog
            image-src="trainings/56/cancel-deposit.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Button styling issues"
          issue
        >
          Button styling is missing appropriate padding or margin.

          <image-dialog
            image-src="trainings/56/button-styling.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Default payment instrument removal"
          issue
          confusing
        >
          When the default payment instrument is removed, the primary payment instrument from the 'account' endpoint is
          a payment card, but the 'payment-instruments' endpoint only returns cryptocurrency and Interac instruments
          resulting in error being displayed.

          <image-dialog
            image-src="trainings/56/default-pi-error.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Tooltip for warning icons"
          suggestion
        >
          Add a tooltip title on hover over warning icons to provide information about validation errors. Our first
          instinct was to hover over the icon to see if there was more information.

          <image-dialog
            image-src="trainings/56/warning-icon.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Withdrawal payment cards not saved"
          issue
        >
          Withdrawal payment cards are not saved as deposit/withdrawal methods. Currently, payment cards are saved as
          instruments only for deposits. It is not the same for withdrawals with other payment methods, as Interac and
          crypto are saved as payment instruments when used during withdrawals.
          <br>
          Here we have just used a payment card for withdrawal, but it was not saved as a payment instrument and we only
          had
          Cryptocurrency as a preferred method for withdrawal.

          <image-dialog
            image-src="trainings/56/withdrawal-pi.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Reverse withdrawal summary message"
          confusing
          suggestion
        >
          When performing a reverse withdrawal, we receive the same message as for a deposit. There should be an option
          to customize the message to clarify that the withdrawal was reversed.

          <image-dialog
            image-src="trainings/56/reverse-withdrawal.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="API error display"
          confusing
          suggestion
        >
          API errors are displayed directly to the end user. Instead, we should show a generic message such as
          "Something went wrong, please try again or contact support."

          <image-dialog
            image-src="trainings/56/api-error.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Reverse withdrawal minimum amount error"
          issue
        >
          When attempting to reverse a withdrawal with an amount smaller than the minimum deposit, an error occurs.

          <image-dialog
            image-src="trainings/56/reverse-withdrawal-error.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Available to withdraw message"
          confusing
          suggestion
        >
          The message "Available to withdraw" is shown even when the minimum withdrawal amount has not been reached. It
          would be helpful to display how much more is needed to enable withdrawal.

          <image-dialog
            image-src="trainings/56/available-to-withdraw.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Partial reverse withdrawal clarity"
          confusing
          suggestion
        >
          It is unclear how to perform a partial reverse withdrawal, as the "Reverse withdraw" payment method is only
          displayed when the deposit amount does not result in exceeding the minimum withdrawal amount <code>(pending
            payout amount - deposit amount ≥ $50)</code>.
          <br>
          We could grey out the "Reverse withdraw" option when the deposit amount exceeds the available amount with an
          info icon and a tooltip explaining the condition or add a note below the payment methods with an option to add
          some link with a FAQ for merchants.

          <image-dialog
            image-src="trainings/56/partial-reverse.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
