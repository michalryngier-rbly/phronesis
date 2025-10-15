<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";

</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #61: KPI segments
    </h1>

    <v-divider class="mb-4"/>

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/pricing-formulas">Project 61: KPI segments</a>
    </p>

    <v-divider class="mb-4 mt-4"/>

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made us smile 😄">
          <ul class="ml-3">
            <li>
              Talking UI for the KPI Segment form
            </li>
            <li>
              Playing detectives with the segment data overwrite bug 🧐
            </li>
          </ul>
        </phronesis-card>
      </v-col>


      <v-col cols="12">
        <phronesis-card
          title="Validation Error in Segment Filters"
          issue
        >
          Having a validation error within the segment's filters will cause the KPIs (ex: BIN with a non-numerical
          character) to be unavailable with no option to undo / restore defaults
          <image-dialog
            image-src="trainings/61/blockingvalidationerror.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Remove KPI Segments"
          confusing
        >
          Are we not able to remove KPI segments?
          <image-dialog
            image-src="trainings/61/removekpisegment.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Segments Selection UI"
          confusing
          suggestion
        >
          Overall, the segments selection and form is confusing, with a lot of context switching happening with
          the "Create segment" button. We believe that this quick UI tweak would slighly help
          <image-dialog
            image-src="trainings/61/kpiformui.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Product Filtering in Segments"
          suggestion
        >
          Should we not be able to filter by product in the segments? Instead of having to select all of its plans
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Metrics Filtering Issue"
          confusing
        >
          Some metrics do not seem to be filtered, we have the same numbers for different segments. If it si a global
          metric, perhaps we should display only one graph with no label?
          <image-dialog
            image-src="trainings/61/nonfilteredmetrics.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Metrics Datatable View"
          confusing
        >
          Accessing the metrics' datatable will open the datatable views with a different view container than the normal
          data table page
          <v-row>
            <v-col cols="6">
              <image-dialog
                image-src="trainings/61/metricsdatatable1.png"
              />
            </v-col>
            <v-col cols="6">
              <image-dialog
                image-src="trainings/61/metricsdatatable2.png"
              />
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Invoice Filters on Metrics Redirect"
          confusing
        >
          Accessing the metrics' datatable will redirect us with the Invoice filters, but not with the corresponding
          segment filters
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="KPI Segments Form Validation"
          issue
        >
          The frontend validation for the KPI segments forms is not complete

          <image-dialog
            image-src="trainings/61/kpiformvalidation.png"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Segment Data Overwrite Bug"
          issue
        >
          A specific chain of operations when editing a segment and switching currently edited segment will cause the
          second segment to take the first one's data
          <image-dialog
            image-src="trainings/61/weird-values-exchange.gif"
            max-width="30"
          />
        </phronesis-card>
      </v-col>

    </v-row>
  </v-container>
</template>
