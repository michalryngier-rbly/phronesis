<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #51: Value lists
    </h1>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/Value lists">Project 51: Value lists</a>
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
          Request for /lists is only made when setting condition to one of: is in list, is not in list, is empty or is in list, is empty or is not in list, but there's no request for /lists made when editing existing filters, which results in list not being selectable.

          <ol class="ml-6">
            <li>Ensure you have at least one Value List created.</li>
            <li>Go to 'Data tables'</li>
            <li>Go to any segment.</li>
            <li>Click on 'Filters'</li>
            <li>
              Add filter with one of: is in list, is not in list, is empty or is in list, is empty or is not in list condition and select your existing value list.
            </li>
            <li>Refresh page.</li>
            <li>Click on 'Filters'.</li>
            <li>Remove your value list from selection.</li>
            <li>Try adding your value list again.</li>
            <li>See there are no selections.</li>
          </ol>
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
