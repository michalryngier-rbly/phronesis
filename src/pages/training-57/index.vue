<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";

const toAssetSrc = (url: string) => new URL(url, import.meta.url).href
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #57: Revenue recognition (revisited)
    </h1>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/casino-demo">Project 57: Revenue recognition (revisited)</a>
    </p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made us smile 😄">
          <ul class="ml-3">
            <li>
              Trying to break the journal record amount inputs, making transactions of 10 trillions 😶‍🌫️
            </li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Journal entry datatable columns"
          confusing
        >
          Do we not have a column for a journal entry's journal account?
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Journal entry label and ID UI"
          confusing
        >
          In the invoice screen, the UI is a bit unclear with the Journal entry's label and ID

          <image-dialog
            image-src="trainings/57/journalrecords.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Use checkboxes for Journal summary report settings"
          suggestion
        >
          It's a bit strange the way these options show as selected. Can we make it clearer? ex: By using checkboxes?

          <image-dialog
            image-src="trainings/57/accountselection.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Confusing loader UI in the journal summary report"
          confusing
        >
          In the journal summary report, updating the selected journals will display the table rows automatically, and then the data will be fetched to hydrate them


          <image-dialog
            image-src="trainings/57/"
            max-width="30"
          />
        </phronesis-card>
      </v-col>
      <v-col cols="12">
        <phronesis-card
          title="Reports refresh button"
          confusing
        >
          In the billing reports, the top right button looks like a "refresh" button but is a "restore to defaults" button


          <image-dialog
            image-src="trainings/57/"
            max-width="30"
          />
        </phronesis-card>
      </v-col>
      <v-col cols="12">
        <phronesis-card
          title="Refunding a ont-time sale"
          confusing
        >
          What should we expect to see in the journals when refunding a one-time sale?


          <image-dialog
            image-src="trainings/57/"
            max-width="30"
          />
        </phronesis-card>
      </v-col>
      <v-col cols="12">
        <phronesis-card
          title="Journal record amounts validation"
          issue
        >
          The validation field for the estimated and recognized amount trigger a validation error for amounts less than 1

          <p>
            Amounts lesser than 1 however do exist and can be created with the automatic journal entries
          </p>
          <v-row justify="center">
            <v-col cols="5">
              <image-dialog
                image-src="trainings/57/validation.png"
              />
            </v-col>
            <v-col cols="5">
              <image-dialog
                image-src="trainings/57/datatable.png"
              />
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>
      <v-col cols="12">
        <phronesis-card
          title="Journal record amounts - big numbers edition"
        >
          <p>Numbers above 9999999999999 get rounded</p>
          <p>100000000000000020 → out of range exception in the backend</p>
          <p>1000000000000000300 → 77662796314522750</p>

          <v-row justify="center">
            <v-col cols="5">
              <image-dialog
                image-src="trainings/57/9999999.png"
              />
            </v-col>
            <v-col cols="5">
              <image-dialog
                image-src="trainings/57/number100000.png"
              />
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Add export settings to the journal summary export"
          suggestion
        >
          Can we include the export settings (account, currency, etc.) into the table or file name? With a couple exports it gets confusing


          <image-dialog
            image-src="trainings/57/journalsummaryreport.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>
      <v-col cols="12">
        <phronesis-card
          title="Journal entry exports columns"
          issue
        >
          The journal entries export uses fixed columns, changing the displayed columns in Recomm and then exporting will not affect it
        </phronesis-card>
      </v-col><v-col cols="12">
        <phronesis-card
          title="Alerts UI issues"
          issue
        >
          <p>Export titles can overflow</p>

          <p>Also, clicking again on the notification icon will not close the dropdown</p>

          <image-dialog
            image-src="trainings/57/alertoverflow.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>
      <v-col cols="12">
        <phronesis-card
          title="Exporting journal records"
          suggestion
        >
          Should we add a "Journal records" data export option in the data export page? Since it is possible to export them from a journal entry's page


          <image-dialog
            image-src="trainings/57/dataexport.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>
      <v-col cols="12">
        <phronesis-card
          title="Journal summary export column names"
          confusing
        >
          "Fluent" column names can end up with duplicated words (instead of Invoice > Invoice number)


          <image-dialog
            image-src="trainings/57/invoiceinvoicenumber.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>
      <v-col cols="12">
        <phronesis-card
          title="Discrepancies between export and Recomm's column names"
          confusing
        >
          Column names are inconsistent between the export and recomm's UI


          <image-dialog
            image-src="trainings/57/columnnames.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>
      <v-col cols="12">
        <phronesis-card
          title="Journal summary export customer columns"
          confusing
        >
          The customer's name is the display name, no first name column is selectable


          <image-dialog
            image-src="trainings/57/customername.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>
      <v-col cols="12">
        <phronesis-card
          title="Yearly invoices generated periods"
          confusing
        >
          When creating a yearly subscription plan, we have multiple "annual" periods, yet they're month by month. should it not have a period of a year?


          <image-dialog
            image-src="trainings/57/annualperiod.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>
      <v-col cols="12">
        <phronesis-card
          title="Journal entry external identifiers popover blocked"
          issue
        >
          The external identifier window gets cropped out on a journal entry's page


          <v-row>
            <v-col cols="6">
              <image-dialog
                image-src="trainings/57/externalidentifiers.png"
              />
            </v-col>
            <v-col cols="6">
              <video
                controls
                class="w-33"
                :src="toAssetSrc('../../assets/trainings/57/show-external-identifiers.mov')"
              />
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>
      <v-col cols="12">
        <phronesis-card
          title="Filter journal entries by period"
          issue
        >
          We cannot filter journal entries by period end and start for the journal entry datatable


          <image-dialog
            image-src="trainings/57/"
            max-width="30"
          />
        </phronesis-card>
      </v-col>
      <v-col cols="12">
        <phronesis-card
          title="Reports loader"
          suggestion
        >
          Can we restrict the Billing reports loader to the results table? And not block the report settings forms?
        </phronesis-card>
      </v-col>
      <v-col cols="12">
        <phronesis-card
          title="Adding the final total amount to the journal summary export"
          suggestion
        >
          Can we add the "total" total amount for the selected date range in the journal summary?


          <image-dialog
            image-src="trainings/57/reporttotaltotal.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>
      <v-col cols="12">
        <phronesis-card
          title="Making Journals features more connected between each other"
          suggestion
        >
          <p>
            Instead of having to go to each product to set the journal account, could we instead enrich the journal accounts section with a way to select the affected products?
          </p>
          <p class="pt-2">
            We could also add a link there to the journal summary report - which would be prefilled with the selected journal account
          </p>

          <p class="pt-2">
            The goal would be to aggregate most journal accounts and reporting in a place, because at the moment journal reporting features are scattered throughout the application (settings, products, data tables) with few links to each other.
            Having as many features and links to the other parts of the journal reporting as possible in the journal account page would make the onboarding smoother, because settings up journals will always start with creating a journal account
          </p>

          <image-dialog
            image-src="trainings/57/journalaccountlistproducts.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>
      <v-col cols="12">
        <phronesis-card
          title=""
          suggestion
        >
          In the journal summary reporting, adding links to the table cells would make investigating easier and nicer. Examples :
          <ul class="pl-5">
            <li>a link to the journal account in the first row</li>
            <li>a link to the journal entries with filters to the correct account and period upon clicking one of the amounts in the table</li>
          </ul>


          <v-row justify="center">
            <v-col cols="5">
              <image-dialog
                image-src="trainings/57/reportlinkamounts.png"
              />
            </v-col>
            <v-col cols="5">
              <image-dialog
                image-src="trainings/57/datatablefilters.png"
              />
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
