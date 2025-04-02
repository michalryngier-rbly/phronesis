<script lang="ts" setup>
</script>

<template>
  <v-app id="demo">
    <v-app-bar class="header">
      <v-toolbar-title>Lucky Clover Casino</v-toolbar-title>
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

.main {
  background: #008F39 !important;
  color: #FFD700 !important;
  padding: 10px;
  height: 100%;
}
</style>

<style scoped lang="scss">

</style>
