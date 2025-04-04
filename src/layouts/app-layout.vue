<script lang="ts" setup>
const route = useRoute();

const breadcrumbs = computed(() => {
  const pathSegments = route.path.split("/").filter(Boolean);
  let pathAccumulator = "";

  return [
    {title: "Home", href: "/", disabled: route.path === "/"},

    ...pathSegments.map((segment, index) => {
      const segmentTitle = segment.replace('-', ' ');
      pathAccumulator += `/${segment}`;

      return {
        title: segmentTitle.charAt(0).toUpperCase() + segmentTitle.slice(1),
        href: pathAccumulator,
        disabled: index === pathSegments.length - 1,
      };
    }),
  ]
});

</script>

<template>
  <v-app id="inspire">
    <v-app-bar color="primary">
      <v-app-bar-title>Phronesis Michal & Anton</v-app-bar-title>

      <v-spacer />


      <v-btn
        to="/casino/home"
        icon="mdi-cash-fast"
      />
      <v-btn
        to="/"
        icon="mdi-home"
      />
    </v-app-bar>

    <v-main>
      <v-breadcrumbs
        :items="breadcrumbs"
        divider="/"
      />

      <v-container class="mx-auto">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
