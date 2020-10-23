<template>
  <div class="row q-mt-xl text-center">
    <div
      class="col-4 "
      v-for="logo in logo"
      :key="logo.id"
      :style="{ 'background-color': logo.color }"
    >
      <q-img class="logo q-mt-md" :src="logo.url" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    logo: {
      type: Array,
    },
  },
};
</script>
<style scoped>
.logo {
  width: 270px;
  height: 504px;
}
</style>
