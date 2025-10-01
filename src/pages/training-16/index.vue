<script setup lang="ts">

import PhronesisCard from "@/components/phronesis-card.vue";

</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #16
    </h1>
    <p class="text-subtitle-1 mb-4">
      Summarizing key findings
    </p>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      Casino payout form
    </p>

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/casino-payout-form">Project 16: Casino payout form</a>
    </p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made you smile? :)">
          <ul class="ml-3">
            <li>Team work!</li>
            <li>Fighting with Netlify</li>
            <li>Fighting with styles :)</li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          completed
        >
          <a href="/casino/withdraw">Link to casino</a>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          issue
          title="Scheduling autopay"
        >
          Invoking Rebilly instruments two times duplicates the payout form. It is kind of developers' responsibility to check it, but maybe it could be prevented on the library level.
          <image-dialog
            image-src="trainings/16/payout-double.png"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          title="Using Rebilly Instruments"
        >
          <p>
            Not all CSS variables configurable in <v-code>ThemeProperties</v-code> interface have an effect on the form. For example, <v-code>buttonSecondaryBorder</v-code> is used
            for secondary button border styling, but other variables, such as <v-code>buttonSecondaryBorderColor</v-code>, have no effect on the style. Documentation does not mention them, but they are available in the
            TS interface, which is the first thing developers look at when they figure out how to use the library.
          </p>
          <p>
            Furthermore, there are some common classes we'd like to style using TS and not CSS (for example, <v-code>.rebilly-instruments-amount-selector</v-code>), as well as <v-code>&lt;a&gt;</v-code>.
            <v-code>colorBackground</v-code> has no effect on the class.
          </p>
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
