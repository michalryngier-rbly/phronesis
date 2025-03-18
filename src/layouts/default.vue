<script lang="ts" setup>
//
</script>

<template>
  <v-app id="inspire">
    <v-app-bar color="primary">
      <v-app-bar-title>Phronesis Michal & Anton</v-app-bar-title>

      <v-spacer />

      <v-btn
        to="/"
        icon="mdi-home"
      />
    </v-app-bar>

    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
