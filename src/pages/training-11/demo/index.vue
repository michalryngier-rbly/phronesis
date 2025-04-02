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
  const {token, depositRequestId} = await response.json();
  console.log({token, depositRequestId});
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

<template>
  <v-row>
    <v-col>
      <div
        id="app"
        class="d-flex flex-column align-center"
      >
        <div class="rebilly-instruments-summary" />
        <div class="rebilly-instruments" />
      </div>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.rebilly-instruments-button {
  background: #008F39;
}
</style>
