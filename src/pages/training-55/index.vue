<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #55: Google Sheets (revisited)
    </h1>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/free-trials">Project 55: Google Sheets
        (revisited)</a>
    </p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made us smile 😄">
          <ul class="ml-3">
            <li>
              New pairs
            </li>
          </ul>
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Google sheets integration - Spreadsheet list reloading"
          suggestion
        >
          <p>
            Refreshing the page without submitting the page prompts the user to connect again to Google sheets
          </p>
          To prevent that, we could refresh the spreadsheet list on window focus
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Google sheets integration - Validation messages"
          confusing
        >
          The validation messages for the sheets integration are not really clear
          <image-dialog
            image-src="trainings/55/spreadsheet-validation.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>



      <v-col cols="12">
        <phronesis-card
          title="Google sheets integration - Plan ID filter"
          issue
        >
          The <b>Susbcription > Plan > ID</b> has only a text input, whereas the other Plan ID variable uses a select.
          <p>It also does not filter correctly, we could only filter using <b>Subscription > Items > 0 > Plan</b></p>
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Google sheets integration - Missing headers"
          suggestion
        >
          Should we add headers to the sheets? Right now they need to be input manually
          <p>
            Maybe we could have a <b>Format sheet</b> button that could prepend the headers to the sheet?
          </p>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Trial only orders - Cancellation"
          confusing
        >
          Should we not be able to cancel a trial-only order? We can only pause it
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Trial period - Timezones"
          confusing
        >
          Setting a trial ending to tomorrow will display the same day for both and the start and the end of the period, we suppose due to the timezone shift.
          <image-dialog
            image-src="trainings/55/trial-period.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Order cancellation - Missing validation"
          issue
        >
          We are missing validation for the cancellation reason's length - having a long text there will lead to a
          negative toast <b>Unable to cancel the order</b>
          <image-dialog
            image-src="trainings/55/cancel-reason-validation.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Order cancellation - Unexpected reason"
          confusing
        >
          The cancellation's description will display the cancellation's reason if left empty
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Integration webhook - Naming"
          suggestion
        >
          The webhook created by the integration should have a more explicit ID. Right now it is hardly distinguished from the other webhooks
        </phronesis-card>
      </v-col>
      <v-col cols="12">
        <phronesis-card
          title="Google sheets integration - Naming"
          suggestion
        >
          Should we add an ID to a Google sheets Integration instance? To help distinguish them
        </phronesis-card>
      </v-col>



      <v-col cols="12">
        <phronesis-card
          title="Integration webhook - Permissions"
          issue
        >
          We can freely update the webhook created by the integration. It means the integration could be deleted by
          accident, it can cause some strange behaviours and de-syncs between the Integration and the actual Webhook
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Integration webhook - Displaying"
          suggestion
        >
          Should we hide/differentiate the generated webhook from the manually created ones? ex: in another tab,
          or display a badge
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Google sheets integration - Choosing the Sheet"
          suggestion
        >
          At the moment the lines are appended always to the first Sheet of the Document. We mentioned having the
          ability to save an integration to a specific sheet chosen by the user, but we do not believe it will be that
          used
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Webhook filters - validation"
          issue
        >
          The validation errors do not block the form when editing webhook filters
          <image-dialog
            image-src="trainings/55/filters-validation.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
