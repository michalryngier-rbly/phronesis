<script lang="ts" setup>
</script>

<template>
  <v-app>
    <v-app-bar class="bg-primary text-secondary d-flex justify-center">
      <v-toolbar-title class="ma-0 text-center font-weight-black">
        LUCKY CLOVER CASINO
      </v-toolbar-title>
    </v-app-bar>
    <v-main class="main">
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
.header {
  background: #4A2E00 !important;
  color: #FFD700 !important;
  padding: 10px;
}
</style>
