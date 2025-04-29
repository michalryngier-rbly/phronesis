<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #37
    </h1>
    <p class="text-subtitle-1 mb-4">
      Quickbooks integration
    </p>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      Quickbooks integration
    </p>

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/quickbooks-integration">Project 37: Quickbooks
        integration</a>
    </p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made us smile 😄">
          <ul class="ml-3">
            <li>
              Teamwork :).
            </li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          completed
        >
          <ul class="ml-3">
            <li>
              Managed to set up Quickbooks integration.
            </li>
            <li>
              Managed to manually sync some customers, invoices and payments for consulting services, but not refunds.
            </li>
            <li>
              Managed to do the same but automatically.
            </li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          issue
          title="Something went wrong"
        >
          <v-row>
            <v-col class="align-content-center">
              Go to Apps -> QuickBooks:
            </v-col>
            <v-col class="text-center align-content-center">
              Results in:
            </v-col>
            <v-col class="align-content-center">
              <v-card
                color="red-lighten-5"
                border="md"
              >
                <v-card-text>
                  Something went wrong, please try again or contact support.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col class="align-content-center">
              Nothing seems to be wrong, there's no error visible in inspector.
            </v-col>
            <v-col>
              <image-dialog
                image-src="trainings/37/something-went-wrong.png"
              />
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          issue
          title="During first sync, some of customer's data is not sent to OpenBooks"
        >
          <ul class="ml-3">
            <li>1. Create a new customer in Rebilly</li>
            <li>2. Wait for a moment</li>
            <li>result: The customer appears in QuickBooks, but apart from name and address all his information is empty</li>
            <li>expected result: Customer's data in QuickBooks should mirror data in Rebilly, including email, phone number etc.</li>
            <li>note: Customer address was properly sent to QuickBooks.</li>
          </ul>

          <image-dialog
            image-src="trainings/37/customer-info-incomplete.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          title="Changes to customer in Rebilly are not propagated to QuickBooks"
        >
          <ul class="ml-3">
            <li>1. Pick an existing customer that has already been synced with QuickBooks</li>
            <li>2. Change any of customer's data</li>
            <li>3. Wait for QuickBooks sync or trigger the sync manually</li>
            <li>result: The data in QuickBooks is unchanged (including changes in name or address)</li>
            <li>expected result: All changes in Rebilly should be mirrored in QuickBooks</li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          title="Entity changes in QuickBooks are not visible in Rebilly timelines"
        >
          <p>We can see stuff like "Customer created in QuickBooks", but not "Customer name/data updated in QuickBooks"</p>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          issue
          title="&quot;Something went wrong on Rebilly's end&quot; error when syncing a refund"
        >
          <ul class="ml-3">
            <li>1. Create a refund in Rebilly</li>
            <li>2. Wait for a moment</li>
            <li>expected result: refund appears in QuickBooks</li>
            <li>note: refund was not sent successfully to QuickBooks, and it's just a 500 error</li>
          </ul>

          <image-dialog
            image-src="trainings/37/refund-not-synced.png"
            max-width="20"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          title="Random &quot;Subscription not found&quot; errors when navigating to newly created order in Rebilly app"
        >
          <p>Some kind of race condition?</p>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          issue
          title="Could not sync invoices and payments for book products"
        >
          <ul class="ml-3">
            <li>Getting <v-code>"Failed to communicate with QuickBooks due to A business validation error has occurred while processing your request"</v-code> errors on automatic processing</li>
            <li>
              Getting <v-code>"External identifier not found"</v-code> error when syncing manually:
              <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/data-tables/read-only-api-logs?filter=;id:264eb016-ca94-4ea9-b058-f944d3b8f934">Link to 404</a>
              &nbsp;
              <a href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/data-tables/read-only-api-logs?filter=;id:34996fa7-1548-47b5-a6a3-a4d414f0670c">Link to successful POST</a>
            </li>
            <li>Possibly a currency mismatch?</li>
          </ul>

          <image-dialog
            image-src="trainings/37/business-validation-errors.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
