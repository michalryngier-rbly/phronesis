<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";

</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #63: Allowlists
    </h1>

    <v-divider class="mb-4" />

    <div class="d-flex justify-space-between">
      <h2 class="font-weight-medium">
        Description
      </h2>

      <span class="d-flex flex-row ga-5 mr-n5">
        <v-card class="pr-3">
          <v-avatar icon="mdi-account" />
          Michal Ryngier
        </v-card>
        <v-card class="pr-3">
          <v-avatar icon="mdi-account" />
          Loic Gouttefangeas
        </v-card>
        <span />
      </span>
    </div>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/allowlists">
        Project 63: Allowlists
      </a>
    </p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made us smile 😄">
          <ul class="ml-3">
            <li>
              Filling in all the Rule scores and allowlists...only to see it was not the right casino
            </li>
          </ul>
        </phronesis-card>
      </v-col>



      <v-col cols="12">
        <phronesis-card
          title="Docsearch shows API results despite filtering"
          docs
        >
          Searching for Risk Score in the documentation displays API reference results despite having only checked the "Documentation" category
          <image-dialog
            image-src="trainings/63/docsearch.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Email domain allow-list input prefix clarity"
          suggestion
        >
          For the Email domain allow list setting, we should append a @ left icon on the input field to clarify whether the user needs to insert it or not
          <image-dialog
            image-src="trainings/63/domaininput.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Column list inconsistency in filters vs edit columns"
          issue
        >
          The columns list is inconsistent between the Filter option and the Edit columns options
          <v-row>
            <v-col>
              <image-dialog
                image-src="trainings/63/datatablecolumns.png"
                max-width="80"
              />
            </v-col>
            <v-col>
              <image-dialog
                image-src="trainings/63/datatablecolumns-2.png"
                max-width="80"
              />
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Highlight contributing rules in risk score details"
          suggestion
        >
          In the transaction risk scoring details, could we highlight the rules that contribute to a risk score adjustment
          <image-dialog
            image-src="trainings/63/riskanalysisdetials.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Ambiguity of velocity rule counting"
          confusing
        >
          It is somewhat ambiguous whether the velocities in the risk score rules count in the ongoing transaction during calculations
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Blocklist tabs usability question"
          suggestion
        >
          Do we need tabs for the blocklists? Could we just display all of them and then the user can fine-tune his search with filters
          <image-dialog
            image-src="trainings/63/blockliststab.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Intermittent Framepay authentication error"
          issue
        >
          <p>
            Sometimes, we have this strange alert after trying to create a payment instrument, refreshing the page clears the issue. Is it because of a short-lived authentication token?
          </p>
          <p>
            It looks like there was some authentication error from Framepay to the API
          </p>
          <image-dialog
            image-src="trainings/63/framepayautherror.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Back button loop on allowlist pages"
          issue
        >
          <p>
            The Back buttons on the Automated blocklists & Allowlists pages do not work
          </p>
          <p>
            This happens because we are redirected from /allowlist to /allowlist/address via router.push, and so trying to go back in the history will cause a loop between /allowlist and /allowlist/address
          </p>
          <image-dialog
            image-src="trainings/63/backbutton.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          title="Improve risk score factors table readability"
          suggestion
        >
          To improve the readability of the risk score factors table, we could either/or:
          <v-list>
            <v-list-item prepend-icon="mdi-arrow-right">
              sort the risk score factors by whether they are active or not, to have the active ones on top
            </v-list-item>
            <v-list-item prepend-icon="mdi-arrow-right">
              mute the risk score factors that do not adjust the risk score
            </v-list-item>
          </v-list>

          <v-row>
            <v-col cols="6">
              <image-dialog
                image-src="trainings/63/mute-risk-score-factors-1.png"
                max-width="80"
              />
            </v-col>
            <v-col cols="6">
              <image-dialog
                image-src="trainings/63/mute-risk-score-factors-2.png"
                max-width="80"
              />
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
