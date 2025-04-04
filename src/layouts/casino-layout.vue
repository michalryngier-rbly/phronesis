<script lang="ts" setup>
</script>

<template>
  <v-app>
    <v-system-bar
      class="bg-border casino-system-bar"
      flat
    >
      <span class="text-grey-lighten-2 mr-5 font-weight-bold">Mobile APP</span>
      <span class="text-grey-lighten-2 mr-5 font-weight-bold">FAQ</span>
      <span class="text-grey-lighten-2 font-weight-bold">Help center</span>
    </v-system-bar>

    <v-app-bar class="casino-nav-bar text-secondary d-flex justify-center">
      <v-toolbar-title class="font-weight-black casino-nav-bar-title">
        LUCKY CLOVER CASINO
      </v-toolbar-title>

      <v-toolbar-items>
        <v-tabs
          bg-color="transparent"
          color="grey-lighten-5"
          class="casino-nav-bar-items"
        >
          <v-tab
            value="one"
            base-color="grey-lighten-2"
            class="font-weight-bold"
          >
            Roulette
          </v-tab>
          <v-tab
            value="two"
            base-color="grey-lighten-2"
            class="font-weight-bold"
          >
            Black Jack
          </v-tab>
          <v-tab
            value="three"
            base-color="grey-lighten-2"
            class="font-weight-bold"
          >
            Poker
          </v-tab>
        </v-tabs>
      </v-toolbar-items>

      <v-spacer />

      <v-btn
        color="secondary"
        size="large"
        flat
        prepend-icon="mdi-cash-100"
        text="Deposit"
        to="/casino/deposit"
      />

      <v-btn
        color="secondary"
        size="large"
        flat
        prepend-icon="mdi-cash-fast"
        text="Withdraw"
        to="/casino/withdraw"
      />

      <v-btn
        color="secondary"
        size="large"
        flat
        prepend-icon="mdi-backburger"
        text="Phronesis"
        to="/"
      />

      <v-btn
        color="secondary"
        size="large"
        icon
      >
        <v-icon
          icon="mdi-account"
        />
        <v-menu
          activator="parent"
          location="bottom"
        >
          <v-list
            class="bg-secondary casino-menu-items"
          >
            <v-list-item>
              <v-btn
                block
                flat
                text="My account"
                color="secondary"
                prepend-icon="mdi-account"
              />
            </v-list-item>
            <v-list-item>
              <v-btn
                block
                flat
                text="My games"
                color="secondary"
                prepend-icon="mdi-poker-chip"
              />
            </v-list-item>
            <v-list-item>
              <v-btn
                block
                flat
                text="Deposit history"
                color="secondary"
                prepend-icon="mdi-cash-multiple"
              />
            </v-list-item>
            <v-list-item>
              <v-btn
                block
                flat
                text="Settings"
                color="secondary"
                prepend-icon="mdi-cog"
              />
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </v-app-bar>
    <v-main class="main">
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
.casino-nav-bar {
  background: linear-gradient(to bottom right, #00A650, #00772e) !important;
  padding: 0 18px;

  .casino-nav-bar-title {
    flex: none;
    margin: 0 18px 0 0;
  }
}

.casino-system-bar {
  height: 28px;
}

.casino-nav-bar-items {
  .v-slide-group__content {
    background-color: transparent;
  }
}

.casino-button-group {
  border-radius: 4px 0 0 4px;
}

.casino-menu-items {
  position: relative;
  right: -12px;
  top: 4px;
  width: 350px;
}

a.v-btn--active {
  background-color: rgb(var(--v-theme-secondary)) !important;
  color: rgb(var(--v-theme-primary)) !important;
}
</style>
