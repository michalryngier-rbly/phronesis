<script setup lang="ts">

</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #32
    </h1>
    <p class="text-subtitle-1 mb-4">
      Summarizing key findings
    </p>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Title
    </h2>
    <p class="mb-4">
      Support team
    </p>

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p><a href="https://team.rebilly.dev/phronesis-training/projects/support-team">Project 32: Support team</a></p>

    <v-divider class="mb-4 mt-4" />

    <v-list>
      <v-list-item class="mb-4">
        <v-list-item-title>
          <div class="rounded-pill bg-orange w-10">
            <v-icon
              color="white"
              class="mr-2"
            >
              mdi-alert-circle
            </v-icon>
            <span class="font-weight-bold">Confusing</span>
          </div>
        </v-list-item-title>
        <v-list-item-content>
          Adding permissions is not user friendly. Having to copy-paste them from the documentation is hard, there is no way to search for them (browser's search does not see the textarea content), textarea cannot be expanded.
        </v-list-item-content>
      </v-list-item>

      <v-list-item class="mb-4">
        <v-list-item-title>
          <div class="rounded-pill bg-orange w-10">
            <v-icon
              color="white"
              class="mr-2"
            >
              mdi-alert-circle
            </v-icon>
            <span class="font-weight-bold">Confusing</span>
          </div>
        </v-list-item-title>
        <v-list-item-content>
          No information how permissions have to be written (comma/space/new line separated).
        </v-list-item-content>
        <v-list-item-media>
          <v-img
            src="@/assets/trainings/32/confusing/permissions.png"
            class="rounded-lg elevation-4 mt-1"
            max-width="50%"
          />
        </v-list-item-media>
      </v-list-item>

      <v-list-item class="mb-4">
        <v-list-item-title class="d-flex">
          <div class="rounded-pill bg-red w-10 mr-2">
            <v-icon
              color="white"
              class="mr-2"
            >
              mdi-bug
            </v-icon>
            <span class="font-weight-bold">Issue</span>
          </div>
          <div class="rounded-pill bg-orange w-10">
            <v-icon
              color="white"
              class="mr-2"
            >
              mdi-alert-circle
            </v-icon>
            <span class="font-weight-bold">Confusing</span>
          </div>
        </v-list-item-title>
        <v-list-item-content>
          Empty actions list when insufficient permissions.
        </v-list-item-content>
        <v-list-item-media>
          <v-img
            src="@/assets/trainings/32/confusing/empty-actions.png"
            class="rounded-lg elevation-4 mt-1"
            max-width="50%"
          />
        </v-list-item-media>
      </v-list-item>

      <v-list-item class="mb-4">
        <v-list-item-title class="d-flex">
          <div class="rounded-pill bg-red w-10 mr-2">
            <v-icon
              color="white"
              class="mr-2"
            >
              mdi-bug
            </v-icon>
            <span class="font-weight-bold">Issue</span>
          </div>
          <div class="rounded-pill bg-orange w-10">
            <v-icon
              color="white"
              class="mr-2"
            >
              mdi-alert-circle
            </v-icon>
            <span class="font-weight-bold">Confusing</span>
          </div>
        </v-list-item-title>
        <v-list-item-content>
          Various UI elements visible when the user has no permission to access them. (example: KPIs, Automations)
        </v-list-item-content>
        <v-list-item-media>
          <v-img
            src="@/assets/trainings/32/confusing/kpis.png"
            class="rounded-lg elevation-4 mt-1"
            max-width="50%"
          />
        </v-list-item-media>
      </v-list-item>

      <v-list-item class="mb-4">
        <v-list-item-title>
          <div class="rounded-pill bg-orange w-10">
            <v-icon
              color="white"
              class="mr-2"
            >
              mdi-alert-circle
            </v-icon>
            <span class="font-weight-bold">Confusing</span>
          </div>
        </v-list-item-title>
        <v-list-item-content>
          It is not clear which permissions will be used when creating/updating the user.
          We think it should be possible to use role's permissions without any modification.
        </v-list-item-content>
        <v-list-item-media>
          <v-img
            src="@/assets/trainings/32/confusing/create-user.png"
            class="rounded-lg elevation-4 mt-1"
            max-width="50%"
          />
        </v-list-item-media>
      </v-list-item>

      <v-list-item class="mb-4">
        <v-list-item-title class="d-flex">
          <div class="rounded-pill bg-red w-10 mr-2">
            <v-icon
              color="white"
              class="mr-2"
            >
              mdi-bug
            </v-icon>
            <span class="font-weight-bold">Issue</span>
          </div>
          <div class="rounded-pill bg-orange w-10">
            <v-icon
              color="white"
              class="mr-2"
            >
              mdi-alert-circle
            </v-icon>
            <span class="font-weight-bold">Confusing</span>
          </div>
        </v-list-item-title>
        <v-list-item-content>
          Sometimes when creating the user error is displayed but the user is created. We don't know why it sometimes works and sometimes doesn't.
        </v-list-item-content>
        <v-list-item-media>
          <v-img
            src="@/assets/trainings/32/confusing/create-user-error.gif"
            class="rounded-lg elevation-4 mt-1"
            max-width="50%"
          />
          <v-img
            src="@/assets/trainings/32/confusing/create-user-no-error.gif"
            class="rounded-lg elevation-4 mt-1"
            max-width="50%"
          />
        </v-list-item-media>
      </v-list-item>

      <v-list-item class="mb-4">
        <v-list-item-title class="d-flex">
          <div class="rounded-pill bg-red w-10 mr-2">
            <v-icon
              color="white"
              class="mr-2"
            >
              mdi-bug
            </v-icon>
            <span class="font-weight-bold">Issue</span>
          </div>
          <div class="rounded-pill bg-orange w-10">
            <v-icon
              color="white"
              class="mr-2"
            >
              mdi-alert-circle
            </v-icon>
            <span class="font-weight-bold">Confusing</span>
          </div>
        </v-list-item-title>
        <v-list-item-content>
          We couldn't access creating billing portal link despite having all permissions related to the billing portal link. We needed to check the network tab to see that we need <code>PostAuthenticationToken</code> permission.
        </v-list-item-content>
        <v-list-item-media>
          <v-img
            src="@/assets/trainings/32/confusing/create-billing-portal-link.gif"
            class="rounded-lg elevation-4 mt-1"
            max-width="50%"
          />
        </v-list-item-media>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<style scoped lang="scss">
.w-10 {
  width: 10%;
}
</style>
