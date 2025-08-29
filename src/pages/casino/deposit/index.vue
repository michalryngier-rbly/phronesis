<script lang="ts" setup>

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const currency = ref('USD');

const wrapper = ref<HTMLElement | null>(null);

watch(
  currency,
  () => {
    renderDepositForm();
  },
  {immediate: true},
);

async function renderDepositForm() {
  const response = await fetch(apiUrl + `/deposit?currency=${currency.value}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data = await response.json();

  if (wrapper.value) {
    wrapper.value.innerHTML = `<div id="deposit"></div>`;
  }

  const mountElement = document.querySelector("#deposit");
  console.log(mountElement);

  const cashierToken = data.token;

  console.log({cashierToken});

  if (window.RebillyCashier) {
    window.RebillyCashier.renderDeposit({
      mountElement,
      cashierToken,
    });
  } else {
    console.error("RebillyCashier library not loaded");
  }
}
</script>

<template>
  <v-row>
    <v-col>
      <div class="deposit-form d-flex flex-column align-center">
        <div ref="wrapper" />
      </div>

      <v-select
        v-model="currency"
        label="Select"
        :items="['USD', 'CAD', 'GBP']"
      />
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.r-button {
  background: #f5f5f5;
}

:root {
  --r-primary: #0044d4;
}
</style>
