<script lang="ts" setup>
import RebillyInstruments, {type ThemeProperties} from '@rebilly/instruments';

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

onMounted(() => {
  RebillyInstruments.mount({
    organizationId: "phronesis-lucky-clover-casino",
    publishableKey: "pk_sandbox_rdnwQZGf2hDrrYVo0j7EBvGo2b54BLZvqDDxYds",
    websiteId: "www.luckyclovercasino.com",
    apiMode: 'sandbox',
    items: [
      {
        planId: 'how-to-always-win-at-blackjack',
        quantity: 1
      },
    ],
    css: '.rebilly-instruments-amount-selector { background: #002B16; }' +
      '.rebilly-instruments-form-field-label { color: #FFD700 }' +
      'a:link { color: #008F39 } a:visited { color: #4A2E00 }',
    theme: theme
  });
// Optional
  RebillyInstruments.on('instrument-ready', (instrument) => {
    console.info('instrument-ready', instrument);
  });
  RebillyInstruments.on('purchase-completed', (purchase) => {
    console.info('purchase-completed', purchase);
  });
})

</script>

<template>
  <v-row>
    <v-col>
      <div class="purchase-form d-flex flex-column align-center">
        <div class="rebilly-instruments-summary" />
        <div class="rebilly-instruments" />
      </div>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.purchase-form {
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
