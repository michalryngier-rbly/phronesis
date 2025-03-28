<script lang="ts" setup>
import RebillyInstruments from '@rebilly/instruments';

(async () => {
  const response = await fetch("/.netlify/functions/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const { token, depositRequestId } = await response.json();
  console.log({ token, depositRequestId });
  // Mount Rebilly Instruments
  RebillyInstruments.mount({
    apiMode: "sandbox",
    deposit: {
      depositRequestId,
    },
    jwt: token,
  });
  // Optional
  RebillyInstruments.on("instrument-ready", (instrument) => {
    console.info("instrument-ready", instrument);
  });
  RebillyInstruments.on("purchase-completed", (purchase) => {
    console.info("purchase-completed", purchase);
  });
})();
</script>

<style>
.rebilly-instruments-button {
  background: #008F39;
}
</style>

<template>
  <v-app-bar>
    <v-toolbar-title>Lucky Clover Casino</v-toolbar-title>
  </v-app-bar>
  <v-container>
    <v-row>
      <v-col>
        <div id="app">
          <div class="rebilly-instruments-summary"></div>
          <div class="rebilly-instruments"></div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
