<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";

</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #59: Quotes
    </h1>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/pricing-formulas">Project 59 : Quotes</a>
    </p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made us smile 😄">
          <ul class="ml-3">
            <li>
              Speedrunning quote creations for several minutes to try out some cases 🔥
            </li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Validation messages"
          suggestion
        >
          Add the ability to create a new Quote from a rejected one - so we do not have to go through the entire form again, or the ability to recall a rejected invoice

          <image-dialog
            image-src="trainings/59/quotefromrejected.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Validation messages"
          suggestion
        >
          Add another way of selecting the expiration date, with relative dates ("30 days after", "2 weeks")

          <image-dialog
            image-src="trainings/59/expirationdaterelative.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Validation messages"
          issue
        >
          When viewing a completed one-time order, it should not have the "Upcoming invoice" label

          <image-dialog
            image-src="trainings/59/onetimeorderupcominginvoice.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Validation messages"
          issue
        >
          After accepting and paying for a quote, we were redirected to the website, and not to the defined URL

        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Validation messages"
          suggestion
        >
          Use the term 'Recalled' in the timeline message

          <image-dialog
            image-src="trainings/59/timelineitemrecalled.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Validation messages"
          suggestion
        >
          Improve the wording for the Quote end user page when the quote has been recalled (ex: 'This invoice is no longer available", maybe include the contact of the merchant)

          <image-dialog
            image-src="trainings/59/datavalidationfailed.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Validation messages"
          confusing
        >
          We are losing some information from the quote items when converting a quote into an invoice

          <image-dialog
            image-src="trainings/59/convestionquoteorder.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Validation messages"
          confusing
        >
          On the Quote page, we are using the word 'Subscription' even though it is a one-time order

          <image-dialog
            image-src="trainings/59/quotesubscriptiontext.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Validation messages"
          confusing
        >
          When a customer accepts a quote, should he be the one credited for issuing the invoice?

          <image-dialog
            image-src="trainings/59/customeracceptquotetimeline.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Validation messages"
          suggestion
        >
          When creating a Quote, we should validate that the expiration date is later than right now


        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Validation messages"
          confusing
        >
          Should we include the entirety of the price brackets in the description?

          <image-dialog
            image-src="trainings/59/descriptionpricebrackets.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Validation messages"
          suggestion
        >
          When accessing the Quote link for an expired Quote, we are greeted with an error message "JSON Web token expired", we should make this more human readable, and probably include the contact details of the merchant

          <image-dialog
            image-src="trainings/59/expiredquotepage.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Validation messages"
          suggestion
        >
          Make the quote link consistent with the other ones on the side panel

          <image-dialog
            image-src="trainings/59/invoicelinkquote.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Validation messages"
          suggestion
        >
          On the Quote page, we should display the information that the Quote is Pay Later

        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Validation messages"
          issue
          suggestion
        >
          <p>
            We had cases with Pay Later Quotes where we could reject the Quote even though the customer had paid for it
          </p>
          <p>
            We should disable the "Get Payment Link" button in a Pay Later Quote
          </p>

          <image-dialog
            image-src="trainings/59/paylaterquotes.png"
            max-width="30"
          />
          <image-dialog
            image-src="trainings/59/image - 2025-10-01T133229.849.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Validation messages"
          suggestion
        >
          Add frontend validation for the Quote's Redirect URL. Currently, the validation is server side and is shown as a negative toast. Maybe if we hydrated the validation errors from the API, it could also work?

        </phronesis-card>
      </v-col>


    </v-row>
  </v-container>
</template>
