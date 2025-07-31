<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #50: Automated tagging
    </h1>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/Automated tagging">Project 50: Automated tagging</a>
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
          confusing
          issue
          title="Pause takes a long time to happen"
        >
          Pausing subscription takes a long time to happen, but the yellow alert suggest it has already happened, which is confusing.
          <image-dialog
            image-src="trainings/50/pause-alert.png"
            max-width="15"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          issue
          title="Inconsistent Canceled pill coloring"
        >
          Canceled status on timeline has red background and Canceled status pill in Order Details has yellow background.
          <image-dialog
            image-src="trainings/50/canceled-pill.png"
            max-width="60"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          issue
          title="Status is not updated after 'Cancel pause'"
        >
          Status stays in state 'Paused' until page is refreshed.
          <image-dialog
            image-src="trainings/50/status-not-updated.png"
            max-width="60"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          suggestion
          title="Add new tag directly from select"
        >
          Instead of showing 'No elements found [...]' we can add option to trigger tag creation modal.

          <image-dialog
            image-src="trainings/50/create-tag.png"
            max-width="60"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          suggestion
          title="Change 'Cancel pause' to 'Resume'"
        >
          <image-dialog
            image-src="trainings/50/cancel-pause.png"
            max-width="15"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          suggestion
          title="'Cancel now' seems odd"
        >
          If we change 'Cancel pause' to 'Resume' we can change dialog confirmation from 'Cancel now' to 'Resume' or 'Confirm'.

          <image-dialog
            image-src="trainings/50/cancel-now.png"
            max-width="60"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          suggestion
          title="Add 'Learn about tags' or Tags Management settings link"
        >
          We could add 'Learn about tags' docs or Tags Management settings link under Manage tags section of Automated tagging page.

          <image-dialog
            image-src="trainings/50/manage-tags.png"
            max-width="60"
          />
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
