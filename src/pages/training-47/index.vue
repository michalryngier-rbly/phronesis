<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #47: Marketing emails
    </h1>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/marketing-emails">Project 47: Marketing emails</a>
    </p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made us smile 😄">
          <ul class="ml-3">
            <li>
              Teamwork :).
            </li>
            <li>
              When adding filters we could see the count of customers and the datatable link was really helpful.
              <image-dialog
                image-src="trainings/47/filters.png"
                max-width="50"
              />
            </li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          issue
          title="Append icon is not clickable. Date input should not be clearable"
        >
          Append calendar icon is not clickable. Additionally, date input should not be clearable.
          <image-dialog
            image-src="trainings/47/calendar-icon.png"
            max-width="60"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          issue
          title="Placeholders select does not work"
        >
          <v-row>
            <v-col>
              <image-dialog
                image-src="trainings/47/placeholder-select.png"
                max-width="90"
              />
            </v-col>
            <v-col>
              <image-dialog
                image-src="trainings/47/placeholder-search.png"
                max-width="90"
              />
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          issue
          title="Timezone for send date is changing when editing the email"
        >
          Send date is set using local timezone, but when editing the email a time is displayed in UTC. It is confusing
          as it is not clear at what time the email will be sent.
          <image-dialog
            image-src="trainings/47/send-date-timezone.png"
            max-width="60"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          issue
          title="Filter value input has a race condition"
        >
          When typing in the filter value input, it sends a request for each keystroke, which can lead to a race
          condition. When typing fast, the request for the previous value can finish after the request for the current
          value, leading to incorrect results being displayed.
          <image-dialog
            image-src="trainings/47/race-condition.gif"
            max-width="60"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          issue
          title="Average value Amount redirects to a file download"
        >
          <image-dialog
            image-src="trainings/47/file-download.gif"
            max-width="60"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          suggestion
          title="Separating email notification sections"
        >
          <p>
            It would be nice to separate the email notification sections in the UI the same way
            settings/automations/rule engine are separated.
          </p>

          <v-row>
            <v-col>
              <image-dialog
                image-src="trainings/47/email-sections.png"
                max-width="90"
              />
            </v-col>
            <v-col
              cols="1"
              class="align-content-center font-weight-bold"
            >
              Convert to:
            </v-col>
            <v-col>
              <image-dialog
                image-src="trainings/47/email-sections-suggestion.png"
                max-width="90"
              />
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          suggestion
          title="Archive icon is confusing and looks like a download icon"
        >
          It might be better to use different icon for archiving emails, as the current one looks like a download icon,
          suggested icon:
          <v-icon class="ml-2 text-grey-darken-1">
            mdi-archive
          </v-icon>
          <image-dialog
            image-src="trainings/47/archive-icon.png"
            max-width="60"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          suggestion
          title="Adding a debounce to the filter value input"
        >
          Filter value input is not debounced, so when typing it sends a request for each keystroke.
          <image-dialog
            image-src="trainings/47/filter-value-input.png"
            max-width="60"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          suggestion
          title="We could have mocks for the email editor for placeholders"
        >
          It would be nice to have a mock for the email editor that would show how the email will look like with the
          placeholders replaced with actual values.
          <image-dialog
            image-src="trainings/47/mocked-placeholder.png"
            max-width="60"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          title="Broadcast emails tabs naming is confusing"
        >
          The name "Draft" suggest that the email is work in progress but it is actually ready to be sent.
          <image-dialog
            image-src="trainings/47/draft-name.png"
            max-width="60"
          />
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
