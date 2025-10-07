<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";

</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #60: KYC - Closed eyes detection
    </h1>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/pricing-formulas">Project 60: KYC - Closed eyes
        detection</a>
    </p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made us smile 😄">
          <ul class="ml-3">
            <li>
              Taking selfies with eyes closed over and over again 😂
            </li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Sentence case for document types"
          suggestion
        >
          Use sentence case for the document types

          <image-dialog
            image-src="trainings/60/sentencecase.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Radio buttons seems clickable when disabled"
          issue
        >
          Radio buttons are disabled but we still get a mouse 'pointer' on them

          <image-dialog
            image-src="trainings/60/radiobuttons.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Date format placeholder"
          suggestion
        >
          Add placeholder of formats of dates (especially for date of births)
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Handle errors"
          issue
          confusing
        >
          ‘Something went wrong’ after the KYC - no option to 'Try again', 'Contact support'. Would be good to handle
          errors with an option to go back and try again.<br>
          See <a href="https://sentry.rebilly.com/rebilly/rebilly-app/issues/31965/?referrer=slack">Sentry issue</a>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Document count badge not updating"
          confusing
        >
          When we open a document that document changes its status to 'in review', but as soon as we leave the page it’s
          'unreviewed' again but the number in badges does not update.

          <image-dialog
            image-src="trainings/60/documentcount.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Transparency about checks run"
          suggestion
        >
          Even though we had ‘Has matching face proof’ failed and the score was not updated. It was not present in the list of checks. We should be more transparent about checks we run in every verification level.
          <br>
          Should we list the features that are verified? We set 'Has matching face proof' weight to 65 but it wasn’t taken into account in the ‘Moderate’ level.

          <image-dialog
            image-src="trainings/60/transparencychecks.png"
            max-width="30"
          />
          <image-dialog
            image-src="trainings/60/transparencychecks2.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="KYC not asked for saved payment method"
          issue
        >
          At some point we stopped getting asked for a KYC for a saved payment method, even though we checked ‘no
          exclusions’.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Refreshing the page during KYC breaks the payment"
          issue
        >
          Refreshing the page when the KYC process started already breaks the payment, but when you reopen the payment
          form url you go back to the KYC right away.

          <image-dialog
            image-src="trainings/60/refreshingpage.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Weights miss face-liveness"
          confusing
        >
          No ‘face-liveness’ weight.

          <image-dialog
            image-src="trainings/60/weights.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Face liveness checkbox in Rules engine"
          issue
          confusing
        >
          We had no checkbox for face liveness in the 'Rules engine', it was available only for ‘Request document’ form for a customer.

          <image-dialog
            image-src="trainings/60/facelivenesscheckbox.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="UI/UX of selecting required documents and checks"
          issue
          confusing
        >
          Identity proof looks disabled, but it’s ‘checked’

          <image-dialog
            image-src="trainings/60/identityproof.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="KYC error message and format"
          issue
          confusing
        >
          Confusing message and its format (422: ...)<br>
          It happens with no clear cause or trigger and we have no related API Error log. It simply blocks our KYC
          verification and we have to go through another verification link

          <image-dialog
            image-src="trainings/60/kycerror.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Face liveness bypassed"
          issue
        >
          Face liveness didn’t work for us. We took a photo, displayed it on a screen and ‘Has matching face proof’
          check
          passed just fine
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
