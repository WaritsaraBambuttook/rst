<template>
  <div>
    <div class="row q-mt-xl text-center">
      <div
        class="col-12 col-sm-4"
        v-for="logo in logo"
        :key="logo.id"
        :style="{ 'background-color': logo.color }"
      >
        <q-img class="logo q-mt-md" :src="logo.url" />
      </div>
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
  width: 250px;
  height: 504px;
}
</style>
