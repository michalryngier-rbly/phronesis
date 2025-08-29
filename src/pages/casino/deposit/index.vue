<script lang="ts" setup>

const apiUrl = import.meta.env.VITE_API_BASE_URL;

(async () => {
  const response = await fetch(apiUrl + "/deposit", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data = await response.json();

  const mountElement = document.querySelector("#deposit");
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
})();
</script>

<template>
  <v-row>
    <v-col>
      <div class="deposit-form d-flex flex-column align-center">
        <div id="deposit" />
      </div>
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
