<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #49: Segments
    </h1>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/segments">Project 49: Segments</a>
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
          issue
          title="URLs formatting issue"
        >
          Sometimes URLs doesn't work when sent to someone else because they contain <code>..</code> at the end and they
          are formatted wrongly. For example, <code>https://app-sandbox.rebilly.com/phronesis-casino-la-blanca/data-tables/grd_seg_01K0XRGN7HKCQGBXXGT1TQ21Z2?filter=lifetimeRevenue/amount:300..</code>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          title="Transaction segments filtering"
        >
          It was confusing how to filter declined transactions. We needed to check Network tab in the browser for
          response and search for "declined" in the response body to find out which field to use for filtering.<br><br>
          Transaction response in the timeline suggest that <code>status</code> should be proper field, but is not the correct one.

          <image-dialog
            image-src="trainings/49/transaction-filtering.png"
            max-width="80"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          suggestion
          title="Select placeholders should be rephrased"
        >
          "Select option" can be rephrased to "Select users".

          <image-dialog
            image-src="trainings/49/select.png"
            max-width="80"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          suggestion
          docs
          title="Documentation link to the filters description"
        >
          It might be useful to have a link to the API documentation with properties of entity when adding filters.

          <image-dialog
            image-src="trainings/49/docs-filters.png"
            max-width="80"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          issue
          suggestion
          title="Filters section behaves weird"
        >
          When removing last filter from the list it should go back to the initial state, but it doesn't. It just removes the filter and leaves the "Add filter to begin" button<br><br>
          When clearing filter select it might behave the same way as removing the filter or this select should not be clearable at all.
          <image-dialog
            image-src="trainings/49/filters-behavior.gif"
            max-width="80"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          title="Segment naming is confusing and inconsistent"
        >
          We find the naming of segments confusing and inconsistent.<br>
          For example, section is called "Customer details" but the actual "Customer details" on the customer page has nothing in common with segments.<br><br>

          <v-row>
            <v-col cols="6">
              <image-dialog
                image-src="trainings/49/customer-details.png"
                max-width="90"
              />
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-col cols="12">
                  <image-dialog
                    image-src="trainings/49/customer-details-2.png"
                    max-width="100"
                  />
                </v-col>
                <v-col cols="12">
                  <image-dialog
                    image-src="trainings/49/customer-details-3.png"
                    max-width="100"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
