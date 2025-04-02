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
      <div class="deposit-form deposit-form d-flex flex-column align-center">
        <div class="rebilly-instruments-summary" />
        <div class="rebilly-instruments" />
      </div>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.deposit-form {
  .rebilly-instruments-summary,
  .rebilly-instruments,
  .rebilly-instruments-loader {
    width: 100%;
  }

  .rebilly-instruments-summary {
    border-radius: 4px;
  }
}
</style>

<style lang="scss">
#rebilly-instruments-app {
  background: transparent !important;
  padding: 8px !important;
}

.rebilly-instruments-button {
  background: #008F39;
}

.rebilly-instruments {
  .rebilly-instruments-content {
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .form {
      border-radius: 2px;
      padding: 4px;
    }
  }
}

.rebilly-instruments-summary {
  .rebilly-instruments-iframe {
    border-radius: 4px;
  }
}
</style>
