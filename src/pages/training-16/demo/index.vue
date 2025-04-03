<script lang="ts" setup>
import RebillyInstruments, {type ThemeProperties} from '@rebilly/instruments';

const selectedAmount = ref(0);
const amountRule = ref([
  (v) => !!v || 'Amount is required',
  (v) => v > 0 || 'Amount must be greater than 0',
]);
async function payout(amount) {
  const response = await fetch("/.netlify/functions/payout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      amount,
    }),
  });

  const {token, payoutRequestId} = await response.json();

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

  console.log({token, payoutRequestId});
  // Mount Rebilly Instruments
  RebillyInstruments.mount({
    apiMode: "sandbox",
    payout: {
      payoutRequestId,
    },
    jwt: token,
    theme
  });
  // Optional
  RebillyInstruments.on("instrument-ready", (instrument) => {
    console.info("instrument-ready", instrument);
  });
  RebillyInstruments.on("purchase-completed", (purchase) => {
    console.info("purchase-completed", purchase);
  });
};
</script>

<template>
  <v-row>
    <v-col cols="12" class="text-center">
      <v-form @submit="payout(selectedAmount)" @submit.prevent>
        <v-text-field
          v-model="selectedAmount"
          label="Amount"
          type="number"
          :rules="amountRule"
          required
        ></v-text-field>
        <v-btn type="submit" block>Withdraw</v-btn>
      </v-form>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <div class="payout-form d-flex flex-column align-center">
        <div class="rebilly-instruments-summary" />
        <div class="rebilly-instruments" />
      </div>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.payout-form {
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
