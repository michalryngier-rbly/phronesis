<script setup lang="ts">
</script>

<template>
  <v-container>
    <h1 class="text-h4 font-weight-bold mb-2">
      Debrief Report
    </h1>
    <p class="text-subtitle-1 mb-4">
      Summarizing key findings
    </p>

    <v-divider class="mb-4" />

    <h2 class="text-h5 font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      Feature X Usability Test
    </p>

    <h2 class="text-h5 font-weight-medium">
      Description
    </h2>
    <p class="mb-4">
      Testing the new UI/UX flow for Feature X. We observed some challenges in navigation and bug occurrences.
    </p>

    <v-divider class="mb-4" />

    <h2 class="text-h5 font-weight-medium">
      Screenshots
    </h2>

    <v-row class="mt-2">
      <v-col cols="12">
        <h3>Give a title</h3>
        <p>Provide some description for the image we can see below</p>

        <v-img
          src="@/assets/template/template-screenshot.png"
          class="rounded-lg elevation-4 mt-1"
        />
      </v-col>
    </v-row>

    <v-divider class="mb-4" />

    <h2 class="text-h5 font-weight-medium">
      Code blocks
    </h2>

    <v-divider class="mb-4" />

    <h2 class="text-h5 font-weight-medium">
      Bugs Found
    </h2>

    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="red">
            mdi-bug
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>Clicking 'Save' does nothing on mobile.</v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="red">
            mdi-bug
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>Page crashes when scrolling too fast.</v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="red">
            mdi-bug
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>Form validation doesn't trigger on the first attempt.</v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-4" />

    <h2 class="text-h5 font-weight-medium">
      Confusing Things
    </h2>
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="orange">
            mdi-alert-circle
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>Users were unsure where to find the settings menu.</v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="orange">
            mdi-alert-circle
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>The 'Back' button looked too similar to 'Submit'.</v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-4" />

    <h2 class="text-h5 font-weight-medium">
      Additional Notes
    </h2>
    <p>- Some users struggled with the new button placement.</p>
    <p>- Error messages were not clear enough.</p>
    <p>- Consider adding a tooltip for better guidance.</p>
  </v-container>
</template>
