<script setup lang="ts">
defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  maxWidth: {
    type: String,
    default: "90",
  },
});

const getImageUrl = (name: string) => {
  return new URL(`../assets/${name}`, import.meta.url).href
};

</script>
<template>
  <v-dialog
    max-width="90vw"
    max-height="90vh"
    class="ma-0"
  >
    <template #activator="{ props: activatorProps }">
      <div class="d-flex justify-center align-content-center">
        <v-img
          v-bind="activatorProps"
          :src="getImageUrl(imageSrc)"
          class="rounded-lg mt-2 elevation-2 hoverable"
          :max-width="maxWidth + '%'"
        />
      </div>
    </template>

    <template #default="{ isActive }">
      <v-card>
        <v-card-text class="pa-0">
          <v-img
            :src="getImageUrl(imageSrc)"
            class="rounded-lg img-contain ma-auto"
            max-width="90%"
          />
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped lang="scss">
.hoverable {
  transition: transform 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(0.99);
  }
}

.img-contain {
  max-height: 95vh;
  max-width: 95vw;
  object-fit: contain;
}
</style>
