<script lang="ts" setup>
import RebillyInstruments, {type ThemeProperties} from '@rebilly/instruments';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

(async () => {
  const response = await fetch(apiUrl + "/deposit", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const {token, depositRequestId} = await response.json();

  console.log({token, depositRequestId});

  const theme: ThemeProperties = {
    colorPrimary: '#008F39',
    colorText: '#FFD700',
    colorBackground: '#002B16',
    colorDanger: '#CF6679',
    buttonColorBackground: '#008F39',
    buttonColorText: '#FFD700',
    buttonSecondaryBorder: '1px solid #4A2E00',
    inputBorder: '1px solid #4A2E00',
    colorSuccessDark: '#002B16',
    colorSuccessMuted: '#008F39'
  }

  // Mount Rebilly Instruments
  RebillyInstruments.mount({
    apiMode: "sandbox",
    deposit: {
      depositRequestId,
    },
    jwt: token,
    css: '.rebilly-instruments-amount-selector { background: #002B16; }' +
      '.rebilly-instruments-form-field-label { color: #FFD700 }' +
      'a:link { color: #008F39 } a:visited { color: #4A2E00 }',
    theme: theme
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
      <div class="deposit-form d-flex flex-column align-center">
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
//#rebilly-instruments-app {
//  background: transparent !important;
//  padding: 8px !important;
//}

.rebilly-instruments {
  .rebilly-instruments-content {
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 #008F39, 0 6px 20px 0 #008F39;

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
