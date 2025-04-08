<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #34
    </h1>
    <p class="text-subtitle-1 mb-4">
      Summarizing key findings
    </p>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      AML
    </p>

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p><a href="https://team.rebilly.dev/phronesis-training/projects/aml">Project 34: AML</a></p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made us smile 😄">
          <ul class="ml-3">
            <li>
              Teamwork :).
            </li>
            <li>
              I took less than 2h :)
            </li>
            <li>
              We checked politicians and celebrities for money laundering ;)
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
              <a
                href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/customers/cus_01JRAMJPRVRGJN6RQA8Y2FPQE5"
              >Emmanuel Macron</a>
            </li>
            <li>
              <a
                href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/customers/cus_01JRAMMNAJ4RHT7YEDVQJJR2AH"
              >Keir Starmer</a>
            </li>
            <li>
              <a
                href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/customers/cus_01JRANM86GS8NWJ2X6B9ZJ3MX7"
              >Jennifer Shah</a>
            </li>
            <li>
              <a
                href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/customers/cus_01JRAMQY65WEXGBQTGR4CHCS6P"
              >Bill Clinton</a>
            </li>
            <li>
              <a
                href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/customers/cus_01JRAMP0NDBC5NZ1E2GAV8402V"
              >Jennifer Shah (with a wrong DOB)</a>
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
              We were able to get a proper Webhook response for the
              <v-code>AML list possibly matched</v-code>
              when <span class="font-weight-bold">creating</span> a customer.
            </li>
            <li>
              We were able to get a proper Webhook response for the
              <v-code>AML list possibly matched</v-code>
              when <span class="font-weight-bold">updating</span> a customer.
            </li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
        >
          We thought that there are multiple AML events as Phronesis stated
          <v-code>
            The risk and compliance team has a requirement that they receive all AML related events to their
            internal reporting tool via webhook.
          </v-code>
          .
          But we have found only the
          <v-code>AML list possibly matched</v-code>
          event.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          issue
          title="Reviewed by null and no empty state"
        >
          We created a customer
          <a
            href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/customers/cus_01JRAMP0NDBC5NZ1E2GAV8402V"
          >Jennifer Shah</a> with a Bill Clinton DOB by a mistake and it turned out that an
          <a
            href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/aml-check/aml_chk_01JRAMP13NPKE7CZ9QSW38G39A"
          >
            aml check
          </a>
          was created for this customer. The check has no empty state and chip
          <v-chip
            color="blue-lighten-4"
            class="text-blue-darken-4 font-weight-bold"
          >
            Reviewed by: null
          </v-chip>
          .

          <image-dialog
            image-src="trainings/34/reviewed-by-null-no-empty-state.png"
            max-width="50"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          issue
          title="Could not Confirm Match"
        >
          We weren't able to confirm a <a
            href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/aml-check/aml_chk_01JRANM96Q8GPSCP7M0CNR0DRD"
          >match</a> for the customer. We got an error message
          <v-code>tag is invalid</v-code>
          .
          <a
            href="https://app-sandbox.rebilly.com/phronesis-lucky-clover-casino/data-tables/read-only-api-errors?filter=status:409..499;id:fd7bac48-c2a8-4e31-b40c-1302a5fd7df1"
            class="font-weight-bold"
          >LOG message</a>

          <v-row class="mt-2">
            <v-col cols="6">
              <image-dialog
                image-src="trainings/34/tag-is-invalid-log.png"
                max-width="90"
              />
            </v-col>
            <v-col cols="6">
              <image-dialog
                image-src="trainings/34/tag-is-invalid.png"
                max-width="90"
              />
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
