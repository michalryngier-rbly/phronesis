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
    theme: {
      colorPrimary: '#008F39',
      colorText: '#FFD700',
      colorBackground: '#4A2E00'
    }
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
.header {
  background: #008F39 !important;
  color: #FFD700 !important;
  padding: 10px;
}

.body {
  background: #4A2E00 !important;
  color: #FFD700 !important;
  padding: 10px;
  height: 100%;
}
</style>

<template>
  <v-app-bar class="header">
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
