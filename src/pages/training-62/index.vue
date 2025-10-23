<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";

</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #62: Casino deposit error handling
    </h1>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/casino-deposit-error-handling">Project 62: Casino deposit error handling</a>
    </p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made us smile 😄">
          <ul class="ml-3">
            <li>
              Trying so much to break the form in every possible way and seeing how resilient it is!
            </li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Invalid CVV saved and broken card icon"
          issue
          confusing
        >
          An invalid CVV (000) was saved. After refreshing the page and proceeding to payment, the invalid CVV was still stored and used. Additionally, when an invalid CVV is stored and a deposit is attempted, the card icon appears broken.

          <p><strong>Steps to reproduce:</strong></p>
          <ol class="ml-6">
            <li>Make an approved transaction.</li>
            <li>Go to "Manage" on the previously saved payment method.</li>
            <li>Input invalid CVV (000) and check "Save CVV".</li>
            <li>Refresh the page.</li>
            <li>Try to use the same payment method.</li>
            <li>Proceed with deposit.</li>
            <li>See error and broken card icon.</li>
          </ol>

          <image-dialog
            image-src="trainings/62/broken-card-icon.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Cannot remove saved payment methods"
          confusing
        >
          It is confusing that we can no longer remove saved payment methods.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Previously used account confusion"
          confusing
        >
          We initially used a previously used account and had the option to make a $1 deposit, which was unexpected and confusing because of the Phronesis description.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Card icon changes"
          confusing
        >
          It was a bit confusing when the card icon changed. It took us some time to understand that this indicates where to find the CVV code.
          <image-dialog
            image-src="trainings/62/card-icon-changes.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Expiration date update issue"
          issue
        >
          When updating a payment method, we could not enter "10/51". Focusing on "01" and pressing "1" did not change the value. To update, we had to remove everything and then type the new value.

          <image-dialog
            image-src="trainings/62/update-exp-date.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Reverse withdrawal validation"
          issue
          confusing
        >
          When performing a reverse withdrawal, the value is not validated on the frontend for the minimum deposit amount.

          The minimum withdrawal is validated, so users cannot withdraw less than $50. However, the minimum deposit (reverse withdrawal) is not validated by FE validation. The server error is displayed only after submitting the form and is not descriptive enough.

          <image-dialog
            image-src="trainings/62/amount-invalid.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="CVV validation inconsistency"
          confusing
          issue
        >
          The CVV field is highlighted in red during frontend validation, but does not show an error state when there are server errors. Also, errors have different messages for frontend and backend validations.

          <v-row>
            <v-col cols="6">
              <image-dialog
                image-src="trainings/62/cvv-error-fe.png"
                max-width="80"
              />
            </v-col>
            <v-col cols="6">
              <image-dialog
                image-src="trainings/62/cvv-error-be.png"
                max-width="80"
              />
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Input focus on server errors"
          suggestion
          issue
        >
          When a server error occurs for the expiration date or CVV, the cursor position is set to the last active position. We suggest focusing the entire input same as when we use Tab to navigate between inputs.

          <image-dialog
            image-src="trainings/62/cvv-cursor.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Checkbox border has dots"
          confusing
          issue
        >
          There are some tiny dots on the border of checkboxes in the withdrawal form, but this issue is hard to reproduce.

          <image-dialog
            image-src="trainings/62/checkboxes.png"
            max-width="10"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Non-clickable withdrawal methods"
          suggestion
          confusing
        >
          Having non-clickable withdrawal methods is confusing. We should remove them when there are insufficient funds to withdraw and display only the available withdrawal methods in a disabled state.

          <image-dialog
            image-src="trainings/62/non-clickable-withdrawal-methods.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Deposit request retry limit reached message"
          confusing
        >
          At some point, we received the message “Deposit request retry limit reached.” This was confusing and could use a clearer explanation or guidance for users.

          <image-dialog
            image-src="trainings/62/retry-limit.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Cashier flow"
          suggestion
        >
          The cashier on the same website behaves unexpectedly. When we click the "Continue" button, we are redirected to the home page. We suggest that users should remain on the same page to maintain the casino flow.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Bonus resets on withdrawal"
          suggestion
        >
          This type of message seems appropriate only for a welcome bonus, but should not be applied globally to any bonus, such as a birthday bonus or other types that should not be lost. There should be a flag, such as ‘reset-on-withdraw’, for bonuses where this behavior is intended.

          <image-dialog
            image-src="trainings/62/bonus-resets.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
